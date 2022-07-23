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
                tools = 'ferramentas usadas'
                image = 'https://i.pinimg.com/originals/a9/c8/9e/a9c89e126fe0b97bd3369e3de726decd.png'
                description = 'Descrição do projeto'
              />
            </a>
            <a href="https://diegorogerssa.github.io/pokedex-react/">
              <CardProjetos
                title = 'Pokedex'
                tools = 'ferramentas usadas'
                image = 'https://www.pngplay.com/wp-content/uploads/11/Heliolisk-Pokemon-PNG-HD-Quality.png'
                description = 'Descrição do projeto'
              />
            </a>
        </div>
      </div>
    )
  }
}
export default Projetos;