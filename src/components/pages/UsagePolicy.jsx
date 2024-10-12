import { Link } from "react-router-dom";
import HeaderHomePage from "../layout/Headers/HeaderHomePage";

const PolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <HeaderHomePage />

      <div className="flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
          Política de Uso
        </h1>
        <p className="text-lg text-gray-400 text-center max-w-2xl mb-10">
          Ao utilizar o Comprims, você concorda com os seguintes termos e condições.
        </p>

        {/* Seção de Política de Uso */}
        <div className="w-full max-w-4xl bg-slate-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">1. Uso do Serviço</h2>
          <p className="text-gray-400 mb-4">
            O Comprims é uma ferramenta para compressão e otimização de códigos diretamente no navegador do usuário. 
            Nenhum código ou dado é armazenado ou transmitido para servidores externos.
          </p>

          <h2 className="text-3xl font-bold mb-6">2. Responsabilidade do Usuário</h2>
          <p className="text-gray-400 mb-4">
            O usuário é responsável pelo conteúdo enviado e não deve inserir scripts maliciosos ou qualquer material ilícito.
          </p>

          <h2 className="text-3xl font-bold mb-6">3. Limitações de Uso</h2>
          <p className="text-gray-400 mb-4">
            O uso excessivo ou abusivo pode ser restrito para manter a estabilidade do serviço. É proibido utilizar o site para fins ilegais.
          </p>

          <h2 className="text-3xl font-bold mb-6">4. Isenção de Garantias</h2>
          <p className="text-gray-400 mb-4">
            O Comprims é fornecido sem garantias de funcionamento contínuo ou exatidão dos códigos comprimidos.
          </p>

          <h2 className="text-3xl font-bold mb-6">5. Alterações no Serviço</h2>
          <p className="text-gray-400 mb-4">
            O Comprims pode ser atualizado ou ter funcionalidades alteradas sem aviso prévio para melhorar a experiência do usuário.
          </p>

          <h2 className="text-3xl font-bold mb-6">6. Contato</h2>
          <p className="text-gray-400">
            Se você tiver dúvidas sobre esta Política de Uso, entre em contato pelo e-mail: carloseduardogit@gmail.com.
          </p>
        </div>

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

export default PolicyPage;
