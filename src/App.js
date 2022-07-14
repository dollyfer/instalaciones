import "./App.css";
import Header from "./components/Header/Header";
import ItemCounter from "./components/ItemCounter/ItemCounter";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

let styles = {
  height: "120px",
  backgroundColor: "#afeeee",
};



function App() {

  return (
    <div style={styles}>
      <Header />
      <ItemCounter />
      <ItemListContainer />
    </div>
  );
}

export default App;
