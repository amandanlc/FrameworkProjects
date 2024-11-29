import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='flex'>
        <Link to="/login" className='btnEC'>Entrar</Link>
        <Link to="/register" className='btnEC'>Cadastrar</Link>
      </div>
      <h1>Bem-vindo(a) ao Nosso Site!</h1>
    </div>
  );
};

export default Home;
