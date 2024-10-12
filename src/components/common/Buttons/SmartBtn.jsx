import { useState } from "react";
import * as esprima from "esprima";
import Toast from "../Toast";
import Modal from "../Modal";

const SmartButton = ({ codeString, typeCode }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [showModal, setShowModal] = useState(false);
  const [compressedCode, setCompressedCode] = useState("");
  const [modeCompression, setModeCompression] = useState("Fraca");
  const [diff, setDiff] = useState([]);

  // Funções de compressão
  const compressWeak = (code) => {
    return code
      .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  const compressNormal = (code) => {
    return compressWeak(code)
      .replace(/\n\s*\n/g, "\n")
      .replace(/\s*([{}();,:])\s*/g, "$1");
  };

  const compressStrong = (code) => {
    let minifiedCode = compressNormal(code);
    minifiedCode = minifiedCode.replace(/var\s+\w+\s*=\s*null;/g, "");
    return minifiedCode;
  };

  const getCodeDiff = (original, compressed) => {
    const originalLines = original.split("\n");
    const compressedLines = compressed.split("\n");

    let diffResult = [];

    originalLines.forEach((line, index) => {
      const trimmedLine = line.trim();
      const compressedLine = compressedLines[index]
        ? compressedLines[index].trim()
        : null;

      if (trimmedLine !== compressedLine) {
        if (compressedLine === null) {
          diffResult.push({ type: "removed", line: `- ${trimmedLine}` });
        } else if (!originalLines.includes(compressedLine)) {
          diffResult.push({ type: "added", line: `+ ${compressedLine}` });
        }
      }
    });

    return diffResult;
  };

  const intelligentCompression = () => {
    const codeLength = codeString.length;
    const commentCount = (
      codeString.match(/\/\*.*?\*\/|\/\/.*(?=[\n\r])/g) || []
    ).length;

    let newModeCompression = "Fraca";
    if (codeLength > 5000 || commentCount > 30) {
      newModeCompression = "Muito Alta";
    } else if (codeLength > 3000 || commentCount > 20) {
      newModeCompression = "Alta";
    } else if (codeLength > 1500 || commentCount > 10) {
      newModeCompression = "Normal";
    }

    setModeCompression(newModeCompression);
    if (typeCode === "html" || typeCode === "css") {
      handleCompression(newModeCompression); // Compressão direta
    } else {
      validateAndCompress(typeCode); // Para JS e JSON, validar antes de comprimir
    }
  };

  const validateAndCompress = (type) => {
    if (type === "javascript") {
      try {
        esprima.parseScript(codeString);
        handleCompression(modeCompression);
      } catch (error) {
        setToastMessage("Erro de sintaxe no código: " + error.message);
        setToastType("error");
        setShowToast(true);
      }
    } else if (type === "json") {
      try {
        JSON.parse(codeString);
        handleCompression(modeCompression);
      } catch (error) {
        setToastMessage("Erro de sintaxe no código: " + error.message);
        setToastType("error");
        setShowToast(true);
      }
    }
  };

  const handleCompression = (mode) => {
    let compressed = codeString;
    if (compressed.length <= 5) return;
    if (mode === "Fraca") {
      compressed = compressWeak(codeString);
    } else if (mode === "Normal") {
      compressed = compressNormal(codeString);
    } else if (mode === "Alta" || mode === "Muito Alta") {
      compressed = compressStrong(codeString);
    }
    const diffResult = getCodeDiff(codeString, compressed);
    setDiff(diffResult);

    setCompressedCode(compressed);
    showSuccessToast("Código comprimido com sucesso!");
    setShowModal(true);
  };

  const showSuccessToast = (message) => {
    setToastMessage(message);
    setToastType("success");
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <Toast
          type={toastType}
          message={toastMessage}
          onClose={() => setShowToast(false)}
        />
      )}

      <button
        className="border border-green-600 hover:bg-green-700 text-white py-2 px-4 text-xs font-bold rounded-md flex items-center gap-2"
        onClick={intelligentCompression}
      >
        <i className="bi bi-lightning-fill"></i>
        Compressão Inteligente
      </button>

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Código Comprimido"
          type="code"
          codeString={compressedCode}
          codeType={typeCode}
          diff={diff}
          stats={{
            originalSize: codeString ? new Blob([codeString]).size : 0,
            compressedSize: compressedCode
              ? new Blob([compressedCode]).size
              : 0,
            reduction:
              new Blob([codeString]).size - new Blob([compressedCode]).size,
            reductionPercentage: codeString
              ? (
                  ((new Blob([codeString]).size -
                    new Blob([compressedCode]).size) /
                    new Blob([codeString]).size) *
                  100
                ).toFixed(2)
              : 0,
          }}
        />
      )}
    </>
  );
};

export default SmartButton;
