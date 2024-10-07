import { useState } from "react";
import Modal from "../common/Modal";

const AlertComprimsMode = () => {
  const [showModal, setShowModal] = useState(false);

  const minificationDetails = {
    javascript: {
      high: "Remove espaços, quebras de linha e renomeia variáveis e funções. Pode dificultar a depuração do código.",
      normal:
        "Remove comentários e espaços desnecessários, mantendo a estrutura original e a legibilidade do código.",
      low: "Apenas remove comentários, preservando totalmente a formatação e a legibilidade.",
    },
    html: {
      high: "Remove todos os espaços em branco, quebras de linha e atributos não essenciais, comprimindo o código ao máximo.",
      normal:
        "Remove comentários e espaços em branco extras, mantendo a estrutura do código intacta.",
      low: "Apenas remove comentários, sem alterar a formatação do conteúdo.",
    },
    css: {
      high: "Remove todos os espaços em branco, renomeia classes e IDs, e ofusca propriedades, tornando o código mais compacto.",
      normal:
        "Remove comentários e espaços desnecessários, sem afetar a legibilidade das classes e IDs.",
      low: "Apenas remove comentários, mantendo toda a estrutura e formatação original.",
    },
    json: {
      high: "Remove todos os espaços em branco e quebras de linha, comprimindo o JSON ao mínimo possível.",
      normal:
        "Remove espaços e quebras de linha desnecessários, mantendo a estrutura legível.",
      low: "Apenas remove espaços extras e mantém o conteúdo legível.",
    },
  };

  return (
    <div className="my-2 max-w-[400px] h-[70px] flex items-center justify-center border-l-yellow-600 border-l-2 rounded-md px-5 gap-5 bg-yellow-100 text-yellow-600">
      <i className="bi bi-exclamation-triangle"></i>
      <h1 className="text-xs">
        Atenção ao metodos de compressão de codigo. Saiba mais em{" "}
        <a
          onClick={() => setShowModal(true)}
          className="font-bold cursor-pointer"
        >
          tipos de compressão e suas diferenças
        </a>
      </h1>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Tipos de Compressão"
        type="minification"
        minificationDetails={minificationDetails}
      />
    </div>
  );
};

export default AlertComprimsMode;
