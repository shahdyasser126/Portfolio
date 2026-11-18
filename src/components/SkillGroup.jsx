import { ArrowUpRight } from "lucide-react";

export default function SkillGroup({ group }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top"><span className="skill-symbol">✳</span><ArrowUpRight size={17} /></div>
      <h3>{group.title}</h3><p>{group.subtitle}</p>
      <div className="skill-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
    </article>
  );
}