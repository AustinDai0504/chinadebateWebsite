import { useOutletContext } from "react-router-dom";
import type { SiteLanguage } from "../data/siteConfig";

type SiteOutletContext = {
  language: SiteLanguage;
};

type AboutMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type AboutContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  quote: string;
  missionTitle: string;
  missionBody: string[];
  committeeTitle: string;
  committeeSubtitle: string;
  members: AboutMember[];
  timelineTitle: string;
  timelineSubtitle: string;
  timeline: TimelineItem[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const aboutContent: Record<SiteLanguage, AboutContent> = {
  "zh-Hans": {
    eyebrow: "About Us / 关于我们",
    title: "远见者",
    subtitle:
      "在中英辩论学院，我们相信卓越的辩论不仅是语言的艺术，更是跨文化理解与批判性思维的巅峰汇流。",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw2Rjxlrw5xHALgvA-1_immSW5CJ7vN8hHpVBHABYBPidG4BVPn-aW25FDDh7Wr3T4BWt2_gbsmbwd5M9gjiGPip24mVgKuOjldFTud4gONiLLUyNGGn2e7yhxP2tESCrTcPDBgE-l5g_YzN5qPp7l3YOVjKkbk6Rrb1p1FDy4P1jNmlVo4KguE2en7arkXJSAfI0DO0xwwnC_mQV-ZfxAbO50aRPRMVBXl_y2_jqL84fJqG9Y2xboi-RFxl75WmQEkpdYbBVswQE",
    quote: "Truth through dialogue.",
    missionTitle: "我们的使命",
    missionBody: [
      "我们致力于在 21 世纪的语境下，重塑中国博雅教育的传统。通过严格的辩论训练、深度的文化交流和前瞻性的学术研究，我们为全球学子搭建一座通往理性辩思与卓越表达的桥梁。",
      "在过去的十年里，中英辩论学院已经成为大中华区最具影响力的辩论教育机构之一，为成千上万的年轻人提供了在全球舞台上发声的机会。"
    ],
    committeeTitle: "执行委员会",
    committeeSubtitle: "Executive Committee",
    members: [
      {
        name: "陈博士",
        role: "创办人兼院长",
        bio: "曾任牛津大学辩论社资深导师，致力于将国际议会制辩论引入亚洲教育体系。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuArzaN_pVzIop_qDoznpu6Da4gcnD_UJPWFxwQlo8j25uUJk5P-VeYEee1Ty6s6CeCGff2caMYGh0RhkIqlLItImYsb6BceQqKbtENFPrXpwo2rZ89OEjFhqUuVOxOBbivm2K0yruz_bB2mXenZ7POftLrcM--t4lQbKX6vJ-TlDx8h8sv1p1akF8wg6Tcp-Rb-iXyXTjC8yv5NQgntQKepeKxkQRBF68P3EuSysgJhRO8ywb6I63ie8bMUINTRn26Ei6sC_8vlkvc"
      },
      {
        name: "Sarah Lin",
        role: "学术总监",
        bio: "哈佛大学公共政策硕士，专注于开发双语思辨课程体系，曾多次担任世界辩论赛评委。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDTMFemO74u7Xl5naUuCv8nGS8z0M7FgbUpzpirBP9YCBLdl4gS1lxbVcqSRmC7qHuGuKWme3kr8tIrZ8noNAN6YWrFDag71Bq1vlA6Gja9xzjO2W8adglEM6jjipjs_tdB4mQ5XSjZ6SuQCg0yEW8ie7Yyj98jUKXdajR_ZFa0i75uwYLCmtGsiuI2ldlEYJWArf33T9Bc7fvYDw-ZCIUHhQUDDz3wNQ0mSoOm9evevchsRMvzQ65yZHodT_9Pz8prxd4m5JHkoQk"
      },
      {
        name: "James T. Wu",
        role: "国际事务主管",
        bio: "负责学院与全球顶尖名校的战略合作，曾主导多次中英国际青年论坛。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBUOJZAVIyO-wNedC3YmjZ-TphDA3qM-E9d-FFZe904j17zOOpdHuahZPIjCe7H047EilWoMenZ1pnyuh8dxqMORtuuLgmg1yAC2ctCEfo0rXiVHWpf0lIk-8QnNUL_raoLGUsXLvBCE_eaOEWVlC7pTFuvxdxATPwAWcsTJshn6SS9fgyIZkGaJHjuFLhh1L3fg3rDP_GM-96D_1Z5TekOsEakE9uUEEcMQngD1JCFxFe6xmiHYyLHtPyOSzeAgakVaN5ossR8114"
      }
    ],
    timelineTitle: "我们的历程",
    timelineSubtitle: "Our Journey",
    timeline: [
      { year: "2012", title: "破土动工", description: "中英辩论工作室在上海成立，确立了以思辨教育为核心的办学初衷。" },
      { year: "2018", title: "国际腾飞", description: "正式更名为中英辩论学院，并在北京及伦敦设立教学中心。" },
      { year: "2024", title: "迈向未来", description: "推出全球数字思辨实验室，利用 AI 辅助辩论评估系统提升教学精度。" }
    ],
    ctaTitle: "加入辩论的殿堂",
    ctaText: "无论是寻找深度的智慧对话，还是希望提升批判性思维，我们都欢迎您的加入。",
    ctaPrimary: "了解课程项目",
    ctaSecondary: "联系委员会"
  },
  "zh-Hant": {
    eyebrow: "ABOUT SCHOLARCH",
    title: "遠見者",
    subtitle:
      "辯論學社不僅僅是一個學術組織，它是真理的磨刀石，也是理性的殿堂。我們相信，透過嚴謹的邏輯思辨，每一個人都能成為引領未來的領航員。",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoRnoC2NT-oU__qZnUQ8LOGVbi__XHP26VSfKuBXL0z6QCYTkirDnuS1fINFBv2UVW1S2Q2_O05R5saqXtWz3m9DA24jUqx4__dYrWihCuA-zxv1XFcnFISJduh_MFMnE767aoqKD-cu5aEW68UaAPCMsYKqOLnu_vmpOqXWZvaUvK-LoF9ZwkQM8bySfAoYt7FLW99UPi4EXZuZR68lLAxvpUyAETfoxXaY1QgbXaKrcC8iTOfZdtGK6D7pSZ73C4n_g_PiI63o8",
    quote: "A decade of intellectual excellence.",
    missionTitle: "我們的使命",
    missionBody: [
      "我們相信辯論的價值不只在於勝負，而在於它如何訓練一個人辨析價值、拆解問題、建構清晰立場。",
      "學社長期以跨文化思辨為核心，透過賽事、課程與公開論壇，建立一個能夠真正進行深度對話的思想共同體。"
    ],
    committeeTitle: "執行委員會",
    committeeSubtitle: "A leadership collective shaped by scholarship and public reasoning.",
    members: [
      {
        name: "陳博士",
        role: "創始主席與首席導師",
        bio: "擁有二十年國際辯論評委經驗，深耕批判性思維教育，致力於將學術理論轉化為社會實踐。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAwM-7l9-KCJqf7ivj566gdcSKITaRPyXiY-LEc-i2_-mSXIHWM6ZPz3lIRhLEtTc3UOu2cg91QCrOHpV9Iej9qy1LSKcmXzaFMyx0xMxPcvA-w0_zORYGNqJIh1nFXxiRnpb0mLROXLePcwTdKjzvm-Pt579FsRp_ByF5-y0aEtSaz7IlHkSnjXZUpwqoPMqTNRID8xfUddDZ--LvcErixsQOJK2ORAyVatl9VhPZTB8EIkxh-QNT7hu85g4SHTfH5QpP9xT8GxFY"
      },
      {
        name: "Sarah Lin",
        role: "運營總監",
        bio: "專注於賽事組織與國際交流，曾成功策劃超過五十場跨國辯論高峰會，是學社發展的推手。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAa4x2TnIxnVARsam3_9Ooss6WnlwxDjClnpWfSIRf4VFKClgOk75spVAR3GvBN_zU2qP0KIVXntNtCLdxEfoccWm0eSqEG0XCSei6qrfzmlapzWo9E1H389LzrZ14EZ7FgjA3jbN_guMoR_SQin_nVQvgtQh-Sht6l61Um09jpXdkEF2bgYyAR4xBbRy5nzQtTJOOHnFoU4G6xFWuTZWswslqAoDiJxpVxy2d6XMYbVUWNaEfPmUe8Y-FpJYbTRKVs09KLAUjtphY"
      },
      {
        name: "張維學",
        role: "學術研究部主任",
        bio: "負責辯題研發與學術資源庫管理，確保學社的辯論內容始終站立在時代的前沿。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAgg1KYhwxT3CFF-SPjLKisMHpvnvZAc7QEKA5rL5XNDyZR_heS3TodBB7PV19D7DC2XaAXOBC6-XzsH2C5fxf6AgIEZO7c7ePXiYE76x05akTALqJ6Vcm_od9dS7oNdLHvah-7EB6lddH3n_to5VvbKcwcptnsXSfxWBJOfplTJvGiVJ0YCs5U25MyeXS5QAh6Mhwoettu6RbTnGropRW9bpeFH_-IS1LH2saB2HwBE2_HdB2n0VVfq8mytsJRRfzbTmJA8_lTMYM"
      }
    ],
    timelineTitle: "我們的歷程",
    timelineSubtitle: "A decade of intellectual excellence",
    timeline: [
      { year: "2012", title: "學社創立", description: "陳博士於香港創辦辯論學社，初心是為青年提供一個理性的聲音出口。" },
      { year: "2018", title: "國際化擴展", description: "與新加坡、馬來西亞多所頂尖大學建立戰略合作夥伴關係，開啟跨境聯賽。" },
      { year: "2021", title: "數位轉型", description: "建立全球領先的數位辯論資源平台，突破地域限制，影響力覆蓋全球華語地區。" },
      { year: "2024", title: "思想引領新紀元", description: "舉辦首屆全亞華語思辨週，確立華語辯論新標竿。" }
    ],
    ctaTitle: "加入思想的殿堂",
    ctaText: "如果你希望在對話中磨練判斷，在辯論中建立世界觀，這裡會是很好的起點。",
    ctaPrimary: "了解使命",
    ctaSecondary: "聯絡學社"
  },
  en: {
    eyebrow: "Leadership & Governance",
    title: "The Visionaries",
    subtitle:
      "A leadership team shaping the institution with strategic clarity, debate expertise, and cross-border academic ambition.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBT64uBEHksFAJqytDQD8-gupvxEQP4HYXqVbBGdNOPzj2qHTemcAtBrH5bR-ZWlBJI9xDiP_EeSdjnP_wvbMHmonP0feUQzXX0fwxrOFTIlZ-t5ATxAXs5ePnZZt_lj4TqIDHAlxArA6aaRsw5WQ_8WwGA657PvYrjId-J6nNIT-39JbSb75v6FgZVDPJ0M107mBye5Pa7fTJsCEfcCCvIauHISOePo8Nxz6qXmHLedcA_waYNxJ6BuTeZgiqiRmDnft4_c80LUng",
    quote: "Disciplined discourse with institutional ambition.",
    missionTitle: "Our Mission",
    missionBody: [
      "We cultivate a global generation of critical thinkers through the art of disciplined discourse, bridging cultural divides with intellectual rigor and authoritative eloquence.",
      "The organization treats debate as both a competitive arena and a civic training ground for public reasoning, strategic communication, and ethical judgment."
    ],
    committeeTitle: "Executive Committee",
    committeeSubtitle: "The minds behind our strategic evolution.",
    members: [
      {
        name: "Dr. Lawrence Chen",
        role: "President & Chief Strategist",
        bio: "Three-time World Debating Champion and long-time architect of cross-border oratorical frameworks.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBT64uBEHksFAJqytDQD8-gupvxEQP4HYXqVbBGdNOPzj2qHTemcAtBrH5bR-ZWlBJI9xDiP_EeSdjnP_wvbMHmonP0feUQzXX0fwxrOFTIlZ-t5ATxAXs5ePnZZt_lj4TqIDHAlxArA6aaRsw5WQ_8WwGA657PvYrjId-J6nNIT-39JbSb75v6FgZVDPJ0M107mBye5Pa7fTJsCEfcCCvIauHISOePo8Nxz6qXmHLedcA_waYNxJ6BuTeZgiqiRmDnft4_c80LUng"
      },
      {
        name: "Sarah Lin",
        role: "Director of International Affairs",
        bio: "Leads global partnerships and institutional alliances across five continents.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCC3NW4-hpmG13YYgGAecaq-sqYPVggGWmhdYUZi2tFd3eUaU4txmC0G5xS0GGeQnc3ML3FrmslSnYwUoebTduj2f91QiqoksQlOPxS82vShXbGM8ctHROOyFpRIuLvel-lvx10PdeN8EUwBhzlv-onBfL4ZFc31F3TbtzzJL91Z59NCGZ43GHu5u1qiahjzB8ZT0nUopYR3HoBl4BJVe8fdBUd824Cv-ZhieQfO5XiZuBX7P72lDMRmlh2zaBS3twQAackiY38K0I"
      },
      {
        name: "James T. Wu",
        role: "Head of Pedagogy",
        bio: "Guides the advanced curriculum for debate theory, coaching strategy, and adjudication standards.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuArVhMecehl9ecJeQ1nd1p0Ww7xFW2PR4bSkAvQoN-uzNrQIs23dCjhtFmnGhgfm5lbGFOFV4O1BpHK-WUo1dXpaF7z7UOdpuOaipDlr6yEjSOL_A7XVDLkTkgxqg8pJHK6vGmwaXOFUOGPgomnmIfGuiN04jhW6g3NbLzu6rI7PWvMVtlZZCsE7CT1RvBGxUSqf6Pu0FIUN8WRAiCd6m1ko9vWA7aItkPMGWofsiLcnNVSHMBIgimdeSZiY5FzkcNzOKtWNygTBTQ"
      }
    ],
    timelineTitle: "Our Journey",
    timelineSubtitle: "Milestones of growth",
    timeline: [
      { year: "2012", title: "Institution Founded", description: "The organization began as a small academic studio devoted to rhetoric and public reason." },
      { year: "2018", title: "International Expansion", description: "Partnerships with universities abroad transformed the program into a transnational platform." },
      { year: "2024", title: "Digital Debate Lab", description: "A new phase integrating AI-assisted feedback and scalable teaching infrastructure." }
    ],
    ctaTitle: "Join the institution behind the next generation of debaters",
    ctaText: "Whether you want rigorous mentorship, strategic training, or intellectual community, this is where it begins.",
    ctaPrimary: "Explore Programs",
    ctaSecondary: "Contact Us"
  }
};

export function AboutPage() {
  const { language } = useOutletContext<SiteOutletContext>();
  const content = aboutContent[language];

  return (
    <div className="content-page">
      <section className="page-hero page-hero-about">
        <div className="page-hero-copy">
          <p className="page-eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.subtitle}</p>
        </div>
        <div className="page-hero-media">
          <img src={content.heroImage} alt={content.title} />
          <div className="page-hero-quote">{content.quote}</div>
        </div>
      </section>

      <section className="page-panel page-panel-soft">
        <h2>{content.missionTitle}</h2>
        <div className="page-rich-text">
          {content.missionBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="page-panel">
        <div className="page-section-header">
          <div>
            <h2>{content.committeeTitle}</h2>
            <p>{content.committeeSubtitle}</p>
          </div>
        </div>
        <div className={`people-grid people-grid-${content.members.length}`}>
          {content.members.map((member) => (
            <article key={member.name} className="person-card">
              <div className="person-card-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="person-role">{member.role}</p>
              <p className="person-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-panel">
        <div className="page-section-header">
          <div>
            <h2>{content.timelineTitle}</h2>
            <p>{content.timelineSubtitle}</p>
          </div>
        </div>
        <div className="timeline-list">
          {content.timeline.map((item, index) => (
            <article key={`${item.year}-${item.title}`} className={`timeline-item ${index % 2 === 1 ? "reverse" : ""}`}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-cta">
        <div className="page-cta-panel">
          <h2>{content.ctaTitle}</h2>
          <p>{content.ctaText}</p>
          <div className="landing-actions landing-actions-centered">
            <button className="landing-button landing-button-gold">{content.ctaPrimary}</button>
            <button className="landing-button landing-button-outline">{content.ctaSecondary}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
