import { Link } from "react-router-dom";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";

import HeaderHomePage from "../layout/HeaderHomePage";

const HOMEPage = () => {
  const languages = [
    {
      name: "JavaScript",
      icon: CodeBracketIcon,
      route: "/compress/javascript",
    },
    { name: "CSS", icon: SparklesIcon, route: "/compress/css" },
    { name: "HTML", icon: GlobeAltIcon, route: "/compress/html" },
    { name: "Json", icon: CodeBracketIcon, route: "/compress/json" },
  ];

  return (
    <div className="flex px-12 flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <HeaderHomePage />
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-[20%]">
        Bem-vindo ao Comprims!
      </h1>
      <p className="text-lg text-gray-400 text-center mx-3 max-w-2xl my-5">
        Selecione a linguagem que você deseja comprimir e explore o poder do
        nosso site. Simples, rápido e eficiente.
      </p>

      <div className="grid grid-cols-1 mb-[50%] sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {languages.map((language) => (
          <Link
            key={language.name}
            to={language.route}
            className="flex flex-col items-center p-6 bg-slate-800 hover:bg-slate-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105 rounded-lg"
          >
            <language.icon className="w-12 h-12 mb-4 text-yellow-500" />
            <span className="text-xl font-semibold">{language.name}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2 px-5 mb-[20%]">
        <h1 className="font-bold text-2xl">Por que usar o Comprims?</h1>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {/* Otimização de Código */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">1</h1>
              </div>
              <div className="flex flex-col">
                <h1>Otimização de código</h1>
                <p className="text-sm text-slate-400 mb-2">
                  O Comprims oferece um sistema inteligente de minificação que
                  reduz drasticamente o tamanho dos seus arquivos de código sem
                  comprometer a qualidade ou a estrutura.
                </p>
                <p className="text-sm text-slate-400 mb-2">
                  Com opções de compressão fraca, normal e forte, você pode
                  adaptar o processo conforme a necessidade de seu projeto.
                </p>
              </div>
            </div>
          </div>

          {/* Melhora a Performance do Site */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">2</h1>
              </div>
              <div className="flex flex-col">
                <h1>Melhora a Performance do Site</h1>
                <p className="text-sm text-slate-400 mb-2">
                  Ao reduzir o tamanho dos arquivos, o Comprims acelera o
                  carregamento do seu site, proporcionando uma experiência de
                  usuário mais rápida e otimizada.
                </p>
                <p className="text-sm text-slate-400 mb-2">
                  Arquivos menores significam menos banda consumida, o que
                  melhora o desempenho em conexões lentas.
                </p>
              </div>
            </div>
          </div>

          {/* Flexibilidade para Diversas Linguagens */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">3</h1>
              </div>
              <div className="flex flex-col">
                <h1>Flexibilidade para Diversas Linguagens</h1>
                <p className="text-sm text-slate-400 mb-2">
                  O Comprims oferece suporte a diversas linguagens, como
                  JavaScript, CSS, HTML, e JSON, permitindo que você escolha a
                  melhor abordagem para cada uma.
                </p>
                <p className="text-sm text-slate-400 mb-2">
                  Cada linguagem tem sua própria configuração de compressão
                  personalizada, garantindo um resultado otimizado.
                </p>
              </div>
            </div>
          </div>

          {/* Segurança e Clareza */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">4</h1>
              </div>
              <div className="flex flex-col">
                <h1>Segurança e Clareza</h1>
                <p className="text-sm text-slate-400 mb-2">
                  O Comprims remove comentários e espaços em branco
                  desnecessários, tornando seu código mais limpo e seguro.
                </p>
                <p className="text-sm text-slate-400 mb-2">
                  A compressão mais forte ofusca o código, dificultando a cópia
                  ou engenharia reversa.
                </p>
              </div>
            </div>
          </div>

          {/* Economia de Custos com Servidores */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">5</h1>
              </div>
              <div className="flex flex-col">
                <h1>Economia de Custos com Servidores</h1>
                <p className="text-sm text-slate-400 mb-2">
                  Com arquivos menores, você consome menos dados e economiza
                  custos de hospedagem e manutenção de servidores, especialmente
                  para projetos de grande escala.
                </p>
              </div>
            </div>
          </div>

          {/* Fácil Integração e Uso */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">6</h1>
              </div>
              <div className="flex flex-col">
                <h1>Fácil Integração e Uso</h1>
                <p className="text-sm text-slate-400 mb-2">
                  O Comprims oferece uma interface amigável que permite a
                  minificação de arquivos de forma simples, em poucos cliques,
                  sem necessidade de conhecimento técnico avançado.
                </p>
              </div>
            </div>
          </div>

          {/* Compatível com Qualquer Plataforma */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">7</h1>
              </div>
              <div className="flex flex-col">
                <h1>Compatível com Qualquer Plataforma</h1>
                <p className="text-sm text-slate-400 mb-2">
                  Não importa se você usa Windows, Mac ou Linux, o Comprims é
                  compatível com qualquer sistema operacional ou ambiente de
                  desenvolvimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-9 px-4">
        <h1 className="font-bold text-2xl">Tecnologias Usadas no Comprims</h1>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {/* CodeMirror */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">1</h1>
              </div>
              <div className="flex flex-col">
                <h1>CodeMirror</h1>
                <p className="text-sm text-slate-400 mb-2">
                  O CodeMirror é uma biblioteca poderosa para a edição de código
                  dentro do navegador. No Comprims, usamos o CodeMirror para
                  fornecer uma interface de edição de código fluida e
                  responsiva, oferecendo destaque de sintaxe e várias
                  funcionalidades avançadas.
                </p>
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">2</h1>
              </div>
              <div className="flex flex-col">
                <h1>Tailwind CSS</h1>
                <p className="text-sm text-slate-400 mb-2">
                  Utilizamos o Tailwind CSS para estilizar nosso site com uma
                  abordagem de utilidade, permitindo rápida customização e
                  responsividade. Através dele, garantimos que o site tenha um
                  design limpo e moderno.
                </p>
              </div>
            </div>
          </div>

          {/* React */}
          <div className="bg-slate-800 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-2 bg-slate-900 w-[68px] rounded-full">
                <h1 className="font-bold">3</h1>
              </div>
              <div className="flex flex-col">
                <h1>React</h1>
                <p className="text-sm text-slate-400 mb-2">
                  O React é a biblioteca JavaScript que utilizamos para
                  desenvolver a interface do Comprims. Com sua estrutura de
                  componentes e gerenciamento de estado, conseguimos construir
                  um site dinâmico e eficiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 text-gray-500 text-center">
        <p className="text-sm">
          © 2024 Comprims. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default HOMEPage;
