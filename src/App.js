import './App.css';
import Navbar from './components/Navbar';
import Selfintro from './components/Selfintro';
import Roadmap from './components/Roadmap';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Selfintro />
      

      
    </div>
  );
}

export default App;
