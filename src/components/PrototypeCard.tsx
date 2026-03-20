import { Link } from "react-router-dom";
import type { PrototypeEntry } from "../data/prototypes";

type PrototypeCardProps = {
  prototype: PrototypeEntry;
};

export function PrototypeCard({ prototype }: PrototypeCardProps) {
  return (
    <article className="prototype-card">
      <div className="prototype-thumb">
        <img src={prototype.screenPath} alt={`${prototype.title} screenshot`} />
      </div>
      <div className="prototype-card-body">
        <div className="prototype-meta">
          <span>{prototype.categoryLabel}</span>
          <span>{prototype.versionLabel}</span>
          <span>{prototype.locale}</span>
        </div>
        <h3>{prototype.title}</h3>
        <p>{prototype.summary}</p>
        <div className="tag-row">
          {prototype.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <Link className="button button-primary" to={`/hub/prototype/${prototype.slug}`}>
            查看详情
          </Link>
          <a className="button button-secondary" href={prototype.htmlPath} target="_blank" rel="noreferrer">
            打开原始 HTML
          </a>
        </div>
      </div>
    </article>
  );
}
