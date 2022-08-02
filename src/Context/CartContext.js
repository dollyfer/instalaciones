import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [listaCarrito, setListaCarrito] = useState([]);

  const addItem = (product, counter) => {
    const productFilter = listaCarrito.findIndex(
      (productFind) => product.id === productFind.id
    );
    if (productFilter !== -1) {
      listaCarrito[productFilter].quantity = listaCarrito[productFilter].quantity + counter;
    } else {
      listaCarrito.push({
        id: product.id,
        title: product.title,
        description: product.description,
        category: product.category,
        image: product.image,
        quantity: counter,
      });
    }
    setListaCarrito([...listaCarrito]);
    console.log(listaCarrito);
  };

  return (
    <CartContext.Provider value={{ addItem, listaCarrito }}>
      {children}
    </CartContext.Provider>
  );
};

