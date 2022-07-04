import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'

let styles = {
  height: '120px',
  backgroundColor: '#afeeee', 
};

function App() {
  return <div style={styles}>
    <Header />
  </div>;
}

export default App;
