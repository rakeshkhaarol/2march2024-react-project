import React from 'react'
import {  Container,  Nav,  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NevBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary drop">
        <Container fluid>
          <Navbar.Brand href="/">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to={'/'} style={{ marginRight:'20px' }}>Home</Link>
              <Link to={'/create'} style={{ marginRight:'20px' }}>Create</Link>
              <Link to={'/update'} style={{ marginRight:'20px' }}>Update</Link>
              <Link to={'/list'} style={{ marginRight:'20px' }}>List</Link>
              <Link to={'/search'} style={{ marginRight:'20px' }}> Search</Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      



      {/* <nav>
        <Link to={'/'}>Home page</Link>
        <ul>
          <li>
            <Link to={'/create'}>RestaurantCreate</Link>
          </li>
          <li>
            <Link to={'/update'}>RestaurantUpdate</Link>
          </li>
          <li>
            <Link to={'/detail'}>RestaurantDetail</Link>
          </li>
          <li>
            <Link to={'/list'}>RestaurantList</Link>
          </li>
          <li>
            <Link to={'/search'}>RestaurantSearch</Link>
          </li>

        </ul>
      </nav> */}
    </>
  )
}
