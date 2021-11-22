import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./Components/ProductListing";
import Header from "./Components/Header";
import "./App.css";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
