import React from "react";

const Item = ({info}) => {
    return(
        <div>
            <div>{info.title}</div>
            <div>{info.img}</div>
            <div>{info.price}</div>
            <div>{info.description}</div>
            <button>Detalle</button>
        </div>
    )
}

export default Item;

