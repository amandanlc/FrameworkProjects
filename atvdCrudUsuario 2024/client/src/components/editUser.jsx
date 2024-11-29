import React, { useState, useEffect } from 'react';
import api from '../service/index';

const EditUser = ({ user, onUserUpdated }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/users/${user.id}`, { name, email });
      onUserUpdated();
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditUser;
