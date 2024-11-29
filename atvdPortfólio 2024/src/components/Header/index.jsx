import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>AMANDA NOGUEIRA</span>
            </Link>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/sobre">SOBRE</Link>
                <Link to="/projetos">PROJETOS</Link>
                <Link to="/contatos">CONTATOS</Link>
            </nav>
        </header>
    )    
}

export default Header
