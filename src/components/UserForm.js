import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert('Nome e E-mail são obrigatórios');
      return;
    }
    const newUser = { name, email, address, phone };
    addUser(newUser);
    setShowSuccessMessage(true);
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        E-mail:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Endereço:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <label>
        Telefone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Adicionar</button>

      {showSuccessMessage && (
        <p style={{ color: 'green' }}>Cadastro realizado com sucesso!</p>
      )}
    </form>
  );
};

export default UserForm;
