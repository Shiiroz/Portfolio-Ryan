import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css";

const Header = () => {
  return (
    <>
    <header className="header">
        <div className="logo">
          <img src="RM-logo.jpg" alt='Logo portfolio' />
        </div>
        <h1 className='Titre'>Bienvenue sur mon portfolio!</h1>

        <div className='head'>
          <nav>
            <NavLink to="/">
              Accueil
            </NavLink>
          </nav>

          <nav>
            <NavLink to="/Work">
              Projets
            </NavLink>
          </nav>

          <nav>
            <a href="#footer">
              Contact
            </a>
          </nav>
        </div>
    </header>
    </>
  )
}

export default Header;
