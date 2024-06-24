import styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span>Sandra Alves</span> <br />
                    Dev Full Stack
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre mim
                </Link>
            </div>
            <figure>
                <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
            </figure>
        </section>
        </> 
    )
}

export default Home
