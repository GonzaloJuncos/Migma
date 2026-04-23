import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

const teamMembers = [
  {
    name: "MATIAS LUCENA",
    role: "Fullstack Dev",
    image: "",
  },
  {
    name: "MICAELA MEDINA",
    role: "Fullstack & Cybersecurity",
    image: "",
  },
  {
    name: "GONZALO JUNCOS",
    role: "Fullstack Dev & Fundador",
    image: "",
  },
  {
    name: "MAIA LADTINA",
    role: "Diseño UX/UI",
    image: "",
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero__content">
            <div className="about-hero__text">
              <h1>
                EL EQUIPO DETRÁS
                <br />
                DE MIGMA
              </h1>

              <p>
                Creamos soluciones digitales que se adaptan a vos. Nos enfocamos
                en lo que realmente importa: diseñar experiencias simples,
                precisas y hechas para durar.
              </p>
            </div>

            <div className="about-hero__bg-word">
              <span>MIGMA</span>
              <span>MIGMA</span>
              <span>MIGMA</span>
            </div>
          </div>
        </section>

        <section className="about-concept">
          <div className="about-concept__title">
            <h2>01 / Concepto y Evolución</h2>
          </div>

          <div className="about-concept__text">
            <p>
              Migma nació después de nuestro paso por la universidad, como el
              resultado de una visión compartida entre compañeros que decidieron
              llevar sus ideas un paso más allá. Notamos que en el mundo digital
              muchas veces sobra complejidad y falta claridad, lo que nos unió
              para crear un espacio donde el orden fuera la prioridad.
            </p>

            <p>
              Lo que comenzó como una charla entre profesionales evolucionó en
              un estudio dedicado a construir productos con sentido. Hoy,
              combinamos nuestra experiencia en diseño y desarrollo para
              transformar ideas en estructuras sólidas, eficientes y, sobre
              todo, humanas.
            </p>
          </div>
        </section>

        <section className="about-team">
          <h2>02 / Mentes Creativas</h2>

          <div className="about-team__grid">
            {teamMembers.map((member, index) => (
              <article className="team-card" key={index}>
                <div className="team-card__image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : null}
                </div>

                <div className="team-card__info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}