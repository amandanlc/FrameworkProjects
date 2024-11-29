fetch('./paises.json').then(res=>res.json()).then(dados=>mostraPaises(dados))
fetch('./paises.json').then(res=>res.json()).then(dados=>qtdPaisesePop(dados))
    
    
function mostraPaises(dados){
    const paises = document.querySelector('#paises');
    
    dados.forEach(acesso => {
    paises.innerHTML+=` <tr> <td><img src=${acesso.flag}></td> <td> ${acesso.numericCode} </td> <td> ${acesso.name}</td> <td>${acesso.population}</td> </tr> `     
    });
}

function qtdPaisesePop(dados){
    const qtdPaises = document.querySelector('#qtdPaises');
    const popTotal = document.querySelector('#populacaoTotal');

    const paises = dados.length;
    qtdPaises.innerHTML += `${paises}`;

    const totalPopulation = dados.reduce((acc, acesso) => acc + acesso.population, 0);
    popTotal.innerHTML += `${totalPopulation}`;

}
    
function APIPaises(){
    return(
    <>
    <h1>PAÍSES</h1>
    <div>
        <h2 id="qtdPaises">Quantidade de países: </h2>
        <h2 id="populacaoTotal">População total: </h2>
    </div>
    <div>
        <table id="paises">
            <tr>
                <td className="titulos">Bandeira</td>
                <td className="titulos">ID</td>
                <td className="titulos">Nome</td>
                <td className="titulos">População</td>
            </tr>

        </table>
    </div>
    </>
    )
}

export default APIPaises