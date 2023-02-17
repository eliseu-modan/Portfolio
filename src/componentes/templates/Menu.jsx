import React from "react";
import '../templates/Menu.css'
import { Switch ,Route ,HashRouter } from 'react-router-dom';
import Aprendizado from "../../pages/Aprendizado";
import Contato from "../../pages/Contato";
import Projetos from "../../pages/Projetos";
import Home from "../templates/Apresentacao"
export default props => 




<div id="navegaçao">
    <b><div id="navegaçao__btnInicio"><a  href="#Home">INICIO</a></div>
    <div id="navegaçao__btnProjetos"><a  href="#Projetos" >PROJETOS</a></div>
    <div id="navegaçao__btnAprendizado"><a href="#Aprendizado">APRENDIZADO</a></div>
    <div id="navegaçao__btnContato"><a href="#Contato" class="navegaçao--contato"> CONTATO </a></div></b>
<HashRouter>

<Switch>
<Route exact path="#"><Home></Home></Route>
<Route path="/Aprendizado"><Aprendizado></Aprendizado></Route>
<Route path="/Contato"><Contato></Contato></Route>
<Route path="/Projetos"><Projetos ></Projetos></Route>
</Switch>
</HashRouter>
</div>  
