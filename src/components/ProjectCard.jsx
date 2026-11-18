import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card project-card-${index + 1}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}>
      <div className="project-top"><span>{project.type}</span><span>{project.number}</span></div>
      <div className="project-visual" aria-hidden="true"><div className="visual-frame"><span>{project.number}</span><i>✳</i><b>{project.name.split(" ")[0]}</b></div></div>
      <div className="project-body">
        <h3>{project.name}</h3><p className="project-role">{project.role}</p>
        <p className="project-description">{project.description}</p>
        {project.contribution && <p className="project-contribution"><strong>My contribution:</strong> {project.contribution}</p>}
        <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <a className="project-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel}<ArrowUpRight size={16} /></a>
      </div>
    </motion.article>
  );
}