import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DAY_START = 8.5; // 08:30
const DAY_END = 17.5; // 17:30

interface Event {
  time: string;
  tag: string;
  title: string;
  type: "green" | "blue" | "outline" | "muted";
  colSpan?: boolean;
  expandable?: boolean;
  description?: string;
  speaker?: { initials: string; name: string; role: string };
}

const schedule: Event[] = [
  { time: "08:45", tag: "Check-in", title: "Credenciação", type: "muted" },
  {
    time: "09:15",
    tag: "Abertura",
    title: "Sessão de Abertura",
    type: "green",
    expandable: true,
    description:
      "Boas-vindas oficiais ao MTC Connect 2026. Apresentação do programa, parceiros e objetivos do evento.",
    speaker: {
      initials: "LL",
      name: "Lara Lourenço",
      role: "Coordenadora do NEMTC",
    },
  },
  {
    time: "09:45",
    tag: "Talk",
    title: "Tecnologia, Experiência, Trabalho: Onde se posiciona o MTC?",
    type: "blue",
    expandable: true,
    description:
      "Uma reflexão sobre o papel do curso de MTC no mercado de trabalho atual.",
    speaker: { initials: "AC", name: "Ana Costa", role: "UX Lead · Farfetch" },
  },
  {
    time: "10:00",
    tag: "Pausa",
    title: "Coffeebreak",
    type: "muted",
    colSpan: true,
  },
  {
    time: "10:30",
    tag: "Principal",
    title: "Feira de Empresas",
    type: "green",
    colSpan: true,
    expandable: false,
    description:
      "Espaço de networking e recrutamento. Os estudantes podem apresentar o seu portfólio e explorar oportunidades de estágio e emprego.",
    speaker: {
      initials: "OR",
      name: "Organização MTC Connect",
      role: "Coordenação do evento",
    },
  },
  {
    time: "13:00",
    tag: "Almoço",
    title: "Pausa de Almoço",
    type: "muted",
    colSpan: true,
  },
  {
    time: "14:30",
    tag: "Principal",
    title: "Retorno da Feira de Empresas",
    type: "green",
    colSpan: true,
    expandable: false,
    description:
      "Continuação da Feira de Empresas com sessões de Speed Dating entre estudantes e recrutadores.",
    speaker: {
      initials: "OR",
      name: "Organização MTC Connect",
      role: "Coordenação do evento",
    },
  },
  { time: "16:30", tag: "Pausa", title: "Coffeebreak", type: "muted" },
  {
    time: "16:50",
    tag: "Prémios",
    title: "Entrega de Prémios",
    type: "blue",
    expandable: true,
    description:
      "Cerimónia de entrega de prémios aos estudantes e projetos distinguidos pelas empresas parceiras.",
    speaker: {
      initials: "IS",
      name: "Inês Silva",
      role: "Vice Coordenadora do NEMTC",
    },
  },
  {
    time: "17:20",
    tag: "Fim",
    title: "Encerramento",
    type: "outline",
    colSpan: true,
  },
];

