const express = require('express');
const User = require('../model/usuario');
const router = express.Router();


// Rota para listar usuários
router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Rota para adicionar usuário
router.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  res.json(newUser);
});

// Rota para editar usuário
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await User.update({ name, email }, { where: { id } });
  res.json({ message: 'Usuário atualizado com sucesso' });
});

// Rota para deletar usuário
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.json({ message: 'Usuário deletado com sucesso' });
});

module.exports =  router;