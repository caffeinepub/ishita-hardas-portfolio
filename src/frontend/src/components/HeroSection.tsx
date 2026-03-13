import { ChevronDown, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 12,
  size: 2 + Math.random() * 4,
}));

const LETTERS = "ISHITA HARDAS".split("");

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const scrolled = window.scrollY;
      const parallaxEl = el.querySelector(".hero-bg") as HTMLElement;
      if (parallaxEl) {
        parallaxEl.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <div
        className="hero-bg absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.08 0.005 285 / 0.85) 0%, oklch(0.08 0.005 285 / 0.75) 50%, oklch(0.08 0.005 285 / 0.95) 100%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              bottom: "-10px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "var(--gold)",
              opacity: 0.6,
              animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content: 2-col on large screens */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-20 pb-16">
        {/* Left: text & CTAs */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border animate-fade-in-up"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
              background: "oklch(0.74 0.12 80 / 0.1)",
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--gold)" }}
            />
            Marketing Strategist &amp; Content Storyteller
          </div>

          {/* Animated heading - elegant Cormorant Garamond, mobile-friendly size */}
          <h1
            className="font-hero-name font-bold tracking-widest mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            aria-label="ISHITA HARDAS"
          >
            {LETTERS.map((letter, i) => (
              <span
                // biome-ignore lint/suspicious/noArrayIndexKey: static array
                key={i}
                className="inline-block"
                style={{
                  animation: "letter-fade 0.5s ease-out both",
                  animationDelay: `${0.4 + i * 0.05}s`,
                  color: letter === " " ? "transparent" : "oklch(0.94 0.01 90)",
                }}
              >
                {letter === " " ? "\u00a0" : letter}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-4 animate-fade-in-up"
            style={{
              color: "oklch(0.74 0.12 80)",
              animationDelay: "1.1s",
              opacity: 0,
              animationFillMode: "forwards",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Turning data into stories.{" "}
            <span style={{ color: "oklch(0.84 0.1 80)" }}>
              Stories into strategy.
            </span>
          </p>

          <p
            className="text-sm tracking-widest uppercase mb-10 animate-fade-in-up"
            style={{
              color: "oklch(0.58 0.02 90)",
              animationDelay: "1.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Manchester, United Kingdom
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up"
            style={{
              animationDelay: "1.5s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <button
              type="button"
              onClick={scrollToContact}
              data-ocid="hero.primary_button"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.74 0.12 80), oklch(0.84 0.1 80))",
                color: "oklch(0.08 0.005 285)",
              }}
            >
              Let&apos;s Collaborate
            </button>

            <a
              href="/cv.pdf"
              data-ocid="hero.secondary_button"
              className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border transition-all duration-300 hover:bg-white/5"
              style={{
                borderColor: "var(--gold)",
                color: "var(--gold)",
              }}
            >
              Download CV
            </a>

            <a
              href="https://linkedin.com/in/ishitahardas"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="hero.link"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide border border-white/20 text-foreground/70 hover:text-foreground hover:border-white/40 transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div
          className="flex-shrink-0 flex items-center justify-center animate-fade-in-up"
          style={{
            animationDelay: "0.6s",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <div className="relative">
            {/* Outer spinning ring */}
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{
                inset: "-12px",
                border: "1px solid oklch(0.74 0.12 80 / 0.15)",
                borderTopColor: "var(--gold)",
              }}
            />
            {/* Second ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-6px",
                border: "1px dashed oklch(0.74 0.12 80 / 0.3)",
              }}
            />
            {/* Photo circle */}
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
              style={{
                border: "3px solid var(--gold)",
                boxShadow:
                  "0 0 60px oklch(0.74 0.12 80 / 0.35), 0 0 120px oklch(0.74 0.12 80 / 0.15)",
              }}
            >
              <img
                src="/assets/uploads/ishita-1.jpg"
                alt="Ishita Hardas"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating badge top */}
            <div
              className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold animate-float"
              style={{
                background: "oklch(0.74 0.12 80 / 0.15)",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                backdropFilter: "blur(8px)",
                animationDelay: "1s",
              }}
            >
              MSc Marketing
            </div>
            {/* Floating badge bottom */}
            <div
              className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold animate-float"
              style={{
                background: "oklch(0.74 0.12 80 / 0.15)",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                backdropFilter: "blur(8px)",
                animationDelay: "2s",
              }}
            >
              Manchester, UK
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() =>
          document
            .querySelector("#stats")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/70 transition-colors animate-float"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
