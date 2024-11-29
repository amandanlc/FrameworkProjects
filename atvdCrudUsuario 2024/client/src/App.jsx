import React, { useState } from 'react';
import UserList from './components/userList';
import AddUser from './components/addUser';
import EditUser from './components/editUser';
import api from './service/index';

const App = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      window.location.reload(); // Atualiza a lista de usuários
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  const handleUserAdded = () => {
    window.location.reload(); // Atualiza a lista de usuários após adição
  };

  const handleUserUpdated = () => {
    setEditingUser(null);
    window.location.reload(); // Atualiza a lista de usuários após edição
  };

  return (
    <div>
      <h1>Gerenciamento de Usuários</h1>
      {editingUser ? (
        <EditUser user={editingUser} onUserUpdated={handleUserUpdated} />
      ) : (
        <AddUser onUserAdded={handleUserAdded} />
      )}
      <UserList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
