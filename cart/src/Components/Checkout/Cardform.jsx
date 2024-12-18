import React from "react";
import { useNavigate } from "react-router-dom";
import './Cardform.css';

const CardForm = ({ total }) => {
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    // Simular datos de pedido para pasar a PaymentReceipt
    const orderDetails = {
      referenceNumber: "123456789",
      shippingName: document.getElementById("shippingName").value,
      shippingAddress: document.getElementById("shippingAddress").value,
      shippingCity: document.getElementById("shippingCity").value,
      shippingState: document.getElementById("shippingState").value,
      shippingZip: document.getElementById("shippingZip").value,
      items: [
        { name: "Producto 1", quantity: 2, price: 100 },
        { name: "Producto 2", quantity: 1, price: 50 },
      ],
      total: total,
      paymentMethod: "Tarjeta de Crédito",
    };

    // Navegar a la página de recibo con los detalles de la orden
    navigate("/receipt", { state: orderDetails });
  };

  return (
    <div className="payment-form">
      <div className="textcard">
        <h2>Paga con Tarjeta</h2>
        <h3>Total a pagar: ${total}</h3> {/* Total dinámico */}
      </div>

      {/* Contenedor para dividir las secciones */}
      <div className="form-sections">
        {/* Sección de datos de la tarjeta */}
        <div className="form-section card-details">
          <h2>Datos de la Tarjeta</h2>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Número de la Tarjeta</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Nombre en la Tarjeta</label>
              <input type="text" id="cardName" placeholder="Nombre Apellido" />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Fecha de Expiración</label>
              <input type="text" id="expiryDate" placeholder="MM/AA" />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" placeholder="123" />
            </div>
          </form>
        </div>

        {/* Sección de dirección de envío */}
        <div className="form-section shipping-details">
          <h2>Dirección de Envío</h2>
          <form>
            <div className="form-group">
              <label htmlFor="shippingName">Nombre del Destinatario</label>
              <input
                type="text"
                id="shippingName"
                placeholder="Nombre Apellido"
              />
            </div>
            <div className="form-group">
              <label htmlFor="shippingAddress">Dirección</label>
              <input
                type="text"
                id="shippingAddress"
                placeholder="Calle, Número, Colonia"
              />
            </div>
            <div className="form-group">
              <label htmlFor="shippingCity">Ciudad</label>
              <input type="text" id="shippingCity" placeholder="Ciudad" />
            </div>
            <div className="form-group">
              <label htmlFor="shippingState">Estado</label>
              <input type="text" id="shippingState" placeholder="Estado" />
            </div>
            <div className="form-group">
              <label htmlFor="shippingZip">Código Postal</label>
              <input type="text" id="shippingZip" placeholder="Código Postal" />
            </div>
          </form>
        </div>
      </div>

      {/* Botones para confirmar o regresar */}
      <div className="form-actions">
      <button className="checkout-btn" onClick={() => navigate(-1)}>
          Regresar
        </button>
        <button className="checkout-btn" onClick={handleConfirmPayment}>
          Confirmar Pago
        </button>
  
      </div>
    </div>
  );
};

export default CardForm;
