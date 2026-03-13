import {
  ExternalLink,
  Film,
  Globe,
  Instagram,
  Trophy,
  Youtube,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const WEBER_LINKS = [
  {
    category: "Website Content & CMS",
    icon: Globe,
    color: "oklch(0.74 0.12 80)",
    links: [
      { label: "Weber Main Website", url: "https://www.in.weber" },
      {
        label: "Bathroom Tiling Solution",
        url: "https://www.in.weber/complete-bathroom-tiling-solution",
      },
      {
        label: "Swimming Pool Solution",
        url: "https://www.in.weber/swimming-pool",
      },
      { label: "Kitchen Solution", url: "https://www.in.weber/kitchen" },
    ],
  },
  {
    category: "SEO Blog Articles",
    icon: ExternalLink,
    color: "oklch(0.74 0.18 140)",
    links: [
      {
        label: "How to Install Tiles",
        url: "https://www.in.weber/blog/how-to-install-tiles-with-tile-adhesive",
      },
      {
        label: "Choosing Tile Adhesive",
        url: "https://www.in.weber/blog/how-to-choose-the-right-tile-adhesive",
      },
      {
        label: "Tile Adhesive vs Cement-Sand",
        url: "https://www.in.weber/blog/tile-adhesive-vs-cement-sand-mortar-advantages-disadvantages",
      },
      {
        label: "Bathroom Tile Grout Guide",
        url: "https://www.in.weber/blog/bathroom-tile-grout-how-choose-best-joint-filler",
      },
    ],
  },
  {
    category: "Video Content",
    icon: Youtube,
    color: "oklch(0.65 0.22 25)",
    links: [
      {
        label: "YouTube Channel",
        url: "https://www.youtube.com/@SaintGobainWeberIndia",
      },
      {
        label: "Featured Video 1",
        url: "https://www.youtube.com/watch?v=6TiPI0P2r8Y",
      },
      {
        label: "Featured Video 2",
        url: "https://www.youtube.com/watch?v=Qs9UGA57FAU",
      },
    ],
  },
  {
    category: "Social Media",
    icon: Instagram,
    color: "oklch(0.65 0.2 320)",
    links: [
      {
        label: "Instagram Page",
        url: "https://www.instagram.com/saintgobainweberindia",
      },
      {
        label: "Viral Reel (1M+ views)",
        url: "https://www.instagram.com/reels/C55IdI1Cjx5/",
      },
    ],
  },
  {
    category: "Marketing Collateral",
    icon: Film,
    color: "oklch(0.68 0.15 220)",
    links: [
      {
        label: "Brand Brochures",
        url: "https://drive.google.com/drive/folders/1jfHGIBF138o78uSZdmEDnKHoGOmRZj-M",
      },
    ],
  },
];

const experiences = [
  {
    company: "Saint-Gobain Weber",
    role: "Marketing Intern",
    period: "Oct 2023 – Apr 2024",
    type: "MNC",
    description:
      "Worked across digital marketing including website content management, SEO-driven blog writing, social media campaigns, and digital marketing strategy support. Conducted market research and competitor benchmarking, created SEO-optimised content, and contributed to integrated digital campaigns across Instagram and YouTube.",
    achievements: [
      { value: "+34%", label: "Social Media Engagement" },
      { value: "2,000+", label: "New Followers" },
      { value: "95K+", label: "YouTube Views" },
      { value: "1M+", label: "Instagram Reels Views" },
    ],
    hasWeberLinks: true,
    color: "oklch(0.74 0.12 80)",
  },
  {
    company: "Procter & Gamble",
    role: "Marketing Strategy Consultant",
    period: "Apr 2025 – Aug 2025",
    type: "Live Consultancy Project",
    description:
      "Worked with a team to address a real marketing challenge related to retailer engagement. Developed a marketing communication strategy to encourage greater participation from retailers in cashback programmes. Conducted competitor benchmarking across FMCG retailers, analysed partnership strategies and loyalty programmes, and developed campaign messaging aligned with P&G brand guidelines.",
    achievements: [{ value: "Top 7", label: "out of 22 teams" }],
    hasWeberLinks: false,
    color: "oklch(0.74 0.12 80)",
  },
  {
    company: "Fiverr Freelance",
    role: "Marketing Consultant",
    period: "Ongoing",
    type: "Freelance",
    description:
      "Provided small businesses with personalised guidance on storytelling, brand messaging, and marketing communication strategy. Worked with entrepreneurs to refine brand positioning and develop clearer, more engaging digital marketing content.",
    achievements: [],
    hasWeberLinks: false,
    color: "oklch(0.74 0.12 80)",
  },
];

function WeberLinks() {
  return (
    <div
      className="mt-6 pt-5 border-t"
      style={{ borderColor: "oklch(0.74 0.12 80 / 0.15)" }}
    >
      <p
        className="text-xs tracking-widest uppercase mb-4 font-semibold"
        style={{ color: "oklch(0.55 0.09 80)" }}
      >
        Work Samples & Live Links
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {WEBER_LINKS.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.category}
              className="rounded-xl p-3.5 flex flex-col gap-2"
              style={{
                background: "oklch(0.74 0.12 80 / 0.04)",
                border: `1px solid ${cat.color}33`,
              }}
            >
              <div className="flex items-center gap-2 mb-0.5">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cat.color}18` }}
                >
                  <Icon size={12} style={{ color: cat.color }} />
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.category}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {cat.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-2 py-1.5 rounded-lg transition-all duration-200"
                    style={{
                      color: "oklch(0.75 0.02 90)",
                      border: "1px solid oklch(0.74 0.12 80 / 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.75 0.02 90)";
                    }}
                    data-ocid="experience.link"
                  >
                    <ExternalLink size={9} className="flex-shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal relative overflow-hidden"
    >
      {/* Dimmed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/cms-web-bg.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />
      {/* Dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.08 0.005 285 / 0.97) 0%, oklch(0.1 0.008 285 / 0.92) 50%, oklch(0.08 0.005 285 / 0.97) 100%)",
        }}
      />

      {/* Magical effect: pulsing radial rings from timeline */}
      <div
        className="absolute left-6 lg:left-1/2 top-1/3 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="absolute rounded-full"
            style={{
              width: `${n * 180}px`,
              height: `${n * 180}px`,
              border: "1px solid oklch(0.74 0.12 80 / 0.06)",
              transform: "translate(-50%, -50%)",
              animation: "pulse-ring 4s ease-out infinite",
              animationDelay: `${n * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero banner image with heading overlaid on top */}
        <div className="mb-14 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/generated/experience-inline.dim_800x450.jpg"
            alt="Marketing workspace"
            className="w-full max-h-72 object-cover object-center"
            style={{ filter: "brightness(0.45) saturate(1.1)" }}
          />
          {/* Dark gradient for readability */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(to top, oklch(0.06 0.004 285 / 0.85) 0%, oklch(0.08 0.005 285 / 0.55) 60%, oklch(0.08 0.005 285 / 0.35) 100%)",
            }}
          />
          {/* Section heading overlaid on the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p
              className="text-xs tracking-widest uppercase mb-3 font-semibold"
              style={{
                color: "var(--gold)",
                textShadow: "0 1px 6px rgba(0,0,0,0.95)",
              }}
            >
              Professional Experience
            </p>
            <h2
              className="text-4xl md:text-5xl font-display font-bold"
              style={{
                color: "oklch(0.97 0.01 90)",
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.95), 0 6px 24px rgba(0,0,0,0.85)",
              }}
            >
              Work That Made an Impact
            </h2>
          </div>
        </div>

        {/* Campaign results image - Social media impact */}
        <div className="mb-14 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/generated/campaign-results.dim_700x400.jpg"
            alt="Social media campaign results"
            className="w-full max-h-48 object-cover object-center"
            style={{ filter: "brightness(0.4) saturate(1.15)" }}
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(to right, oklch(0.06 0.004 285 / 0.75) 0%, oklch(0.06 0.004 285 / 0.55) 50%, oklch(0.06 0.004 285 / 0.65) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center gap-8 px-8">
            <div className="text-center">
              <p
                className="text-2xl font-display font-bold"
                style={{
                  color: "var(--gold)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                }}
              >
                1M+
              </p>
              <p
                className="text-xs"
                style={{
                  color: "oklch(0.9 0.02 90)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                }}
              >
                Instagram Views
              </p>
            </div>
            <div
              className="w-px h-10"
              style={{ background: "oklch(0.74 0.12 80 / 0.4)" }}
            />
            <div className="text-center">
              <p
                className="text-2xl font-display font-bold"
                style={{
                  color: "var(--gold)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                }}
              >
                95K+
              </p>
              <p
                className="text-xs"
                style={{
                  color: "oklch(0.9 0.02 90)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                }}
              >
                YouTube Views
              </p>
            </div>
            <div
              className="w-px h-10"
              style={{ background: "oklch(0.74 0.12 80 / 0.4)" }}
            />
            <div className="text-center">
              <p
                className="text-2xl font-display font-bold"
                style={{
                  color: "var(--gold)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.9)",
                }}
              >
                +34%
              </p>
              <p
                className="text-xs"
                style={{
                  color: "oklch(0.9 0.02 90)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                }}
              >
                Engagement
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "oklch(0.74 0.12 80 / 0.2)" }}
          />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 lg:left-1/2 top-8 w-4 h-4 rounded-full -translate-x-1/2 z-10 animate-pulse"
                  style={{
                    background: "var(--gold)",
                    boxShadow: "0 0 15px var(--gold)",
                  }}
                />

                {/* Spacer */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Card */}
                <div
                  className="ml-12 lg:ml-0 lg:w-1/2 p-8 rounded-2xl card-hover gold-border-card"
                  style={{
                    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs px-2.5 py-1 rounded-full font-semibold"
                          style={{
                            background: "oklch(0.74 0.12 80 / 0.15)",
                            color: "var(--gold)",
                            border: "1px solid oklch(0.74 0.12 80 / 0.3)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "var(--gold)" }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-xs whitespace-nowrap"
                      style={{ color: "oklch(0.58 0.02 90)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "oklch(0.65 0.01 90)" }}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {exp.achievements.map((ach) => (
                        <div
                          key={ach.label}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{
                            background: "oklch(0.74 0.12 80 / 0.1)",
                            border: "1px solid oklch(0.74 0.12 80 / 0.25)",
                          }}
                        >
                          <Trophy size={12} style={{ color: "var(--gold)" }} />
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--gold)" }}
                          >
                            {ach.value}
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: "oklch(0.65 0.01 90)" }}
                          >
                            {ach.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.hasWeberLinks && <WeberLinks />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
