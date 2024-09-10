import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Views/Home';
import Cart from './Views/Cart';
import Login from './Views/Login';
import Register from './Views/Register';
import Footer from './Components/Footer';
import Pizza from './Views/Pizza';
import NotFound from './Views/NotFound';
import Profile from './Views/Profile';
import { CartProvider } from './Views/CartContext';

function App() {
  return (
    <CartProvider>
      <Router basename="/React-Vite">
        <div className="app-container">
          <Navbar />
          <Header />
          <Routes>
            {/* <Route path="/" element={<Pizza />} /> */}
            <Route path="/" element={<Home />} /> Descomentar para ver todas las pizzas
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;