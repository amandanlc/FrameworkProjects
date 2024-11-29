import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.jsx'
import styles from '../../pages/Filmes/Filmes.module.css'

function FICCAOCIENTIFCA() {

    const [ movies, setMovies ] = useState([])

    useEffect(() => {
        const buscarFilmes = async () => {
            const response = await fetch('./APIFilmes.json')
            const data = await response.json()
            setMovies(data)
        }
        buscarFilmes()
    }, [])

    return (
        <>
            <h1 className={styles.h1}>FICÇÃO CIENTÍFICA</h1>
        <section className={styles.filmes}>

            {
                movies.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            movies.filter(movie => movie.genre === "Ficção Científica").map((data) => (
                                <Card
                                    key={data.id}
                                    img={data.img}
                                    name={data.name}
                                    rating={data.rating}
                                    synopsis={data.synopsis}
                                    genre={data.genre}
                                    releaseyear={data.releaseyear}
                                    hours={data.hours}
                                    agerating={data.agerating}
                                    director={data.director}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p className={styles.load}>Carregando Filmes...</p>
                )
            }
        </section>
        </>
    )
}

export default FICCAOCIENTIFCA