import { useState } from "react";

const CopyBtn = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false); // Estado para controlar a animação

  function copyCode(code) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setIsCopied(true); // Ativa a animação e altera o texto
          setTimeout(() => setIsCopied(false), 2000); // Remove a animação após 2 segundos
        })
        .catch(() => {
          console.error("Erro ao copiar o codigo");
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        } else {
          throw new Error("ExecCommand falhou");
        }
      } catch (error) {
        console.error(`Erro: ${error}`);
      }

      document.body.removeChild(textArea);
    }
  }

  return (
    <div
      className={`flex items-center gap-3 p-1 cursor-pointer ml-auto ${
        isCopied ? "animate-pulse" : ""
      }`} // Adiciona a animação de pulso
      onClick={() => copyCode(code)}
    >
      <i
        className={`bi bi-clipboard cursor-pointer text-slate-400 ${
          isCopied ? "text-green-500" : ""
        }`} // Altera a cor do ícone quando copiado
      />
      <h1 className={`text-[10px]`}>
        {" "}
        {/* Altera a cor do texto quando copiado */}
        {isCopied ? "Copiado!" : "Copiar Código"}
      </h1>
    </div>
  );
};

export default CopyBtn;
