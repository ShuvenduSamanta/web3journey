import './App.css';
import Navbar from './components/Navbar';
import Selfintro from './components/Selfintro';
import Nfts from './components/Nfts';
import Roadmap from './components/Roadmap';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Selfintro />
      <Nfts />

      
    </div>
  );
}

export default App;
