import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/process.css';

const steps = [
  {
    number: '01',
    title: 'DESCUBRIMIENTO',
    text: 'Analizamos el ADN de tu negocio para identificar oportunidades clave y trazar una base técnica alineada con tus objetivos reales.',
    icon: '⌕',
  },
  {
    number: '02',
    title: 'DISEÑO Y ESTRATEGIA',
    text: 'Diseñamos experiencias digitales de alta fidelidad y definimos la infraestructura técnica sólida que dará vida a tu proyecto.',
    icon: '⍟',
  },
  {
    number: '03',
    title: 'DESARROLLO',
    text: 'Materializamos la solución mediante código limpio y escalable. Aplicamos estándares de alto rendimiento para asegurar una ejecución precisa.',
    icon: '</>',
  },
  {
    number: '04',
    title: 'LANZAMIENTO Y OPTIMIZACIÓN',
    text: 'Lanzamos tu producto al mercado con monitoreo constante, garantizando que crezca y evolucione a la par de tus usuarios.',
    icon: '✦',
  },
];

function ProcessSection() {
  return (
    <section className="process-section">
      <Container>
        <p className="section-label mb-2">Metodología MIGMA</p>
        <h2 className="section-title mb-5">De la visión a la ejecución</h2>

        <Row className="g-0 process-grid">
          {steps.map((step) => (
            <Col lg={3} md={6} key={step.number}>
              <article className="process-card">
                <div className="process-icon">{step.icon}</div>
                <div className="process-number">{step.number}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProcessSection;