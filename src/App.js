import React, { useState } from 'react';
import {
  FaArrowRight,
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaPhoneAlt,
  FaRocket
} from 'react-icons/fa';
import './App.css';

const profile = {
  brand: 'Estanislao Torres Campi',
  logoMain: 'DevBy',
  logoAccent: 'TorresCampi',
  name: 'Estanislao Torres Campi',
  role: 'Desarrollador Full Stack',
  headline: 'Creo paginas y aplicaciones que convierten ideas en resultados.',
  summary:
    'Ayudo a emprendedores y negocios a construir productos digitales rapidos, claros y con una identidad profesional.',
  availability: 'Disponible para nuevos proyectos',
  location: 'Argentina | Trabajo remoto',
  email: 'estanislaotorres@gmail.com',
  phone: '3814439055',
  cvUrl: 'https://drive.google.com/file/d/15DvleSERpeywyEBvw642kB4PTYCmVRFV/view?usp=drive_link'
};

const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mi' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
];

const stats = [
  { label: 'Proyectos web lanzados', value: '18+' },
  { label: 'Experiencia profesional', value: '3 anos' },
  { label: 'Tiempo de respuesta', value: '< 24h' }
];

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Java + Spring',
  'APIs REST',
  'PostgreSQL + MongoDB',
  'Git'
];

const inplanmexPages = [
  { label: 'INPLANMEX - Inicio', url: 'https://inplanmex.mx/index.html' },
  { label: 'Medicamentos', url: 'https://inplanmex.mx/medicamentos.html' },
  {
    label: 'Livingstone Lures',
    url: 'https://inplanmex.mx/livingstonelures.mx/index.html'
  },
  {
    label: 'Don Chelada',
    url: 'https://implanmex-paginas.s3.sa-east-1.amazonaws.com/doncheladamx.com/index.html'
  },
  {
    label: 'Obliphica',
    url: 'https://implanmex-paginas.s3.sa-east-1.amazonaws.com/obliphica.mx/index.html'
  },
  {
    label: 'Ritter',
    url: 'https://implanmex-paginas.s3.sa-east-1.amazonaws.com/ritter.com/index.html'
  }
];

const projects = [
  {
    id: 1,
    title: 'Diseno Web de inplanmex.mx',
    description:
      'Realice el diseno del sitio inplanmex.mx y de sus paginas vinculadas para marcas y unidades de negocio.',
    image:
      'https://res.cloudinary.com/dzaceww4a/image/upload/v1775507314/inplanmex_xxszcq.jpg',
    tags: ['Diseno Web', 'UI', 'Responsive'],
    result: 'Sitio principal + ecosistema completo de paginas publicadas',
    demo: 'https://inplanmex.mx',
    demoLabel: 'Ver sitio',
    pages: inplanmexPages
  },
  {
    id: 2,
    title: 'Hoster PMS',
    description:
      'Trabaje en el sistema Hoster PMS, colaborando en mejoras funcionales, interfaz y experiencia del producto.',
    image:
      'https://res.cloudinary.com/dzaceww4a/image/upload/v1775507450/hoster_b8qbfq.jpg',
    tags: ['Sistema SaaS', 'UI', 'Producto'],
    result: 'Participacion en evolutivos y mejoras de experiencia del sistema',
    repo: 'https://www.linkedin.com/company/hoster-pms/?viewAsMember=true',
    repoLabel: 'LinkedIn'
  }
];

