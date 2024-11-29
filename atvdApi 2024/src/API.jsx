import './API.css'

fetch('https://api.imgflip.com/get_memes').
then(x => x.json().
then(dados => mostraMemes(dados)))

fetch('https://api.quotable.io/random').
then(x => x.json().
then(dados => mostraLegendas(dados)))

function mostraMemes(dados){
    const posição = Math.floor(Math.random()*100)
    const nomeMeme = document.querySelector('#nome')
    const imgMeme = document.querySelector('#img')
    nomeMeme.textContent = dados.data.memes[posição].name
    imgMeme.src = dados.data.memes[posição].url
}

function mostraLegendas(dados){
    const legenda = document.querySelector('#legenda')
    legenda.textContent = dados.content
}

function Meme(){
    return(
    <>
        <h1 id="nome"></h1>
        <img id="img" src="" alt="" />
        <h3 id="legenda"></h3>
    </>
    )
}
export default Meme