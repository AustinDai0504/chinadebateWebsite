import { useOutletContext } from "react-router-dom";
import type { SiteLanguage } from "../data/siteConfig";

type SiteOutletContext = {
  language: SiteLanguage;
};

type ArchiveCard = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

type ScheduleItem = {
  date: string;
  title: string;
  time: string;
};

type EventsContent = {
  eyebrow: string;
  title: string;
  description: string;
  featureBadge: string;
  featureTitle: string;
  featureBody: string;
  featureImage: string;
  countdown: string[];
  primaryCta: string;
  secondaryCta: string;
  archiveTitle: string;
  archiveSubtitle: string;
  archive: ArchiveCard[];
  scheduleTitle: string;
  scheduleDescription: string;
  schedule: ScheduleItem[];
};

const eventsContent: Record<SiteLanguage, EventsContent> = {
  "zh-Hans": {
    eyebrow: "旗舰赛事 • 2024年度",
    title: "2024帝制春季赛",
    description: "汇聚顶尖学者与辩论英才，于春意盎然之际，开启一场关于逻辑、智慧与跨文化交流的巅峰对决。",
    featureBadge: "Imperial Spring Cup",
    featureTitle: "2024 帝制春季赛",
    featureBody: "从初赛选拔到总决赛的巅峰时刻，我们把赛事组织、学术引导与国际交流整合进同一套体验中。",
    featureImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDVXRoho6P-I4N6nPyD8T8Kx3x1OAs5BACgYjr5yUDKUakE-wTKVgsO5JlgRzxrrLio2_48dItPM2yf-gfTIK7n7DzgeeEV7aA4gDeedNxhMV0vX9G2Uyjb8p7hQ0VI6GbcUO5CiNWR3h3OzaQjlgGGxfF2_2jbOUnKI_VATV81PhfUNSl8Hy3vYP_buOf_dPxD0IdfDZsurlIwyF0guPWAjbdkOHbt437oaD40VcWyQiqUWjt5tbGs2x-c9qIyRQ1PKs8qSJkKWJI",
    countdown: ["14 天", "08 时", "42 分"],
    primaryCta: "立即报名参加",
    secondaryCta: "赛事详情",
    archiveTitle: "往昔志",
    archiveSubtitle: "以赛事、论坛与工作坊记录每一个思想交锋的瞬间。",
    archive: [
      {
        eyebrow: "Workshop • Sept 2023",
        title: "修辞与说服工作坊",
        description: "面向青年辩手的进阶课程，聚焦论证结构、反驳节奏与临场回应。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDgmyBl0ybZHeZakdroSBniXExOpk-3Bhn5H_-MPYguvcczpR-_35M_e7F4Y4Bl5GG7Pdam4YaTsWV6yxBM5gp5uCwSkzamKGqWM2mlA9v-KhdWh9KIyztzu8zhhrXA8ByNgQ1tYvybkQb2yTwoThTw9KOL1IP1W3TQKfCxzQde0BxEXxXzMvPmojXNpFUcjqno0uiNGGWZUGgHcV-Zc0XC2gdeAdxhg0316jqqjDhh_FnIqrdJZzYobGsUfApvqkW15SJcRxbQRFM"
      },
      {
        eyebrow: "Seminar • Nov 2023",
        title: "公共议题研究论坛",
        description: "围绕技术伦理、全球治理与教育公平等议题进行密集讨论与辩论展示。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByFseMZwmofXsGE4JJkAXvMUaAz3b7pDs1AL11L57Cw7htdJpakEMU1oW4-8PyIq7_eXMFyusdMpWRS3XZX9ZeR_yqX0_RAgUHVZrYJH3Wm6SF9b1vaFmImH8xCALpSvFXDHZHDj6ATPTyj9xJD2p0Eo9qhTjZfl05O4jt247YbWFWeu0i9njXXhlOVMTupVDCMokaZgHTF5r1SfUx4WKSYDNoMv8zGWdSMxsfbNCo1VV5vZxBivh2gnRRCvXv8dE81RjJYzncBIw"
      },
      {
        eyebrow: "Tournament • July 2023",
        title: "夏季邀请赛",
        description: "多地高校共同参与的议会制辩论邀请赛，突出跨校对话与评判训练。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBeWd1mLjPSdAmenP2FBJNA9hk7oP82vI3BeQFGIazdoLAIj1k7J2d5_i5kMJuRjAl8aDDI519XfP5_ysMY515elI16yFSTSmKoeqddzhUdaoTp64XODDORir98o0fiAex2qJT6bIVJnUWuKajqJTNlbX_xMVNcHF1cEwcWcH_0DSaplZDnUsRWCOEdWIoPF3xvEUzEwjsX66BEgGI67rhmbevVWrWe8wJ7PtANzfxpI9-6dPLD8tnUPiB-BixwbHCVvuniKPY0VAw"
      }
    ],
    scheduleTitle: "学术日程",
    scheduleDescription: "精准把握每一个关键节点，从报名、训练到总决赛，辩论旅程由此展开。",
    schedule: [
      { date: "4月05日", title: "大律师公开讲课：逻辑之美", time: "19:00" },
      { date: "4月15日", title: "帝制春季赛总决赛", time: "15:00" },
      { date: "4月20日", title: "赛后复盘与评审工作坊", time: "14:30" }
    ]
  },
  "zh-Hant": {
    eyebrow: "Flagship Calendar",
    title: "賽事活動",
    description: "從論壇、工作坊到旗艦賽事，學社以更精緻的節奏安排每一次高密度的思想碰撞。",
    featureBadge: "Featured Gathering",
    featureTitle: "青年思辨論壇",
    featureBody: "聚集不同城市的辯手與導師，以更長時程、更深議題的形式開展對話與實戰演練。",
    featureImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClIgo5vmoWe6mPKD8ezTczgt8WNRh5dCNEAHHv9-gIpZkiC13ECv5v9ChkNsob9Fc5PEdpTurtzzU9uZVqtmAxmYk487MaicpgUJxOnz0kNFiipvy_vrGIHRTMNN5PTkZUgD_Vy1d2t6m38W4KuLf31ZVPo1Kex_HEFUts80r3m381Nbdq6p-LL79sjWq9sjIBKwGfoKxsf1oYSorGvEOsIyhGI063qdy9joBTSAbMpTJDtLGjjiXCrCbSYdAGYZYBee7Ir-HAiyI",
    countdown: ["06 週", "12 場", "∞ 對話"],
    primaryCta: "查看活動日程",
    secondaryCta: "申請參與",
    archiveTitle: "往昔紀事",
    archiveSubtitle: "從講座、工坊到跨境論壇，這些活動逐漸構成學社的公共性格。",
    archive: [
      {
        eyebrow: "Forum",
        title: "亞洲青年辯論峰會",
        description: "以區域議題為核心，讓青年辯手從政策、倫理與媒體觀點切入複雜問題。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDVXRoho6P-I4N6nPyD8T8Kx3x1OAs5BACgYjr5yUDKUakE-wTKVgsO5JlgRzxrrLio2_48dItPM2yf-gfTIK7n7DzgeeEV7aA4gDeedNxhMV0vX9G2Uyjb8p7hQ0VI6GbcUO5CiNWR3h3OzaQjlgGGxfF2_2jbOUnKI_VATV81PhfUNSl8Hy3vYP_buOf_dPxD0IdfDZsurlIwyF0guPWAjbdkOHbt437oaD40VcWyQiqUWjt5tbGs2x-c9qIyRQ1PKs8qSJkKWJI"
      },
      {
        eyebrow: "Workshop",
        title: "議題拆解實驗室",
        description: "透過小型工作坊與模擬賽，訓練辯手如何在短時間內建立有競爭力的比較框架。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDgmyBl0ybZHeZakdroSBniXExOpk-3Bhn5H_-MPYguvcczpR-_35M_e7F4Y4Bl5GG7Pdam4YaTsWV6yxBM5gp5uCwSkzamKGqWM2mlA9v-KhdWh9KIyztzu8zhhrXA8ByNgQ1tYvybkQb2yTwoThTw9KOL1IP1W3TQKfCxzQde0BxEXxXzMvPmojXNpFUcjqno0uiNGGWZUGgHcV-Zc0XC2gdeAdxhg0316jqqjDhh_FnIqrdJZzYobGsUfApvqkW15SJcRxbQRFM"
      },
      {
        eyebrow: "Seminar",
        title: "世界名校導師對談",
        description: "邀請國際辯論圈導師與學者分享競技之外的思辨方法與學習路徑。",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByFseMZwmofXsGE4JJkAXvMUaAz3b7pDs1AL11L57Cw7htdJpakEMU1oW4-8PyIq7_eXMFyusdMpWRS3XZX9ZeR_yqX0_RAgUHVZrYJH3Wm6SF9b1vaFmImH8xCALpSvFXDHZHDj6ATPTyj9xJD2p0Eo9qhTjZfl05O4jt247YbWFWeu0i9njXXhlOVMTupVDCMokaZgHTF5r1SfUx4WKSYDNoMv8zGWdSMxsfbNCo1VV5vZxBivh2gnRRCvXv8dE81RjJYzncBIw"
      }
    ],
    scheduleTitle: "近期安排",
    scheduleDescription: "在不同密度與節奏的活動中，逐步累積公共表達、比較分析與議題理解能力。",
    schedule: [
      { date: "05 Apr", title: "公開講座：思辨與判斷", time: "19:00" },
      { date: "13 Apr", title: "青年論壇：媒體與倫理", time: "14:00" },
      { date: "20 Apr", title: "評判工作坊", time: "16:00" }
    ]
  },
  en: {
    eyebrow: "Institutional Excellence",
    title: "Academic Activities & Tournaments",
    description: "Where eloquence meets intellect. Join the next generation of global leaders in our curated series of high-stakes debates and scholarly seminars.",
    featureBadge: "Featured Tournament",
    featureTitle: "Imperial Spring Cup 2024",
    featureBody: "A flagship competition combining institutional prestige, international adjudication, and a strong academic calendar.",
    featureImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClIgo5vmoWe6mPKD8ezTczgt8WNRh5dCNEAHHv9-gIpZkiC13ECv5v9ChkNsob9Fc5PEdpTurtzzU9uZVqtmAxmYk487MaicpgUJxOnz0kNFiipvy_vrGIHRTMNN5PTkZUgD_Vy1d2t6m38W4KuLf31ZVPo1Kex_HEFUts80r3m381Nbdq6p-LL79sjWq9sjIBKwGfoKxsf1oYSorGvEOsIyhGI063qdy9joBTSAbMpTJDtLGjjiXCrCbSYdAGYZYBee7Ir-HAiyI",
    countdown: ["08 Days", "14 Hours", "32 Mins"],
    primaryCta: "Register Now",
    secondaryCta: "Event Details",
    archiveTitle: "Past Chronicles",
    archiveSubtitle: "A legacy of intellectual discourse, workshops, and issue-driven seminars.",
    archive: [
      {
        eyebrow: "Seminar • Nov 2023",
        title: "Ethics of AI Seminar",
        description: "An exploration of digital morality and the future of human agency.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuByFseMZwmofXsGE4JJkAXvMUaAz3b7pDs1AL11L57Cw7htdJpakEMU1oW4-8PyIq7_eXMFyusdMpWRS3XZX9ZeR_yqX0_RAgUHVZrYJH3Wm6SF9b1vaFmImH8xCALpSvFXDHZHDj6ATPTyj9xJD2p0Eo9qhTjZfl05O4jt247YbWFWeu0i9njXXhlOVMTupVDCMokaZgHTF5r1SfUx4WKSYDNoMv8zGWdSMxsfbNCo1VV5vZxBivh2gnRRCvXv8dE81RjJYzncBIw"
      },
      {
        eyebrow: "Workshop • Sept 2023",
        title: "Rhetoric Masterclass",
        description: "Mastering persuasion through classical logic frameworks and speech architecture.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDgmyBl0ybZHeZakdroSBniXExOpk-3Bhn5H_-MPYguvcczpR-_35M_e7F4Y4Bl5GG7Pdam4YaTsWV6yxBM5gp5uCwSkzamKGqWM2mlA9v-KhdWh9KIyztzu8zhhrXA8ByNgQ1tYvybkQb2yTwoThTw9KOL1IP1W3TQKfCxzQde0BxEXxXzMvPmojXNpFUcjqno0uiNGGWZUGgHcV-Zc0XC2gdeAdxhg0316jqqjDhh_FnIqrdJZzYobGsUfApvqkW15SJcRxbQRFM"
      },
      {
        eyebrow: "Tournament • July 2023",
        title: "The Summer Invitations",
        description: "International students competing in BP-style debate formats.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBeWd1mLjPSdAmenP2FBJNA9hk7oP82vI3BeQFGIazdoLAIj1k7J2d5_i5kMJuRjAl8aDDI519XfP5_ysMY515elI16yFSTSmKoeqddzhUdaoTp64XODDORir98o0fiAex2qJT6bIVJnUWuKajqJTNlbX_xMVNcHF1cEwcWcH_0DSaplZDnUsRWCOEdWIoPF3xvEUzEwjsX66BEgGI67rhmbevVWrWe8wJ7PtANzfxpI9-6dPLD8tnUPiB-BixwbHCVvuniKPY0VAw"
      }
    ],
    scheduleTitle: "Academic Schedule",
    scheduleDescription: "Stay ahead of rigorous training sessions, workshops, and issue-based review seminars.",
    schedule: [
      { date: "March 15", title: "Policy Analysis Intensive", time: "14:00 - 17:00" },
      { date: "March 22", title: "Adjudication Training", time: "18:30 - 20:30" },
      { date: "March 29", title: "Case Study Review", time: "15:00 - 17:00" }
    ]
  }
};

