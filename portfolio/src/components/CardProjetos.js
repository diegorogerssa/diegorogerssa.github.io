import React, { Component } from 'react'
import '../styles/CardProjetos.css'

class CardProjetos extends Component{
  render(){
    return(
      <div className='card-projetos-container'>
        <h1>titulo projeto</h1>
        <h4>ferramentas usadas</h4>
        <img src="https://www.pngplay.com/wp-content/uploads/11/Heliolisk-Pokemon-PNG-HD-Quality.png" alt="" />
        <div className='descricao'>
          <p>breve descrição projeto</p>
        </div>
      </div>

    )
  }
}
export default CardProjetos;