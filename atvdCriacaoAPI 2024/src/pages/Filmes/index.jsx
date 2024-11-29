import Container from '../../components/Container'
import styles from './Filmes.module.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card.jsx'

function Home() {
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
          <Container>
            <h1 className={styles.h1}>TODOS OS FILMES</h1>
          <section className={styles.filmes}>
            {
                movies.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            movies.map((data) => (
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
          </Container>
        </> 
    )
}

export default Home
