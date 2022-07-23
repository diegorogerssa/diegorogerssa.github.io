import React, { Component } from 'react'
import '../styles/NavBar.css'

class NavBar extends Component{
  render(){
    return(
      <nav className = 'nav-container'>
        <h1>&lt; Diego Rogers /&gt;</h1>
        <ul>
          <li>&lt; Home /&gt;</li>
          <li>&lt; Projetos /&gt;</li>
          <li>&lt; Sobre mim /&gt;</li>
        </ul>
      </nav>
    )
  }
}
export default NavBar;