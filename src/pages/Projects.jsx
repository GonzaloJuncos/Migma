import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/projects.css";

const projects = [
  {
    id: "001",
    tags: ["Python", "AI"],
    title: "Nombre de Proyecto",
    description: "Descripción del proyecto",
    image: "",
  },
  {
    id: "002",
    tags: ["Python", "AI"],
    title: "Nombre de Proyecto",
    description: "Descripción del proyecto",
    image: "",
  },
  {
    id: "003",
    tags: ["Python", "AI"],
    title: "Nombre de Proyecto",
    description: "Descripción del proyecto",
    image: "",
  },
  {
    id: "004",
    tags: ["Python", "AI"],
    title: "Nombre de Proyecto",
    description: "Descripción del proyecto",
    image: "",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      <main className="projects-page">
        <section className="projects-hero">
          <div className="container">
            <div className="projects-hero__content">
              <h1>SISTEMAS LOGRADOS</h1>
              <p>
                Creamos soluciones digitales que se adaptan a vos. Nos
                enfocamos en lo que realmente importa: diseñar experiencias
                simples, precisas y hechas para durar.
              </p>

              <div className="projects-hero__arrow">
                <span>⌄</span>
                <span>⌄</span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-grid-section">
          <div className="container">
            <div className="row g-4">
              {projects.map((project, index) => (
                <div className="col-12 col-md-6" key={project.id}>
                  <article
                    className="project-card fade-up"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="project-card__top">
                      <span className="project-card__number">{project.id}</span>

                      <div className="project-card__tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-card__image">
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : null}
                    </div>

                    <div className="project-card__body">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>

                    <button className="project-card__link">
                      VER DETALLES
                      <span className="arrow">→</span>
                    </button>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}