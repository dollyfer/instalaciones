import React from 'react'

const cartTable = () => {
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td className="cart__tdImg">
                    <Card.Img variant="top" src={product.img} height="110px" />
                  </td>
                  <td>${product.price}</td>
                  <td>{product.quantity} unidades</td>
                  <td>${product.price * product.quantity}</td>
                  <td>
                    <button
                      className="cart__deleteBtn"
                      onClick={() => deleteProduct(product)}
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
                <th>Cantidad Total</th>
                <th>{subTotal} unidades</th>
                <th>${total}</th>
                <th className="cart__thBtnContainer">
                  <div className="cart__btnContainer">
                    <button
                      className="cart__btnClean"
                      onClick={() => deleteCart()}
                    >
                      Borrar Carrito
                    </button>
                  </div>
                </th>
              </tr>
            </tfoot>
        </table>
    </div>
  )

  render() {
    const carritoPagina = this.state.carritoPagina;
    return (
      <div>
        <b>{carritoPagina ? {listaCarrito} : 'no hay items'}</b>
      </div>
    );
  }
}

export default cartTable