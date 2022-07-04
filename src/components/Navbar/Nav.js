import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <ul className='listas'>
        <li className='items'>
          <a href='./'>Productos</a>
        </li>
        <li>
          <a href='./'>Servicios</a>
        </li>
        <li>
          <a href='./'>Comprar</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav