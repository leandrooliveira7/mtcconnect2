const Sponsors = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const sponsors = [
    {
      src: "LouService.png",
      alt: "Sponsor 1",
    },
    {
      src: "odisseias.png",
      alt: "Sponsor 2",
    },
    {
      src: "id.png",
      alt: "Sponsor 3",
    },
    {
      src: "deca.png",
      alt: "Sponsor 4",
    },
    {
      src: "setimo.png",
      alt: "Sponsor 5",
    },
    {
      src: "rialto.png",
      alt: "Sponsor 6",
    }
  ];

  return (
    <section className="flex items-center justify-center p-8 relative z-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Patrocinadores</h2>
        <div className="grid grid-cols-2 gap-6 mt-12 place-items-center lg:hidden">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.alt}
              src={`${baseUrl}sponsors/${sponsor.src}`}
              alt={sponsor.alt}
              className="h-auto w-20 max-w-36 object-contain"
            />
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-6 gap-12 mt-6 place-items-center max-w-6xl mx-auto">
          {sponsors.map((sponsor) => (
            <img
              key={sponsor.alt}
              src={`${baseUrl}sponsors/${sponsor.src}`}
              alt={sponsor.alt}
              className="h-auto w-26 max-w-48 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Sponsors };
