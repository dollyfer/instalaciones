import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  return (
    <div>
      <div>Title: {props.product.title}</div>
      <img src={props.product.image} alt= "imagenProducto"></img>
      <div>Price: {props.product.price}</div>
      <div>Description: {props.product.description}</div>
      <div>Category: {props.product.category}</div>
    </div>
  );
};

export default ItemDetail;
