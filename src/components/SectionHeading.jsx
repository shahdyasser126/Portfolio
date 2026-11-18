export default function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-meta"><span>{number}</span><span>{eyebrow}</span></div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}