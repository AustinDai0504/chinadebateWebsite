import { useEffect, useRef } from "react";

type PrototypeEmbedProps = {
  src: string;
  title: string;
};

export function PrototypeEmbed({ src, title }: PrototypeEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    let resizeObserver: ResizeObserver | null = null;

    function syncHeight() {
      const doc = iframe.contentDocument;

      if (!doc) {
        return;
      }

      const nextHeight = Math.max(
        doc.body.scrollHeight,
        doc.documentElement.scrollHeight,
        doc.body.offsetHeight,
        doc.documentElement.offsetHeight
      );

      iframe.style.height = `${nextHeight}px`;
    }

    function enhanceEmbeddedPage() {
      const doc = iframe.contentDocument;

      if (!doc) {
        return;
      }

      doc.documentElement.style.background = "transparent";
      doc.body.style.background = "transparent";
      doc.body.style.margin = "0";

      const firstNav = doc.querySelector("body > nav");
      if (firstNav instanceof HTMLElement) {
        firstNav.style.display = "none";
      }

      const main = doc.querySelector("main");
      if (main instanceof HTMLElement) {
        main.style.paddingTop = "0";
      }

      syncHeight();

      if ("ResizeObserver" in window) {
        resizeObserver = new ResizeObserver(() => syncHeight());
        resizeObserver.observe(doc.body);
      }
    }

    function handleLoad() {
      enhanceEmbeddedPage();
    }

    iframe.addEventListener("load", handleLoad);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      resizeObserver?.disconnect();
    };
  }, [src]);

  return (
    <div className="prototype-embed">
      <div className="prototype-embed-chrome">
        <div className="prototype-embed-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="prototype-embed-title">{title}</span>
      </div>
      <iframe ref={iframeRef} className="site-frame" src={src} title={title} />
    </div>
  );
}
