import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((s) => !s);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">Rentop</a>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} aria-hidden="true" />
        </button>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="/#categories" onClick={() => setMenuOpen(false)}>Catégories</a></li>
          <li><a href="/#offers" onClick={() => setMenuOpen(false)}>Offres</a></li>
          <li><a href="/#reviews" onClick={() => setMenuOpen(false)}>Avis</a></li>
          <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <a href="/search" className="nav-btn">Rechercher</a>
      </div>
    </nav>
  );
}