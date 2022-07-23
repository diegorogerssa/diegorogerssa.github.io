import React, { Component } from 'react'
import CardProjetos from '../components/CardProjetos'
import NavBar from '../components/NavBar';
import '../styles/Home.css'

class Home extends Component{
  render(){
    return(
      <div className='home-container'>
        <NavBar />
        <h1>em breve</h1>
      </div>
    )
  }
}
export default Home;