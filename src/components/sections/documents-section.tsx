import { documents } from "@/data/documents";
import { Icon } from "@/components/ui/icon";

export function DocumentsSection() {
  return (
    <section className="documents-section page-shell" id="documents" aria-labelledby="documents-title">
      <div className="section-intro">
        <span className="eyebrow"><Icon name="briefcase" /> 02 / Document library</span>
        <h2 id="documents-title">The details, ready when you need them.</h2>
        <p>Download a concise record of my experience, qualifications, and academic progress.</p>
      </div>
      <ul className="document-list">
        {documents.map((document, index) => (
          <li className="document-card" key={document.href}>
            <span className="document-card__number">0{index + 1}</span>
            <div className="document-card__content">
              <span className="document-card__format">{document.format}</span>
              <h3>{document.title}</h3>
              <p>{document.description}</p>
            </div>
            <a className="document-card__download" href={document.href} download>
              Download <Icon name="download" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
