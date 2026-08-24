import './App.css';

function App() {
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
              <span className="badge">
                Desarrollo web profesional
              </span>

              <h1>
                Creamos páginas web que ayudan a hacer crecer tu negocio
              </h1>

              <p>
                Diseñamos sitios web modernos, rápidos y adaptados a
                cualquier dispositivo para ayudarte a conseguir más clientes.
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

              <h2>
                Todo lo que necesitas para tener presencia en Internet
              </h2>

              <p>
                Soluciones modernas para empresas y emprendedores.
              </p>
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
                  Sitios profesionales para empresas que quieren fortalecer
                  su presencia digital.
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

              <h2>
                Tecnología enfocada en resultados
              </h2>
            </div>

            <p>
              Combinamos diseño, desarrollo y tecnología para crear
              experiencias digitales rápidas, modernas y fáciles de utilizar.
            </p>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="section contact">
          <div className="container contact-box">
            <div>
              <span className="section-label">CONTACTO</span>

              <h2>
                ¿Tienes un proyecto en mente?
              </h2>

              <p>
                Cuéntanos qué necesitas y te ayudaremos a convertir tu idea
                en una solución digital.
              </p>
            </div>

            <a
              href="mailto:contacto@novaweb.com"
              className="primary-button"
            >
              Solicitar cotización
            </a>
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