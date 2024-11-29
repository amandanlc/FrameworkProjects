import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './Cabeçalho/Header.jsx'
import Content from './Conteudo/Content.jsx'
import Footer from './Rodape/Footer.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>,
)
