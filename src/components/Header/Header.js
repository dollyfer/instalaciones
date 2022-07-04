import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Navbar/Nav'
import './Header.css'
import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
  return (
    <section className='header'>
        <Logo></Logo>
        <h1 className='texto'>Nails With Do</h1>
        <Nav></Nav>
        <CartWidget></CartWidget>
    </section>
  )
}

export default Header