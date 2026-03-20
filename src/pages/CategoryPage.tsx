import { Navigate, useParams } from "react-router-dom";
import { PrototypeCard } from "../components/PrototypeCard";
import { getCategoryBySlug, getPrototypesByCategory } from "../data/prototypes";

export function CategoryPage() {
  const { categorySlug } = useParams();

  if (!categorySlug) {
    return <Navigate to="/hub" replace />;
  }

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/hub" replace />;
  }

  const items = getPrototypesByCategory(categorySlug);

  return (
    <div className="stack-lg">
      <section className="panel stack-sm">
        <span className="eyebrow">Category</span>
        <h1>{category.title}</h1>
        <p className="lead">{category.description}</p>
      </section>

      <section className="prototype-grid">
        {items.map((prototype) => (
          <PrototypeCard key={prototype.slug} prototype={prototype} />
        ))}
      </section>
    </div>
  );
}
