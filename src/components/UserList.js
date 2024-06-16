import React from 'react';
import './styles.css';

const UserList = ({ users, deleteUser }) => {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <div key={index} className="user-card">
          {user.photo && (
            <img src={user.photo} alt={user.name} />
          )}
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <button onClick={() => deleteUser(index)} className="delete-button">Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
