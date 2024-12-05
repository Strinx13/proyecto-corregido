import { useState } from "react"; // Importa useState para manejar el estado del menú
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import './Navbar.css';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false); // Estado para el menú desplegable

  // Maneja el clic en el botón de menú
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      {/* Botón de menú visible solo en pantallas pequeñas */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navList ${menuActive ? "active" : ""}`}>
        <li className="navItem"><Link to="/" className="link">Home</Link></li>
        <li className="navItem"><Link to="/Cart" className="link">Guppys</Link></li>
        <li className="navItem"><Link to="/Checkout" className="link">Pleco</Link></li>
        <li className="navItem logo">Darky’s</li>
        <li className="navItem"><Link to="/betta" className="link">Betta</Link></li>
        <li className="navItem"><Link to="/alimento" className="link">Alimento</Link></li>
        <li className="navItem"><Link to="/nosotros" className="link">Nosotros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
