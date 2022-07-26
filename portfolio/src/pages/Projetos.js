import React, { Component } from 'react'
import CardProjetos from '../components/CardProjetos'
import NavBar from '../components/NavBar';
import '../styles/Projetos.css'
import { Link } from "react-router-dom";

class Projetos extends Component{
  render(){
    return(
      <div className='projetos-container'>
        <NavBar />
        <div className='content-container'>
            <a href='https://diegorogerssa.github.io/ProjetosDiversos/'>
              <CardProjetos
                title = 'Pixel Art'
                tools = 'HTML, CSS, JavaScript (Vanilla)'
                image = 'https://i.pinimg.com/originals/a9/c8/9e/a9c89e126fe0b97bd3369e3de726decd.png'
                description = 'Projeto pessoal para fins acadêmicos, um quadro simples de pintura em pixel art feito puramente com HTML, CSS e Java Script. '
              />
            </a>
            <a href="https://projeto-pokedex-api.herokuapp.com/">
              <CardProjetos
                title = 'API Pokedex'
                tools = 'HTML, CSS, JavaScript (React JS)'
                image = 'https://www.pngplay.com/wp-content/uploads/11/Heliolisk-Pokemon-PNG-HD-Quality.png'
                description = 'Projeto pessoal para fins acadêmicos, no projeto a requisições a API do Pokedex e a manipulação das informações recebidas'
              />
            </a>
        </div>
      </div>
    )
  }
}
export default Projetos;