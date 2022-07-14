import React from "react";

const Item = ({ info }) => {
    return (
        <div>
            <div>{info.title}</div>
            <img src={info.img}></img>
            <div>{info.price}</div>
            <div>{info.description}</div>
            <button>Detalle</button>
        </div>
    )
}

export default Item;

