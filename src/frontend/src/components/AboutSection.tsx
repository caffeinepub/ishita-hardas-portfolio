import { Globe, MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal relative overflow-hidden"
    >
      {/* Dimmed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/about-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.18,
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.07 0.005 285 / 0.95) 0%, oklch(0.1 0.01 285 / 0.85) 50%, oklch(0.07 0.005 285 / 0.95) 100%)",
        }}
      />

      {/* Floating magical orbs */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "oklch(0.74 0.12 80 / 0.07)",
          animation: "orb-drift 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "oklch(0.55 0.1 300 / 0.06)",
          animation: "orb-drift 16s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "oklch(0.74 0.12 80 / 0.05)",
          animation: "orb-drift 20s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: real photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Spinning ring */}
              <div
                className="absolute inset-0 rounded-full border animate-spin-slow"
                style={{
                  borderColor: "oklch(0.74 0.12 80 / 0.2)",
                  borderTopColor: "var(--gold)",
                  margin: "-20px",
                }}
              />
              {/* Second dashed ring */}
              <div
                className="absolute rounded-full"
                style={{
                  inset: "-8px",
                  border: "1px dashed oklch(0.74 0.12 80 / 0.3)",
                  borderRadius: "50%",
                }}
              />
              {/* Photo circle */}
              <div
                className="w-64 h-64 rounded-full overflow-hidden relative"
                style={{
                  border: "3px solid var(--gold)",
                  boxShadow:
                    "0 0 60px oklch(0.74 0.12 80 / 0.25), 0 0 120px oklch(0.74 0.12 80 / 0.1)",
                }}
              >
                <img
                  src="/assets/uploads/ishita-1.jpg"
                  alt="Ishita Hardas"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badges */}
              <div
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-semibold animate-float"
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
              <div
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-semibold animate-float"
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

          {/* Right: bio */}
          <div className="space-y-6">
            <div>
              <p
                className="text-xs tracking-widest uppercase mb-3 font-semibold"
                style={{ color: "var(--gold)" }}
              >
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Strategic Thinker,{" "}
                <span className="shimmer-text">Creative Storyteller</span>
              </h2>
            </div>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.75 0.01 90)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              I am a marketing professional with a{" "}
              <span
                style={{ color: "var(--gold-light)" }}
                className="font-medium"
              >
                Master&apos;s degree in Marketing
              </span>{" "}
              from Alliance Manchester Business School, University of
              Manchester. My experience spans digital marketing strategy,
              content marketing, SEO optimisation, and campaign planning across
              both B2B and B2C environments.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.75 0.01 90)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              I enjoy transforming complex ideas into clear and engaging
              marketing communication. My work combines{" "}
              <span
                style={{ color: "var(--gold-light)" }}
                className="font-medium"
              >
                strategic marketing thinking, audience insights, and creative
                storytelling
              </span>{" "}
              to build campaigns that improve engagement, visibility, and brand
              positioning.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{
                color: "oklch(0.75 0.01 90)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Through internships and consultancy projects with organisations
              such as Saint-Gobain Weber and Procter &amp; Gamble, I have gained
              hands-on experience working with real marketing challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                  color: "oklch(0.75 0.01 90)",
                }}
              >
                <MapPin size={14} style={{ color: "var(--gold)" }} />
                Manchester, United Kingdom
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                  color: "oklch(0.75 0.01 90)",
                }}
              >
                <Globe size={14} style={{ color: "var(--gold)" }} />
                UK Work Visa until Dec 2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
