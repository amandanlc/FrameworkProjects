var habilidade = ["Javascript", "ReactJS", "React Native", "Angular"];
function temHabilidade(habilidade)
{
    //se não encontra o valor retorna -1
    a = habilidade.indexOf("Angular");

    for(var i = 0; i < habilidade.length; i++){
        if(habilidade[i] == "Javascript"){
            return true; 
        }else{
            return false;
        }
    }
}
temHabilidade(habilidade); // true ou false
alert(temHabilidade(habilidade));