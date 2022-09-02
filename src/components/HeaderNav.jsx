import { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

class HeaderNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="/assets/logo.png" alt="logo" style={{width: '100px', height: '55px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tv-shows" className="active">TV Shows</Nav.Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#recently-added">Recently added</Nav.Link>
              <Nav.Link href="#my-list">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-white" href="#search"><i class="bi bi-search"></i></Nav.Link>
              <Nav.Link className="text-white" href="#kids">KIDS</Nav.Link>
              <Nav.Link className="text-white" href="#notifications"><i class="bi bi-bell-fill"></i></Nav.Link>
              <Nav.Link className="text-white" href="#user"><i class="bi bi-person-fill"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderNav;
