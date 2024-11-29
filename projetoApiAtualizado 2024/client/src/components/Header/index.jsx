import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>FILMES</span>
            <nav>
                <Link to="/">Todos</Link>
                <Link to="/acao">Ação</Link>
                <Link to="/animacoes">Animações</Link>
                <Link to="/comedia">Comédia</Link>
                <Link to="/drama">Drama</Link>
                <Link to="/ficcao">Ficção Científica</Link>
                <Link to="/romance">Romance</Link>
                <Link to="/suspense">Suspense</Link>
                <Link to="/terror">Terror</Link>
            </nav>
        </header>
    )    
}

export default Header
