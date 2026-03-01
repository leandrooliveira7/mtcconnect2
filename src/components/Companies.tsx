const Empresas = () => {
  return (
    <section className="flex items-center justify-center p-8 relative z-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Empresas presentes
        </h2>
        <div className="sm:grid-cols-4 flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-6">
          <a
            href="https://www.alticelabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/altice_labs.png"
              alt="Altice Labs"
              className="h-12 md:h-16 object-contain"
            />
          </a>

          <a
            href="https://apollotec.pt/pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/apollotech.png"
              alt="Apollo Tech"
              className="h-12 md:h-16 object-contain"
            />
          </a>

          <a
            href="https://www.ubiwhere.com/pt/inicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ubiwhere.png"
              alt="Ubiwhere"
              className="h-12 md:h-16 object-contain"
            />
          </a>

          <a
            href="https://www.withus.pt/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/withus.png"
              alt="Withus"
              className="h-12 md:h-16 object-contain"
            />
          </a>

          <a
            href="https://www.ubiwhere.com/pt/inicio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/ubiwhere.png"
              alt="Ubiwhere"
              className="h-12 md:h-16 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Empresas };
