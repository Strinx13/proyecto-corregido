// src/Components/Checkout/Checkout.jsx
import React, { useState } from "react";
import PaymentOptions from "./Paymentoptions";
import CardForm from "./Cardform";
import TransferInfo from "./Transferinfo";
import "./Checkout.css";

const Checkout = ({ cartItems }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Calcular el total del carrito
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleBack = () => {
    setSelectedOption(null); // Regresar a las opciones iniciales
  };

  return (
    <div className="checkout-container"> {/* Clase raíz para los estilos */}
      <div className="payment-container">
        {!selectedOption ? (
          <>
          <div className="pedido">
            <h2>Resumen del Pedido</h2>
            {cartItems.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <>
                <h3>Total a pagar: ${totalAmount}</h3> {/* Solo el total */}
              </>
            )}
            </div >
            <div className="options">
            <PaymentOptions onSelect={setSelectedOption} />
            </div>
          </>
        ) : selectedOption === "tarjetas" ? (
          <CardForm onBack={handleBack} total={totalAmount} />
        ) : (
          <TransferInfo onBack={handleBack} total={totalAmount} />
        )}
      </div>
    </div>
  );
};

export default Checkout;
