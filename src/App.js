import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Imagen from "./components/Imagen";
import Autor from "./components/Autor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="container App">
      <div class="row">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="Card" element={<Card />} />
            <Route path="Imagen" element={<Imagen />} />
            <Route path="Autor" element={<Autor />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
