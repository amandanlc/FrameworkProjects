var anosEstudo = parseInt(prompt("Insira seus anos de estudo:"));

function experiencia(anosEstudo){
    if(anosEstudo >= 0 && anosEstudo <= 1){
        return "Junior";
    }
     
    if(anosEstudo <= 3 && anosEstudo > 1){
        return "Pleno";
    }

    if(anosEstudo <= 6 && anosEstudo > 3){
        return "Sênior";
    }

    if(anosEstudo >= 7){
        return "Mestre Jedi";
    }
}

alert(experiencia(anosEstudo));