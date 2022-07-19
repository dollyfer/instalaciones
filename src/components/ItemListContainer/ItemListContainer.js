import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductos(data));
    }, 2000);
     
  }, []);
  console.log(productos)

  return (
    <>
      <ItemList productos={productos}></ItemList>
    </>
  );
};

export default ItemListContainer;
