import { Route, Routes } from 'react-router-dom';
import Filmes from './pages/Filmes';
import ACAO from './pages/ACAO';
import ANIMACOES from './pages/ANIMACOES';
import COMEDIA from './pages/COMEDIA';
import DRAMA from './pages/DRAMA';
import FICCAOCIENTIFICA from './pages/FICCAOCIENTIFCA';
import ROMANCE from './pages/ROMANCE';
import SUSPENSE from './pages/SUSPENSE';
import TERROR from './pages/TERROR';
import Login from './pages/Login';
import Register from './pages/Register';

function AppRoutes() {
    return (
        <Routes>
            {/* Rota principal leva para Login */}
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Páginas de filmes */}
            <Route path="/filmes" element={<Filmes />} />
            <Route path="/acao" element={<ACAO />} />
            <Route path="/animacoes" element={<ANIMACOES />} />
            <Route path="/comedia" element={<COMEDIA />} />
            <Route path="/drama" element={<DRAMA />} />
            <Route path="/ficcao" element={<FICCAOCIENTIFICA />} />
            <Route path="/romance" element={<ROMANCE />} />
            <Route path="/suspense" element={<SUSPENSE />} />
            <Route path="/terror" element={<TERROR />} />
        </Routes>
    );
}

export default AppRoutes;