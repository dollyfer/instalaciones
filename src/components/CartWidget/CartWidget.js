import React, {useContext} from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { listaCarrito} = useContext(CartContext);

  const totalCantidad = listaCarrito.reduce( (suma, product) => {
    return suma + product.quantity
  }, 0 )

  return (
    <div className="carrt">
      <Link to="/carrito">
        <HiOutlineShoppingCart></HiOutlineShoppingCart>
      </Link>
    
        {listaCarrito.length !== 0 && 
        <div>
          {totalCantidad}
        </div> 
        }
      
    </div>
  );
};

export default CartWidget;
