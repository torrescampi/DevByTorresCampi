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
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from 'react-icons/fa';
import './App.css';

const profile = {
  brand: 'Estanislao Torres Campi',
  logoImage: '/logo.png',
  name: 'Estanislao Torres Campi',
  role: 'Desarrollador Full Stack',
  headline: 'Creo paginas y aplicaciones que convierten ideas en resultados.',
  summary:
    'Ayudo a emprendedores y negocios a construir productos digitales rapidos, claros y con una identidad profesional.',
  availability: 'Disponible para nuevos proyectos',
  location: 'Argentina | Trabajo remoto',
  email: 'estanislaotorres@gmail.com',
  phone: '543814439055',
  cvUrl: 'https://drive.google.com/file/d/15DvleSERpeywyEBvw642kB4PTYCmVRFV/view?usp=drive_link'
};

const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mi' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' }
];

const stats = [
  { label: 'Proyectos web lanzados', value: '21+' },
  { label: 'Experiencia profesional', value: '4 anos' },
  { label: 'Tiempo de respuesta', value: '< 24h' }
];

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'NestJS',
  'Next.js',
  'Java + Spring',
  'APIs REST',
  'PostgreSQL',
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
    title: 'Diseño Web de inplanmex.mx',
    description:
      'Realicé el diseño del sitio inplanmex.mx y de sus páginas vinculadas para marcas y unidades de negocio.',
    images: [
      './images/inplanmex1.png',
      './images/inplanmex2.png',
      './images/inplanmex3.png'
    ],
    tags: ['Diseño Web', 'UI', 'Responsive'],
    demo: 'https://inplanmex.mx',
    demoLabel: 'Ver sitio',
    pages: inplanmexPages
  },
  {
    id: 2,
    title: 'Hoster PMS',
    description:
      'Trabajé en el sistema Hoster PMS, colaborando en mejoras funcionales, interfaz y experiencia del producto.',
    images: [
      './images/hoster1.png',
      './images/hoster2.png',
      './images/hoster3.png',
      './images/hoster4.png',
      './images/hoster5.png',
      './images/hoster6.png'
    ],
    tags: ['Sistema SaaS', 'UI', 'Producto'],
    repo: 'https://www.linkedin.com/company/hoster-pms/?viewAsMember=true',
    repoLabel: 'LinkedIn'
  },
  {
    id: 3,
    title: 'Tu Tienda Online',
    description:
      'Desarrollo completo de tienda online con carrito de compras, panel de administración. Esta version trabaja con pedidos enviados a través de WhatsApp, con capacidad de integración de pasarela de pagos y sistema de gestión de productos y stock.',
    images: [
      './images/tutiendaonline1.png',
      './images/tutiendaonline2.png',
      './images/tutiendaonline3.png',
      './images/tutiendaonline4.png',
      './images/tutiendaonline5.png'
    ],
    tags: ['E‑commerce', 'React', 'Node.js'],
  },
  {
    id: 4,
    title: 'PdVenta - Punto de venta',
    description:
      'Sistema de punto de venta para comercios. Podes gestionar tus Productos, Usuarios, Ventas y Reportes en una interfaz clara y rápida, multi terminal, multiplataforma. Con capacidad de integración con lectora de codigos de barra e impresoras fiscales.',
    images: [
      './images/pdventa1.png',
      './images/pdventa2.png',
      './images/pdventa3.png',
      './images/pdventa4.png',
      './images/pdventa5.png'
    ],
    tags: ['Dashboard', 'React', 'Chart.js', 'API Rest'],
  }
];


