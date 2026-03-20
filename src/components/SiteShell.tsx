import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  defaultLanguage,
  localizedContent,
  siteLanguages,
  type SiteLanguage
} from "../data/siteConfig";

const storageKey = "roro-site-language";

export function SiteShell() {
  const [language, setLanguage] = useState<SiteLanguage>(defaultLanguage);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(storageKey) as SiteLanguage | null;

    if (storedValue && siteLanguages.some((item) => item.code === storedValue)) {
      setLanguage(storedValue);
    }
  }, []);

  function handleLanguageChange(nextLanguage: SiteLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem(storageKey, nextLanguage);
  }

  const content = localizedContent[language];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink className="site-brand" to="/">
            {content.brand}
          </NavLink>

          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/">{content.navigation.home}</NavLink>
            <NavLink to="/about">{content.navigation.about}</NavLink>
            <NavLink to="/events">{content.navigation.events}</NavLink>
            <NavLink to="/resources">{content.navigation.resources}</NavLink>
          </nav>

          <label className="language-switcher">
            <span>{content.languageLabel}</span>
            <select
              value={language}
              onChange={(event) => handleLanguageChange(event.target.value as SiteLanguage)}
            >
              {siteLanguages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <main className="site-main">
        <Outlet context={{ language }} />
      </main>
    </div>
  );
}
