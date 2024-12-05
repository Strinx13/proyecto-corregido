// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner'; // Importar Banner solo donde sea necesario
import Checkout from './Components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner /> {/* Solo aparece en Home */}
              <Home onAddToCart={handleAddToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Banner /> {/* Solo aparece en Cart */}
              <Cart
                cartItems={cartItems}
                onRemove={handleRemoveFromCart}
                onClear={handleClearCart}
              />
            </>
          }
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
