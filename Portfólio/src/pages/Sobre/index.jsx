
import styles from './Sobre.module.css'

import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <div className={styles.textos}>
                    <h2>SOBRE</h2>

                    <p>Sou <span>Amanda Nogueira</span> <br />
                    <strong>Estudante do 3° ano do ensino médio técnico</strong> </p>

                    <p>Estudo no colégio e faculdade COTEMIG desde 2023.</p>

                    <p>Sou apaixonada por transformar ideias em realidade digital.</p>

                    <p>Estou em busca de uma oportunidade para obter meu primeiro contato com o mercado de trabalho</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>TECHS</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                </div>
            </div>

        </section>
    )
}

export default Sobre

