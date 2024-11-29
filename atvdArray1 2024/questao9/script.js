
function verifica(arr) { //criando função para verificar um array
var resul = arr.map(function(num) { //variável do resultado do que vai fazer utilizando o .map
var maior = 0; // dentro da função declarou a variável de maior para representar o maior número
   for(var i=0;i<num.length; i++) { // laço de repetição fara verificar os elementos do array

   if (num[i] > maior) { // if para descobrir o maior número do array
    maior = num[i];
    }
   }
   return maior; // ainda dentro do .map retorna o maior
  });

  return resul; // retor o resultado de verificação do maior número do array
}
// array a ser verificado:
verifica([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 
