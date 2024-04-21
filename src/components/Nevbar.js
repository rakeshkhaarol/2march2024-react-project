import React from 'react'
import logo from '../../src/img/Screenshot2.png'; 

export default function Nevbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-#FFFFFF border p-0" >
        <div className="container-fluid">
        
          <a className="navbar-brand fs-2" href="#"><img src={logo} alt="Logo" className="navbar-brand m-0" style={{ height: '60px', marginRight: '5px' }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup me-0">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav >


    </>
  )
}
