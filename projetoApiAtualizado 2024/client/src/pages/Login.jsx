import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, role } = response.data;
      localStorage.setItem('token', token);
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/filmes');
      }
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <div className='loginECadDiv loginECadFlex'>
      <h1>LOGIN</h1>
      <form className='loginECadFlex' onSubmit={handleLogin}>
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
        <button type="submit">ENTRAR</button>
      </form>
      {/* Botão para ir à página de cadastro */}
      <button onClick={() => navigate('/register')}>CADASTRAR</button>
    </div>
  );
};

export default Login;
