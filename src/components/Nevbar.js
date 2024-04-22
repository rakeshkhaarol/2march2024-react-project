import React from 'react';
import logo from '../../src/img/Screenshot2.png';
import { Link } from 'react-router-dom';

export default function Nevbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-#FFFFFF border p-0">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#"><img src={logo} alt="Logo" className="navbar-brand m-0" style={{ height: '60px', marginRight: '5px' }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active" to={'/'}>Home</Link>
              <Link className="nav-link" to={'/about'}>about</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}
