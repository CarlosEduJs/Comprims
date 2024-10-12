import { Link } from "react-router-dom";
import { CodeBracketIcon, SparklesIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import HeaderHomePage from "../layout/Headers/HeaderHomePage";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <HeaderHomePage />

      <div className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
          Sobre o Comprims
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl mb-10">
          O Comprims é uma ferramenta de compressão de código desenvolvida para otimizar seu fluxo de trabalho.
          Com o Comprims, você pode reduzir o tamanho de arquivos de código sem comprometer a estrutura, melhorando a performance do seu site.
        </p>

        {/* Seção de Benefícios */}
        <h2 className="text-3xl font-bold mb-6">Por que usar o Comprims?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} index={index + 1} {...benefit} />
          ))}
        </div>

        {/* Link para a Página Inicial */}
        <Link
          to="/"
          className="mt-10 text-yellow-500 hover:underline"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

const BenefitCard = ({ index, title, description }) => (
  <div className="bg-slate-800 p-6 rounded-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900">
        <span className="font-bold text-xl">{index}</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const benefits = [
  {
    title: "Otimização Rápida",
    description: "Reduza o tamanho dos arquivos de forma eficiente, melhorando o carregamento do seu site.",
  },
  {
    title: "Suporte a Múltiplas Linguagens",
    description: "Compatível com JavaScript, CSS, HTML e JSON.",
  },
  {
    title: "Interface Intuitiva",
    description: "Desenvolvido para ser fácil de usar, sem complicações.",
  },
  {
    title: "Acesso Direto",
    description: "Todas as operações são realizadas no seu navegador, sem armazenamento externo.",
  },
  {
    title: "Gratuito e Acessível",
    description: "Aproveite todos os benefícios sem custo algum.",
  },
];

export default AboutPage;
