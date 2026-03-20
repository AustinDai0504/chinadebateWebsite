import { useOutletContext } from "react-router-dom";
import { PrototypeEmbed } from "../components/PrototypeEmbed";
import {
  getSectionPrototype,
  localizedContent,
  type SiteLanguage,
  type SiteSection
} from "../data/siteConfig";

type SitePageProps = {
  section: SiteSection;
};

type SiteOutletContext = {
  language: SiteLanguage;
};

export function SitePage({ section }: SitePageProps) {
  const { language } = useOutletContext<SiteOutletContext>();
  const content = localizedContent[language];
  const sectionContent = content.sections[section];
  const { prototype, fallbackNote } = getSectionPrototype(language, section);

  return (
    <div className="site-page">
      <section className="site-page-banner">
        <div className="site-page-copy">
          <p className="site-page-kicker">{prototype.versionLabel}</p>
          <h1>{sectionContent.title}</h1>
          <p>{sectionContent.description}</p>
        </div>

        <div className="site-page-meta">
          <span>{prototype.title}</span>
          <span>{prototype.locale}</span>
          <a href={prototype.htmlPath} target="_blank" rel="noreferrer">
            打开原始 HTML
          </a>
        </div>
      </section>

      {fallbackNote ? <p className="site-fallback-note">{fallbackNote}</p> : null}

      <section className="site-frame-wrap">
        <PrototypeEmbed
          key={`${language}-${section}-${prototype.slug}`}
          src={prototype.htmlPath}
          title={prototype.title}
        />
      </section>
    </div>
  );
}
