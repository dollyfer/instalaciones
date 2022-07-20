import React, {useState} from "react";
import ItemDetail from "../ItemDetailContainer/ItemDetail"
import "./Item.css";


const Item = ({ info }) => {

    const [iShow, setIShow] = useState(false)

    const cambiar = () => {
        setIShow( !iShow ) 
    } 


    return (
        <div className="bdy, formato">
            <div>{info.title}</div>
            <img className="t" src={info.image}></img>
            <div>{info.price}</div>
            <button onClick ={ cambiar }>Detalle</button>
            { iShow && <ItemDetail detalles={info}></ItemDetail>}
        </div>
    )

}

export default Item;

