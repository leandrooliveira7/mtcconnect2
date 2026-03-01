import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const frameCount = 300;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    const baseUrl = import.meta.env.BASE_URL;
    if (!canvas) return;
    if (!section) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = [];

    // Render function that draws from the images array
    const render = (frameIndex: number) => {
      const img = images[frameIndex];
      if (!img || !img.complete || !img.naturalWidth) {
        return;
      }

      const canvasRatio = canvas.width / canvas.height;
      const imageRatio = img.naturalWidth / img.naturalHeight;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imageRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imageRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imageRatio;
        offsetY = 0;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      // Fill background first
      context.fillStyle = "#000";
      context.fillRect(0, 0, canvas.width, canvas.height);

      try {
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } catch (e) {
        console.error("Error drawing image:", e);
      }
    };

    const currentFramePath = (index: number) =>
      `${baseUrl}frames/frames_${String(index).padStart(4, "0")}.jpg`;

    // Preload images - use every 2nd frame for faster animation
    const frameStep = 2;
    for (let i = 0; i < frameCount; i += frameStep) {
      const img = new Image();
      img.src = currentFramePath(i);
      images.push(img);
    }

    const animation = { frame: 0 };
    let didAutoScroll = false;

    const startSequence = () => {
      render(0);

      // Start GSAP animation after first frame loads
      gsap.to(animation, {
        frame: images.length - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
        onUpdate: () => {
          const frame = Math.floor(animation.frame);
          render(frame);

          if (!didAutoScroll && animation.frame >= images.length - 1) {
            didAutoScroll = true;
            document
              .getElementById("header-section")
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }

          if (didAutoScroll && animation.frame < images.length - 1) {
            didAutoScroll = false;
          }
        },
      });
    };

    if (images[0]?.complete && images[0].naturalWidth > 0) {
      startSequence();
    } else {
      images[0].onload = startSequence;
    }

    images[0].onerror = () => {
      console.error("Failed to load first image:", currentFramePath(0));
    };

    // Atualizar em resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(Math.floor(animation.frame));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
    </section>
  );
}
