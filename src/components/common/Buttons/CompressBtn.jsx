import { useState } from "react";
import Toast from "../Toast";
import Modal from "../Modal";
import * as esprima from "esprima";

const CompressBtn = ({ codeString, modeCompress, typeCode }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showModal, setShowModal] = useState(false);
  const [compressedCode, setCompressedCode] = useState("");
  const [diff, setDiff] = useState([]);

  const modeCompression = modeCompress;

  const compressWeak = (code) => {
    return code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, ""); // Remove comentários
  };

  const compressNormal = (code) => {
    return compressWeak(code)
      .replace(/\s{2,}/g, " ") // Remove múltiplos espaços
      .replace(/\n\s*\n/g, "\n") // Remove linhas em branco
      .trim(); // Remove espaços no início e no fim
  };

  const compressStrong = (code) => {
    return compressNormal(code)
      .replace(/\s*([{}();,:])\s*/g, "$1") // Remove espaços em torno de símbolos
      .replace(/\n/g, "") // Remove quebras de linha
      .trim(); // Remove espaços finais
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

  const validateAndCompress = (type) => {
    if (type === "javascript") {
      try {
        esprima.parseScript(codeString); // Valida sintaxe
        handleCompression();
      } catch (error) {
        setToastMessage("Erro de sintaxe: " + error.message);
        setToastType("error");
        setShowToast(true);
      }
    } else if (type === "json") {
      try {
        JSON.parse(codeString);
        handleCompression();
      } catch (error) {
        setToastMessage("Erro de sintaxe: " + error.message);
        setToastType("error");
        setShowToast(true);
      }
    } else {
      handleCompression();
    }
  };

  const handleCompression = () => {
    let compressed = codeString;
    if (compressed.length <= 5) return;
    if (modeCompression === "Fraca") {
      compressed = compressWeak(codeString);
    } else if (modeCompression === "Normal") {
      compressed = compressNormal(codeString);
    } else if (modeCompression === "Alta") {
      compressed = compressStrong(codeString);
    }
    setCompressedCode(compressed);

    const diffResult = getCodeDiff(codeString, compressed);
    setDiff(diffResult);

    setShowModal(true);
    setToastMessage("Código comprimido com sucesso!");
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
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 text-xs font-bold rounded-md flex items-center gap-2"
        onClick={() => validateAndCompress(typeCode)}
      >
        <i className="bi bi-gear-fill"></i>
        Comprimir Código
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Código Comprimido"
        type="code"
        codeString={compressedCode}
        codeType={typeCode}
        diff={diff}
        stats={{
          originalSize: new Blob([codeString]).size,
          compressedSize: new Blob([compressedCode]).size,
          reduction:
            new Blob([codeString]).size - new Blob([compressedCode]).size,
          reductionPercentage: (
            ((new Blob([codeString]).size - new Blob([compressedCode]).size) /
              new Blob([codeString]).size) *
            100
          ).toFixed(2),
        }}
      />
    </>
  );
};

export default CompressBtn;
