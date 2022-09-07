import { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class HeaderNav extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#221f1f" }}
      >
        <Container fluid>
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="logo"
              style={{ width: "100px", height: "55px" }}
            />
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/tv-shows">TV Shows</Link>
              <Nav.Link href="#movies">Movies</Nav.Link>
              <Nav.Link href="#recently-added">Recently added</Nav.Link>
              <Nav.Link href="#my-list">My List</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="text-white" href="#search">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link className="text-white" href="#kids">
                KIDS
              </Nav.Link>
              <Nav.Link className="text-white" href="#notifications">
                <i className="bi bi-bell-fill"></i>
              </Nav.Link>
              <Nav.Link className="text-white" href="#user">
                <i className="bi bi-person-fill"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderNav;
