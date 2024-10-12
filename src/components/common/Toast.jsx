import { useState, useEffect } from "react";

const Toast = ({ type = "success", message, duration = 5000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  // Estilos e cores para cada tipo de toast
  const typeStyles = {
    success: "bg-green-500 text-white dark:bg-green-600",
    error: "bg-red-500 text-white dark:bg-red-600",
    info: "bg-blue-500 text-white dark:bg-blue-600",
    warning: "bg-yellow-500 text-white dark:bg-yellow-600",
  };

  const typeIcons = {
    success: "bi-check-circle-fill",  
    error: "bi-exclamation-triangle-fill",  
    info: "bi-info-circle-fill",  
    warning: "bi-exclamation-circle-fill",  
  };

  return (
    <div
      className={`fixed z-[80] bottom-4 right-4 flex items-center px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${typeStyles[type]}`}
    >
      <i className={`bi ${typeIcons[type]} text-xl mr-3`}></i>
      <h1 className="flex-grow font-bold text-sm">{message}</h1>
      <button onClick={() => setVisible(false)} className="ml-4 text-white">
        <i className="bi bi-x w-5 h-5"></i>
      </button>
    </div>
  );
};

export default Toast;