export function EventsPage() {
  const { language } = useOutletContext<SiteOutletContext>();
  const content = eventsContent[language];

  return (
    <div className="content-page">
      <section className="page-hero page-hero-events">
        <div className="page-hero-copy">
          <p className="page-eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="page-lead">{content.description}</p>
          <div className="countdown-row">
            {content.countdown.map((item) => (
              <div key={item} className="countdown-pill">
                {item}
              </div>
            ))}
          </div>
          <div className="landing-actions">
            <button className="landing-button landing-button-primary">{content.primaryCta}</button>
            <button className="landing-button landing-button-secondary">{content.secondaryCta}</button>
          </div>
        </div>
        <div className="page-hero-media tall">
          <img src={content.featureImage} alt={content.featureTitle} />
        </div>
      </section>

      <section className="page-panel">
        <div className="page-feature-card">
          <div>
            <p className="page-eyebrow">{content.featureBadge}</p>
            <h2>{content.featureTitle}</h2>
            <p className="page-lead compact">{content.featureBody}</p>
          </div>
        </div>
      </section>

      <section className="page-panel">
        <div className="page-section-header">
          <div>
            <h2>{content.archiveTitle}</h2>
            <p>{content.archiveSubtitle}</p>
          </div>
        </div>
        <div className="archive-grid">
          {content.archive.map((item) => (
            <article key={item.title} className="archive-card">
              <div className="archive-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="archive-body">
                <p className="page-eyebrow subtle">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-panel page-panel-soft">
        <div className="page-section-header">
          <div>
            <h2>{content.scheduleTitle}</h2>
            <p>{content.scheduleDescription}</p>
          </div>
        </div>
        <div className="schedule-list">
          {content.schedule.map((item) => (
            <article key={`${item.date}-${item.title}`} className="schedule-item">
              <div>
                <p className="page-eyebrow subtle">{item.date}</p>
                <h3>{item.title}</h3>
              </div>
              <span>{item.time}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
