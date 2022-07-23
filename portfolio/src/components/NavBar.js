import React, { Component } from 'react'
import '../styles/NavBar.css'
import { NavLink } from "react-router-dom";

class NavBar extends Component{
  render(){
    return(
      <nav className = 'nav-container'>
        <h1>&lt; Diego Rogers /&gt;</h1>
        <ul>
          <li><NavLink className='nav-bar-link' activeClassName="selected" to='/'>&lt; Home /&gt;</NavLink></li>
          <li><NavLink className='nav-bar-link' activeClassName="selected" to='/projetos'>&lt; Projetos /&gt;</NavLink></li>
          <li><NavLink className='nav-bar-link' activeClassName="selected" to='/sobre'>&lt; Sobre mim /&gt;</NavLink></li>
        </ul>
      </nav>
    )
  }
}
export default NavBar;