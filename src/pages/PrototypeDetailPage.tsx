import { Navigate, useParams } from "react-router-dom";
import { getPrototypeBySlug } from "../data/prototypes";

export function PrototypeDetailPage() {
  const { prototypeSlug } = useParams();

  if (!prototypeSlug) {
    return <Navigate to="/hub" replace />;
  }

  const prototype = getPrototypeBySlug(prototypeSlug);

  if (!prototype) {
    return <Navigate to="/hub" replace />;
  }

  return (
    <div className="stack-lg">
      <section className="panel stack-md">
        <div className="section-heading">
          <div>
            <span className="eyebrow">{prototype.categoryLabel}</span>
            <h1>{prototype.title}</h1>
          </div>
          <div className="meta-badges">
            <span className="badge">{prototype.versionLabel}</span>
            <span className="badge">{prototype.locale}</span>
            <span className="badge">{prototype.viewport}</span>
          </div>
        </div>
        <p className="lead">{prototype.summary}</p>
        <div className="tag-row">
          {prototype.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="detail-grid">
        <article className="panel stack-sm">
          <div className="section-heading">
            <h2>截图参考</h2>
            <a className="button button-secondary" href={prototype.screenPath} target="_blank" rel="noreferrer">
              打开图片
            </a>
          </div>
          <img className="detail-image" src={prototype.screenPath} alt={`${prototype.title} screenshot`} />
        </article>

        <article className="panel stack-sm">
          <div className="section-heading">
            <h2>HTML 预览</h2>
            <a className="button button-primary" href={prototype.htmlPath} target="_blank" rel="noreferrer">
              新窗口打开
            </a>
          </div>
          <iframe
            className="detail-frame"
            src={prototype.htmlPath}
            title={`${prototype.title} HTML preview`}
          />
        </article>
      </section>
    </div>
  );
}
