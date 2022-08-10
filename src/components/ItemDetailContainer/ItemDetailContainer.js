import React, {useState, useEffect} from 'react'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  documentId,
} from "firebase/firestore";

const ItemDetailContainer = () => {

  // Obtengo el ID del producto donde clickeo
  const paramId = useParams().id;

  // Genero el estado donde voy a guardar el producto
  const [product, setProduct] = useState([]);

  useEffect(() => {

    // Conexion a la database
    const db = getFirestore();

    // Consulta a la database, me traigo el producto que tenga el ID igual a mi paramId
    // Para acceder al ID hay que usar el documentId(), "id" no funciona como key
    const itemsCollection = query(
      collection(db, "products"),
      where(documentId(), "==", paramId)
    );

    // La consulta de firebase siempre me trae un array, no importa si tiene solo un elemento
    // Tengo que pasarle un objeto a mi componente hijo
    // En itemSelected guardo el array y luego en products guardo el objeto unico que me traigo
    // que se guarda en el indice 0 de mi array, de esa forma en products guardo 1 objeto
    // y mi componente hijo va a poder acceder a las propiedades(keys)
    getDocs(itemsCollection).then((snapshot) => {
      const itemSelected = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProduct(itemSelected[0]);
    });
  }, [paramId]);

  return (
    <>
      <ItemDetail product={product}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;