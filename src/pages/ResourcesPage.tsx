import { useOutletContext } from "react-router-dom";
import type { SiteLanguage } from "../data/siteConfig";

type SiteOutletContext = {
  language: SiteLanguage;
};

type Pillar = {
  title: string;
  description: string;
  accent: "primary" | "secondary" | "light";
};

type ResourceCard = {
  title: string;
  meta: string;
  description?: string;
};

type VideoCard = {
  title: string;
  description: string;
  image: string;
};

type ResourcesContent = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage: string;
  quote: string;
  pillarsTitle: string;
  pillars: Pillar[];
  libraryTitle: string;
  librarySubtitle: string;
  resources: ResourceCard[];
  videosTitle: string;
  videos: VideoCard[];
};

const resourcesContent: Record<SiteLanguage, ResourcesContent> = {
  "zh-Hans": {
    eyebrow: "Methodology & Resources",
    title: "英式辩论：方法论与资源",
    description: "探索议会制辩论的艺术。从议院规则到策略构建，我们为您提供通往卓越辩论之路的权威指南。",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZajVuqcRlR2qDvo95Hox23Ohv1kBv9aLXCJYU1x5UCeaCSsFJb1DWMT-7hg9q-6SsR2-AxLuPXAb5XkWbhTU9UOp-ZG7aT13Q1slMND3Kfmp64PQ92evQGlKqoKKPrnWgJZoR0bs2GC4GVCAQnoPcC9Q0LkEW_UIOPPl-_Y0aWf0OScB0lZTFc9fGPad51ZFG1HvKjceg4pIIElOcI-MLZJ63DrLlAZDh8EhpuRtAQzqk5aSMPq1Z34yYNNgT2xq0F71ZL__jmDw",
    quote: "辩论不只是言语的交锋，更是智慧的砥砺。",
    pillarsTitle: "核心章节指南",
    pillars: [
      { title: "议院 (The House)", description: "掌握议长职责、时间控制与程序秩序，建立对 BP 赛制的第一层理解。", accent: "light" },
      { title: "政府方", description: "学习如何定义辩题、构建框架并承担论证责任。", accent: "primary" },
      { title: "反对党", description: "从拆解逻辑漏洞到提出替代模型，训练系统性的反驳能力。", accent: "light" },
      { title: "评判", description: "理解比较性、边际贡献与判准权衡，从裁判视角反过来提升辩手能力。", accent: "secondary" }
    ],
    libraryTitle: "资源库",
    librarySubtitle: "下载规则手册、模板与学习文档，建立自己的方法论资料库。",
    resources: [
      { title: "官方 BP 规则手册", meta: "PDF • 2.4 MB", description: "包含最新修订的议事规则与评判准则。" },
      { title: "辩论记录模板", meta: "DOCX • 156 KB", description: "用于赛中记笔记、整理 clash 与复盘。" },
      { title: "进阶反驳技巧 2024", meta: "PDF • 5.1 MB", description: "聚焦逻辑攻击、机制拆解与比较框架。" }
    ],
    videosTitle: "视频教程与赛事回放",
    videos: [
      {
        title: "BP 辩论入门：从零开始的逻辑构建",
        description: "覆盖赛制角色、时间安排与基础论证方式。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBZajVuqcRlR2qDvo95Hox23Ohv1kBv9aLXCJYU1x5UCeaCSsFJb1DWMT-7hg9q-6SsR2-AxLuPXAb5XkWbhTU9UOp-ZG7aT13Q1slMND3Kfmp64PQ92evQGlKqoKKPrnWgJZoR0bs2GC4GVCAQnoPcC9Q0LkEW_UIOPPl-_Y0aWf0OScB0lZTFc9fGPad51ZFG1HvKjceg4pIIElOcI-MLZJ63DrLlAZDh8EhpuRtAQzqk5aSMPq1Z34yYNNgT2xq0F71ZL__jmDw"
      },
      {
        title: "总决赛精彩回放：深度剖析与专家点评",
        description: "通过经典比赛讲清楚 clash、比较与 adjudication 的思路。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDfT9yGPqSktbj7aUH4oS0vupbNdxa90DOigiFUPsmVu_KEImb5Xe_6oZTaf-JxXlhZEHyRyUHMYt6o4u83Emwld6z9wIFDtFiWkznJNv97fNqzjMruRMOWs6-5w6w_eKagYIyLG8LRGLSB9pRqq486N9sHqoku0pPKPF7MKOfWuUQcsqKsTgHWXzSS4G3ZUEEYQL6fF00ugTTefy7fm1pvShIhco-q-iiO0uGGvqKUFgNvHBTMFQJq08lQ6tAxlO8vJbmR5k5XLdo"
      }
    ]
  },
  "zh-Hant": {
    eyebrow: "Methodology & Resources",
    title: "英式辯論：方法論與資源",
    description: "從議事規則、論證結構到評判視角，我們以更完整的學術框架整理出可持續進步的學習路徑。",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3c5m3r-9RwZSa16rYYeq26XuDqKTA9I1fg1SLaOHaTZMQNvVCUjbvH7vPRWBW7i6C78HWPeIVM2DqNNgmGoY6WuyQ_-KppLDp_zwb8_fHu9uPrdSm6ogaB05W-XApelVUWS61UWlCgHpiaubKGCfRcs1fPhfLkNLPYli51lvm8_gfhTzMj5ER2UeMNokhDdl4a8h-KHLGkWbuUrOireRe-j2---KqbKJh2wMRw2U8DA4NxjuIb7un_u99m6a0vNsLLWyOXJCh1zI",
    quote: "辯論不只是言語的交鋒，更是智慧的砥礪。",
    pillarsTitle: "核心章節指南",
    pillars: [
      { title: "議院 (The House)", description: "從程序正義、時間規範到 POI 禮儀，建立對場域秩序的精準理解。", accent: "light" },
      { title: "政府方 (The Proposition)", description: "學習如何定義辯題、建立模型與鋪陳論證責任。", accent: "primary" },
      { title: "反對黨 (The Opposition)", description: "反駁不是否定，而是建立比較優勢與更有力的分析框架。", accent: "light" },
      { title: "評判 (The Adjudication)", description: "從比較性、邊際貢獻與權重判準出發，理解裁決背後的思路。", accent: "secondary" }
    ],
    libraryTitle: "資源庫",
    librarySubtitle: "在這裡整理規則手冊、視頻、FAQ 與學習社群入口，形成長期可用的學習資產。",
    resources: [
      { title: "官方 BP 規則手冊", meta: "PDF • 2.4 MB", description: "所有辯手都應熟悉的基礎文件。" },
      { title: "視頻教程", meta: "24+ Sessions", description: "從入門到進階的結構化學習內容。" },
      { title: "常見問題 FAQs", meta: "Updated Weekly", description: "針對規則疑義與案例分析的集中整理。" },
      { title: "學術社群訂閱", meta: "Email Digest", description: "每週接收辯題分析與賽事觀察。" }
    ],
    videosTitle: "教學與回放",
    videos: [
      {
        title: "經典賽局拆解：何謂有效比較",
        description: "透過真實辯例理解如何在評判標準下建立勝勢。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCrLqHWynGuF7sZQLL31zdy_aiqVVisJ2Sr4tNIKKSNcZfgeeBd1KmYKTt81Q5mcij_uMAZLxabl44y46AyfDAE358fC96lqKqrgnymFcUipHM34_HpfjSUHNX-y9YV8IzT7gleSi3ouj7NyxDiGngaaljnkZqWPBlwxHmmyafZM8a8OFZuHBYEftfbz91NUqDnYSe9XUCNd4xDcuMt7C86q9wnYCYL-tDmqvpTQcBWxGgxft0-_WkJtmAvVoXQhQEFEI8yPTLk0sw"
      },
      {
        title: "反駁的藝術：從漏洞辨識到替代模型",
        description: "更細緻地討論反駁、比較與 framing 的節奏。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCLite381yysXYZBjsk0jhKw180_Ld9V6cTaemE1V26cMT8jv4rQuImFgjU-ihb1MOgcpyQB1Qh6UhZrc0dWJTsSADrVgZx0-C63fA3B6Gp1HMKeiY33QdD49x5J1WsXNXQT1lfG6vo-IoTEsXln8Nkyrk0QuYkE7riKOz_DTJxKtD_ko4Bw2kC6asMKYfs-7jsWEjw6A8BJ-EWM4w-HEnyiXLfRgAzpTz_G0dW0qPG5kw2hdNUa5f2LapMI_QkOs_zopYFpetLu7Q"
      }
    ]
  },
  en: {
    eyebrow: "Knowledge Repository",
    title: "The British-Style Debate: Methodology & Resources",
    description: "An authoritative guide to the British Parliamentary format, designed for the modern scholarch seeking rigor and structural clarity.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrLqHWynGuF7sZQLL31zdy_aiqVVisJ2Sr4tNIKKSNcZfgeeBd1KmYKTt81Q5mcij_uMAZLxabl44y46AyfDAE358fC96lqKqrgnymFcUipHM34_HpfjSUHNX-y9YV8IzT7gleSi3ouj7NyxDiGngaaljnkZqWPBlwxHmmyafZM8a8OFZuHBYEftfbz91NUqDnYSe9XUCNd4xDcuMt7C86q9wnYCYL-tDmqvpTQcBWxGgxft0-_WkJtmAvVoXQhQEFEI8yPTLk0sw",
    quote: "Method before performance.",
    pillarsTitle: "Core Chapters",
    pillars: [
      { title: "The House", description: "The procedural architecture of the chamber and the structure that gives debate its shape.", accent: "light" },
      { title: "The Proposition", description: "How to define the motion, frame burdens, and construct a winning model.", accent: "primary" },
      { title: "The Opposition", description: "Refutation, comparative strategy, and the craft of strategic dissent.", accent: "light" },
      { title: "The Adjudication", description: "How judges weigh clash, contribution, and comparative impact in practice.", accent: "secondary" }
    ],
    libraryTitle: "Resource Library",
    librarySubtitle: "Essential documents, templates, and learning material for competitive excellence.",
    resources: [
      { title: "Official BP Rulebook", meta: "PDF • 2.4 MB", description: "The complete structural framework for tournament participation." },
      { title: "Training Guide 2024", meta: "PDF • 5.1 MB", description: "Advanced argumentation techniques and strategic framing." },
      { title: "Curated Sample Motions", meta: "PDF • 1.2 MB", description: "A historical database of motions from international finals." }
    ],
    videosTitle: "Recorded Debates & Tutorials",
    videos: [
      {
        title: "2023 International Championship Final",
        description: "Analyzing the clash between Opening Government and Closing Opposition.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCrLqHWynGuF7sZQLL31zdy_aiqVVisJ2Sr4tNIKKSNcZfgeeBd1KmYKTt81Q5mcij_uMAZLxabl44y46AyfDAE358fC96lqKqrgnymFcUipHM34_HpfjSUHNX-y9YV8IzT7gleSi3ouj7NyxDiGngaaljnkZqWPBlwxHmmyafZM8a8OFZuHBYEftfbz91NUqDnYSe9XUCNd4xDcuMt7C86q9wnYCYL-tDmqvpTQcBWxGgxft0-_WkJtmAvVoXQhQEFEI8yPTLk0sw"
      },
      {
        title: "Introduction to BP Format",
        description: "A primer for new debaters explaining the roles and timing rules.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCLite381yysXYZBjsk0jhKw180_Ld9V6cTaemE1V26cMT8jv4rQuImFgjU-ihb1MOgcpyQB1Qh6UhZrc0dWJTsSADrVgZx0-C63fA3B6Gp1HMKeiY33QdD49x5J1WsXNXQT1lfG6vo-IoTEsXln8Nkyrk0QuYkE7riKOz_DTJxKtD_ko4Bw2kC6asMKYfs-7jsWEjw6A8BJ-EWM4w-HEnyiXLfRgAzpTz_G0dW0qPG5kw2hdNUa5f2LapMI_QkOs_zopYFpetLu7Q"
      }
    ]
  }
};

