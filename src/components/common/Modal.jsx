import { Transition } from "@headlessui/react";

//Modals
import CodePreview from "./Modals/CodePreview";
import MinificationDetails from "./Modals/MinificationDetails";

const Modal = ({
  isOpen,
  onClose,
  title,
  type,
  codeString,
  codeType,
  diff,
  stats,
  minificationDetails,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Transition show={isOpen}>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[70] transition-opacity duration-300 ease-in-out"
        onClick={handleOutsideClick}
      >
        <div
          className="bg-gray-800 text-white rounded-xl shadow-2xl max-w-3xl w-full transform transition-all duration-300 ease-in-out scale-95 sm:scale-100 overflow-y-auto h-[85vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          
          <div className="p-6 border-b border-gray-700 flex justify-between items-center sticky top-0 bg-gray-800 z-10">
            <h2 className="text-sm font-semibold">{title}</h2>
            <button
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              onClick={onClose}
            >
              ✖
            </button>
          </div>

          <div className="p-6 space-y-6">
            {type === "minification" && (
              <MinificationDetails minificationDetails={minificationDetails} />
            )}

            {type === "code" && (
              <CodePreview
                codeString={codeString}
                diff={diff}
                stats={stats}
                codeType={codeType}
              />
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Modal;
