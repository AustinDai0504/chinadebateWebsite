import { Link, useOutletContext } from "react-router-dom";
import type { SiteLanguage } from "../data/siteConfig";

type SiteOutletContext = {
  language: SiteLanguage;
};

type HomeSectionCard = {
  eyebrow: string;
  title: string;
  description: string;
  accent?: "primary" | "secondary";
};

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

type HomeContent = {
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  sectionTitle: string;
  sectionSubtitle: string;
  featureQuoteTitle: string;
  featureQuoteBody: string;
  values: HomeSectionCard[];
  activitiesTitle: string;
  activitiesSubtitle: string;
  featuredEvent: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  sideEvents: HomeSectionCard[];
  teamTitle: string;
  teamSubtitle: string;
  team: TeamMember[];
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const homeContent: Record<SiteLanguage, HomeContent> = {
  "zh-Hans": {
    badge: "The Scholarch Excellence",
    title: "通过智识对话",
    titleAccent: "塑造未来",
    description:
      "探索英式议会制辩论的魅力，在思辨中连接东西方智慧，培养具有国际视野的卓越人才。",
    primaryCta: "立即开始探索",
    secondaryCta: "观看赛事录像",
    sectionTitle: "连接传统价值与全球标准",
    sectionSubtitle: "以东方底蕴结合全球化辩论训练，打造真正能面向未来的思辨教育。",
    featureQuoteTitle: "学博为师，德高为范",
    featureQuoteBody:
      "我们始终坚持将传统教育精髓与现代思辨框架相结合，打造独特的学术成长路径。",
    values: [
      {
        eyebrow: "中体西用",
        title: "双语思辨框架",
        description:
          "以中国传统儒家智慧为底色，运用西方逻辑思辨工具，在双语环境下进行深度对话。",
        accent: "primary"
      },
      {
        eyebrow: "国际认证",
        title: "世界级训练标准",
        description:
          "采用世界级辩论联赛标准，为中国学生提供接轨牛津、剑桥级别的学术培训。",
        accent: "secondary"
      },
      {
        eyebrow: "领袖社群",
        title: "高密度同侪网络",
        description:
          "汇聚全国顶尖高校辩才，建立跨越国界的精英关系网，共同探讨全球性重大议题。",
        accent: "primary"
      }
    ],
    activitiesTitle: "精选活动",
    activitiesSubtitle: "Empowering the next generation of thinkers",
    featuredEvent: {
      eyebrow: "旗舰赛事",
      title: "全国外研社杯辩论赛",
      description: "中国最高规格的大中小学生辩论盛事，汇集海内外顶尖学府，共话时代脉搏。",
      cta: "了解参赛详情"
    },
    sideEvents: [
      {
        eyebrow: "学术工坊",
        title: "批判性思维夏令营",
        description: "针对初学者设计的强化训练，掌握论点构建与有效反驳的核心技巧。",
        accent: "primary"
      },
      {
        eyebrow: "线上讲座",
        title: "牛津联盟大师课",
        description: "对话牛津辩论社主席，揭秘世界一流辩论选手的思维模式。",
        accent: "secondary"
      }
    ],
    teamTitle: "核心成员",
    teamSubtitle: "我们的导师团队由来自全球知名学府的辩论冠军及资深学术专家组成。",
    team: [
      {
        name: "郝晓威",
        role: "学术委员会主席",
        bio: "世界辩论赛总决赛评委，外研社首席学术顾问。",
        image:
          "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/09ae8e8ec016e018af40b8f646d29a15.jpg"
      },
      {
        name: "Joe Lu",
        role: "英式辩论主教练",
        bio: "牛津辩论社前核心成员，拥有十年 BP 赛制培训经验。",
        image:
          "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/ad8af5e5dceaaf4fe824f7e0dba05c94.jpg"
      },
      {
        name: "Christopher",
        role: "课程研发总监",
        bio: "哈佛大学教育学博士，致力于将批判性思维融入中文辩论体系。",
        image:
          "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/06890601d1aef13c85aaf555bbf693b7.jpg"
      },
      {
        name: "June",
        role: "赛事运营负责人",
        bio: "资深赛事策划人，曾成功举办超过 50 场大型国际辩论邀请赛。",
        image:
          "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/2aa6c10cb6c39ac77bf54e52533b6c24.jpg"
      }
    ],
    ctaTitle: "开启您的思辨之旅",
    ctaDescription:
      "加入中英辩论，不仅是学习技巧，更是拥抱一种全新的思维方式。在这里，每一场对话都在塑造未来。",
    ctaPrimary: "申请试听课程",
    ctaSecondary: "下载课程大纲"
  },
  "zh-Hant": {
    badge: "The Modern Scholarch",
    title: "透過智識對話",
    titleAccent: "塑造未來",
    description:
      "將東方文化底蘊與國際辯論方法結合，在理性與表達之間，培養能夠引領未來的思辨者。",
    primaryCta: "深入了解學社",
    secondaryCta: "觀看經典賽事",
    sectionTitle: "以文化深度支撐全球視野",
    sectionSubtitle: "首頁以繁體中文視覺方向重構，延續 concept 3 的編輯感與學術氣質。",
    featureQuoteTitle: "遠見者與思想的領航",
    featureQuoteBody:
      "辯論學社不僅僅是一個學術組織，它是真理的磨刀石，也是理性的殿堂。",
    values: [
      {
        eyebrow: "學術深度",
        title: "真理導向的訓練方式",
        description: "在嚴謹邏輯之外，我們更重視價值辨析、立場鋪陳與文化脈絡的理解。",
        accent: "primary"
      },
      {
        eyebrow: "國際視野",
        title: "與世界一流舞台接軌",
        description: "以國際辯論賽制為基礎，讓學生在全球議題中建立成熟觀點與表達能力。",
        accent: "secondary"
      },
      {
        eyebrow: "社群連結",
        title: "思想型同儕網絡",
        description: "學員、導師與校友共同構成長期互助的討論社群，持續在議題上彼此激發。",
        accent: "primary"
      }
    ],
    activitiesTitle: "焦點活動",
    activitiesSubtitle: "A curated calendar of rigorous dialogue",
    featuredEvent: {
      eyebrow: "精選論壇",
      title: "亞洲青年辯論峰會",
      description: "聚集不同城市的青年辯手，以當代議題展開高密度交鋒與合作。",
      cta: "查看論壇日程"
    },
    sideEvents: [
      {
        eyebrow: "主題工作坊",
        title: "議題拆解實驗室",
        description: "以更精緻的工作坊形式，訓練辯手拆解複雜問題並建立論證節奏。",
        accent: "primary"
      },
      {
        eyebrow: "年度公開課",
        title: "世界名校導師對談",
        description: "邀請國際辯論圈導師與學者，分享競技之外的思辨方法與學習路徑。",
        accent: "secondary"
      }
    ],
    teamTitle: "執行與學術核心",
    teamSubtitle: "來自辯論、教育與國際交流領域的成員，共同塑造學社的氣質與方向。",
    team: [
      {
        name: "陳博士",
        role: "創始主席",
        bio: "長期深耕思辨教育，將國際辯論框架轉化為本土化的學術實踐。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAwM-7l9-KCJqf7ivj566gdcSKITaRPyXiY-LEc-i2_-mSXIHWM6ZPz3lIRhLEtTc3UOu2cg91QCrOHpV9Iej9qy1LSKcmXzaFMyx0xMxPcvA-w0_zORYGNqJIh1nFXxiRnpb0mLROXLePcwTdKjzvm-Pt579FsRp_ByF5-y0aEtSaz7IlHkSnjXZUpwqoPMqTNRID8xfUddDZ--LvcErixsQOJK2ORAyVatl9VhPZTB8EIkxh-QNT7hu85g4SHTfH5QpP9xT8GxFY"
      },
      {
        name: "Sarah Lin",
        role: "運營總監",
        bio: "擅長賽事策劃與國際交流，持續拓展學社在區域與全球的合作網絡。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAa4x2TnIxnVARsam3_9Ooss6WnlwxDjClnpWfSIRf4VFKClgOk75spVAR3GvBN_zU2qP0KIVXntNtCLdxEfoccWm0eSqEG0XCSei6qrfzmlapzWo9E1H389LzrZ14EZ7FgjA3jbN_guMoR_SQin_nVQvgtQh-Sht6l61Um09jpXdkEF2bgYyAR4xBbRy5nzQtTJOOHnFoU4G6xFWuTZWswslqAoDiJxpVxy2d6XMYbVUWNaEfPmUe8Y-FpJYbTRKVs09KLAUjtphY"
      },
      {
        name: "張維學",
        role: "學術研究部主任",
        bio: "負責辯題研發與資源庫管理，確保學社討論始終面向時代最核心的問題。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAgg1KYhwxT3CFF-SPjLKisMHpvnvZAc7QEKA5rL5XNDyZR_heS3TodBB7PV19D7DC2XaAXOBC6-XzsH2C5fxf6AgIEZO7c7ePXiYE76x05akTALqJ6Vcm_od9dS7oNdLHvah-7EB6lddH3n_to5VvbKcwcptnsXSfxWBJOfplTJvGiVJ0YCs5U25MyeXS5QAh6Mhwoettu6RbTnGropRW9bpeFH_-IS1LH2saB2HwBE2_HdB2n0VVfq8mytsJRRfzbTmJA8_lTMYM"
      }
    ],
    ctaTitle: "加入思想的殿堂",
    ctaDescription:
      "如果你希望在對話中磨練判斷，在辯論中建立世界觀，這裡會是很好的起點。",
    ctaPrimary: "了解課程方向",
    ctaSecondary: "聯絡學社"
  },
  en: {
    badge: "Established 2024",
    title: "Shaping the Future through",
    titleAccent: "Intellectual Dialogue",
    description:
      "Promoting British-style debate in China by connecting traditional wisdom with modern critical thinking.",
    primaryCta: "Join a Tournament",
    secondaryCta: "Our Mission",
    sectionTitle: "Bridging Traditional Chinese Values with Global Standards",
    sectionSubtitle: "A React homepage inspired by concept 1, now integrated into the real site shell.",
    featureQuoteTitle: "Since 2024",
    featureQuoteBody:
      "Our methodology integrates the philosophical depth of classical Chinese thought with British parliamentary rigor.",
    values: [
      {
        eyebrow: "Methodology",
        title: "Dialogue with Structure",
        description:
          "We teach rhetoric not as noise, but as disciplined inquiry shaped by clash, burden, and comparative analysis.",
        accent: "primary"
      },
      {
        eyebrow: "Programs",
        title: "Competitive and Scholarly",
        description:
          "Students move between tournament preparation, public speaking workshops, and issue-driven seminars.",
        accent: "secondary"
      },
      {
        eyebrow: "Community",
        title: "A New Generation of Thinkers",
        description:
          "Our network brings together ambitious students, experienced adjudicators, and globally minded mentors.",
        accent: "primary"
      }
    ],
    activitiesTitle: "Featured Activities",
    activitiesSubtitle: "Upcoming Calendar",
    featuredEvent: {
      eyebrow: "Tournament",
      title: "The National Varsity Cup",
      description: "China's premier inter-university debate circuit focusing on economic policy and global ethics.",
      cta: "Register Now"
    },
    sideEvents: [
      {
        eyebrow: "Workshop",
        title: "Summer Debate Intensive",
        description: "A two-week residency program for high school students to master public speaking.",
        accent: "secondary"
      },
      {
        eyebrow: "Seminar",
        title: "The Scholars' Seminar",
        description: "An exclusive gathering of coaches and alumni exploring the evolution of BP debate.",
        accent: "primary"
      }
    ],
    teamTitle: "Key Member Highlights",
    teamSubtitle: "Leadership with experience across international circuits and Chinese educational institutions.",
    team: [
      {
        name: "Dr. Chen",
        role: "Founder",
        bio: "Senior mentor with deep experience in academic debating and institution building.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAsYHlrBIajrvLYjmgG06-kF40IlMnQOJp0opBFLRVlR5j7YfzQW3FsEMvOldOKoJm8unaDvnFGaQGZY2d6Is2x35sAVrYfoidzAsvoA8cTdQ-AtMHxn0L-9vNYxHl4CL21Noib6SODiYrym1SJ6VcQj_enBW-XewSLPGzWGIYZFzDPiRlZBbgxRPRUvlsup9DFLqoec3s7eRwEmGMPd7ZkrJob7fTulIeh-VKXE-Q3ENdyL3BHwqxF7bMVtu69EWNEahKgSzn8_xs"
      },
      {
        name: "Sarah Zhang",
        role: "Co-Founder",
        bio: "Brings curriculum strategy, student development, and international-facing program direction.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCXcSJC9tnrqp5mh0P07kn0rk4v_IVmiSriMPdB7WB53Le5Hy-1Vp7BtY_7ePBYY5iJpz-di90qQ--LshLlJbrN5jgqfv_-U4m4g5gMW6zCTvIiyb4YijtSdwuSMkqWGZE2sjLkiM4HVPlZJXMmmjSLzAJbgmqr7BX-_21teSSjREOL6GVmUWwllGOeNLSzZJCYswLnJQKg9_IskI_3d7ZTMF6GjsBJdnA7pNHM0rOCdeqW39yKW_0EBFe1zHXzuCJOJpuEHAracZM"
      }
    ],
    ctaTitle: "Step into a more rigorous kind of conversation",
    ctaDescription:
      "Whether you want to compete, think more clearly, or speak with confidence, this is where that journey starts.",
    ctaPrimary: "Explore Programs",
    ctaSecondary: "Contact Us"
  }
};

const images = {
  hero:
    "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/eab5dbe7fb76a1ecbd293d15f0d71622.jpg",
  library:
    "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/bfb23750cb5c0c6faad9a09e7d634b61.jpg",
  featuredEvent:
    "https://roro-1413071991.cos.ap-nanjing.myqcloud.com/eab5dbe7fb76a1ecbd293d15f0d71622.jpg"
};

export function HomeLandingPage() {
  const { language } = useOutletContext<SiteOutletContext>();
  const content = homeContent[language];

  return (
    <div className={`landing-home landing-home-${language}`}>
      <section className="landing-hero">
        <div className="landing-hero-media">
          <img src={images.hero} alt="" />
          <div className="landing-hero-overlay" />
        </div>
        <div className="landing-hero-content">
          <span className="landing-badge">{content.badge}</span>
          <h1>
            {content.title}
            <br />
            <span>{content.titleAccent}</span>
          </h1>
          <p>{content.description}</p>
          <div className="landing-actions">
            <button className="landing-button landing-button-primary">{content.primaryCta}</button>
            <button className="landing-button landing-button-secondary">{content.secondaryCta}</button>
          </div>
        </div>
        <div className="landing-hero-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className="landing-values">
        <div className="landing-values-media">
          <div className="landing-values-image">
            <img src={images.library} alt="" />
          </div>
          <div className="landing-values-note">
            <h3>{content.featureQuoteTitle}</h3>
            <p>{content.featureQuoteBody}</p>
          </div>
        </div>

        <div className="landing-values-copy">
          <p className="landing-section-label">{content.sectionSubtitle}</p>
          <h2>{content.sectionTitle}</h2>
          <div className="landing-value-list">
            {content.values.map((item) => (
              <article key={item.title} className="landing-value-item">
                <div className={`landing-value-icon ${item.accent ?? "primary"}`} />
                <div>
                  <p className="landing-value-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-activities">
        <div className="landing-section-head">
          <div>
            <p className="landing-section-label">{content.activitiesSubtitle}</p>
            <h2>{content.activitiesTitle}</h2>
          </div>
          <Link className="landing-inline-link" to="/events">
            {language === "en" ? "View All Events" : "查看全部赛事"}
          </Link>
        </div>

        <div className="landing-activities-grid">
          <article className="landing-activity-feature">
            <img src={images.featuredEvent} alt="" />
            <div className="landing-activity-overlay" />
            <div className="landing-activity-content">
              <span>{content.featuredEvent.eyebrow}</span>
              <h3>{content.featuredEvent.title}</h3>
              <p>{content.featuredEvent.description}</p>
              <Link className="landing-button landing-button-light" to="/events">
                {content.featuredEvent.cta}
              </Link>
            </div>
          </article>

          <div className="landing-activity-side">
            {content.sideEvents.map((item) => (
              <article key={item.title} className={`landing-side-card ${item.accent ?? "primary"}`}>
                <span>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="/events">{language === "en" ? "Learn More" : "立即查看"}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="landing-team">
        <div className="landing-team-header">
          <h2>{content.teamTitle}</h2>
          <p>{content.teamSubtitle}</p>
        </div>

        <div className={`landing-team-grid landing-team-grid-${content.team.length}`}>
          {content.team.map((member) => (
            <article key={member.name} className="landing-team-card">
              <div className="landing-team-avatar">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="landing-team-role">{member.role}</p>
              <p className="landing-team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="landing-cta">
        <div className="landing-cta-panel">
          <h2>{content.ctaTitle}</h2>
          <p>{content.ctaDescription}</p>
          <div className="landing-actions landing-actions-centered">
            <button className="landing-button landing-button-gold">{content.ctaPrimary}</button>
            <button className="landing-button landing-button-outline">{content.ctaSecondary}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
