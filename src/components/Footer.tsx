const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <footer className="bg-black text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Text Section */}
        <div className="flex flex-wrap justify-center mb-3">
          <div className="w-full md:w-2/3">
            <p className="mb-1 text-center">
              Evento realizado pelo Núcleo de Estudantes de Multimédia e
              Tecnologias da Comunicação
            </p>
            <p className="mb-6 text-center text-gray-200">2026</p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <a
            href="https://www.instagram.com/nemtc_aauav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:opacity-80 transition-opacity"
          >
            <img
              src={`${baseUrl}nucleo.png`}
              alt="Logo Núcleo"
              className="h-8 md:h-12 object-contain"
            />
          </a>

          <a
            href="https://www.instagram.com/aauav_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:opacity-80 transition-opacity"
          >
            <img
              src={`${baseUrl}aauav.png`}
              alt="Logo AAUAv"
              className="h-8 md:h-12 object-contain"
            />
          </a>

          <a
            href="https://www.ua.pt/pt/deca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:opacity-80 transition-opacity"
          >
            <img
              src={`${baseUrl}deca.png`}
              alt="Logo DECA"
              className="h-12 md:h-16 object-contain"
            />
          </a>

          <a
            href="https://www.ua.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline hover:opacity-80 transition-opacity"
          >
            <img
              src={`${baseUrl}ua_branco.png`}
              alt="Logo UA"
              className="h-8 md:h-12 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
