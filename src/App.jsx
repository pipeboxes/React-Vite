import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import { UserProvider } from './Views/UserContext';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <UserProvider>
      <CartProvider>
        <Router basename="/React-Vite">
          <div className="app-container">
            <Navbar />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login users={users} />} />
              <Route path="/register" element={<Register setUsers={setUsers} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;