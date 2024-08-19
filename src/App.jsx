import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
import Footer from './Components/Footer';
import pizzas from './Components/pizzas';

function App() {
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  const addToCart = (pizza) => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, quantity: 1 }];
    });
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <Router basename="/React-Vite">
      <div className="app-container">
        <Navbar total={total} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} pizzas={pizzas} />} />
          <Route path="/login" element={<Login users={users} setLoggedIn={() => {}} />} />
          <Route path="/register" element={<Register setUsers={setUsers} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;