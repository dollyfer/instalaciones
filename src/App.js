import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import ItemCounter from "./components/ItemCounter/ItemCounter";
import ItemList from './components/ItemList/ItemList';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

let styles = {
  height: "120px",
  backgroundColor: "#afeeee",
};

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes style={styles}>
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
