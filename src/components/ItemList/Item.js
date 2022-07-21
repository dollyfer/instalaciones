import React, {useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import "./Item.css";
import {Link} from "react-router-dom";


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

            <Link to={`item/${info.id}`}>
            <button onClick ={ cambiar }>Detalle</button>
            </Link>

            { iShow && <ItemDetail detalles={info}></ItemDetail>}
        </div>
    )

}

export default Item;

