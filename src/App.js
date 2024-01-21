
import './App.css';
import Checkout from './Checkout';
// import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Routes, Route, } from "react-router-dom"
import Login from './Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
