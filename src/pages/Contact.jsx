import { useState } from "react";
import emailjs from "emailjs-com";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6inn3o4",
        "template_l4zjbxb",
        formData,
        "l6bILX3_ZnuIyELS1"
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          setFormData({
            name: "",
            company: "",
            email: "",
            details: "",
          });
        },
        (error) => {
          console.error("Error al enviar:", error);
          alert("Hubo un error al enviar el mensaje");
        }
      );
  };

  return (
    <>
      <NavbarComponent />

      <main className="contact-page">
        <section className="contact-hero-section">
          <div className="contact-container">
            <div className="contact-layout">
              <div className="contact-left fade-up">
                <div className="contact-kicker">
                  <span className="contact-kicker-dot"></span>
                  <span>PUNTO DE CONTACTO</span>
                </div>

                <h1 className="contact-title">
                  Hablemos
                  <br />
                  de tu
                  <br />
                  <span>próximo</span>
                  <br />
                  desafío
                </h1>

                <div className="contact-info">
                  <div className="contact-info-block">
                    <h3>EMAIL DE CONTACTO</h3>
                    <a href="mailto:team.migma@gmail.com">
                      team.migma@gmail.com
                    </a>
                  </div>

                  <div className="contact-info-block">
                    <h3>CANALES DIGITALES</h3>

                    <div className="contact-channels">
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        GitHub
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        Instagram
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        LinkedIn
                      </a>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-block">
                    <h3>UBICACION</h3>
                    <p>Tucumán, Argentina</p>
                  </div>
                </div>
              </div>

              <div className="contact-right fade-up delay-1">
                <div className="contact-panel">
                  <div className="contact-panel__topbar">
                    <div className="topbar-dots">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>

                    <div className="topbar-title">CONNETION_MIGMA</div>
                    <div className="topbar-version">v2.4.0</div>
                  </div>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">01. NOMBRE COMPLETO</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Escribe aquí . . . ."
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">02. EMPRESA/ENTIDAD</label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Introduce identidad . . . ."
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">03. DIRECCION DE CORREO</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Email@dominio.com . . . ."
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="details">04. DETALLES DEL DESAFIO</label>
                      <textarea
                        id="details"
                        rows="3"
                        placeholder="Contanos brevemente qué tenés en mente..."
                        value={formData.details}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="contact-submit">
                      EJECUTAR ENVÍO
                      <span>→</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;