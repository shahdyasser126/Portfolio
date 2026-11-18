
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Server,
  Terminal,
  Layers3,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

import { profile } from "./data/portfolio";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { Reveal } from "./components/Reveal";

const sectionIds = ["about", "experience", "projects", "skills", "contact"];

const experiences = [
  {
    company: "Darwish & Co",
    role: "Software Development Trainee",
    date: "SEP 2026 — PRESENT",
    project: "SANAD · AUDEX",
    description:
      "Working across software development tasks, contributing to application interfaces and backend implementation.",
    tags: ["React.js", "JavaScript", "Software Development"],
  },
  {
    company: "Digital Fortress",
    role: "Software Development Trainee",
    date: "OCT — NOV 2026",
    project: "IMPERSONAGUARD",
    description:
      "Contributed to the development of a web application, building and implementing reusable interface components.",
    tags: ["React.js", "Frontend Development", "Git"],
  },
  {
    company: "Digilians · MCIT & Egyptian Military Academy",
    role: "Software Development Trainee",
    date: "DEC 2025 — PRESENT",
    project: "SOFTWARE DEVELOPMENT PROGRAM",
    description:
      "Developing practical software engineering skills and working with modern web development technologies.",
    tags: ["MERN Stack", "JavaScript", "Web Development"],
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "Building the experience",
    icon: Code2,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend Development",
    subtitle: "Building the logic",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    subtitle: "Working with data",
    icon: Database,
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Tools & Workflow",
    subtitle: "Building together",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "API Integration"],
  },
];

