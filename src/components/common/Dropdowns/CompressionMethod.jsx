import { useState, useEffect } from "react";
import Dropdown from "../Dropdown";
import {
  ExclamationTriangleIcon,
  ArrowDownIcon,
  FireIcon,
} from "@heroicons/react/16/solid";

const CompressionMethod = ({ setMethod }) => {
  const [modeCompression, setModeCompression] = useState("Fraca");
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (newMode) => {
    setModeCompression(newMode);
    setMethod(newMode);
  };

  return (
    <div
      className={`my-4 flex items-center justify-between border border-slate-700 p-2 rounded-md bg-slate-800 ${
        isFixed ? "fixed top-10 max-md:top-6 rounded-none px-10 left-0 backdrop-blur-md bg-slate-700/50 right-0 z-[60]" : ""
      }`}
    >
      <label className="font-bold text-sm border-r text-slate-400 border-slate-500 pr-3 text-gray-300">
        Método de Compressão
      </label>
      <div className="flex items-center gap-2">
        <h1 className="text-sm text-white font-medium">{modeCompression}</h1>
        <Dropdown
          icon={() => (
            <i className="bi bi-caret-down-fill cursor-pointer text-sm text-gray-300"></i>
          )}
          options={[
            {
              items: [
                {
                  label: "Fraca",
                  icon: ArrowDownIcon,
                  action: () => handleChange("Fraca"),
                  shortcut: "F",
                  
                },
                {
                  label: "Normal",
                  icon: ExclamationTriangleIcon,
                  action: () => handleChange("Normal"),
                  shortcut: "M",
                },
                {
                  label: "Alta",
                  icon: FireIcon,
                  action: () => handleChange("Alta"),
                  shortcut: "A",
                },
              ],
            },
          ]}
          className="bg-gray-700 text-white"
        />
      </div>
    </div>
  );
};

export default CompressionMethod;
