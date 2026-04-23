import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-glow"></div>

      <Container>
        <div className="hero-content">
          <span className="hero-kicker">● Estudio digital</span>

          <h1 className="hero-title">
            Evolucionamos
            <br />
            tu visión hacia el
            <br />
            <span className="hero-highlight">mundo digital</span>
          </h1>

          <p className="hero-description">
            Estrategia, diseño e inteligencia artificial al servicio de
            productos digitales que trascienden.
          </p>

          <Button as={Link} to="/contacto" className="hero-btn">
           Iniciá la evolución <span className="hero-btn-arrow">→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;