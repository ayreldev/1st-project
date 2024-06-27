import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const login = (username, password) => {
    let authenticatedUser = null;

    if (username === 'admin' && password === 'admin') {
      authenticatedUser = { username, role: 'admin' };
    }

    if (username === 'user' && password === 'user') {
      authenticatedUser = { username, role: 'user' };
    }

    if (authenticatedUser) {
      setUser(authenticatedUser);

      if (authenticatedUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } else {
      alert('Credenciais inválidas');
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
    window.location.reload();
  };

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <AuthContext.Provider value={{ user, users, login, logout, addUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
