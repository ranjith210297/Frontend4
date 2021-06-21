import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        navbar="dark"
        bg="success"
        text="light"

      >
        
       
        
        
        <Navbar.Brand href="/" style={{ paddingLeft: "20px", color: "#344034" }}>
          Cotton Leaf Disease Prediction
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ padding: "20px" }}>
          <Nav className="mr-auto">
            
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Predictor">
              <Nav.Link>Predictor</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Aboutus">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
        
  
      
    );
    
   
  }

}

export default BootstrapNavbar;
