let array = [];
let input;
let negativos = [];

do {
    input = prompt("Digite um número (ou digite 0 para parar):");
    let num = Number(input);
    if (num === num && input !== '' && num !== 0) {
        array.push(num);
    }
} while (num !== 0);

array.forEach(elemento => {
    if (elemento < 0) {
        negativos.push(elemento);
    }
});

console.log("Array completo: ", array);
console.log("Elementos negativos: ", negativos);
console.log("Quantidade de elementos negativos: ", negativos.length);
