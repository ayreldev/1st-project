import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import UserList from '../components/UserList';

const AdminDashboard = ({ users, deleteUser }) => {
  const { logout } = useAuth();

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default AdminDashboard;