const sections = [
  { label: "Manhã", startIndex: 0 },
  { label: "Tarde", startIndex: 6 },
  { label: "Encerramento", startIndex: 8 },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const blockBase =
  "relative rounded-[5px] p-4 cursor-pointer overflow-hidden transition-shadow duration-300 will-change-transform";
const blockStyles: Record<Event["type"], string> = {
  green: "bg-[#6afe5d] text-[#060f06]",
  blue: "bg-[#0032fe] text-white",
  outline: "bg-transparent border border-[rgba(106,254,93,0.3)] text-[#6afe5d]",
  muted:
    "bg-[#0f1318] border border-[rgba(255,255,255,0.06)] text-[#666] cursor-default",
};

const avatarStyles: Record<Event["type"], string> = {
  green: "bg-[rgba(0,0,0,0.2)] text-[#060f06]",
  blue: "bg-[rgba(255,255,255,0.15)] text-white",
  outline: "bg-[rgba(106,254,93,0.12)] text-[#6afe5d]",
  muted: "bg-[rgba(255,255,255,0.05)] text-[#666]",
};

const dividerStyles: Record<Event["type"], string> = {
  green: "bg-[rgba(0,0,0,0.2)]",
  blue: "bg-[rgba(255,255,255,0.15)]",
  outline: "bg-[rgba(106,254,93,0.2)]",
  muted: "bg-[rgba(255,255,255,0.05)]",
};

// ── Block component
function Block({ event }: { event: Event }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef(false);

  const handleClick = () => {
    if (!event.expandable || !extraRef.current || !blockRef.current) return;

    if (expandedRef.current) {
      gsap.to(extraRef.current, {
        maxHeight: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      blockRef.current.dataset.expanded = "false";
      expandedRef.current = false;
    } else {
      gsap.set(extraRef.current, { maxHeight: "none" });
      const h = extraRef.current.scrollHeight;
      gsap.set(extraRef.current, { maxHeight: 0, opacity: 0 });
      gsap.to(extraRef.current, {
        maxHeight: h + 20,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        blockRef.current,
        { scale: 1 },
        {
          scale: 1.015,
          duration: 0.15,
          ease: "power1.out",
          yoyo: true,
          repeat: 1,
        },
      );
      blockRef.current.dataset.expanded = "true";
      expandedRef.current = true;
    }
  };

  return (
    <div
      ref={blockRef}
      onClick={handleClick}
      className={`${blockBase} ${blockStyles[event.type]} group`}
      data-expanded="false"
    >
      {/* Shimmer */}
      {event.type !== "muted" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:left-[150%] transition-[left] duration-500" />
        </div>
      )}

      <span className="block font-mono text-[9px] tracking-[3px] uppercase opacity-55 mb-1.5">
        {event.tag}
      </span>
      <div className="text-[13px] font-bold leading-snug">{event.title}</div>
      <div className="font-mono text-[10px] mt-1.5 opacity-50 tracking-wide">
        {event.time}
      </div>

      {event.expandable && (
        <div className="font-mono text-[9px] tracking-widest mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-60 transition-opacity duration-200">
          <span className="inline-block transition-transform duration-300 group-[[data-expanded=true]]:rotate-90">
            ›
          </span>
          ver mais
        </div>
      )}

      {/* Expandable content */}
      {event.expandable && (
        <div
          ref={extraRef}
          style={{ maxHeight: 0, opacity: 0, overflow: "hidden" }}
        >
          <div className={`h-px my-3.5 ${dividerStyles[event.type]}`} />
          <p className="text-[12px] leading-relaxed opacity-75 mb-3.5">
            {event.description}
          </p>
          {event.speaker && (
            <div className="flex items-center gap-3 mt-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold font-mono flex-shrink-0 ${avatarStyles[event.type]}`}
              >
                {event.speaker.initials}
              </div>
              <div>
                <div className="text-[12px] font-bold">
                  {event.speaker.name}
                </div>
                <div className="font-mono text-[10px] opacity-55 mt-0.5 tracking-wide">
                  {event.speaker.role}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Main component
export default function Horário() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Header + scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.set(".sched-h1 span", { opacity: 0, y: 40 });
      const tl = gsap.timeline();
      tl.to(
        ".sched-eyebrow",
        { opacity: 1, duration: 0.6, ease: "power3.out" },
        0,
      )
        .to(
          ".sched-h1 span",
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          0.15,
        )
        .to(
          ".sched-meta",
          { opacity: 1, duration: 0.6, ease: "power3.out" },
          0.35,
        );

      // Section labels
      gsap.utils.toArray<HTMLElement>(".sched-section").forEach((el) => {
        gsap.set(el, { y: 10 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Blocks
      gsap.utils.toArray<HTMLElement>(".sched-block").forEach((block, i) => {
        gsap.set(block, { opacity: 0, y: 22 });
        gsap.to(block, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          delay: (i % 2) * 0.08,
          scrollTrigger: { trigger: block, start: "top 90%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden px-4 py-8" id="horario">
      <div className="relative z-[2] bg-black flex flex-col px-4 py-8">
        <h1 className="font-bold text-3xl text-white px-20">11 de março</h1>
        {/* Timeline */}
        <div ref={timelineRef} className="relative px-20">

          {/* Rows */}
          {schedule.map((event, i) => {
            const section = sections.find((s) => s.startIndex === i);
            return (
              <div key={i}>
                {section && (
                  <div className="sched-section font-semibold text-[10px] tracking-[4px] text-[rgb(106,254,93)] uppercase pt-9 pb-3 pl-[calc(90px+16px)] border-t border-white/5 mt-3 opacity-0">
                    {section.label}
                  </div>
                )}
                <div
                  className={`grid gap-0 items-start ${event.colSpan ? "grid-cols-[90px_1fr]" : "grid-cols-[90px_1fr_1fr]"} min-h-[72px]`}
                >
                  <div className="pt-[22px] pr-4">
                    <span className="font-mono text-[11px] text-[#666] tracking-wide whitespace-nowrap">
                      {event.time}
                    </span>
                  </div>
                  <div
                    className={`p-1.5 sched-block ${event.colSpan ? "col-span-1" : ""}`}
                  >
                    <Block event={event} />
                  </div>
                  {!event.colSpan &&
                  schedule[i + 1] &&
                  !schedule[i + 1].colSpan &&
                  i % 2 === 0
                    ? null
                    : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
