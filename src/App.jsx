import React, { useState } from 'react';
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
        <Header />
        <Routes>
          <Route path="/" element={<Pizza addToCart={addToCart} />} />
          {/* <Route path="/" element={<Home addToCart={addToCart} />} /> Descomentar para ver todas las pizzas */}
          <Route path="/login" element={<Login users={users} setLoggedIn={() => { }} />} />
          <Route path="/register" element={<Register setUsers={setUsers} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;