// Crie um array de objetos  contendo  dados sobre 10 pessoas (nome, idade, RG),
// utilize o método filter para retornar apenas as idades de quem tem +de 18 anos.


// array com objetos
const objetos = [
  {
    nome: 'Raven Reyes',
    idade: 122,
    rg: 'US-10.200.333'
  },
  {
    nome: 'Natasha Romanoff',
    idade: 30,
    rg: 'RU-10.200.333'
  },
  {
    nome: 'Lily Tucker-Pritchett',
    idade: 15,
    rg: 'US-10.200.333'
  },
  {
    nome: 'Moana Waialiki',
    idade: 16,
    rg: 'PF-53.260.823'
  },
  {
    nome: 'Ares Hidalgo',
    idade: 21,
    rg: 'ES-60.234.163'
  },
  {
    nome: 'Raymond Holt',
    idade: 58,
    rg: 'US-15.432.115'
  },
  {
    nome: 'Lúcifer Morningstar',
    idade: 5000,
    rg: 'SKY-19.920.433'
  },
  {
    nome: 'Ron Weasley',
    idade: 15,
    rg: 'UK-80.470.241'
  },
  {
    nome: 'The Weeknd',
    idade: 33,
    rg: 'CA-80.293.435'
  },
  {
    nome: 'Moraine Sedai',
    idade: 43,
    rg: 'IT-12.250.733'
  }
];

for (var i = 0; i < objetos.length; i++) {
    var objeto = objetos[i];

    if(objeto.idade >= 18){
        alert(objeto.idade);
    }   
}

var maioresDe18 = objetos.filter(function(objeto) {
    return objeto.idade > 18;
    }).map(function(objeto) {
    return objeto.idade;
});

console.log("Idades de pessoas com mais de 18 anos:", maioresDe18);

/*
// array de números
const numeros = [1, 2, 3, 4];

// função que filtra os valores menores que 2, ou seja, apenas os maiores vão para o novo array
// Lembre-se que o filter retorna um novo array
let novoArrayA = numeros.filter(numero => numero > 2);
alert(novoArrayA); // => [3, 4]

// função que filtra o array objeto pelo nome
// Lembre-se que o filter retorna um novo array
let novoArrayB = objetos.filter(objeto => objeto.nome === 'Raven Reyes');
console.log(novoArrayB) // => [ { nome: 'gandalf' } ]
*/