import React from "react";

const ItemDetail = (props) => {
  return (
    <div>
      <div>Title: {props.detalles.title}</div>
      <img src={props.detalles.image}></img>
      <div>Price: {props.detalles.price}</div>
      <div>Description: {props.detalles.description}</div>
	  <div>Category: {props.detalles.category}</div>
    </div>
  );
};

export default ItemDetail;
