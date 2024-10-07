import { Routes, Route, useLocation } from "react-router-dom";

// pages
import HOMEPage from "./components/pages/Home";
import JSPage from "./components/pages/JSComprimmer";
import HTMLPage from "./components/pages/HTMLComprimmer";
import CSSPage from "./components/pages/CSSComprimmer";
import JSONPage from "./components/pages/JSONComprimmer";

// layout components
import Header from "./components/layout/Header";

function App() {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen back">
      
      {location.pathname !== "/" && location.pathname !== "/home" && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HOMEPage />} />
          <Route path="/home" element={<HOMEPage />} />
          <Route path="/compress/html" element={<HTMLPage />} />
          <Route path="/compress/javascript" element={<JSPage />} />
          <Route path="/compress/css" element={<CSSPage />} />
          <Route path="/compress/json" element={<JSONPage />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
