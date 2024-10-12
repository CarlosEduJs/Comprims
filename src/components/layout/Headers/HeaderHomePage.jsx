import { Link, useNavigate } from "react-router-dom";

import Dropdown from "../../common/Dropdown";

import {
  UserCircleIcon,
  UserGroupIcon,
  BugAntIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/16/solid";

const HeaderHomePage = () => {
  const navigate = useNavigate();

  // Funções para navegação
  const handleAbout = () => navigate("/about");
  const handlePolicy = () => navigate("/policy");
  const handleBugReport = () => {
    // Lógica para relatar um bug, se necessário
  };
  const handleCollab = () =>
    window.open("https://github.com/CarlosEduJs/Comprims", "_blank");

  return (
    <header className="py-3 px-[10rem] text-gray-600 bg-transparent backdrop-blur-md w-full mb-4 flex items-center justify-between">
      <h1 className="text-slate-400 font-bold">Comprims</h1>
      <div className="flex items-center gap-4">
        <Dropdown
          icon={() => (
            <button className="text-white text-sm font-bold hover:text-gray-400 hidden max-lg:flex">
              <i className="bi bi-list"></i>
            </button>
          )}
          options={[
            {
              items: [
                {
                  label: "Sobre o site",
                  icon: DocumentDuplicateIcon,
                  action: handleAbout, // Passar a função ao invés de chamá-la
                  shortcut: "S",
                },
                {
                  label: "Políticas de uso",
                  icon: UserCircleIcon,
                  action: handlePolicy, // Passar a função ao invés de chamá-la
                  shortcut: "P",
                },
                {
                  label: "Relatar Bug",
                  icon: BugAntIcon,
                  action: handleBugReport, // Função para relatar bug
                  shortcut: "B",
                },
                {
                  label: "Colabore",
                  icon: UserGroupIcon,
                  action: handleCollab, // Passar a função que abre o link
                  shortcut: "C",
                },
              ],
            },
          ]}
          className="bg-gray-700 text-white"
        />

        <div className="flex items-center gap-4 max-lg:hidden">
          <Link to="https://github.com/CarlosEduJs/Comprims" target="_blank">
            <button className="text-white text-sm font-bold hover:text-gray-400">
              GitHub
            </button>
          </Link>
          <Link to="/about">
            <button className="text-white text-sm font-bold hover:text-gray-400">
              Sobre o site
            </button>
          </Link>
          <Link to="/policy">
            <button className="text-white text-sm font-bold hover:text-gray-400">
              Políticas de uso
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHomePage;
