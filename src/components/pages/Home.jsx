import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import HeaderHomePage from "../layout/Headers/HeaderHomePage";

const HOMEPage = () => {
  const languages = [
    {
      name: "JavaScript",
      icon: CodeBracketIcon,
      route: "compress/javascript",
    },
    { name: "CSS", icon: SparklesIcon, route: "compress/css" },
    { name: "HTML", icon: GlobeAltIcon, route: "compress/html" },
    { name: "JSON", icon: CodeBracketIcon, route: "compress/json" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <HeaderHomePage />

      <div className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
          Bem-vindo ao Comprims!
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl mb-10">
          Selecione a linguagem que deseja comprimir e aproveite nosso serviço
          rápido, eficiente e fácil de usar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {languages.map((language) => (
            <Link
              key={language.name}
              to={language.route}
              className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 transform hover:scale-110 bg-slate-800 hover:bg-slate-700"
            >
              <language.icon className="w-12 h-12 mb-4 text-yellow-500" />
              <span className="text-xl font-semibold">{language.name}</span>
            </Link>
          ))}
        </div>

        <h1 className="font-bold text-2xl my-4">Por que usar?</h1>
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} index={index + 1} {...benefit} />
          ))}
        </div>

        <div className="w-full max-w-4xl mt-16">
          <h2 className="text-3xl font-bold mb-6">Tecnologias Usadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="flex items-center justify-center p-6 bg-slate-800 rounded-lg"
              >
                <span className="text-lg font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitCard = ({ index, title, description1, description2 }) => (
  <div className="bg-slate-800 p-6 rounded-lg">
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900">
        <span className="font-bold text-xl">{index}</span>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-400 mb-2">{description1}</p>
    {description2 && <p className="text-sm text-gray-400">{description2}</p>}
  </div>
);

const benefits = [
  {
    title: "Otimização de Código",
    description1:
      "Reduza o tamanho dos arquivos de código sem comprometer a estrutura.",
    description2:
      "Escolha entre diferentes níveis de compressão para atender às suas necessidades.",
  },
  {
    title: "Melhora a Performance do Site",
    description1:
      "Arquivos menores proporcionam carregamento mais rápido e melhor experiência do usuário.",
    description2: "Ideal para conexões lentas e sites pesados.",
  },
  {
    title: "Flexibilidade para Diversas Linguagens",
    description1:
      "Suporte para JavaScript, CSS, HTML e JSON com configurações personalizadas.",
  },
  {
    title: "Segurança e Clareza",
    description1:
      "Remova comentários e espaços desnecessários para um código mais seguro.",
    description2: "Ofuscação avançada para evitar cópias indesejadas.",
  },
  {
    title: "Economia de Custos com Servidores",
    description1: "Menor uso de banda e custos de hospedagem mais baixos.",
  },
  {
    title: "Fácil Integração e Uso",
    description1: "Interface intuitiva para minificação com poucos cliques.",
  },
  {
    title: "Compatível com Qualquer Plataforma",
    description1:
      "Use em qualquer sistema operacional ou ambiente de desenvolvimento.",
  },
];

const technologies = [
  "React",
  "Tailwind CSS",
  "Vite",
  "ESLint",
  "CodeMirror",
  "Heroicons",
];

export default HOMEPage;
