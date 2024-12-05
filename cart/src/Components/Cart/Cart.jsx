import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import logo from '../assets/logo.png';

function Cart({ cartItems, onRemove, onClear, onUpdateQuantity }) {
  const navigate = useNavigate(); // Hook para redirigir

  const handleCheckout = () => {
    navigate('/checkout'); // Redirige a la ruta "/checkout"
  };

  const handleQuantityChange = (event, index) => {
    const quantity = event.target.value;
    // Si la cantidad es un número válido y mayor que 0, actualiza la cantidad
    if (quantity > 0 && !isNaN(quantity)) {
      onUpdateQuantity(index, parseInt(quantity)); // Actualiza la cantidad en el carrito
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-card">
              <img src={logo} alt="Producto" className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Precio: ${item.price}</p>
                <div className="quantity-container">
                  <label htmlFor={`quantity-${index}`}>Cantidad:</label>
                  <input
                    type="number"
                    id={`quantity-${index}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, index)}
                    min="1"
                  />
                </div>
                <button className="remove-btn" onClick={() => onRemove(index)}>
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
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
