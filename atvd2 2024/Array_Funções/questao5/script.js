var usuarios = [{
    nome: "Gabriel",
    habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
    nome: "Lara",
    habilidades: ["JAVA", "PHP", "Laravel"]
}];

for (var i = 0; i < usuarios.length; i++) {
    var usuario = usuarios[i];
    if(usuario.nome == "Gabriel"){
        document.write(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades} <br><br>`);
    } else{
        document.write(`A ${usuario.nome} possui as habilidades: ${usuario.habilidades} <br><br>`);
    };    
}

//pode ser feito dessa maneira tbm:
for(const usuario of usuarios){
    alert("" + usuario.nome + "possui as habilidades: " + usuario.habilidades.join(" - "));
}