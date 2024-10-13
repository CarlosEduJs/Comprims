import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-red-600">404 - Página Não Encontrada</h1>
      <p className="text-white">Desculpe, a página que você está procurando não existe.</p>
      <Link to="/" className="mt-10 text-yellow-500 hover:underline">
        Ir para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
