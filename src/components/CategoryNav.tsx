import { NavLink } from "react-router-dom";
import { categories } from "../data/prototypes";

export function CategoryNav() {
  return (
    <div className="category-nav">
      {categories.map((category) => (
        <NavLink
          key={category.slug}
          className="category-chip"
          to={`/hub/category/${category.slug}`}
        >
          <span>{category.title}</span>
          <strong>{category.pageCount}</strong>
        </NavLink>
      ))}
    </div>
  );
}
