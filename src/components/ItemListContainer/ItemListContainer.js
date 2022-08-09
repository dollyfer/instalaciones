import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos);

  let pruebaCat = useParams().name;
  let category = ''

  if(pruebaCat == "maquillaje"){
    category = "maquillaje"
  } else if (pruebaCat == "gel"){ 
    category = "gel"
  } else if (pruebaCat == "preparacion") {
    category = "preparacion"
  } 

  useEffect(() => {
    const db = getFirestore();

    if (pruebaCat){
      const itemsCollection = query (collection(db, "products"),
      where ("category", "==", category))
  
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }else{
      const itemsCollection = query (collection(db, "products")) 
  
      getDocs(itemsCollection).then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }

  }, [category]);


/*  const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((snapshot) => {
      setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    console.log(productos);
  }, []);
  console.log(productos); */
  /*   useEffect(() => {
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
  }, [pruebaCat, category]); */

  return (
    <>
      <ItemList productos={productos}></ItemList>
    </>
  );
};

export default ItemListContainer;
