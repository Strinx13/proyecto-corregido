// src/Components/Home/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Importar Toastify y ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importar estilos de Toastify
import './Home.css';

const Home = ({ onAddToCart }) => {
  const navigate = useNavigate();

  const product = {
    name: 'Producto 1',
    price: 100,
  };

  const handleAddProduct = () => {
    onAddToCart(product);

    // Mostrar una notificación con Toastify
    toast.success('Producto agregado al carrito', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="home-container">
      <h1>Bienvenido a la Tienda</h1>
      <div className="product-card">
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <button onClick={handleAddProduct}>Agregar al Carrito</button>
      </div>
      <button onClick={() => navigate('/cart')}>Ver Carrito</button>

      {/* Agregar ToastContainer al final para habilitar las notificaciones */}
      <ToastContainer />
    </div>
  );
};

export default Home;
