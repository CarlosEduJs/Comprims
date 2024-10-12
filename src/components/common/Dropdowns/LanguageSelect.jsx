import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Dropdown from "../Dropdown";

import {
  CodeBracketIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const LanguageSelect = () => {
  const languages = [
    {
      name: "JavaScript",
      icon: CodeBracketIcon,
      route: "javascript",
    },
    { name: "CSS", icon: SparklesIcon, route: "css" },
    { name: "HTML", icon: GlobeAltIcon, route: "html" },
    { name: "JSON", icon: CodeBracketIcon, route: "json" },
  ];

  const location = useLocation();

  const getLanguageFromRoute = () => {
    const currentRoute = location.pathname.split("/").pop();
    const matchedLanguage = languages.find(
      (language) => language.route === currentRoute
    );
    return matchedLanguage ? matchedLanguage.name : languages[0].name;
  };

  const [selectedLanguage, setSelectedLanguage] =
    useState(getLanguageFromRoute);
  const [redirectTo, setRedirectTo] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    localStorage.setItem("selectedLanguage", language.name);
    setRedirectTo(`/compress/${language.route}`);
  };

  useEffect(() => {
    const currentLanguage = getLanguageFromRoute();
    if (currentLanguage !== selectedLanguage) {
      setSelectedLanguage(currentLanguage);
    }
  }, [location]);

  return (
    <div className="flex items-center justify-between gap-3 w-[220px] border border-slate-700 bg-slate-800 p-2 rounded-md">
      {redirectTo && <Navigate to={redirectTo} replace />}
      <label className="font-bold text-sm pr-3 text-slate-400 border-r border-slate-500">
        Linguagem
      </label>
      <h1 className="text-sm text-white font-medium">{selectedLanguage}</h1>
      <Dropdown
        icon={() => (
          <i className="bi bi-caret-down-fill cursor-pointer text-sm text-gray-300"></i>
        )}
        options={[
          {
            items: [
              ...languages.map((language) => ({
                label: language.name,
                icon: language.icon,
                action: () => handleLanguageSelect(language),
                shortcut: language.name[0],
              })),
            ],
          },
        ]}
        className="bg-gray-700 text-white"
      />
    </div>
  );
};

export default LanguageSelect;
