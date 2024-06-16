import React, { useState } from 'react';
import './styles.css';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    photo: null
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo' && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, photo: reader.result });
      };
      reader.readAsDataURL(files[0]);
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(user.email)) {
      setError('Email inválido');
      setSuccess('');
      return;
    }

    addUser(user);
    setUser({ name: '', email: '', photo: null });
    setError('');
    setSuccess('Usuário cadastrado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label>
        Nome:
        <input type="text" name="name" value={user.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
      </label>
      <label>
        Foto:
        <input type="file" name="photo" onChange={handleChange} required />
      </label>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default UserForm;
