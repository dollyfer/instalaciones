import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className='listas'>
        <li className='li'>
          <NavLink to='/'>Productos</NavLink>
        </li>
        <li className='li'>
          <NavLink to='/Servicios'>Servicios</NavLink>
        </li>
        <li className='li'>
          <NavLink to='/Contacto'>Contacto</NavLink>
        </li>
        <li className='li'>
        <NavLink to='/category/maquillaje'>Maquillaje</NavLink>
        </li>
        <li className='li'>
        <NavLink to='/category/preparacion'>Preparacion</NavLink>
        </li>
        <li className='li'>
          <NavLink to='/category/gel'>Gel</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav