import React, { Component } from 'react'
import '../styles/NavBar.css'
import { NavLink } from "react-router-dom";

class NavBar extends Component{
  constructor(props){
    super()
      this.state = {
        menu: 'nav-close',
      }
  }
mudarClasseOpen = () => {
  const { menu } = this.state
    menu === 'nav-close'? this.setState({ menu:'nav-container' }):this.setState({ menu:'nav-close' })
}

mudarClasseClose = () => {
  const { menu } = this.state
    menu === 'nav-close'? this.setState({ menu:'nav-container' }):this.setState({ menu:'nav-close' })
}

  render(){
    const { menu } = this.state
    return(
      <header className='header-container'>
        
          <h1>&lt; Diego Rogers /&gt;</h1>
          <a onClick={this.mudarClasseOpen} className='icon-menu' href="#nav-container">&#x0224B;</a>
        
        <nav id='nav-container' className = { menu }>
          <ul>
            <li><NavLink className='nav-bar-link' activeClassName="selected" to='/'>&lt; Home /&gt;</NavLink></li>
            <li><NavLink className='nav-bar-link' activeClassName="selected" to='/projetos'>&lt; Projetos /&gt;</NavLink></li>
            <li><NavLink className='nav-bar-link' activeClassName="selected" to='/sobre'>&lt; Sobre mim /&gt;</NavLink></li>
            <a onClick={this.mudarClasseClose} className='icon-close' href="#nav-container">X</a>
          </ul>
      </nav>
      </header>
    )
  }
}
export default NavBar;