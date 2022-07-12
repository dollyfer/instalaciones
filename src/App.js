import "./App.css";
import Header from "./components/Header/Header";
import Componente from "./components/ItemList/ItemList";
import { useState, useEffect } from "react";
import ItemCounter from "./components/ItemCounter/ItemCounter";

let styles = {
  height: "120px",
  backgroundColor: "#afeeee",
};

function App() {
  const [numero, setNumero] = useState(0);
  useEffect(() => {
    console.log("componente sumado");
  }, []);
  console.log("componente por sumar");
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
    <div style={styles}>
      <Header />
      <section className="clasexd">
        <div>
          <p>Gel Semipermanente</p>
          {numero < 5 ? <ItemCounter numero={numero} /> : <h5>Out of Stock</h5>}

          <div>
            <button onClick={sumar}> agregar</button>
            <button onClick={restar}> eliminar</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
