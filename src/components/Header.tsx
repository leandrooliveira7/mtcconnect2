const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="header-section"
      className="w-full relative z-[2] bg-black flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Image Section */}
      <div className="mb-8 flex justify-center">
        <img
          src="/mtconnect.png"
          alt="Logo MTC Connect"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl text-center">
        <h3
          className="text-white text-4xl uppercase mb-2 font-bold"
          style={{ color: "#0032fe" }}
        >
          11 de março
        </h3>
        <h3 className="text-white text-xl uppercase mb-4 mt-4">
          Feira de Emprego de MTC organizada pelo NEMTC
        </h3>
        <p className="text-white mb-6">
          O MTC Connect é uma Feira de Empresas organizada pelo Núcleo de
          Estudantes de Multimédia e Tecnologias da Comunicação que irá criar um
          espaço de interação com diversas empresas da área de CTC
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="text-white px-6 py-3 rounded-md transition-colors"
            style={{ backgroundColor: "#0032fe" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0026b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0032fe")
            }
            onClick={() => scrollToSection("horario")}
          >
            Horário
          </button>
          <button
            className=" text-white px-6 py-3 rounded-md  transition-colors"
            style={{ backgroundColor: "#0032fe" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0026b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0032fe")
            }
            onClick={() =>
              window.open("https://www.instagram.com/mtc.connect/", "_blank")
            }
          >
            Segue o nosso Instagram!
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
