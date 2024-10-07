import { Link } from "react-router-dom";

import Dropdown from "../common/Dropdown";

import {
  UserCircleIcon,
  UserGroupIcon,
  BugAntIcon,
  ArrowsPointingInIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/16/solid";

const HeaderHomePage = () => {
  return (
    <header className="py-3  text-gray-600 bg-transparent backdrop-blur-md w-full mb-4 flex items-center justify-between">
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

        <div className="flex items-center gap-4 max-lg:hidden">
          <Link to="https://github.com/CarlosEduJs/Comprimis">
            <button className="text-white text-sm font-bold hover:text-gray-400">
              GitHub
            </button>
          </Link>
          <button className="text-white text-sm font-bold hover:text-gray-400">
            Duvidas
          </button>
          <button className="text-white text-sm font-bold hover:text-gray-400">
            Sobre o site
          </button>
          <button className="text-white text-sm font-bold hover:text-gray-400">
            Politicas de uso
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderHomePage;
