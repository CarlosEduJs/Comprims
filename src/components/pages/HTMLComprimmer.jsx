import { useState, useEffect } from "react";
import AlertComprimsMode from "../layout/AlertComprimerModes";

import Toast from "../common/Toast";

import Code from "../common/Code";

import CompressionMethod from "../common/Dropdowns/CompressionMethod";

import CompressBtn from "../common/Buttons/CompressBtn";
import SmartButton from "../common/Buttons/SmartBtn";

const HTMLPage = () => {
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

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [codeString, setCodeString] = useState(
    `<!-- Insira seu codigo html aqui -->`
  );
  const [modeCompression, setModeCompression] = useState("Fraca");

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isInvalidFile, setIsInvalidFile] = useState(false);
  const [countFiles, setCountFiles] = useState(0);

  const handleUpload = () => {
    document.querySelector('input[type="file"]').click();
  };

  const selectHandleUpload = (event) => {
    const files = Array.from(event.target.files);

    const validFiles = files.filter((file) => file.name.endsWith(".html"));

    if (validFiles.length !== files.length) {
      setIsInvalidFile(true);
      setToastMessage("Arquivos Inválidos! Tente novamente");
      setToastType("error");
      setShowToast(true);
      return;
    } else {
      setIsInvalidFile(false);
    }

    if (uploadedFiles.length + files.length > 10) {
      setIsInvalidFile(true);
      setToastMessage("Maximo de Upload Atingidos! Tente novamente!");
      setToastType("error");
      setShowToast(true);
      return;
    } else {
      setIsInvalidFile(false);
    }

    const filePromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            name: file.name,
            content: e.target.result,
            size: file.size,
            type: file.type,
          });
        };
        reader.readAsText(file);
      });
    });

    Promise.all(filePromises).then((uploaded) => {
      const newFiles = [...uploadedFiles, ...uploaded]; // Atualiza a lista de arquivos
      setUploadedFiles(newFiles);
      setCountFiles(newFiles.length);
    });
  };

  const removeFile = (index) => {
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index); // Remove o arquivo da lista
    setUploadedFiles(updatedFiles);
    setCountFiles(updatedFiles.length);
  };

  const handleDropOnEditor = (e) => {
    e.preventDefault();
    const fileIndex = e.dataTransfer.getData("fileIndex");
    const file = uploadedFiles[fileIndex];
    if (file) setCodeString(file.content);
  };

  return (
    <section className="flex justify-between pt-9 h-full max-xl:flex-col">
      {showToast && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}
      <aside className="xl:fixed xl:z-[60] xl:h-full xl:top-0 xl:py-[5rem] max-xl:py-[3rem] bg-gray-900 max-xl:w-full max-xl:border-b xl:border-r border-slate-700 text-white p-4">
        <h1 className="text-max-xl font-bold mb-4">Configurações</h1>

        <div>
          <CompressionMethod setMethod={setModeCompression} />
        </div>
        <AlertComprimsMode />

        <div className="my-4">
          <button
            onClick={handleUpload}
            className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 text-xs font-bold rounded-md w-full ${
              isFixed
                ? "fixed top-[6rem] max-md:top-20 rounded-none px-10 left-0 backdrop-blur-md bg-blue-700/50 right-0 z-"
                : ""
            }`}
          >
            Importar Arquivo(s)
          </button>
          <input
            type="file"
            accept=".html"
            onChange={selectHandleUpload}
            className="hidden"
            multiple
          />
        </div>

        <div
          className={`flex flex-col gap-2 justify-center items-center w-full border py-2 rounded-md max-lg:hidden ${
            isInvalidFile ? "border-red-600" : "border-slate-800"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            e.currentTarget.classList.add("bg-slate-900", "border-blue-600");
          }}
          onDragLeave={(e) => {
            e.currentTarget.classList.remove("bg-slate-900", "border-blue-600");
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.currentTarget.classList.remove("bg-slate-900", "border-blue-600");

            const files = Array.from(e.dataTransfer.files);

            const validFiles = files.filter((file) =>
              file.name.endsWith(".html")
            );

            if (validFiles.length !== files.length) {
              setIsInvalidFile(true);
              setToastMessage("Arquivos Inválidos! Tente novamente");
              setToastType("error");
              setShowToast(true);
            } else if (uploadedFiles.length + validFiles.length > 10) {
              setToastMessage("Maximo de upload atingido! Tente novamente");
              setToastType("error");
              setShowToast(true);
              setIsInvalidFile(true);
              return;
            } else {
              setIsInvalidFile(false);
              const files = Array.from(e.dataTransfer.files);
              selectHandleUpload({ target: { files } });
              setCountFiles(files.length);
            }
          }}
        >
          <i className="bi bi-filetype-html text-slate-600 text-4xl"></i>
          <h3 className="text-sm font-bold text-slate-700">
            Arraste seu(s) arquivo(s) até aqui
          </h3>
        </div>

        <div className="grid grid-cols-1 max-h-[340px]  overflow-y-auto p-4 rounded-md border border-slate-800 my-4 gap-3">
          <h1 className="text-slate-400 font-bold">
            Arquivos: {countFiles}/10
          </h1>
          <div className="overflow-y-auto">
            {uploadedFiles.length > 0 ? (
              uploadedFiles.map((file, index) => (
                <div
                  onClick={() => setCodeString(file.content)}
                  key={index}
                  className="border rounded-lg mt-2 px-4 py-3 border-slate-700 flex items-center justify-between cursor-pointer max-h-[60px] hover:bg-slate-800 transition-colors duration-200"
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("fileIndex", index)
                  }
                >
                  <div className="flex items-center gap-3">
                    <i className="bi bi-filetype-html text-xl text-slate-400"></i>
                    <h1 className="text-sm font-semibold text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-[230px]">
                      {file.name}
                    </h1>
                  </div>
                  <i
                    className="bi bi-x text-lg text-slate-500 hover:text-red-600 transition-colors duration-150"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }}
                  ></i>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-3 justify-center items-center w-full ">
                <i className="bi bi-filetype-html text-slate-600 text-5xl "></i>
                <h3 className="text-sm font-semibold text-slate-600">
                  Nenhum upload
                </h3>
              </div>
            )}
          </div>
        </div>
      </aside>

      <div className="xl:pl-[29rem] xl:pr-4 flex-1 bg-gray-900 text-white p-4 overflow-x-hidden">
        <div className="flex gap-2 mb-3 pt-4">
          <CompressBtn
            codeString={codeString}
            modeCompress={modeCompression}
            typeCode={"html"}
          />
          <SmartButton codeString={codeString} typeCode={"html"} />
        </div>
        <div onDragOver={(e) => e.preventDefault()} onDrop={handleDropOnEditor}>
          <Code
            setHeight={"75vh"}
            codeType="html"
            InitialCodeString={codeString}
            codeEditable={true}
            setCodeString={setCodeString}
            codeString={codeString}
          />
        </div>
      </div>
    </section>
  );
};

export default HTMLPage;
