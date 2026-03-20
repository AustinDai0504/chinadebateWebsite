import { Link } from "react-router-dom";
import { CategoryNav } from "../components/CategoryNav";
import { PrototypeCard } from "../components/PrototypeCard";
import { categories, designSystem, prototypes } from "../data/prototypes";

export function HomePage() {
  return (
    <div className="stack-lg">
      <section className="hero-panel">
        <div className="stack-md">
          <span className="eyebrow">Prototype Workspace</span>
          <h1>这套工程把分散的 HTML 原型，整理成了统一的前端入口。</h1>
          <p className="lead">
            现在的重点不是马上重写所有页面，而是先建立统一的数据层、路由层和资产管理方式，
            让后续逐页组件化有稳定落点。
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <strong>{prototypes.length}</strong>
            <span>已收录原型</span>
          </div>
          <div className="stat-card">
            <strong>{categories.length}</strong>
            <span>页面分组</span>
          </div>
          <div className="stat-card">
            <strong>1</strong>
            <span>品牌设计文档</span>
          </div>
        </div>
      </section>

      <CategoryNav />

      <section className="panel stack-md">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Recommended Start</span>
            <h2>先从可比性最高的原型开始选版</h2>
          </div>
          <Link className="button button-secondary" to="/hub/design-system">
            查看设计文档
          </Link>
        </div>
        <div className="prototype-grid">
          {prototypes.slice(0, 6).map((prototype) => (
            <PrototypeCard key={prototype.slug} prototype={prototype} />
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Structure</span>
            <h2>后续迁移路径</h2>
          </div>
        </div>
        <div className="migration-grid">
          <div>
            <h3>1. 原型归档</h3>
            <p>通过 `sync:prototypes` 统一复制原始 HTML、截图和设计文档到公共目录。</p>
          </div>
          <div>
            <h3>2. 版本对比</h3>
            <p>在路由里浏览各组原型，先做选版，再决定哪一页优先正式组件化。</p>
          </div>
          <div>
            <h3>3. 渐进重构</h3>
            <p>保留原型可访问能力，同时逐步把导航、页脚、Hero、卡片等抽成真实组件。</p>
          </div>
        </div>
        <p className="supporting-copy">
          设计系统来源：{designSystem.title}。原始文档会在设计系统页面里直接读取展示。
        </p>
      </section>
    </div>
  );
}
