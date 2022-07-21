import React from 'react'
import './Nav.css'
import {NavLink} from 'react-router-dom';
import Home from '../Home/Home';

const Nav = () => {
  return (
    <div>
      <ul className='listas'>
        <li>
          <NavLink to='/'>Productos</NavLink>
        </li>
        <li>
          <NavLink to='/Servicios'>Servicios</NavLink>
        </li>
        <li>
          <NavLink to='/Contacto'>Contacto</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav