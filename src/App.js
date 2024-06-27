import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import './components/styles.css';

function App() {
const [users, setUsers] = useState([]);

useEffect(() => {
const storedUsers = localStorage.getItem('users');
if (storedUsers) {
setUsers(JSON.parse(storedUsers));
}
}, []);

const addUser = (user) => {
const updatedUsers = [...users, user];
setUsers(updatedUsers);
localStorage.setItem('users', JSON.stringify(updatedUsers));
};

const deleteUser = (index) => {
const updatedUsers = users.filter((_, i) => i !== index);
setUsers(updatedUsers);
localStorage.setItem('users', JSON.stringify(updatedUsers));
};

return (
<Router>
<AuthProvider>
<Routes>
<Route path="/" element={<Login />} />
<Route
path="/admin"
element={
<PrivateRoute role="admin">
<AdminDashboard users={users} deleteUser={deleteUser} />
</PrivateRoute>
}
/>
<Route
path="/user"
element={
<PrivateRoute role="user">
<UserDashboard addUser={addUser} users={users} deleteUser={deleteUser} />
</PrivateRoute>
}
/>
</Routes>
</AuthProvider>
</Router>
);
}

export default App;