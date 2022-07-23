import React, { Component } from 'react'
import '../styles/CardProjetos.css'

class CardProjetos extends Component{
  render(){
    const { title, tools, image,  description } = this.props
    return(
      <div className='card-projetos-container'>
        <h1 >{title}</h1>
        <h4>{tools}</h4>
        <img src={ image } alt="" />
        <div className='descricao'>
          <p>{ description }</p>
        </div>
      </div>

    )
  }
}
export default CardProjetos;