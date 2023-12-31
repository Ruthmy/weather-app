import React from 'react';
import { NavLink } from 'react-router-dom';
import Microphone from '../assets/img/microphone.svg';
import Settings from '../assets/img/gear.svg';
import Back from '../assets/img/arrow.svg';

import '../styles/Navbar.css';

const Navbar = () => (
  <>
    <nav className="d-flex-row">
      <div>
        <NavLink to="/">
          <img
            className="nav__back"
            src={Back}
            alt="Back"
          />
          home
        </NavLink>
      </div>
      <div className="nav__panel d-flex-row">
        <button type="button" className="btn">
          <img
            src={Microphone}
            alt="Microphone"
          />
        </button>
        <button type="button" className="btn">
          <img
            src={Settings}
            alt="Settings"
          />
        </button>
      </div>
    </nav>
  </>
);

export default Navbar;
