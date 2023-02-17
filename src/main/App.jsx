import './App.css'
import React from 'react'
import Cabecalho from '../componentes/templates/Header'
import InformacoesCabeçalhos from '../componentes/templates/InformacoesCabeçalhos'
import Apresentacao from '../componentes/templates/Apresentacao'
import Menu from '../componentes/templates/Menu'

export default props =>

<div className="app">

    <Cabecalho />
    <InformacoesCabeçalhos />
    <Apresentacao />
     <Menu />
</div>