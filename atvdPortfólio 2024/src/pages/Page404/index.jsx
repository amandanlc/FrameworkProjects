import styles from './Page404.module.css'

function Page404() {
    return (
        <>
            <h2 className={styles.titulo2}>ALGO DE ERRADO NÃO ESTÁ CERTO!</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span> <br />
                <strong className={styles.texto_vermelho}>PÁGINA NÃO LOCALIZADA!</strong>
            </div>
        </>
    )
}

export default Page404
