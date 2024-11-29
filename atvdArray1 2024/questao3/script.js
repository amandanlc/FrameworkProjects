var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Dobro(num){
    var dobroArray = num.map((dobro) => dobro * 2);
}

console.log("Dobro do array: " + Dobro(array));