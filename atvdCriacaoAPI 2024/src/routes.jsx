import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Filmes from './pages/Filmes'
import ACAO from './pages/ACAO'
import ANIMACOES from './pages/ANIMACOES'
import COMEDIA from './pages/COMEDIA'
import DRAMA from './pages/DRAMA'
import FICCAOCIENTIFICA from './pages/FICCAOCIENTIFCA'
import ROMANCE from './pages/ROMANCE'
import SUSPENSE from './pages/SUSPENSE'
import TERROR from './pages/TERROR'
import PageBase from './pages/PageBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Filmes /> }></Route>
                    <Route path="/acao" element={ <ACAO /> }></Route>
                    <Route path="/animacoes" element={ <ANIMACOES /> }></Route>
                    <Route path="/comedia" element={ <COMEDIA /> }></Route>
                    <Route path="/drama" element={ <DRAMA /> }></Route>
                    <Route path="/ficcao" element={ <FICCAOCIENTIFICA /> }></Route>
                    <Route path="/romance" element={ <ROMANCE /> }></Route>
                    <Route path="/suspense" element={ <SUSPENSE /> }></Route>
                    <Route path="/terror" element={ <TERROR /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes