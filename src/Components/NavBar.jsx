import NavButton from './NavButton'
import Logo from './Logo'
import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

function NavBar (){

  return (
    <nav className='navBar'>
      <div  className = 'logo object-contain w-40'><Logo/></div>
      <div className = 'navButtonGroup'>
        <Link to={"/inicio"}><NavButton text = {'Inicio'}/></Link>
        <Link to={"/catalogo"}><NavButton text = {'Catálogo'} Link to="/catalogo"/></Link>
        <Link to={"/inicio"}><NavButton text = {'Ofertas'}Link to = "/inicio"/></Link>  
        <Link to={"/contacto"}><NavButton text = {'Contacto'}/></Link>
        <Link to={"/perfil"}><NavButton text = {'Perfil'} ></NavButton></Link>
      </div>
    </nav>
  )
}

export default NavBar;