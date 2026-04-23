import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';
import '../styles/solutions.css';

const cards = [
  {
    id: 'web',
    icon: 'web',
    title: 'DESARROLLO WEB',
    text: 'Experiencias web de alto rendimiento construidas con las tecnologías más modernas como React y Next.js.',
    tags: ['React/Next.js', 'Node.js', 'Base de Datos'],
    className: 'card-web',
    motionType: 'leftWide',
    delay: 0.05,
  },
  {
    id: 'ux',
    icon: 'ux',
    title: 'DISEÑO UX/UI',
    text: 'Interfaces intuitivas y funcionales que facilitan la experiencia de tus usuarios.',
    tags: ['Figma', 'Adobe'],
    className: 'card-ux',
    motionType: 'upTall',
    delay: 0.24,
  },
  {
    id: 'ai',
    icon: 'ai',
    title: 'INTELIGENCIA ARTIFICIAL',
    text: 'Soluciones inteligentes para automatizar procesos y potenciar decisiones basadas en datos.',
    tags: ['Python', 'Análisis de Datos'],
    className: 'card-ai',
    motionType: 'upTall',
    delay: 0.34,
  },
  {
    id: 'custom',
    icon: 'layers',
    title: 'SISTEMAS A MEDIDA',
    text: 'Desarrollamos soluciones personalizadas que se adaptan exactamente a lo que tu negocio necesita.',
    tags: ['Estrategia', 'Arquitectura', 'Integración', 'Optimización'],
    className: 'card-custom',
    motionType: 'rightWide',
    delay: 0.16,
  },
  {
    id: 'db',
    icon: 'database',
    title: 'BASE DE DATOS',
    text: 'Implementamos estructuras seguras para proteger tu información.',
    tags: ['MySQL', 'PostgreSQL', 'MongoDB'],
    className: 'card-db',
    motionType: 'bottomCascade',
    delay: 0.45,
  },
  {
    id: 'security',
    icon: 'lock',
    title: 'SEGURIDAD DIGITAL',
    text: 'Blindamos tu presencia digital contra robos de datos y amenazas externas.',
    tags: ['Protección Web', 'Acceso Seguro', 'Anti-spoofing'],
    className: 'card-security',
    motionType: 'bottomCascade',
    delay: 0.58,
  },
  {
    id: 'maintenance',
    icon: 'tools',
    title: 'MANTENIMIENTO',
    text: 'Soporte técnico y mejoras continuas para mantener tu plataforma siempre activa.',
    tags: ['Soporte 24/7', 'Backup', 'Mejoras'],
    className: 'card-maintenance',
    motionType: 'bottomCascade',
    delay: 0.71,
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardMotion = {
  leftWide: {
    hidden: { opacity: 0, x: -90, y: 22, scale: 0.95, rotate: -1.5 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  rightWide: {
    hidden: { opacity: 0, x: 90, y: 22, scale: 0.95, rotate: 1.5 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  upTall: {
    hidden: { opacity: 0, y: 110, scale: 0.92 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
  bottomCascade: {
    hidden: { opacity: 0, y: 70, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  },
};

function ServiceIcon({ type }) {
  switch (type) {
    case 'web':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case 'ux':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <path d="M7 7l10 10M16.5 6.5l1 1a1.4 1.4 0 0 1 0 2L10 17l-4 1 1-4 7.5-7.5a1.4 1.4 0 0 1 2 0Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <path d="M12 4a6 6 0 0 1 6 6c0 2.2-1.1 3.9-2.6 5.1-.8.6-1.4 1.2-1.4 1.9h-4c0-.7-.6-1.3-1.4-1.9C7.1 13.9 6 12.2 6 10a6 6 0 0 1 6-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 20h4M9.5 17h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="10" r="1.3" fill="currentColor" />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <path d="M12 5 5 9l7 4 7-4-7-4Zm-7 7 7 4 7-4M5 15l7 4 7-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="6.5" ry="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5.5 6v6c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6M5.5 12v6c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <rect x="6.5" y="10.5" width="11" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 10.5V8.5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'tools':
      return (
        <svg viewBox="0 0 24 24" className="solution-svg" aria-hidden="true">
          <path d="M14 6a3 3 0 0 0 4 4l-7.5 7.5a1.4 1.4 0 1 1-2-2L16 8a3 3 0 0 0-2-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m5 6 4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function SolutionsSection() {
  return (
    <section className="solutions-section">
      <Container>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="section-label mb-2">NUESTRAS SOLUCIONES</p>
          <h2 className="section-title solutions-title mb-5">Soluciones de impacto</h2>
        </motion.div>

        <div className="solutions-grid">
          {cards.map((card) => (
            <motion.article
              key={card.id}
              custom={card.delay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={cardMotion[card.motionType]}
              whileHover={{
                scale: 1.028,
                y: -10,
                transition: {
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className={`solution-card ${card.className}`}
            >
              <div className="solution-card-inner">
                <motion.span
                  className="solution-icon"
                  aria-hidden="true"
                  whileHover={{ rotate: -8, scale: 1.12 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <ServiceIcon type={card.icon} />
                </motion.span>

                <div className="solution-content">
                  <h3 className="solution-title">{card.title}</h3>
                  <p className="solution-text">{card.text}</p>

                  <div className="solution-tags">
                    {card.tags.map((tag, index) => (
                      <motion.span
                        key={tag}
                        className="solution-tag"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: card.delay + 0.15 + index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          y: -2,
                          transition: { duration: 0.22 },
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;