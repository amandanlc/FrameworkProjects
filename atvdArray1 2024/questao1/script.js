//questão 1
var vet1 = []
var vet2 = []

for(i=0;i<5;i++){

    vet1.push(parseInt(prompt("ARRAY 1 - Insira o número: "+(i+1))))
}

for(i=0;i<5;i++){

    vet2.push(parseInt(prompt("ARRAY 2 - Insira o número: "+(i+1))))
}


var resultado = vet1.concat(vet2);

resultado.sort(function(a, b) {return a - b;});
resultado.pop();
resultado.shift();

console.log("Resultado: " + resultado);
