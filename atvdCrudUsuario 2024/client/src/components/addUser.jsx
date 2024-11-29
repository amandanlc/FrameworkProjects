import React, { useState } from 'react';
import api from '../service/index';

const AddUser = ({ onUserAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users', { name, email });
      setName('');
      setEmail('');
      onUserAdded();
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  return (
    <div>
      <h2>Adicionar Usuário</h2>
      <form onSubmit={handleAddUser}>
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
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddUser;
