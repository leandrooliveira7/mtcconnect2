import { useState, useEffect } from "react";

const SwipeIndicator = () => {
  const [hasSwiped, setHasSwiped] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasSwiped(true);
      } else {
        setHasSwiped(false);
      }
      // Esconde quando já passou a primeira secção
      if (window.scrollY > window.innerHeight * 0.8) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-14 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {/* Seta animada */}
      <div className="flex flex-col items-center animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5L12 19M12 5L6 11M12 5L18 11"
            stroke="#6afe5d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Texto com transição */}
      <div className="relative h-10 w-36 flex items-center justify-center overflow-hidden">
        {/* "Swipe up" */}
        <p
          className="absolute w-full text-center text-sm uppercase tracking-widest transition-all duration-500"
          style={{
            color: "#6afe5d",
            opacity: hasSwiped ? 0 : 1,
            transform: hasSwiped ? "translateY(-20px)" : "translateY(0px)",
            pointerEvents: "none",
          }}
        >
          Swipe up
        </p>

        {/* "Keep swiping" */}
        <p
          className="absolute w-full text-center text-sm uppercase tracking-widest transition-all duration-500"
          style={{
            color: "#6afe5d",
            opacity: hasSwiped ? 1 : 0,
            transform: hasSwiped ? "translateY(0px)" : "translateY(20px)",
            pointerEvents: "none",
          }}
        >
          Keep swiping
        </p>
      </div>
    </div>
  );
};

export { SwipeIndicator };
