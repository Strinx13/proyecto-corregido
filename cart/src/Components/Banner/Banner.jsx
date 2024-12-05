import React from 'react';
import './Banner.css';  // Importa el archivo CSS
import guppyImage from '../assets/guppy2.jpg';

function Banner() {
  return (
    <div class="banner">
      
  <div class="banner-image">
  <img src={guppyImage} alt="Guppy" style={{ width: "100vh", margin: "20px" }} />
  </div>
  <div class="banner-text">
    <h1>Darky's</h1>
    <p>Guppy Calité</p>
  </div>
</div>

  );
}

export default Banner;
