import { useEffect, useState } from "react";
import { designSystem } from "../data/prototypes";

export function DesignSystemPage() {
  const [content, setContent] = useState("Loading design system document...");

  useEffect(() => {
    let cancelled = false;

    fetch(designSystem.sourcePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load ${designSystem.sourcePath}`);
        }
        return response.text();
      })
      .then((text) => {
        if (!cancelled) {
          setContent(text);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContent("Design system document could not be loaded. Run `npm run sync:prototypes` first.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="stack-lg">
      <section className="panel stack-sm">
        <span className="eyebrow">Design System</span>
        <h1>{designSystem.title}</h1>
        <p className="lead">{designSystem.summary}</p>
        <a className="button button-primary" href={designSystem.sourcePath} target="_blank" rel="noreferrer">
          打开原始 Markdown
        </a>
      </section>

      <section className="panel stack-sm">
        <h2>原文档</h2>
        <pre className="markdown-preview">{content}</pre>
      </section>
    </div>
  );
}
