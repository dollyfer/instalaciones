import './App.css';
import Header from './components/Header/Header'
import Componente from './components/Componente/Componente'

let styles = {
  height: '120px',
  backgroundColor: '#afeeee', 
};


function App() {
  /* const arrayPrueba = [{nombre: "jose", edad: 34}, {nombre: "pepe", edad: 40}, {nombre: "josefina", edad: 30}] */
  return <div style={styles}>
    <Header />
    <Componente 
     saludo = {"Bienvenidos a Nails With Do"}
     /* arrayHijo = {arrayPrueba}*/
     />
  </div>;
}

export default App;
