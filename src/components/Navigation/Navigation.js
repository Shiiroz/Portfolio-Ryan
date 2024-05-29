import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; 

export default function Nav() {
  return (
    <div className='Lien'>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Accueil
        </NavLink>
        <NavLink to="/Work" activeClassName="active">
          Projets
        </NavLink>
        <a href="#footer">
          Contact
        </a>
      </nav>
    </div>
  );
}

