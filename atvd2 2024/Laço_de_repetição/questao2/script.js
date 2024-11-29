var quesitos = ["criatividade", "originalidade", "elegancia", "acabamento", "conservação"];
var notas = [];

for(var i = 0; i < quesitos.length; i++){
    do{
        notas[i] = parseInt(prompt("Insira a nota de " + quesitos[i] + ":"));
    }while((notas[i] < 5) || (notas[i] > 10))
}
//deixar em ordem crescente
notas.sort(function(a, b) {return a - b;});

var notaTotal = notas[1] + notas[2] + notas[3];
alert(`A nota total é: ${notaTotal}`);