const socialProfiles = [
  {
    name: 'GitHub',
    handle: '@torrescampi',
    url: 'https://github.com/torrescampi',
    icon: <FaGithub />,
    color: '#111827'
  },
  {
    name: 'LinkedIn',
    handle: '/in/estanislaotorrescampi',
    url: 'https://www.linkedin.com/in/estanislaotorrescampi/',
    icon: <FaLinkedin />,
    color: '#0a66c2'
  },
  {
    name: 'Hoster PMS',
    handle: 'Sistema donde trabaje',
    url: 'https://www.linkedin.com/company/hoster-pms/?viewAsMember=true',
    icon: <FaLinkedin />,
    color: '#0a66c2'
  },
  {
    name: 'Telefono',
    handle: profile.phone,
    url: `tel:${profile.phone}`,
    icon: <FaPhoneAlt />,
    color: '#0f766e'
  },
  {
    name: 'Email',
    handle: profile.email,
    url: `mailto:${profile.email}`,
    icon: <FaEnvelope />,
    color: '#be123c'
  }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="#inicio">
          {profile.logoMain}<span>{profile.logoAccent}</span>
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((prevState) => !prevState)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <ul>
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="inicio" className="section-block hero-section">
    <div className="container hero-grid">
      <div className="hero-copy fade-up">
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.headline}</h1>
        <p>
          {profile.summary}
        </p>

        <div className="hero-meta">
          <span className="meta-pill is-live">{profile.availability}</span>
          <span className="meta-pill">{profile.location}</span>
        </div>

        <div className="hero-actions">
          <a className="btn-primary" href="#proyectos">
            Ver proyectos <FaArrowRight />
          </a>
          <a className="btn-secondary" href={profile.cvUrl} target="_blank" rel="noreferrer">
            Descargar CV
          </a>
        </div>

        <ul className="hero-bullets">
          <li>
            <FaCode /> Arquitectura limpia y mantenible
          </li>
          <li>
            <FaLaptopCode /> Interfaces responsivas para mobile y desktop
          </li>
          <li>
            <FaRocket /> Enfoque en rendimiento y conversion
          </li>
        </ul>
      </div>

      <aside className="hero-card fade-up">
        <h2>Impacto en numeros</h2>
        <div className="stats-list">
          {stats.map((stat) => (
            <div className="stat-row" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
        <p className="hero-note">
          {profile.name} | {profile.role} | {profile.phone}
        </p>
      </aside>
    </div>
  </section>
);

const About = () => (
  <section id="sobre-mi" className="section-block">
    <div className="container">
      <div className="section-heading fade-up">
        <p className="eyebrow">Sobre mi</p>
        <h2>Conoce mi forma de trabajar</h2>
      </div>

      <div className="about-layout">
        <div className="about-image-wrap fade-up">
          <img
            src="https://res.cloudinary.com/dzaceww4a/image/upload/f_auto,q_auto/IMG-20251030-WA0088_h1sex1"
            alt="Retrato profesional"
          />
        </div>

        <div className="about-card fade-up">
          <h3>Hola, soy {profile.name}.</h3>
          <p>
            Trabajo proyectos web de punta a punta: idea, diseno, desarrollo y puesta en
            produccion. Mi objetivo es crear soluciones que se vean bien y funcionen mejor.
          </p>
          <p>
            Tambien trabaje en el sistema 
            {' '}
            <a
              className="inline-link"
              href="https://www.linkedin.com/company/hoster-pms/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
              Hoster PMS
            </a>
            , participando en mejoras funcionales y de experiencia para el producto.
          </p>
          <p>
            Priorizo velocidad, claridad y una comunicacion directa. En cada entrega me enfoco
            en impacto real: mas contactos, mejor experiencia de usuario y procesos mas simples.
          </p>

          <div className="skill-cloud">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="proyectos" className="section-block">
    <div className="container">
      <div className="section-heading fade-up">
        <p className="eyebrow">Portafolio</p>
        <h2>Trabajo reciente</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className="project-card"
            key={project.id}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <img className="project-thumb" src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <p className="project-result">Resultado: {project.result}</p>

              {project.pages && (
                <details className="project-subpages">
                  <summary>Ver links de paginas desarrolladas ({project.pages.length})</summary>
                  <ul>
                    {project.pages.map((page) => (
                      <li key={page.url}>
                        <a href={page.url} target="_blank" rel="noopener noreferrer">
                          {page.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="project-actions">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    {project.demoLabel || 'Ver demo'} <FaExternalLinkAlt />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    {project.repoLabel || 'Codigo'}{' '}
                    {project.repoLabel === 'LinkedIn' || project.repoLabel === 'Sitio principal' ? (
                      <FaExternalLinkAlt />
                    ) : (
                      <FaGithub />
                    )}
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const FORMSPREE_URL = 'https://formspree.io/f/mgopdwzn';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatusMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Completa todos los campos antes de enviar.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatusMessage('Escribe un correo valido.');
      return;
    }

    setIsLoading(true);

    fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setStatusMessage('Gracias por tu mensaje. Te respondere pronto.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatusMessage('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        }
      })
      .catch(() => {
        setStatusMessage('Error de conexion. Intenta de nuevo.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contacto" className="section-block">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="eyebrow">Contacto</p>
          <h2>Hablemos de tu proximo proyecto</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-panel fade-up">
            <h3>Canales directos</h3>
            <p>
              Si me compartes objetivo, plazos y tipo de proyecto, te respondo con una propuesta
              clara y los siguientes pasos para avanzar.
            </p>

            <div className="social-list">
              {socialProfiles.map((profile) => (
                <a
                  className="social-pill"
                  href={profile.url}
                  key={profile.name}
                  style={{ '--social-color': profile.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.icon}
                  <span className="social-name">{profile.name}</span>
                  <span className="social-handle">{profile.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-panel fade-up">
            <h3>Envia un mensaje</h3>

            <form className="form-grid" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo de contacto"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Que necesitas construir y para cuando?"
                rows="5"
              />
              <button className="btn-primary full-width" type="submit" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar mensaje'} <FaArrowRight />
              </button>
            </form>

            {statusMessage && <p className="form-feedback">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>
        © {new Date().getFullYear()} {profile.brand}. {profile.role}. Contacto: {profile.email} | {profile.phone}
      </p>
      <div className="footer-links">
        {navigation.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;