function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-content">
        <motion.div
          className="hero-intro-label"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="availability-dot" />
          SOFTWARE DEVELOPER <span className="label-divider">/</span> EGYPT
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Turning ideas
          <br />
          into <span className="gradient-text">digital</span>
          <br />
          experiences<span className="accent">.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm <strong>Shahd Elkelany</strong>, a Full-Stack Developer passionate
          about building complete web applications — from intuitive user
          interfaces to reliable backend systems.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#projects" className="button button-primary">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="button button-ghost">
            Let's connect <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92, x: 25 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="visual-orbit orbit-a" />
        <div className="visual-orbit orbit-b" />

        <div className="code-window">
          <div className="window-top">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.js</span>
            <span className="window-menu">•••</span>
          </div>

          <div className="code-content">
            <div className="code-line">
              <span className="line-number">01</span>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </div>
            <div className="code-line indent">
              <span className="line-number">02</span>
              <span className="code-key">name</span>:{" "}
              <span className="code-green">"Shahd"</span>,
            </div>
            <div className="code-line indent">
              <span className="line-number">03</span>
              <span className="code-key">role</span>:{" "}
              <span className="code-green">"Full-Stack"</span>,
            </div>
            <div className="code-line indent">
              <span className="line-number">04</span>
              <span className="code-key">frontend</span>: [
            </div>
            <div className="code-line indent double">
              <span className="line-number">05</span>
              <span className="code-orange">"React"</span>,
            </div>
            <div className="code-line indent double">
              <span className="line-number">06</span>
              <span className="code-orange">"JavaScript"</span>
            </div>
            <div className="code-line indent">
              <span className="line-number">07</span>],
            </div>
            <div className="code-line indent">
              <span className="line-number">08</span>
              <span className="code-key">backend</span>: [
            </div>
            <div className="code-line indent double">
              <span className="line-number">09</span>
              <span className="code-orange">"Node.js"</span>,
            </div>
            <div className="code-line indent double">
              <span className="line-number">10</span>
              <span className="code-orange">"Express"</span>
            </div>
            <div className="code-line indent">
              <span className="line-number">11</span>],
            </div>
            <div className="code-line indent">
              <span className="line-number">12</span>
              <span className="code-key">database</span>:{" "}
              <span className="code-green">"MongoDB"</span>
            </div>
            <div className="code-line">
              <span className="line-number">13</span>
              {"}"};
            </div>
            <div className="code-line code-comment">
              <span className="line-number">14</span>
              // always learning, always building.
            </div>
          </div>
          <div className="window-footer">
            <span><span className="terminal-dot" /> SYSTEM READY</span>
            <span>UTF-8</span>
          </div>
        </div>

        <div className="floating-chip chip-top">
          <Code2 size={15} /> Frontend
        </div>
        <div className="floating-chip chip-bottom">
          <Database size={15} /> Backend & Data
        </div>
        <div className="visual-star"><Sparkles size={22} /></div>
      </motion.div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-track"><i /></span>
        <span>01 — 05</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section wrap" id="about">
      <Reveal>
        <div className="section-topline">
          <span>01 / ABOUT</span>
          <span className="topline-rule" />
          <span>A LITTLE ABOUT ME</span>
        </div>

        <div className="about-heading">
          <h2>
            Curious mind.
            <br />
            <span className="gradient-text">Builder's mindset.</span>
          </h2>
          <p>
            I enjoy understanding how things work — and bringing the different
            parts of an application together to create something useful.
          </p>
        </div>
      </Reveal>

      <div className="about-bento">
        <Reveal className="about-main-card">
          <span className="card-index">01 — THE PERSON</span>
          <h3>Hi, I'm Shahd.</h3>
          <p>
            I'm a Computer and Information Science graduate from Tanta
            University. I work on building web applications across the
            frontend and backend, and I enjoy turning ideas into practical
            digital products.
          </p>
          <p>
            I value clean code, thoughtful problem-solving, collaboration, and
            continuous learning through real projects.
          </p>
          <div className="about-signature">Shahd Elkelany<span>.</span></div>
        </Reveal>

        <Reveal className="about-education-card" delay={0.1}>
          <div className="bento-icon"><GraduationCap size={21} /></div>
          <span className="card-index">02 — EDUCATION</span>
          <h3>Tanta University</h3>
          <p>Computer and Information Science</p>
          <div className="education-bottom">
            <span>2021 — 2025</span>
            <strong>Very Good · 3.28/4</strong>
          </div>
        </Reveal>

        <Reveal className="about-focus-card" delay={0.16}>
          <div className="bento-icon"><Layers3 size={21} /></div>
          <span className="card-index">03 — MY APPROACH</span>
          <h3>From interface to infrastructure.</h3>
          <p>
            Connecting frontend experiences with backend logic, APIs, and
            databases.
          </p>
          <div className="focus-tags">
            <span>Frontend</span>
            <span>Backend</span>
            <span>Database</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-topline">
            <span>02 / EXPERIENCE</span>
            <span className="topline-rule" />
            <span>MY JOURNEY</span>
          </div>
          <div className="section-heading-row">
            <h2>
              Learning by
              <br />
              <span className="gradient-text">doing the work.</span>
            </h2>
            <p>
              Every project and training experience is another step in
              developing my skills as a software developer.
            </p>
          </div>
        </Reveal>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="experience-item">
                <div className="experience-number">0{index + 1}</div>
                <div className="experience-date">{item.date}</div>
                <div className="experience-details">
                  <div className="experience-title-row">
                    <div>
                      <h3>{item.company}</h3>
                      <span>{item.role}</span>
                    </div>
                    <BriefcaseBusiness size={21} />
                  </div>
                  <span className="experience-project">{item.project}</span>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section wrap" id="projects">
      <Reveal>
        <div className="section-topline">
          <span>03 / PROJECTS</span>
          <span className="topline-rule" />
          <span>SELECTED WORK</span>
        </div>
        <div className="section-heading-row">
          <h2>
            Things I've
            <br />
            <span className="gradient-text">built & contributed to.</span>
          </h2>
          <p>
            A selection of projects that reflect my experience, technical
            interests, and approach to solving problems.
          </p>
        </div>
      </Reveal>

      <div className="projects-grid">
        {profile.projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="wrap">
        <Reveal>
          <div className="section-topline">
            <span>04 / TOOLKIT</span>
            <span className="topline-rule" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <div className="section-heading-row">
            <h2>
              The tools behind
              <br />
              <span className="gradient-text">what I build.</span>
            </h2>
            <p>
              Technologies I use to build interfaces, develop server-side
              functionality, and work with application data.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.07}>
                <article className="skill-card">
                  <div className="skill-card-top">
                    <div className="skill-icon"><Icon size={21} /></div>
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.subtitle}</p>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section wrap contact-section" id="contact">
      <Reveal>
        <div className="section-topline">
          <span>05 / CONTACT</span>
          <span className="topline-rule" />
          <span>LET'S TALK</span>
        </div>

        <div className="contact-content">
          <div>
            <span className="contact-kicker">HAVE AN IDEA IN MIND?</span>
            <h2>
              Let's build
              <br />
              something <span className="gradient-text">great.</span>
            </h2>
            <p>
              Interested in working together, discussing an opportunity, or
              simply talking about technology? My inbox is always open.
            </p>
          </div>

          <div className="contact-card">
            <span className="card-index">GET IN TOUCH</span>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={20} />
            </a>
            <span className="contact-phone">{profile.phone}</span>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub <ArrowUpRight size={15} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} />
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} /> Email <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="footer">
        <a href="#home" className="footer-brand">shahd<span>.</span></a>
        <span>Designed & built with care · Egypt</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar sections={sectionIds} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
