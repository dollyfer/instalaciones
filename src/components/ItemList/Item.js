import React, {useState} from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail"


const Item = ({ info }) => {

    const [iShow, setIShow] = useState(false)

    const cambiar = () => {
        setIShow( !iShow ) 
    } 


    return (
        <div>
            <div>{info.title}</div>
            <img src={info.image}></img>
            <div>{info.price}</div>
            <button onClick ={ cambiar }>Detalle</button>
            { iShow && <ItemDetail detalles={info}></ItemDetail>}
        </div>
    )

}

export default Item;

