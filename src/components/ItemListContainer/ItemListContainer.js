import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  let pruebaCat = useParams().name;
  let category = ''

  if(pruebaCat == "electronics"){
    category = "electronics"
  } else {
    category = "jewelery"
  }

  useEffect(() => {
    if (pruebaCat) {
      setTimeout(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}`, {
          headers: {
            "Access-Control-Allow-Origin": "https://fakestoreapi.com/products",
          },
        })
          .then((res) => res.json())
          .then((data) => setProductos(data));
      }, 1000);
    } else {
      setTimeout(() => {
        fetch(`https://fakestoreapi.com/products`, {
          headers: {
            "Access-Control-Allow-Origin": "https://fakestoreapi.com/products",
          },
        })
          .then((res) => res.json())
          .then((data) => setProductos(data));
      }, 1000);
    }
  }, [pruebaCat, category]);

  return (
    <>
      <ItemList productos={productos}></ItemList>
    </>
  );
};

export default ItemListContainer;