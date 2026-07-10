import { useState } from 'react';
import './styles.css';

export default function Header(): JSX.Element {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <header className="header">
      <div className="container header__container">
        <a href="#inicio" className="logo">
          <span className="logo__badge">DP</span>
          <span className="logo__text">
            ACADEMIA<span>DP</span>
          </span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          onClick={() => setNavOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav${navOpen ? ' active' : ''}`}>
          <ul className="nav__list">
            <li><a href="#inicio" onClick={handleNavLinkClick}>Inicio</a></li>
            <li><a href="#nosotros" onClick={handleNavLinkClick}>Nosotros</a></li>
            <li><a href="#deportes" onClick={handleNavLinkClick}>Deportes</a></li>
            <li><a href="#horarios" onClick={handleNavLinkClick}>Horarios</a></li>
            <li><a href="#entrenadores" onClick={handleNavLinkClick}>Entrenadores</a></li>
            <li><a href="#contacto" onClick={handleNavLinkClick}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
