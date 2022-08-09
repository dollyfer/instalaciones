import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = () => {

    let param = useParams().id
  console.log(param)
    const [product,setProduct] = useState([])

    const [findx,setFindx] = useState([])

    useEffect(() => { 
      const probar = async() => {

        const db = getFirestore();
        
          const itemsCollection = query (collection(db, "products"))
      
          getDocs(itemsCollection).then((snapshot) => {
            setFindx(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  
          });
  
          const filtro = findx.find((productFilter) =>
            param === productFilter.id)
  
            setProduct(filtro)
  
          console.log(product)
      }
      probar()
    }, [param]);

/*    useEffect(() => {
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products/${param}`, {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            })
              .then((res) => res.json())
              .then((data) => setProduct(data));
          }, 1000);
    }, [param]) */
    

  return (
    <>
        <ItemDetail product={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer