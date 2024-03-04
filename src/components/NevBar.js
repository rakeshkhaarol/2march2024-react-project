import React from 'react'
import {  Container,  Nav,  Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NevBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><Link to={'/'}>Home</Link></Nav.Link>
              <Nav.Link href="#action1"><Link to={'/create'}>Create</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to={'/update'}>Update</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to={'/list'}>List</Link></Nav.Link>
              <Nav.Link href="#action2"><Link to={'/search'}>Search</Link></Nav.Link>
              
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
