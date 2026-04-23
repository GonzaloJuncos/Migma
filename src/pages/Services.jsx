import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/services.css";

const services = [
  {
    id: "ux",
    title: "Diseño UX/UI & Producto",
    description:
      "Creamos interfaces intuitivas que conectan con el usuario. Diseñamos experiencias fluidas desde la estrategia hasta el prototipado final.",
    icon: "🛠",
    layout: "text-left",
    visual: "grid-ui",
  },
  {
    id: "fullstack",
    title: "Desarrollo Fullstack",
    description:
      "Construimos productos digitales completos con código limpio y eficiente. Soluciones escalables que integran diseño y funcionalidad en flujo real.",
    icon: "</>",
    layout: "text-right",
    visual: "code-window",
  },
  {
    id: "data",
    title: "Arquitectura de Datos",
    description:
      "Gestionamos estructuras complejas para un rendimiento óptimo. Lógica de sistemas diseñada para manejar información con máxima precisión.",
    icon: "◫",
    layout: "text-left",
    visual: "diagram-flow",
  },
  {
    id: "security",
    title: "Seguridad Digital",
    description:
      "Protegemos la integridad de tu ecosistema tecnológico. Implementamos protocolos avanzados para asegurar una plataforma confiable y segura.",
    icon: "🛡",
    layout: "text-right",
    visual: "security-panel",
  },
];

function Services() {
  return (
    <>
      <NavbarComponent />

      <main className="services-page">
        <section className="services-hero">
          <div className="services-container">
            <div className="services-hero__top">
              <div className="services-hero__title fade-up">
                <h1>
                  EVOLUCIÓN EN
                  <br />
                  CADA
                  <br />
                  DESPLIEGUE
                </h1>
              </div>

              <div className="services-hero__description fade-up delay-1">
                <div className="services-hero__line"></div>
                <p>
                  Fusionamos diseño de experiencia con un desarrollo sólido.
                  Creamos soluciones digitales ágiles, precisas y diseñadas para
                  evolucionar.
                </p>
              </div>
            </div>

            <div className="services-heading fade-up delay-2">
              <h2>Servicios</h2>
            </div>
          </div>
        </section>

        <section className="services-list">
          <div className="services-container">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-row ${
                  service.layout === "text-right" ? "reverse" : ""
                } fade-up`}
                style={{ animationDelay: `${0.2 + index * 0.12}s` }}
              >
                <div className="service-text">
                  <div className="service-line-wrap">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-line"></div>
                    <div className="service-dot"></div>
                  </div>

                  <div className="service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>

                <div className="service-visual">
                  {service.visual === "grid-ui" && (
                    <div className="visual-card visual-grid-ui">
                      <div className="browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="grid-overlay"></div>
                      <div className="ui-window">
                        <div className="ui-bar"></div>
                        <div className="ui-main">
                          <div className="ui-square big"></div>
                          <div className="ui-square"></div>
                          <div className="ui-square"></div>
                          <div className="ui-square"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.visual === "code-window" && (
                    <div className="visual-card visual-code-window">
                      <div className="code-frame">
                        <p>service API = {'{'}PATH: BUILD + TRANSFORM{'}'}</p>
                        <p>const NAME_ENGINE = getLogicCore("MIGMA_ENGINE");</p>
                        <p>app.run(process(load.architecture))</p>
                        <p>system.render(interface review)</p>
                        <p>{"<module>"}</p>
                        <p>MULTISTACK READY → 100%</p>
                        <p>SCALABILITY_WRAPPER: OK</p>
                      </div>
                      <span className="live-badge">● Live Engine</span>
                    </div>
                  )}

                  {service.visual === "diagram-flow" && (
                    <div className="visual-card visual-diagram-flow">
                      <div className="diagram-box center-box">
                        CORE. ORCHESTRATION
                      </div>
                      <div className="diagram-node node-a">DB. CACHE. 01</div>
                      <div className="diagram-node node-b">LOGIC FLOW. 02</div>
                      <div className="diagram-node node-c">SYNC LAYER. 03</div>
                      <div className="diagram-node node-d">DATA ROUTER. 04</div>
                      <div className="diagram-line line-a"></div>
                      <div className="diagram-line line-b"></div>
                      <div className="diagram-line line-c"></div>
                      <div className="diagram-line line-d"></div>
                    </div>
                  )}

                  {service.visual === "security-panel" && (
                    <div className="visual-card visual-security-panel">
                      <div className="security-header">
                        <span>ENCRYPTION ACTIVE v3 | PROTOCOL X</span>
                        <span>•••</span>
                      </div>
                      <div className="security-body">
                        <div className="shield-icon">🔒</div>
                        <div className="security-value">99.9%</div>
                        <div className="security-label">UPTIME SECURED</div>
                      </div>
                      <div className="security-footer">
                        ZERO-RISK INTEGRITY BY MIGMA CORE
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="services-cta fade-up">
          <div className="services-cta__box">
            <h2>¿Desplegamos tu próximo sistema?</h2>
            <p>
              Llevamos tu producto al siguiente nivel de sofisticación técnica y
              visual.
            </p>

            <div className="services-cta__actions">
  
              <Link to="/contacto">
              <button className="cta-btn cta-btn--filled">
                Contratar Servicios
              </button>
               </Link>

                <Link to="/proyectos">
               <button className="cta-btn cta-btn--outline">
                Ver Proyectos
               </button>
                </Link>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;