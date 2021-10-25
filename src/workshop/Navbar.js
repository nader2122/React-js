import React from 'react'
import { Nav , NavDropdown , Navbar , Container } from 'react-bootstrap';

const NavbarVars = () => {
    return (
        <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" style={{color:'yellow'}}>React-Project</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"><i className="fas fa-home"> Home</i></Nav.Link>
      
      
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">First</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Second</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Third</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Fourth</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><i className="fas fa-user">    Profil   </i></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>   
        </div>
    )
}

export default NavbarVars
