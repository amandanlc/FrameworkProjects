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


//questão 2

var valorUsuario = parseInt(prompt("Digite um valor para buscar no vetor"))

var index = resultado.indexOf(valorUsuario)

if(index>=0){
alert("Valor encontrado "+resultado[index]);
}else{
    alert("Valor nao encontrado ");
}

/*for(var i = 0; i > resultado.length; i++){
    var r = resultado[i];
    for(var i = 0; i > VetConcatenado.length; i++){
        var v = VetConcatenado[i];
        if(r != v){
            alert("Valor não existe no vetconcatenado")
        }else{
            alert("Valor existe no vetconcatenado")
        }
    }
}*/