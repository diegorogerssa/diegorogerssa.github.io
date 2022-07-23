import React, { Component } from 'react'
import CardProjetos from '../components/CardProjetos'
import NavBar from '../components/NavBar';
import '../styles/Projetos.css'

class Projetos extends Component{
  render(){
    return(
      <div className='projetos-container'>
        <NavBar />
        <CardProjetos />
      </div>
    )
  }
}
export default Projetos;