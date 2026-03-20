import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { categories } from "../data/prototypes";

type AppShellProps = {
  children?: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <NavLink className="brand" to="/hub">
            Roro Prototype Hub
          </NavLink>
          <p className="brand-subtitle">把静态原型整理成可继续开发的前端工作台</p>
        </div>
        <nav className="topnav">
          <NavLink to="/hub">Overview</NavLink>
          <NavLink to="/hub/design-system">Design System</NavLink>
          {categories.map((category) => (
            <NavLink key={category.slug} to={`/hub/category/${category.slug}`}>
              {category.title}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page-container">{children ?? <Outlet />}</main>
    </div>
  );
}
