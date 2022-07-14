import React, {useState} from "react";
import "./ItemCounter.css";

export const ItemCounter = () => {
  const [numero, setNumero] = useState(0);

  const sumar = () => {
    console.log("suma");
    setNumero(numero + 1);
  };

  const restar = () => {
    if (numero > 0) {
      console.log("resta");
      setNumero(numero - 1);
    }
  };

  return (
    <section className="clasexd">
      {numero < 5 ? <h3>{numero}</h3> : <h3>Out of stock</h3>}
      <div>
        <p>Gel Semipermanente</p>

        <div>
          <button onClick={sumar}> agregar</button>
          <button onClick={restar}> eliminar</button>
        </div>
      </div>
    </section>
  );
};

export default ItemCounter;
