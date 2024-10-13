// Importações
import { Routes, Route, useLocation } from "react-router-dom";

// Páginas
import NotFoundPage from "./components/pages/404";
import HOMEPage from "./components/pages/Home";
import UsagePolicy from "./components/pages/UsagePolicy";
import AboutPage from "./components/pages/AboutSite";
import JSPage from "./components/pages/JSComprimmer";
import HTMLPage from "./components/pages/HTMLComprimmer";
import CSSPage from "./components/pages/CSSComprimmer";
import JSONPage from "./components/pages/JSONComprimmer";

// Componentes de layout
import Header from "./components/layout/Headers/Header";

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen back">
      {location.pathname !== "/" &&
        location.pathname !== "/home" &&
        location.pathname !== "/policy" &&
        location.pathname !== "/about" && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HOMEPage />} />
          <Route path="/home" element={<HOMEPage />} />
          <Route path="/policy" element={<UsagePolicy />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/compress/html" element={<HTMLPage />} />
          <Route path="/compress/javascript" element={<JSPage />} />
          <Route path="/compress/css" element={<CSSPage />} />
          <Route path="/compress/json" element={<JSONPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
