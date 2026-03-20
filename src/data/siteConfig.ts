import { getPrototypeBySlug } from "./prototypes";

export type SiteLanguage = "zh-Hans" | "zh-Hant" | "en";
export type SiteSection = "home" | "about" | "events" | "resources";

type SectionContent = {
  title: string;
  description: string;
};

type LanguageContent = {
  brand: string;
  languageLabel: string;
  navigation: Record<SiteSection, string>;
  sections: Record<SiteSection, SectionContent>;
};

type SectionMapping = {
  prototypeSlug: string;
  fallbackNote?: string;
};

type LanguageMapping = Record<SiteSection, SectionMapping>;

export const defaultLanguage: SiteLanguage = "zh-Hans";

export const siteLanguages: { code: SiteLanguage; label: string }[] = [
  { code: "zh-Hans", label: "简体中文" },
  { code: "zh-Hant", label: "繁體中文" },
  { code: "en", label: "English" }
];

export const localizedContent: Record<SiteLanguage, LanguageContent> = {
  "zh-Hans": {
    brand: "中英辩论",
    languageLabel: "语言",
    navigation: {
      home: "首页",
      about: "关于我们",
      events: "赛事活动",
      resources: "Resources & Methodology"
    },
    sections: {
      home: {
        title: "首页",
        description: "默认展示 Landing Page Concept 2。"
      },
      about: {
        title: "关于我们",
        description: "点击顶部导航后进入 About Us Concept 1。"
      },
      events: {
        title: "赛事活动",
        description: "点击顶部导航后进入 Activities & Events Concept 2。"
      },
      resources: {
        title: "Resources & Methodology",
        description: "点击顶部导航后进入 Resources & Methodology Concept 2。"
      }
    }
  },
  "zh-Hant": {
    brand: "中英辯論",
    languageLabel: "語言",
    navigation: {
      home: "首頁",
      about: "關於我們",
      events: "賽事活動",
      resources: "Resources & Methodology"
    },
    sections: {
      home: {
        title: "首頁",
        description: "切換到繁體中文後，頁面會切換到對應的繁體版本。"
      },
      about: {
        title: "關於我們",
        description: "繁體中文環境使用 About Us Concept 3。"
      },
      events: {
        title: "賽事活動",
        description: "繁體中文環境優先使用第三套概念稿；若該頁不存在則回退。"
      },
      resources: {
        title: "Resources & Methodology",
        description: "繁體中文環境使用 Resources & Methodology Concept 3。"
      }
    }
  },
  en: {
    brand: "Scholarch Debate",
    languageLabel: "Language",
    navigation: {
      home: "Home",
      about: "About",
      events: "Events",
      resources: "Resources & Methodology"
    },
    sections: {
      home: {
        title: "Home",
        description: "English defaults to Landing Page Concept 1."
      },
      about: {
        title: "About",
        description: "English uses About Us Concept 2."
      },
      events: {
        title: "Events",
        description: "English uses Activities & Events Concept 1."
      },
      resources: {
        title: "Resources & Methodology",
        description: "English uses Resources & Methodology Concept 1."
      }
    }
  }
};

const siteMappings: Record<SiteLanguage, LanguageMapping> = {
  "zh-Hans": {
    home: { prototypeSlug: "landing-page-2" },
    about: { prototypeSlug: "about-us-1" },
    events: { prototypeSlug: "activities-events-2" },
    resources: { prototypeSlug: "resources-methodology-2" }
  },
  "zh-Hant": {
    home: { prototypeSlug: "landing-page-3" },
    about: { prototypeSlug: "about-us-3" },
    events: {
      prototypeSlug: "activities-events-2",
      fallbackNote: "当前目录里没有 Activities & Events Concept 3，所以这里回退到 Concept 2。"
    },
    resources: { prototypeSlug: "resources-methodology-3" }
  },
  en: {
    home: { prototypeSlug: "landing-page-1" },
    about: { prototypeSlug: "about-us-2" },
    events: { prototypeSlug: "activities-events-1" },
    resources: { prototypeSlug: "resources-methodology-1" }
  }
};

export function getSectionPrototype(language: SiteLanguage, section: SiteSection) {
  const mapping = siteMappings[language][section];
  const prototype = getPrototypeBySlug(mapping.prototypeSlug);

  if (!prototype) {
    throw new Error(`Missing prototype: ${mapping.prototypeSlug}`);
  }

  return {
    prototype,
    fallbackNote: mapping.fallbackNote
  };
}
