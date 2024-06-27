import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserList = () => {
  const { users, deleteUser } = useAuth();

  const handleDelete = (index) => {
    deleteUser(index);
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
            <p>Endereço: {user.address}</p>
            <p>Telefone: {user.phone}</p>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
