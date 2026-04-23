import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import logo from '../image/migma-logo.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="footer-row gy-5">
          <Col lg={3} md={6}>
            <div className="footer-logo-wrap">
              <NavLink to="/" className="footer-logo-link">
                <img src={logo} alt="Migma logo" className="footer-logo-img" />
              </NavLink>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <p className="footer-title">SERVICIOS</p>
            <div className="footer-links">
              <NavLink to="/servicios">Desarrollo Web</NavLink>
              <NavLink to="/servicios">Diseño UX/UI</NavLink>
              <NavLink to="/servicios">Sistemas a medida</NavLink>
              <NavLink to="/servicios">Ciberseguridad</NavLink>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <p className="footer-title">EXPLORAR</p>
            <div className="footer-links">
              <NavLink to="/">Inicio</NavLink>
             <NavLink to="/sobre-nosotros">Sobre Nosotros</NavLink>
              <NavLink to="/proyectos">Proyectos</NavLink>
              <NavLink to="/servicios">Servicios</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <p className="footer-title">DISPONIBILIDAD</p>
            <div className="footer-links footer-info">
              <span className="footer-status">
                <span className="status-dot"></span>
                 ● Disponible
              </span>
              <span>Respuesta rápida</span>
              <a href="mailto:team.migma@gmail.com">team.migma@gmail.com</a>
              <span>Tucumán, AR</span>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <div className="footer-bottom__left">
            <span>© 2026 MIGMA. Todos los derechos reservados.</span>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;