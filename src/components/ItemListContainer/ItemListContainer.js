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
// import React from "react";
// import './ItemList.css'

/* 
const Componente = (props) => {
  return (
    <div className="clase">{props.saludo}</div>
  
  <div> 
  {props.arrayHijo.map((obj)=>{
  return (
  <div>{obj.nombre} {obj.edad}</div>
  )
  })}
  </div>
 
  );
};

export default Componente; */

import React, {useEffect, useState} from "react";
import ItemList from "../ItemList/ItemList";
import img1 from "../../Images/bufferopi.jpg";
import img2 from "../../Images/cherimoyabase.jpg";
import img3 from "../../Images/meline.jpg";
import img4 from "../../Images/nails_prep.png";
import img5 from "../../Images/opigelcolor.jpg";

const Productos = [
  {
    id: 1,
    title: "Ultrabond Cherimoya",
    price: 800,
    description: "15ml",
    img: img1,
  },
  {
    id: 2,
    title: "Lima Cherimoya ",
    price: 500,
    description: "100/180",
    img: img2,
  },
  {
    id: 3,
    title: "Nail prep Nails Show ",
    price: 200,
    description: "10ml",
    img: img3,
  },
  {
    id: 4,
    title: "Base Coat Cherimoya",
    price: 100,
    description: " 15ml",
    img: img4,
  },
  { 
    id: 5,
    title: "Buffer OPI",
    price: 800,
    description: "50ml",
    img: img5, 
  }
];

const ItemListContainer = () => {

 useEffect(() => {

  fetch('../../../public/productos.json',
  {headers:
    {
      "Content-type":"application/json","accept":"application/json"
    }

  }
  )
  .then((response) =>
  {
    console.log(response)
    return response.json()

  })
  .then ((data)=> console.log (data))

 }, [])

  return (
    <>
      <ItemList productos={Productos}></ItemList>
  
    </>
  );
};

export default ItemListContainer;
