import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Header = () => {

    const language= useSelector((state)=>state.language.lang)
return (
  <>
    <Navbar bg="dark" expand="lg">
      
        <Navbar.Brand href="#home"  style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Home</Link>
            <Link to="/about" className="mx-3" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>About us</Link>
            <Link to="/contact" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Contact us</Link>
            <Link to="/products" className="mx-3" style={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>Products</Link>
            <h3>{language}</h3>
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
  </>
);
};

export default Header;