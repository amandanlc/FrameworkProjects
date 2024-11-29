// import { useEffect, useState } from 'react'

// function Jokenpo(){

//     const [ choices, setChoices ] = useState([])

//     useEffect(() => {
//         const buscarChoices = async () => {
//             const response = await fetch('./jokenpoAPI.json')
//             const data = await response.json()
//             setChoices(data)
//         }
//         buscarChoices()
//     }, [])


//     return(
//         <>
//         <header id="points">
//             <h1>JOKE<span>NPÔ</span></h1>
//             <div id="resultdiv">
//                 <div className="resultdiv1">
//                     <p className="P1">PLAYER</p>
//                     <p className="P2">BOT</p>    
//                 </div>                
//                 <div className="resultdiv2">
//                     <p id="result1">0</p>
//                     <span>X</span>
//                     <p id="result2">0</p>
//                 </div>
//             </div>
//         </header>

//        <section id="play">
//             <div className="choose1" onClick={() => setChoices(choices)}></div>

//             <div id="looseorwin">
//                 <p>YOU WIN!</p>
//                 <button>PLAY</button>
//             </div>

//             <div className="choose2"></div>
//        </section> 
//         </>
//     )
// }

// export default Jokenpo

import { useEffect, useState } from 'react';

function Jokenpo() {
  const [choices, setChoices] = useState([]);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [result, setResult] = useState('');
  const [currentChoice, setCurrentChoice] = useState(null); // Estado para a escolha atual
  const [playerWins, setPlayerWins] = useState(0); // Contador de vitórias do jogador
  const [botWins, setBotWins] = useState(0); // Contador de vitórias do bot

  // Carregar as escolhas da API
  useEffect(() => {
    const fetchChoices = async () => {
      const response = await fetch('./jokenpoAPI.json'); // Certifique-se de que o caminho está correto
      const data = await response.json();
      setChoices(data);
      setCurrentChoice(data[0]); // Definindo a primeira escolha como a inicial
    };
    fetchChoices();
  }, []);

  // Função para obter a escolha correspondente ao nome
  const getChoiceByName = (name) => {
    return choices.find(choice => choice.name === name);
  };

  // Função para gerar uma escolha aleatória para o bot
  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  // Função para determinar o resultado do jogo
  const determineResult = (player, bot) => {
    if (player === bot) return 'It\'s a tie!';
    if (
      (player === 'rock' && bot === 'scissors') ||
      (player === 'scissors' && bot === 'paper') ||
      (player === 'paper' && bot === 'rock')
    ) {
      setPlayerWins(prevWins => prevWins + 1);
      return 'You win!';
    }
    setBotWins(prevWins => prevWins + 1);
    return 'You lose!';
  };

  // Função chamada ao clicar na escolha
  const handleChoiceClick = (choice) => {
    setPlayerChoice(choice);
  };

  // Função para alternar a escolha atual
  const changeChoice = () => {
    if (choices.length === 0) return;
    const currentIndex = choices.indexOf(currentChoice);
    const nextIndex = (currentIndex + 1) % choices.length;
    setCurrentChoice(choices[nextIndex]);
  };

  // Função para mostrar o resultado quando o botão "PLAY AGAIN" é clicado
  const playAgain = () => {
    if (!playerChoice) return; // Só jogar se uma escolha do jogador estiver feita

    const botChoice = getRandomChoice();
    setBotChoice(botChoice);
    const result = determineResult(playerChoice.name, botChoice.name);
    setResult(result);
  };

  return (
    <>
      <header id="points">
        <h1>JOKE<span>NPÔ</span></h1>
        <div id="resultdiv">
          <div className="resultdiv1">
            <p className="P1">{playerChoice ? playerChoice.name.toUpperCase() : 'PLAYER'}</p>
            <p className="P2">{botChoice ? botChoice.name.toUpperCase() : 'BOT'}</p>
          </div>
          <div className="resultdiv2">
            <p id="result1">{playerWins}</p>
            <span>X</span>
            <p id="result2">{botWins}</p>
          </div>
        </div>
      </header>

      <section id="play">
        <div className="choose1" onClick={() => handleChoiceClick(currentChoice)}>
          {currentChoice && <img src={currentChoice.svg} alt={currentChoice.name} />}
        </div>
        <div id="looseorwin">
          <p>{result}</p>
          <button onClick={() => {
            playAgain();
            changeChoice(); // Mudar a escolha atual ao clicar no botão
          }}>PLAY AGAIN</button>
        </div>
      </section>
    </>
  );
}

export default Jokenpo;
