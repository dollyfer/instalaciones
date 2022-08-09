import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";


const CartTable = () => {

  const { listaCarrito, quitarProduct, deleteCart } = useContext(CartContext);

  const totalComprado = listaCarrito.reduce( (suma, product) => {
    return suma + product.price * product.quantity
  }, 0 )
  
  const totalCompradoFixed = totalComprado.toFixed(2)

  if (listaCarrito.length == 0) {
    return (
      <div>
        <h2> El carrito esta vacio </h2>
        <Link to="/">
          <button> Ir al Home </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Imagen</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Quitar Producto</th>
            </tr>
          </thead>
          <tbody className="cart__tbody">
            {listaCarrito.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td className="cart__tdImg">
                  <img src={product.image} height="110px" />
                </td>
                <td>${product.price}</td>
                <td>{product.quantity} unidades</td>
                <td>${product.price * product.quantity}</td>
                <td>
                  <button
                    className="cart__deleteBtn"
                    onClick={() => quitarProduct(product)}
                  >
                    <i className="fa-solid fa-trash fa-2xl"></i>
                    <i className="fa-solid fa-trash-can-xmark"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="cart__foot">
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th> total comprado {totalCompradoFixed} </th>
              <th></th>
              <th className="cart__thBtnContainer">
                <div className="cart__btnContainer">
                  <button
                    className="cart__btnClean"
                    onClick={() => deleteCart()}
                  >
                    Borrar Carrito
                  </button>
                  <button>
                    Finalizar mi compra 
                  </button>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    ); 
  }
};

export default CartTable;
