const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4 flex flex-col items-center justify-center">
      <div className="flex justify-between w-[90%] md:w-[80%] max-w-[1200px]">
        <div className="flex flex-col items-start">
          <h1 className="text-sm font-bold">Comprims</h1>
          <p className="text-xs text-gray-400">
            © 2024 Comprims. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-xs hover:text-gray-300">
            Termos de Serviço
          </a>
          <a href="#" className="text-xs hover:text-gray-300">
            Política de Privacidade
          </a>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs text-gray-400">
          Desenvolvido por <span className="font-bold">CarlosDev11</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
