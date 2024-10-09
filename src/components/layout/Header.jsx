import { useState, useEffect } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";

import LanguageSelect from "../common/dropdowns/LanguageSelect";
import Dropdown from "../common/Dropdown";

import {
  UserCircleIcon,
  UserGroupIcon,
  BugAntIcon,
  ArrowsPointingInIcon,
  DocumentDuplicateIcon,
  CodeBracketIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/16/solid";

const Header = () => {
  const languages = [
    { name: "JavaScript", icon: CodeBracketIcon, route: "javascript" },
    { name: "CSS", icon: SparklesIcon, route: "css" },
    { name: "HTML", icon: GlobeAltIcon, route: "html" },
    { name: "Json", icon: CodeBracketIcon, route: "json" },
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
    <header className="py-2 px-[40px] border-b border-slate-700 text-gray-600 bg-transparent backdrop-blur-md flex items-center justify-between fixed w-[100vw] z-[70]">
      {redirectTo && <Navigate to={redirectTo} replace />}
      <h1 className="text-gradient-animated font-bold">Comprims</h1>

      <div className="flex items-center gap-4">
        <Link to="https://github.com/CarlosEduJs/Comprims">
          <button className="text-white text-sm font-bold hover:text-gray-400">
            GitHub
          </button>
        </Link>
        <div className="max-md:hidden">
          <LanguageSelect />
        </div>
        <Dropdown
          icon={() => (
            <button className="text-white text-sm font-bold hover:text-gray-400 flex">
              <i className="bi bi-list"></i>
            </button>
          )}
          options={[
            {
              label: "Selecione uma linguagem:",
              items: [
                ...languages.map((language) => ({
                  label: language.name,
                  icon: language.icon,
                  action: () => handleLanguageSelect(language),
                  shortcut: language.name[0],
                })),
              ],
            },
            {
              label: "Outros",
              items: [
                {
                  label: "Sobre o site",
                  icon: DocumentDuplicateIcon,
                  action: null,
                  shortcut: "S",
                },
                {
                  label: "Políticas de uso",
                  icon: UserCircleIcon,
                  action: null,
                  shortcut: "P",
                },
                {
                  label: "Relatar Bug",
                  icon: BugAntIcon,
                  action: null,
                  shortcut: "B",
                },
                {
                  label: "Colabore",
                  icon: UserGroupIcon,
                  action: null,
                  shortcut: "C",
                },
              ],
            },
            {
              label: "Duvidas",
              items: [
                {
                  label: "Minificação",
                  icon: ArrowsPointingInIcon,
                  action: null,
                  shortcut: "M",
                },
              ],
            },
          ]}
          className="bg-gray-700 text-white"
        />
      </div>
    </header>
  );
};

export default Header;