export function ResourcesPage() {
  const { language } = useOutletContext<SiteOutletContext>();
  const content = resourcesContent[language];

  return (
    <div className="content-page">
      <section className="page-hero page-hero-resources">
        <div className="page-hero-copy">
          <p className="page-eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.description}</p>
        </div>
        <div className="page-hero-media">
          <img src={content.heroImage} alt={content.title} />
          <div className="page-hero-quote">{content.quote}</div>
        </div>
      </section>

      <section className="page-panel">
        <div className="page-section-header">
          <div>
            <h2>{content.pillarsTitle}</h2>
          </div>
        </div>
        <div className="pillars-grid">
          {content.pillars.map((pillar) => (
            <article key={pillar.title} className={`pillar-card ${pillar.accent}`}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-panel page-panel-soft">
        <div className="page-section-header">
          <div>
            <h2>{content.libraryTitle}</h2>
            <p>{content.librarySubtitle}</p>
          </div>
        </div>
        <div className="resource-grid">
          {content.resources.map((item) => (
            <article key={item.title} className="resource-card">
              <h3>{item.title}</h3>
              <p className="resource-meta">{item.meta}</p>
              {item.description ? <p>{item.description}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="page-panel">
        <div className="page-section-header">
          <div>
            <h2>{content.videosTitle}</h2>
          </div>
        </div>
        <div className="video-grid">
          {content.videos.map((item) => (
            <article key={item.title} className="video-card">
              <div className="video-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="video-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
