import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Navbar/Nav'
import './Header.css'

const Header = () => {
  return (
    <section className='header'>
        <Logo></Logo>
        <h1>Nails With Do</h1>
        <Nav></Nav>
    </section>
  )
}

export default Header