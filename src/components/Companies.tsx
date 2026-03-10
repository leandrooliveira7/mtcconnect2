import { useRef } from "react";

const companies = [
  {
    href: "https://www.alticelabs.com",
    src: "altice_labs.png",
    alt: "Altice Labs",
  },
  {
    href: "https://www.ubiwhere.com/pt/inicio",
    src: "ubiwhere.png",
    alt: "Ubiwhere",
  },
  {
    href: "https://www.withus.pt/index.html",
    src: "withus.png",
    alt: "Withus",
  },
  {
    href: "https://viriato.com.pt/pt",
    src: "viriato.png",
    alt: "Viriato",
  },
  {
    href: "https://radioria.pt",
    src: "ria.png",
    alt: "Rádio Ria",
  },
  {
    href: "https://www.hubduction.com/inicio",
    src: "hubduction.png",
    alt: "Hubduction",
  },
  {
    href: "https://aiesec.org",
    src: "aiesec.png",
    alt: "AIESEC",
  },
];

const Empresas = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = desktopScrollRef.current;
    if (!scroller) return;
    isDraggingRef.current = true;
    startXRef.current = event.clientX;
    startScrollLeftRef.current = scroller.scrollLeft;
    scroller.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = desktopScrollRef.current;
    if (!scroller || !isDraggingRef.current) return;

    const deltaX = event.clientX - startXRef.current;
    scroller.scrollLeft = startScrollLeftRef.current - deltaX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const scroller = desktopScrollRef.current;
    if (!scroller) return;

    isDraggingRef.current = false;
    scroller.releasePointerCapture(event.pointerId);
  };

  const handlePointerLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="relative z-10 p-8">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white">
          Empresas presentes
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6 place-items-center lg:hidden px-4">
          {companies.map((company) => (
            <a
              key={company.alt}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${baseUrl}${company.src}`}
                alt={company.alt}
                className="h-auto w-24 max-w-36 object-contain"
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:block mt-8 relative px-12">
          <div
            ref={desktopScrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            className="overflow-x-auto overflow-y-hidden pb-2 cursor-grab active:cursor-grabbing select-none [touch-action:pan-x]"
          >
            <div
              className="flex w-max items-center gap-10 px-2"
              style={{
                animation:
                  "companies-horizontal-nudge 6.5s cubic-bezier(0.22, 0.61, 0.36, 1) infinite",
              }}
            >
              {companies.map((company) => (
                <a
                  key={`desktop-${company.alt}`}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 min-w-[220px] items-center justify-center"
                >
                  <img
                    src={`${baseUrl}${company.src}`}
                    alt={company.alt}
                    className="h-36 w-30 max-w-48 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />
        </div>

        <style>{`
          @keyframes companies-horizontal-nudge {
            0%,
            72%,
            100% {
              transform: translateX(0px);
            }
            84% {
              transform: translateX(-16px);
            }
            96% {
              transform: translateX(0px);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export { Empresas };
