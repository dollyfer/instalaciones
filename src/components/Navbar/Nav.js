import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='listas'>
        <li className='palabras'>
          <NavLink to='/'>Productos</NavLink>
        </li>
        <li className='palabras'>
          <NavLink to='/Servicios'>Servicios</NavLink>
        </li>
        <li className='palabras'>
          <NavLink to='/Contacto'>Contacto</NavLink>
        </li>
        <li className='palabras'>
        <NavLink to='/category/maquillaje'>Maquillaje</NavLink>
        </li>
        <li className='palabras'>
        <NavLink to='/category/preparacion'>Preparacion</NavLink>
        </li>
        <li className='palabras'>
          <NavLink to='/category/gel'>Gel</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav