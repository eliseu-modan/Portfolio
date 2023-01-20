import React, {useRef as use,  useLayoutEffect as efect } from "react";
import '../pages/Projetos.css'
import Seta from  '../componentes/imgs/seta-para-baixo.png'
import SetaCima from '../componentes/imgs/setacima.png'
import iconHtml from '../componentes/imgs/html-5.png'
import iconCss from '../componentes/imgs/css-3.png'
import js from '../componentes/imgs/js.png'
import iconReact from '../componentes/imgs/React.png'
import iconGit from '../componentes/imgs/Git_icon.png'
import imgCadastro from '../componentes/imgs/Cadastro de usuario.png'
import usuariosimg from '../componentes/imgs/usuarios cadastrados.png'
import loginimg from '../componentes/imgs/Login.png'
import setadireita from '../componentes/imgs/angulo-da-seta-direita.png'
import setaesquerda from '../componentes/imgs/angulo-da-seta-esquerda.png'
import imgCalculadora from'../componentes/imgs/calculadora.png'
import img2calculadora from '../componentes/imgs/calculadora2.png'
import imgportifolio1 from '../componentes/imgs/portifolio1.png'
import imgportifolio2 from '../componentes/imgs/portifolio2.png'





function prop(){
   const containerRef =use();
   efect(()=>{
      
      const  container = document.querySelector('.conteudoFrontEnd');
      const fecharConteudoFrontEnd = document.querySelector("#fecharConteudoFrontEnd")
      const abarirConteudoFrontEnd = document.querySelector("#abrirConteudoFrontEnd")
      const aparecerFecharConteudFront=document.querySelector('#setacima')
     
      function abrirConteudoProjetos(){

      fecharConteudoFrontEnd.onclick =()=>{
         fecharConteudo()
      }

        abarirConteudoFrontEnd.addEventListener('click',function(){
           abrirConteudo()
      })
      function abrirConteudo(){
         if(container.style.display === 'none'){
              container.style.display = 'block'
              aparecerFecharConteudFront.style.display='block'

                console.log('abrir')
            
         }
       }
       function fecharConteudo(){
          if(container.style.display === 'block'){
               container.style.display = 'none'
          }
       }   
      }


    const loginimg = document.querySelector('#loginimg')
    const imgcadastro = document.querySelector("#imgcadastro") 
    const usuariosimg = document.querySelector('#usuariosimg')
    const btndireita = document.querySelector('#btndireita')
    const btnesquerda = document.querySelector('#btnesquerda')
    const cadastroimg = document.querySelector('#cadastroimg')
    const imgusuario =document.querySelector("#imgusuario")
    const imglogin= document.querySelector('#imglogin')


    function buttonsimgsCadastro(){
    btndireita.addEventListener('click',function(){
      imgcadastro.style.display='none'
        usuariosimg.style.display='block'
      
      btndireita.addEventListener('click',function(){
         usuariosimg.style.display='none'
           loginimg.style.display ='block'
    
        btnesquerda.addEventListener('click',function(){
         loginimg.style.display ='none'
           usuariosimg.style.display='block'

           btnesquerda.addEventListener('click',function(){
             usuariosimg.style.display='none'
               imgcadastro.style.display='block'

      })
   })
  
})
    })    
   }
      const imgPortifolio1 = document.querySelector('#imgPortifolio1')
      const imgPortifolio2 = document.querySelector('#imgPortifolio2')
      const btndireitaPortifolio =document.querySelector('#btndireitaPortifolio')
      const btnesquerdaPortifolio =document.querySelector('#btnesquerdaPortifolio')
      const idhomeimgPortifolio = document.querySelector('#Homeimg')
      const idProjetosImgPortifolio =document.querySelector('#Projetosimg')

    function buttonimgsPortifolio(){
      btndireitaPortifolio.addEventListener('click',function(){

        imgPortifolio1.style.display='none'
        imgPortifolio2.style.display='block'
        idProjetosImgPortifolio.style.display='block'

        btnesquerdaPortifolio.addEventListener('click',function(){
          imgPortifolio1.style.display='block'
        imgPortifolio2.style.display='none'
        idProjetosImgPortifolio.style.display='none'
        })

        
      
     


    })
  }

      function ampliarImgs(){
    imgcadastro.addEventListener('mouseover',function(){
       
       
       cadastroimg.style.left='-120px'
         var fator_lupa = 60;
           this.style.width = (this.clientWidth + fator_lupa) + "px";
       
             imgcadastro.addEventListener('mouseout',function(){
               cadastroimg.style.left='12px'
                 this.style.width = '700px'
 })
})
imgusuario.addEventListener('mouseover',function(){

   usuariosimg.style.left='-120px'
     var fator_lupa = 60;
       imgusuario.style.width = (this.clientWidth + fator_lupa) + "px";
     
     imgusuario.addEventListener('mouseout',function(){
       usuariosimg.style.left='12px'
         imgusuario.style.width = '700px'
})

})
imglogin.addEventListener('mouseover',function(){

   loginimg.style.left='-120px'
     var fator_lupa = 60;
       imglogin.style.width = (this.clientWidth + fator_lupa) + "px";
     
     imglogin.addEventListener('mouseout',function(){
       loginimg.style.left='12px'
         imglogin.style.width = '700px'
})

})


              const imgCalculadoraZoom = document.querySelector('#imgCalculadora')
              const calculadoraimg =document.querySelector('#calculadoraimg')


              imgCalculadoraZoom.addEventListener('mouseover',function(){
               var fator_lup = 60;
                 calculadoraimg.style.left='-130px'

              imgCalculadoraZoom.style.width = (this.clientWidth + fator_lup) + "px";

              imgCalculadoraZoom.addEventListener('mouseout',function(){
                 calculadoraimg.style.left='13px'
                    imgCalculadoraZoom.style.width = '700px'
})
})


         imgPortifolio1.addEventListener('mouseover',function(){
           var fator = 60;
           imgPortifolio1.style.width = (this.clientWidth + fator) + "px";
           idhomeimgPortifolio.style.left='-150px'
         
          imgPortifolio1.addEventListener('mouseout',function(){
            imgPortifolio1.style.width  ='700px'
            idhomeimgPortifolio.style.left='2px'
                 


         })

        })
        imgPortifolio2.addEventListener('mouseover',function(){
          idProjetosImgPortifolio.style.left='-150px'
         var fator = 60;
         imgPortifolio2.style.width = (this.clientWidth + fator) + "px";
        
         imgPortifolio2.addEventListener('mouseout',function(){
           imgPortifolio2.style.width  ='700px'
           idProjetosImgPortifolio.style.left='0px'


        })

       })
    
   }
   abrirConteudoProjetos()
   buttonsimgsCadastro()
   ampliarImgs()
   buttonimgsPortifolio()

    
     
 


   })
      
      

return ( <div id="projetos">
   <div id="nome">PROJETOS </div>

 <div  id="area__FrontEnd"> 
 <a  id="abrirConteudoFrontEnd"> 
 <img  id="setaBaixo" src={Seta}  width={40} ></img><b> PROJETOS WEB</b> </a>
 <a href="" id="fecharConteudoFrontEnd"><img   id="setacima"  src={SetaCima}  width={40}   /></a>

   <div  className="conteudoFrontEnd" style={{display:'none'}} >  
   
   <div id="conteudoCadastro">
   <div id="cadastro">Cadastro de Usuario</div>
    <div id="informaçoesCadastro">  
    O Projeto Cadastro de Usuário foi Ponderado em  ter uma Página interativa e dinâmica 
   com fácil acesso às informações, Esse Tipo de Projeto é muito utilizado para controlar 
   fluxos de Usuários em Sistemas e até mesmo em Cadastro de Clientes, Esse Projeto me trouce um
   amplo conhecimento nas tecnologias Front-End como: HTML, CSS, JAVASCRIPT, REACT que traz muita
   facilidade com componentização de páginas ficando fácil de manutenção e Reuso dos componentes. Clique no Iconi do GitHub 
   Para mais informações sobre o código desse projeto. Passe o Mouse em cima da imagem para ampliar.
   <div id="iconsCadastro"><img src={iconHtml} width="50" />
    <img src={iconCss}  width="50" />
    <img src={js} width="50" />
    <img src={iconReact} width="50" />
    <a href="https://github.com/eliseu-modan/LayoutCadastroUsuario"><img src={iconGit} width="50" /></a>
</div>
<div id="imgsCadastro">
  <div id="cadastroimg" > <img id="imgcadastro" src={imgCadastro} width='700' /></div>
  <div id="usuariosimg"> <img id='imgusuario'src={usuariosimg} width='700' /></div>
  <div  id="loginimg"> <img id="imglogin" src={loginimg} width='700' /></div>
  </div></div>
<button id="btndireita" ><img src={setadireita} width='20'/></button>
  <button id="btnesquerda"><img src={setaesquerda} width='20' /></button>

   </div>


   
   <div id="conteudoCalculadora">
   <div id="calculadora">Calculadora</div>
   <div id="informaçoesCalculadora">
   O Projeto Calculadora Foi de Extrema importância para o 
     Aprendizado do JavaScript e do Frammework React Biblioteca do JavaScript, 
     Com uma Lógica complexa foi utilizado 
     funcionalidades como classes,Arrays, Objetos e Eventos, Esse Projeto foi
     Utilizado Tecnologias FrontEnd como Html,React, Css, JavaScript,Acesse 
     Ao Iconi do GitHub para mais informações do código,Passe o Mouse em cima da imagem 
     para ampliar. 
     <div id="iconsCalculadora">
      <img src={iconHtml} width="50" />
    <img src={iconCss}  width="50" />
    <img src={js} width="50" />
    <img src={iconReact} width="50" />
    <a href="https://github.com/eliseu-modan/Calculadora-React"><img src={iconGit} width="50" /></a>
</div>
<div id="imgsCalculadora">
  <div id="calculadoraimg" > <img id="imgCalculadora" src={imgCalculadora} width='700' /></div>
  </div>

     


   </div>





   </div>


   <div id="conteudoPortifolio">
   <div id="portifolio">Portifolio</div>
    <div id="informaçoesPortifolio">
    O Projeto Portifolio como todo foi ponderado facilitar as informações de apresentação na página Home
interação facil ao usuario na página projetos com design Responsivo usando tecnologias FrontEnd 
esse portifolio me trouce uma profundidade no frammework React, e muita prática com o Javascript 
utilizando principalmente funções da DOM trazendo um estilo agradavel com CSS,foi utilizado 
Html, css, Javascript,React,Nele contem todas as minhas experiências com as tecnologias 
aprendida e o nivel de aprendizado na página aprendizado,nele possui a página contato, com um formulario de 
requisição por email.Clique no Iconi do GitHub para mais informações do código . 
passe o mouse em cima da imagem para ampliar
<div id="iconsPortifolio">
      <img src={iconHtml} width="50" />
    <img src={iconCss}  width="50" />
    <img src={js} width="50" />
    <img src={iconReact} width="50" />
    <a href="https://github.com/eliseu-modan/pagesGit"><img src={iconGit} width="50" /></a>
</div>

<div id="imgsPortifolio">
  <div id="Homeimg" > <img id="imgPortifolio1" src={imgportifolio1} width='700' /></div>
  <div id="Projetosimg"> <img id='imgPortifolio2'src={imgportifolio2} width='700' /></div>
  </div>
</div>
<button id="btndireitaPortifolio" ><img src={setadireita} width='20'/></button>
  <button id="btnesquerdaPortifolio"><img src={setaesquerda} width='20' /></button>



   </div>

   
   </div>
  

   
   </div>




</div> 
)}
export default prop
