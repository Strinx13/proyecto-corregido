import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import logo from '../assets/logo.png';

function Cart({ cartItems, onRemove, onClear }) {
  const navigate = useNavigate(); // Hook para redirigir

  const handleCheckout = () => {
    navigate('/checkout'); // Redirige a la ruta "/checkout"
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={logo} alt="Producto" className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <button className="remove-btn" onClick={() => onRemove(index)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="cart-actions">
          <button className="clear-btn" onClick={onClear}>
            Vaciar carrito
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Ir al Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
