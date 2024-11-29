import styles from '../../components/Card/Card.module.css'

// eslint-disable-next-line react/prop-types
function Card({ img, name, genre, rating, synopsis, releaseyear, hours, agerating, director }) {
    return (
        <section className={styles.card}>
                <img src={img} alt="" />
            <div>
                <h1 className={styles.name}>{name}</h1> 
                <p className={styles.p}>IMDb: {rating}</p>
                <p className={styles.p}>{releaseyear}</p>
                <p className={styles.p}>{agerating}</p>
                <p className={styles.p}>{hours}</p>
                <p className={styles.s}>{synopsis}</p>
                <p className={styles.pgd}>Gênero: {genre}</p>
                <p className={styles.pgd}>Diretor: {director}</p>
            </div>

        </section>
    )
}

export default Card
