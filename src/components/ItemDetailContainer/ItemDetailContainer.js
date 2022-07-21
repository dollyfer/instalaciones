import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {

    let param = useParams().id
    console.log(param)

    const [product,setProduct] = useState({})

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products/${param}`, {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            })
              .then((res) => res.json())
              .then((data) => setProduct(data));
          }, 1000);
    }, [param])
    

  return (
    <>
        <ItemDetail product={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer