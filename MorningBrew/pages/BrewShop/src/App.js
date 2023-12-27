import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Arrival from './pages/new-Arrivals/arrival';
import Bestseller from './pages/Best-sellers/Best-seller';
import Footer from './components/footer/footer';
import Home from './Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import $ from "jquery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index element = {<Home/>} />
            <Route path = "/ProductDetails" element={<ProductDetails/>}/>
            <Route path = "/Best-seller" element = {<Bestseller/>} />
            <Route path = "/arrival" element = {<Arrival/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}   

export default App
