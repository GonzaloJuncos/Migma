import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/portfolio.css';

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <Container>
        <div className="portfolio-header">
          <div>
            <p className="section-label mb-2">Portfolio seleccionado</p>
            <h2 className="section-title portfolio-title">Explora nuestro trabajo</h2>
          </div>

          <div className="portfolio-arrows">
            <button className="portfolio-arrow">←</button>
            <button className="portfolio-arrow">→</button>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={6}>
            <article className="portfolio-card">
              <div className="portfolio-image-placeholder"></div>
              <div className="portfolio-info">
                <h3 className="portfolio-card-title">JOYERÍA RUBY</h3>
                <p className="portfolio-card-text">Experiencia de Compra Premium</p>
              </div>
            </article>
          </Col>

          <Col lg={6}>
            <article className="portfolio-card">
              <div className="portfolio-image-placeholder"></div>
              <div className="portfolio-info">
                <h3 className="portfolio-card-title">LABORATORIO CEDMTC</h3>
                <p className="portfolio-card-text">Software de Salud</p>
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PortfolioSection;