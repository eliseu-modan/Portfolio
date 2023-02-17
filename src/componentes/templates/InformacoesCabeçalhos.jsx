import React, {useRef, useLayoutEffect  }    from "react";
import '../templates/InformacoesCabeçalhos.css'
import linkedin from '../imgs/linkedin.png'
import Facebook from '../imgs/iconFacebook.png'
import GitIcon from '../imgs/Git_icon.png'
import Logo1 from  "../imgs/Logo1.jpg"




  
export default function Prop(){ 
     

    
      const containerRef = useRef();
      useLayoutEffect(() =>{

        const nomeSoftware = document.getElementById('nomeSoftware')
const nomeWeb = document.getElementById('nomeWeb')
const nomeJava =document.getElementById('nomeJava')


const nomeweb=function(){ nomeWeb.style.color = 'red'}
const nomejava= function() {nomeJava.style.color = 'red'}
const nomeVermelhoSoft=function(){nomeSoftware.style.color='red'}

const MudarCornomeSoftware = function () {     
    const nomesoftware = nomeSoftware.style.color = '#333333'
    const font = nomeSoftware.style.fontSize= '20px'
}
const MudarCorweb = function () {     
    const webcor= nomeWeb.style.color = '#333333'
    const font = nomeWeb.style.fontSize= '20px'

}

const MudarCornomeJava = function () {     
    const nomeJavacor= nomeJava.style.color = '#333333'
    const font = nomeJava.style.fontSize= '20px'

}

setInterval(() => {
    const nsot =MudarCornomeSoftware()
    const nsoft= nomeVermelhoSoft()
    const njava = MudarCornomeJava()

   const nweb= MudarCorweb()
}, 3000);

setInterval(() => {
 const nsoft = MudarCornomeSoftware()
   const nweb=   nomeweb()
}, 8000);

setInterval(() => {
     const nweb=  MudarCorweb()
    const njava=  nomejava()
    const nsoft =MudarCornomeSoftware()
},10000)

      
    }
      
      )

        return(
    
        <div ref={containerRef} className="DescricaoCabeçalho" >
            <h4> <span  id="nomeSoftware"> Engenheiro de Software </span>
            <br/><br /><span id="nomeWeb">Desenvolvedor Web Front-End</span> 
            <br /><br /><span id="nomeJava"> Desenvolvedor Java</span></h4>
<a href="https://br.linkedin.com/in/eliseu-modanesi-junior-b4801a1b6"><img id="icon_linkedin" src={linkedin} width={50} /></a>
        <a href="https://web.facebook.com/junior.modanesi?_rdc=1&_rdr"><img  id="icon_facebook" src={Facebook} width={50} /></a>
             <a href="https://github.com/eliseu-modan"><img id="Git_icon" src={GitIcon} width={60} /></a>
             <img id="Logo"  src={Logo1} width={230} />

        </div>
        )
    
    }

   