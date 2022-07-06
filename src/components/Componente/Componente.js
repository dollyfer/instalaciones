/* import React from 'react'

const ItemListContainer = () => {
    const prop = () => {
      return (
        <div>
          <Welcome text="Welcome to Nails With Do" />
        </div>
      );
    };
    
    const Welcome = ({ text }) => {
      return <h2>{text}</h2>;
    };
    
}

export default ItemListContainer */
import React from "react";
import './Componente.css'


const Componente = (props) => {
  return (
    <div className="clase">{props.saludo}</div>
  /*
  <div> 
  {props.arrayHijo.map((obj)=>{
  return (
  <div>{obj.nombre} {obj.edad}</div>
  )
  })}
  </div>
  */
  );
};

export default Componente;
