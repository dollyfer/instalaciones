import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  return (
    <div>
      {props.productos.map((producto) => {
        return <Item key={producto.id} info={producto}></Item>;
      })}
    </div>
  );
};

export default ItemList;
