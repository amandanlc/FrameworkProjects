import React, { useState, useEffect } from "react";
import './App.css'; // Importa o arquivo de estilos CSS
import cidades from './temp.json'; // Importa o arquivo JSON com os dados das cidades

function App() {
  
  // Estado para armazenar o nome da cidade digitada pelo usuário
  const [cidade, setCidade] = useState('');
  
  // Estado para armazenar os dados climáticos da cidade pesquisada
  const [dadosClimaticos, setDadosClimaticos] = useState(null);
  
  // Estado para armazenar mensagens de erro, se houver
  const [erro, setErro] = useState(null);

  // Função que busca informações climáticas da cidade no array de cidades
  const obterClimaticos = (cidade) => {
    // Procura a cidade no array `cidades` que corresponde ao nome fornecido
    const cidadeInfo = cidades.find(c => c.nome.toLowerCase() === cidade.toLowerCase());
    
    if (cidadeInfo) {
      // Se a cidade for encontrada, retorna suas informações
      return cidadeInfo;
    } else {
      // Se a cidade não for encontrada, lança um erro
      throw new Error('Cidade não encontrada no arquivo JSON');
    }
  }

  // Hook useEffect que é executado toda vez que a variável `cidade` muda
  useEffect(() => {
    // Verifica se o valor da cidade não está vazio
    if (cidade) {
      try {
        // Tenta obter os dados climáticos da cidade
        const climaticos = obterClimaticos(cidade);
        // Atualiza o estado `dadosClimaticos` com as informações da cidade
        setDadosClimaticos(climaticos);
        // Limpa qualquer mensagem de erro existente
        setErro(null);
      } catch (error) {
        // Se ocorrer um erro, atualiza o estado `erro` com a mensagem do erro
        setErro(error.message);
        // Limpa os dados climáticos
        setDadosClimaticos(null);
      }
    } else {
      // Se o campo da cidade estiver vazio, limpa os dados e o erro
      setDadosClimaticos(null);
      setErro(null);
    }
  }, [cidade]); // Dependência `cidade` faz com que o efeito seja executado sempre que `cidade` mudar

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      
      <input
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)} // Atualiza o estado `cidade` com o valor digitado pelo usuário
        placeholder="Digite o Nome da Cidade"
      />
      
      {dadosClimaticos && (
        <div className="city-info">
          <h2>{dadosClimaticos.nome}</h2> {/* Nome da cidade */}
          <p>Temperatura Atual: {dadosClimaticos.temperatura}°C</p> {/* Temperatura atual da cidade */}
          <p>Condições: {dadosClimaticos.condicoes}</p> {/* Condições climáticas da cidade */}
          <img 
            src={`http://openweathermap.org/img/wn/${dadosClimaticos.icone}@2x.png`} 
            alt="Ícone do Tempo" 
          /> {/* Ícone que representa as condições climáticas */}
        </div>
      )}

      {erro && <p className="error">{erro}</p>} {/* Mensagem de erro, se houver */}
    </div>
  );
}

export default App;
