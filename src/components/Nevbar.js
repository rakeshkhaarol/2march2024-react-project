import React, { useState } from 'react';
import logo from '../../src/img/Screenshot2.png';
import { Link } from 'react-router-dom';

export default function Nevbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-#FFFFFF border p-0" onClick={toggleMenu}>
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#"><img src={logo} alt="Logo" className="navbar-brand m-0" style={{ height: '60px', marginRight: '5px' }} /></a>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className={` offcanvas offcanvas-end  ${isMenuOpen ? 'show' : ''}`}  style={{width:'50% !important'}}>
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" to={'/'}>Home</Link>
              <Link className="nav-link" to={'/about'}>about</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
   
    </>
  );
}
