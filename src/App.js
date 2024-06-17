import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Imagen from "./components/imagen";
import Autor from "./components/autor";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="container App">
      <div class="row">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="imagen" element={<Imagen />} />
            <Route path="autor" element={<Autor />} />
            <Route path="footer" element={<Footer />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