// Componente Modal de proyecto (CORREGIDO)
const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cerrar con tecla ESC - Hook movido ANTES de cualquier condición
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevenir scroll del body cuando el modal está abierto
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Si no hay proyecto, no renderizar nada (pero los hooks ya se ejecutaron)
  if (!project) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Cerrar al hacer click fuera del contenido
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-gallery">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - ${currentImageIndex + 1}`}
              className="modal-main-image"
            />
            
            {project.images.length > 1 && (
              <>
                <button className="modal-nav prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button className="modal-nav next" onClick={nextImage}>
                  <FaChevronRight />
                </button>
              </>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="modal-thumbnails">
              {project.images.map((img, idx) => (
                <div 
                  key={idx}
                  className={`modal-thumb ${idx === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img src={img} alt={`Miniatura ${idx + 1}`} />
                </div>
              ))}
            </div>
          )}

          <div className="modal-info">
            <h4>Descripción</h4>
            <p>{project.longDescription || project.description}</p>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              flexWrap: 'wrap',
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--surface-strong)'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <strong style={{ marginRight: '0.5rem' }}>Tecnologías:</strong>
                {project.tags.map((tag) => (
                  <span key={tag} className="modal-tag">{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ 
                    color: 'var(--accent)', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    {project.demoLabel || 'Ver demo'} <FaExternalLinkAlt size={12} />
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ 
                    color: 'var(--accent-alt)', 
                    textDecoration: 'none', 
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    {project.repoLabel || 'Código'}
                    {project.repoLabel === 'LinkedIn' ? <FaExternalLinkAlt size={12} /> : <FaGithub size={12} />}
                  </a>
                )}
                {project.pages && project.pages.length > 0 && (
                  <span style={{ 
                    color: 'var(--text-soft)', 
                    fontSize: '0.9rem',
                    fontWeight: 500
                  }}>
                    +{project.pages.length} páginas
                  </span>
                )}
              </div>
            </div>

            {project.pages && (
              <details style={{ marginTop: '1rem' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--accent-alt)' }}>
                  Ver páginas desarrolladas ({project.pages.length})
                </summary>
                <ul style={{ marginTop: '0.8rem', paddingLeft: '1.2rem' }}>
                  {project.pages.map((page) => (
                    <li key={page.url}>
                      <a href={page.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                        {page.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    name: 'Teléfono',
    handle: profile.phone,
    url: `https://wa.me/${profile.phone}`,
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
          <img src={profile.logoImage} alt="Logo" className="logo-img" />
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menú"
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
        <h2 className="hero-name">{profile.name}</h2>
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.headline}</h1>
        <p>{profile.summary}</p>

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
          <li><FaCode /> Arquitectura limpia y mantenible</li>
          <li><FaLaptopCode /> Interfaces responsivas para móvil y desktop</li>
          <li><FaRocket /> Enfoque en rendimiento y conversión</li>
        </ul>
      </div>

      <aside className="hero-card fade-up">
        <h2>Impacto en números</h2>
        <div className="stats-list">
          {stats.map((stat) => (
            <div className="stat-row" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
        <p className="hero-note">{profile.name} | {profile.role}</p>
      </aside>
    </div>
  </section>
);

const About = () => (
  <section id="sobre-mi" className="section-block">
    <div className="container">
      <div className="section-heading fade-up">
        <p className="eyebrow">Sobre mí</p>
        <h2>Conoce mi forma de trabajar</h2>
      </div>

      <div className="about-layout">
        <div className="about-image-wrap fade-up">
          <img
            src="https://res.cloudinary.com/dzaceww4a/image/upload/v1775513508/IMG-20251030-WA0088_omov1s.jpg"
            alt="Retrato profesional"
          />
        </div>

        <div className="about-card fade-up">
          <h3>Hola, soy {profile.name}.</h3>
          <p>
            Trabajo proyectos web de punta a punta: idea, diseño, desarrollo y puesta en
            producción. Mi objetivo es crear soluciones que se vean bien y funcionen mejor.
          </p>
          <p>
            Entre mis proyectos coperativos esta{' '}
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
            Entre mis proyectos personales tengo un sistema de punto de venta para comercios, una tienda online y el diseño del sitio web de inplanmex.mx y sus páginas vinculadas para marcas y unidades de negocio.
          </p>
          <p>
            Priorizo velocidad, claridad y una comunicación directa. En cada entrega me enfoco
            en impacto real: más contactos, mejor experiencia de usuario y procesos más simples.
          </p>

          <div className="skill-cloud">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Componente de tarjeta de proyecto con click para abrir modal
const ProjectCard = ({ project, onOpenModal }) => {
  const [imgError, setImgError] = useState(false);
  const mainImage = project.images && project.images.length > 0 ? project.images[0] : null;

  return (
    <article className="project-card fade-up" onClick={() => onOpenModal(project)}>
      <div className="project-card-clickable">
        <div className="image-gallery" style={{ cursor: 'pointer' }}>
          <div className="gallery-container" style={{ aspectRatio: '16 / 10' }}>
            {mainImage && !imgError ? (
              <img 
                src={mainImage} 
                alt={project.title}
                className="gallery-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'var(--surface-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-soft)'
              }}>
                <FaCode size={48} />
              </div>
            )}
          </div>
        </div>

        <div className="project-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <ul className="project-tags">
            {project.tags.slice(0, 3).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div style={{ 
            marginTop: '1rem', 
            display: 'flex', 
            gap: '0.8rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            fontSize: '0.85rem'
          }}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>
                {project.demoLabel || 'Demo'}
              </a>
            )}
            {project.pages && project.pages.length > 0 && (
              <span style={{ color: 'var(--text-soft)' }}>
                +{project.pages.length} páginas
              </span>
            )}
            <div style={{ marginLeft: 'auto', color: 'var(--accent-alt)', fontWeight: 600 }}>
              Click para detalles →
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="proyectos" className="section-block">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="eyebrow">Portafolio</p>
          <h2>Trabajo reciente</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

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
      setStatusMessage('Escribe un correo válido.');
      return;
    }

    setIsLoading(true);

    fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          setStatusMessage('Gracias por tu mensaje. Te responderé pronto.');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatusMessage('Hubo un error al enviar el mensaje. Intenta de nuevo.');
        }
      })
      .catch(() => {
        setStatusMessage('Error de conexión. Intenta de nuevo.');
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
          <h2>Hablemos de tu próximo proyecto</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-panel fade-up">
            <h3>Canales directos</h3>
            <p>
              Si me compartes objetivo, plazos y tipo de proyecto, te respondo con una propuesta
              clara y los siguientes pasos para avanzar.
            </p>

            <div className="social-list">
              {socialProfiles.map((social) => (
                <a
                  className="social-pill"
                  href={social.url}
                  key={social.name}
                  style={{ '--social-color': social.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                  <span className="social-name">{social.name}</span>
                  <span className="social-handle">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-panel fade-up">
            <h3>Envía un mensaje</h3>

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
                placeholder="¿Qué necesitas construir y para cuándo?"
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
      <p>© {new Date().getFullYear()} {profile.brand}. {profile.role}.</p>
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