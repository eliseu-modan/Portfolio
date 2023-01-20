import './App.css'
import React from 'react'
import Cabecalho from '../componentes/templates/Header'
import Logo from '../componentes/templates/Logo'
import InformacoesCabeçalhos from '../componentes/templates/InformacoesCabeçalhos'
import Apresentacao from '../componentes/templates/Apresentacao'
import Menu from '../componentes/templates/Menu'

export default props =>

<div className="app">

    <Cabecalho />
    <Logo />
    <InformacoesCabeçalhos />
    <Apresentacao />
     <Menu />
</div>