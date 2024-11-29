import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      navigate('/'); // Redirecionar para login após o cadastro
    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao cadastrar');
    }
  };

  return (
    <div className='loginECadDiv loginECadFlex'>
      <h1>CADASTRAR</h1>
      <form className='loginECadFlex' onSubmit={handleRegister}>
        <div className='loginECadFlex'>
          <label>NOME DE USUÁRIO:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='loginECadFlex'>
          <label>E-MAIL:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='loginECadFlex'>
          <label>SENHA:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">CADASTRAR</button>
      </form>
      {/* Botão para ir à página de login */}
      <button onClick={() => navigate('/')}>VOLTAR PARA O LOGIN</button>
    </div>
  );
};

export default Register;
