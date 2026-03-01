const Empresas = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <section className="flex items-center justify-center p-8 relative z-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Empresas presentes
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-6 place-items-center max-w-6xl mx-auto">
          <a
            href="https://www.alticelabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${baseUrl}altice_labs.png`}
              alt="Altice Labs"
              className="h-20 md:h-28 w-auto max-w-36 md:max-w-48 object-contain"
            />
          </a>

          <a
            href="https://apollotec.pt/pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${baseUrl}apollotech.png`}
              alt="Apollo Tech"
              className="h-20 md:h-28 w-auto max-w-36 md:max-w-48 object-contain"
            />
          </a>

          <a
            href="https://www.ubiwhere.com/pt/inicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${baseUrl}ubiwhere.png`}
              alt="Ubiwhere"
              className="h-20 md:h-28 w-auto max-w-36 md:max-w-48 object-contain"
            />
          </a>

          <a
            href="https://www.withus.pt/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${baseUrl}withus.png`}
              alt="Withus"
              className="h-20 md:h-28 w-auto max-w-36 md:max-w-48 object-contain"
            />
          </a>

          <a
            href="https://viriato.com.pt/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${baseUrl}viriato.png`}
              alt="Viriato"
              className="h-20 md:h-28 w-auto max-w-36 md:max-w-48 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Empresas };
