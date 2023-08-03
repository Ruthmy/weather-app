import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.css';

const Navbar = () => (
  <>
    <nav className="d-flex-row">
      <div>
        {/* Create a link to come back to the home page */}
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <button type="button" className="btn btn-primary">Mic</button>
        <button type="button" className="btn btn-primary">Config</button>
      </div>
    </nav>
  </>
);

export default Navbar;
