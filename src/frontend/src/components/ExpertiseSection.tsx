import { useScrollReveal } from "../hooks/useScrollReveal";

const SKILLS = [
  "Digital Marketing Strategy",
  "Campaign Planning & Execution",
  "Brand Strategy & Management",
  "Content Marketing & Copywriting",
  "Social Media Marketing",
  "SEO & Keyword Optimisation",
  "Market Research & Consumer Insights",
  "Lead Generation & Inbound Marketing",
  "Marketing Analytics",
  "Campaign Performance & ROI Analysis",
  "Influencer & Partnership Marketing",
  "Competitor Benchmarking",
  "Customer Behaviour Analysis",
  "Data Interpretation & Reporting",
];

export default function ExpertiseSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal relative overflow-hidden"
    >
      {/* Dimmed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/marketing-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--surface-2) 0%, oklch(0.1 0.008 285 / 0.93) 50%, var(--surface-2) 100%)",
        }}
      />

      {/* Magical effect: animated grid shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.74 0.12 80 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(0.74 0.12 80 / 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-shimmer 8s linear infinite",
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.74 0.12 80 / 0.4), transparent)",
          animation: "scan-line 6s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Core Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            What I Bring to the Table
          </h2>
        </div>

        {/* Inline section image */}
        <div className="mb-12 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/generated/expertise-inline.dim_800x500.jpg"
            alt="Digital marketing analytics dashboard"
            className="w-full max-h-64 object-cover object-center"
            style={{ filter: "brightness(0.45) saturate(1.1)" }}
          />
          {/* Strong overlay so text pops */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(to right, oklch(0.06 0.004 285 / 0.85) 0%, oklch(0.08 0.005 285 / 0.55) 40%, oklch(0.08 0.005 285 / 0.55) 60%, oklch(0.06 0.004 285 / 0.85) 100%)",
            }}
          />
          {/* Horizontal scrim behind the text */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.06 0.004 285 / 0.6) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-lg font-display font-semibold italic text-center px-8 py-3 rounded-xl"
              style={{
                color: "oklch(0.96 0.01 90)",
                textShadow:
                  "0 1px 4px rgba(0,0,0,0.95), 0 4px 20px rgba(0,0,0,0.85)",
                background: "oklch(0.05 0.003 285 / 0.45)",
                backdropFilter: "blur(2px)",
              }}
            >
              Data-driven insights powering every campaign
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill, i) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full text-sm font-medium cursor-default transition-all duration-300 hover:scale-105"
              style={{
                background: "oklch(0.22 0.015 285)",
                border: "1px solid oklch(0.74 0.12 80 / 0.3)",
                color: "oklch(0.9 0.015 90)",
                animationDelay: `${i * 0.05}s`,
                transitionDelay: `${i * 0.02}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px oklch(0.74 0.12 80 / 0.2)";
                (e.currentTarget as HTMLElement).style.background =
                  "oklch(0.26 0.02 285)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "oklch(0.74 0.12 80 / 0.3)";
                (e.currentTarget as HTMLElement).style.color =
                  "oklch(0.9 0.015 90)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.background =
                  "oklch(0.22 0.015 285)";
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
