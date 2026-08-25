import { useState } from 'react';
import type { FormEvent } from 'react';
import "./App.css";

function App() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="container navbar-content">
          <div className="logo">NovaWeb</div>

          <nav>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <a href="#contacto" className="nav-button">
            Contáctanos
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <span className="badge">Desarrollo web profesional</span>

              <h1>ESTA ES MI VERSIÓN DE PRUEBA XD</h1>

              <p>
                Creamos experiencias digitales modernas, rápidas y diseñadas
                para convertir visitantes en clientes.
              </p>

              <div className="hero-buttons">
                <a href="#contacto" className="primary-button">
                  Solicitar cotización
                </a>

                <a href="#servicios" className="secondary-button">
                  Ver servicios
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="card-content">
                <div className="fake-line large"></div>
                <div className="fake-line"></div>
                <div className="fake-line short"></div>

                <div className="fake-box">
                  <span>Tu negocio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">SERVICIOS</span>

              <h2>Todo lo que necesitas para tener presencia en Internet</h2>

              <p>Soluciones modernas para empresas y emprendedores.</p>
            </div>

            <div className="services">
              <article className="service-card">
                <div className="service-icon">01</div>
                <h3>Landing Pages</h3>
                <p>
                  Páginas diseñadas para presentar tus productos y convertir
                  visitantes en clientes.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">02</div>
                <h3>Sitios empresariales</h3>
                <p>
                  Sitios profesionales para empresas que quieren fortalecer su
                  presencia digital.
                </p>
              </article>

              <article className="service-card">
                <div className="service-icon">03</div>
                <h3>Aplicaciones web</h3>
                <p>
                  Sistemas web personalizados para automatizar procesos y
                  mejorar tu negocio.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="section section-dark">
          <div className="container about">
            <div>
              <span className="section-label">NOSOTROS</span>

              <h2>Tecnología enfocada en resultados</h2>
            </div>

            <p>
              Combinamos diseño, desarrollo y tecnología para crear experiencias
              digitales rápidas, modernas y fáciles de utilizar.
            </p>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="section contact">
          <div className="container contact-box">
            <div>
              <span className="section-label">CONTACTO</span>

              <h2>¿Tienes un proyecto en mente?</h2>

              <p>
                Cuéntanos qué necesitas y te ayudaremos a convertir tu idea en
                una solución digital.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={async (event: FormEvent<HTMLFormElement>) => {
                event.preventDefault();

                setSending(true);
                setSuccess(false);
                setError("");

                const form = event.currentTarget;
                const formData = new FormData(form);

                const data = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                };

                try {
                  const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  const result = await response.json();

                  if (!response.ok) {
                    throw new Error(
                      result.error || "No se pudo enviar el mensaje",
                    );
                  }

                  setSuccess(true);
                  form.reset();
                } catch (error) {
                  console.error(error);

                  setError(
                    error instanceof Error
                      ? error.message
                      : "Ocurrió un error al enviar el mensaje",
                  );
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Nombre</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="primary-button"
                disabled={sending}
              >
                {sending ? "Enviando..." : "Enviar mensaje"}
              </button>

              {success && (
                <p className="form-success">¡Mensaje enviado correctamente!</p>
              )}

              {error && <p className="form-error">{error}</p>}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <span>© 2026 NovaWeb</span>

          <span>Desarrollo web profesional</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
