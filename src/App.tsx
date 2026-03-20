import { Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { SiteShell } from "./components/SiteShell";
import { AboutPage } from "./pages/AboutPage";
import { CategoryPage } from "./pages/CategoryPage";
import { DesignSystemPage } from "./pages/DesignSystemPage";
import { EventsPage } from "./pages/EventsPage";
import { HomeLandingPage } from "./pages/HomeLandingPage";
import { HomePage } from "./pages/HomePage";
import { PrototypeDetailPage } from "./pages/PrototypeDetailPage";
import { ResourcesPage } from "./pages/ResourcesPage";

function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route path="/" element={<HomeLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Route>

      <Route path="/hub" element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="design-system" element={<DesignSystemPage />} />
        <Route path="category/:categorySlug" element={<CategoryPage />} />
        <Route path="prototype/:prototypeSlug" element={<PrototypeDetailPage />} />
        <Route path="*" element={<Navigate to="/hub" replace />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
