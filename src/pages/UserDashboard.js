import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import UserForm from '../components/UserForm';

const UserDashboard = ({ addUser }) => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Bem-vindo ao seu painel</h1>
      <button onClick={logout}>Logout</button>
      <UserForm addUser={addUser} />
    </div>
  );
};

export default UserDashboard;
