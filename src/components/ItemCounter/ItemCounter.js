import React, { useState } from "react";
import "./ItemCounter.css";

export const ItemCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementarCounter = () => {
    if(counter < 10)
    setCounter((prevState) => prevState + 1);
  };

  const restarCounter = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <section className="clasexd">
      {counter}
      <div>
        <div>
          <button onClick={incrementarCounter}> Incrementar</button>
          <button onClick={restarCounter}> Decrementar</button>
          <button onClick={() => props.changeBoolean(counter)}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemCounter;
