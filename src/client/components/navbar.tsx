import * as React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const navbar = () => {
	
	return (
					<div>
	<Navbar bg="dark" variant="dark" expand="sm">
  <Container>
    <Navbar.Brand href="#home">Chirper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Chirps</Nav.Link>
        <Nav.Link href="#link">Add Chirp</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
	);
};



export default navbar;
