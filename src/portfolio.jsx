import { useState, useEffect } from "react";



const services = [
  {
    icon: "ri-pen-nib-line",
    title: "UI/UX Design",
    desc: "Crafting intuitive wireframes, interactive prototypes, and pixel-perfect designs that reduce user drop-off and drive conversions.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: "Transforming polished designs into fast, responsive websites built with modern frameworks and clean, maintainable code.",
  },
  {
    icon: "ri-smartphone-line",
    title: "App Design",
    desc: "Designing mobile-first interfaces for iOS and Android that feel native, intuitive, and delightful to use.",
  },
];

const projects = [
       { image: "aktiv.png", 
        href: "",
            title: "Aktiv", 
            tag: "Actively learning"
          },
       { image: "awesmetodos.png",
          title: "AwesomeTodos", 
          tag: "Todos built using MERN" 
          },
       { image: "doclock.png",     
          title: "Doclock",       
          tag: "Fast to press, No more stress!" 
        },
      ];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="container">

      {/* ── HEADER ── */}
      <header className="header">
        <a href="#" className="logo">CAS.</a>

        <button
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`navbar${menuOpen ? " open" : ""}`}>
          {["Home","About","Services","Projects","Contacts"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={item === "Home" ? "active" : ""}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ── HOME ── */}
      <section className="home" id="home">
        <div className="home-detail">
          <h4>Hello, I am</h4>
          <h1>Casey Marie Lois Barrido</h1>
          <h2>UI/UX Design | Front-End Developer</h2>
          <p>
            I focus on intuitive, user-centered and clean front-end experiences.
            I enjoy turning complex problems into simple, accessible interfaces that
            feels natural to use.
          </p>
     <div className="download-social">
            <a 
              href="/Casey Marie Lois G. Barrido - CV.docx" 
              className="button" 
              download="Casey Marie Lois G. Barrido - CV.docx"
            >Download CV</a>
            <div className="social-icons">
              <a href="https://github.com/csymrls" aria-label="GitHub"><i className="ri-github-fill" /></a>
              <a href="https://www.linkedin.com/in/casey-barrido-613b60353/" aria-label="LinkedIn"><i className="ri-linkedin-box-fill" /></a>
              <a href="https://caseybarrido@gmail.com" aria-label="Email"><i className="ri-mail-fill" /></a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <div className="img-box">
            <img src="frmlphotot.png" alt="Casey Marie Lois" />
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about section-animated delay-1" id="about">
       
        <div className="about-img">
          <div className="img-glass">
            <img src="frmlphotot.png" alt="Casey Marie Lois" />
          </div>
        </div>

         <div className="about-content">
          <h2>About <span>Me</span></h2>
          <p>
            I'm an IT student of Western Institute of Technology specializing in
            UI/UX design and front-end development. I enjoy learning how people interact
            with digital products and applying that understanding to create interfaces
            that are both beautiful and practical.
          </p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services section-animated delay-2" id="services">
        <div className="service-detail">
          <h2>My Services</h2>
          <div className="services-grid">
            {services.map(({ icon, title, desc }) => (
              <div className="card" key={title}>
                <span className="icon"><i className={icon} /></span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="project section-animated delay-3" id="projects">
        <div className="project-content">
          <h2>Latest Projects</h2>
          <div className="projects-grid">
            {projects.map(({ image, title, tag }) => (
              <div
                key={title}
                className="project-item"
                style={{ backgroundImage: `url('${image}')` }}
              >
                <div className="overlay">
                  <h3>{title}</h3>
                  <p>{tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section className="contacts section-animated delay-4" id="contacts">
        <div className="contact">
          <h2>Get In Touch</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text"  placeholder="Your Name"    required />
            <input type="email" placeholder="Your Email"   required />
            <textarea           placeholder="Your Message" rows={5} />
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p className="footer__text">
          © 2026 Casey Marie Lois | UI/UX Designer | Front-End Developer
        </p>
      </footer>

    </div>
  );
}
