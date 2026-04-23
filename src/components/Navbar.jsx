import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../image/migma-logo.png';
import '../styles/navbar.css';

function NavbarComponent() {
  return (
    <Navbar fixed="top" className="navbar-custom">
      <Container className="navbar-wrapper position-relative d-flex align-items-center justify-content-between">
        <Navbar.Brand as={NavLink} to="/" className="navbar-logo m-0 p-0">
          <img src={logo} alt="Migma logo" />
        </Navbar.Brand>

        <Nav className="nav-centered">
          <Nav.Link as={NavLink} to="/sobre-nosotros" className="nav-item-custom">
            Sobre Nosotros
          </Nav.Link>
          <Nav.Link as={NavLink} to="/proyectos" className="nav-item-custom">
            Proyectos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/servicios" className="nav-item-custom">
            Servicios
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contacto" className="nav-item-custom">
            Contacto
          </Nav.Link>
        </Nav>

        <div className="navbar-spacer"></div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;