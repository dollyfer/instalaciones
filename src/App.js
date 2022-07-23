import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
