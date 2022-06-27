import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/logo.png"

const NavBar = () => {
  return (
    // <div className='navbarMain'>
    //     <span>FirmName</span>
    //     <ul>
    //         <li>Home</li>
    //         <li>Services</li>
    //         <li>Pricing</li>
    //         <li>Testimonials</li>
    //     </ul>
    // </div>
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" className="navbarMain">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
            <Nav.Link href="/">Testimonials</Nav.Link>
            <Nav.Link href="/">Blogs</Nav.Link>
            <Button style={{backgroundColor:"#41b4ee", borderColor:"#41b4ee", fontWeight:"bold"}}>Free Trial</Button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar