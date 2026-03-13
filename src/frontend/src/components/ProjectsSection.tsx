import {
  ExternalLink,
  Film,
  Globe,
  Instagram,
  TrendingUp,
  Youtube,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const WEBER_PROJECT_LINKS = [
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

const featuredProjects = [
  {
    title: "Saint-Gobain Weber Digital Campaign",
    category: "Digital Marketing & SEO",
    description:
      "End-to-end digital marketing campaign including SEO-optimised blog content, social media strategy, YouTube video planning, and Instagram Reels that achieved over 1 million organic views. Drove 34% engagement increase and grew following by 2,000+ users.",
    stats: [
      "34% Engagement↑",
      "2,000+ Followers",
      "95K+ YouTube Views",
      "1M+ Reels Views",
    ],
    hasWeberLinks: true,
    color: "oklch(0.74 0.12 80)",
  },
  {
    title: "P&G Retailer Communication Strategy",
    category: "B2B Marketing Strategy",
    description:
      "Live consultancy project developing a marketing communication strategy for Procter & Gamble to improve retailer participation in cashback programmes. Included competitor benchmarking, loyalty programme analysis, and campaign framework development. Ranked Top 7 out of 22 teams.",
    stats: ["Top 7/22 Teams", "FMCG Sector", "B2B Strategy"],
    hasWeberLinks: false,
    color: "oklch(0.74 0.12 80)",
  },
];

const galleryProjects = [
  {
    title: "Manchester Museum Marketing Consultancy",
    category: "Museum & Cultural Marketing",
    description:
      "Developed a comprehensive marketing strategy for Manchester Museum, focusing on audience engagement and digital outreach.",
  },
  {
    title: "Beyond Meat Marketing Strategy",
    category: "FMCG & Plant-Based Food",
    description:
      "Created a targeted marketing strategy for Beyond Meat, analysing consumer behaviour and positioning in the UK plant-based market.",
  },
  {
    title: "Oddbox Digital Marketing Strategy",
    category: "Sustainability & E-commerce",
    description:
      "Designed a digital marketing strategy for Oddbox focusing on social media, content marketing, and sustainability messaging.",
  },
  {
    title: "Coca-Cola AdeZ Market Research Plan",
    category: "Beverage & Market Research",
    description:
      "Developed a detailed market research plan for Coca-Cola AdeZ, including consumer insights and competitive analysis.",
  },
  {
    title: "PitchU Digital Business Project",
    category: "Digital Entrepreneurship",
    description:
      "Collaborative digital business project focused on developing a scalable pitch strategy and digital go-to-market plan.",
  },
  {
    title: "House of Books Digital Campaign",
    category: "Publishing & Digital Communication",
    description:
      "Developed a digital communication campaign for House of Books and Friends, combining content strategy and community building.",
  },
];

function WeberProjectLinks() {
  return (
    <div
      className="mt-5 pt-5 border-t"
      style={{ borderColor: "oklch(0.74 0.12 80 / 0.15)" }}
    >
      <p
        className="text-xs tracking-widest uppercase mb-4 font-semibold"
        style={{ color: "oklch(0.55 0.09 80)" }}
      >
        Live Work Samples
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
        {WEBER_PROJECT_LINKS.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.category}
              className="rounded-xl p-4 flex flex-col gap-2"
              style={{
                background: "oklch(0.74 0.12 80 / 0.04)",
                border: `1px solid ${group.color}33`,
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${group.color}18` }}
                >
                  <Icon size={13} style={{ color: group.color }} />
                </div>
                <span
                  className="text-xs font-semibold leading-tight"
                  style={{ color: group.color }}
                >
                  {group.category}
                </span>
              </div>
              {/* Links */}
              <div className="flex flex-col gap-1">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      background: "oklch(0.74 0.12 80 / 0.04)",
                      border: "1px solid oklch(0.74 0.12 80 / 0.1)",
                      color: "oklch(0.78 0.02 90)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        group.color;
                      (e.currentTarget as HTMLElement).style.borderColor =
                        `${group.color}66`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "oklch(0.78 0.02 90)";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(0.74 0.12 80 / 0.1)";
                    }}
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

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal relative overflow-hidden"
    >
      {/* Dimmed background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/assets/generated/seo-blog-bg.dim_1920x1080.jpg')",
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
            "linear-gradient(to bottom, var(--surface-2) 0%, oklch(0.1 0.008 285 / 0.92) 50%, var(--surface-2) 100%)",
        }}
      />

      {/* Magical effect: diagonal shimmer streaks */}
      {[0, 1, 2].map((n) => (
        <div
          key={n}
          className="absolute pointer-events-none"
          style={{
            top: `${20 + n * 30}%`,
            left: "-100%",
            width: "200%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, oklch(0.74 0.12 80 / 0.12) 50%, transparent 100%)",
            animation: "diagonal-streak 8s ease-in-out infinite",
            animationDelay: `${n * 2.5}s`,
            transform: `rotate(${-8 + n * 4}deg)`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Projects That Delivered
          </h2>
        </div>

        {/* Inline projects image */}
        <div className="mb-12 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/generated/projects-inline.dim_800x450.jpg"
            alt="Content marketing and SEO projects workspace"
            className="w-full max-h-56 object-cover object-center"
            style={{ filter: "brightness(0.5) saturate(1.1)" }}
          />
          {/* Strong multi-layer overlay for text readability */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(to top, oklch(0.06 0.004 285 / 0.95) 0%, oklch(0.08 0.005 285 / 0.6) 50%, oklch(0.06 0.004 285 / 0.4) 100%)",
            }}
          />
          <div className="absolute bottom-4 left-6 right-6">
            <p
              className="text-sm font-semibold"
              style={{
                color: "oklch(0.95 0.01 90)",
                textShadow:
                  "0 1px 3px rgba(0,0,0,0.9), 0 4px 16px rgba(0,0,0,0.8)",
              }}
            >
              SEO • Content Strategy • Social Media • Brand Campaigns
            </p>
          </div>
        </div>

        {/* Featured projects - large 2-col */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((proj) => (
            <div
              key={proj.title}
              className="p-8 rounded-2xl card-hover gold-border-card relative overflow-hidden group"
              style={{
                boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Glow bg */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: "var(--gold)" }}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      background: "oklch(0.74 0.12 80 / 0.12)",
                      color: "var(--gold)",
                      border: "1px solid oklch(0.74 0.12 80 / 0.25)",
                    }}
                  >
                    {proj.category}
                  </span>
                  <TrendingUp size={18} style={{ color: "var(--gold-dim)" }} />
                </div>

                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {proj.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "oklch(0.65 0.01 90)" }}
                >
                  {proj.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.stats.map((stat) => (
                    <span
                      key={stat}
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{
                        background: "oklch(0.74 0.12 80 / 0.08)",
                        color: "var(--gold-light)",
                        border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Weber expandable links */}
                {proj.hasWeberLinks && <WeberProjectLinks />}
              </div>
            </div>
          ))}
        </div>

        {/* Full gallery - smaller cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryProjects.map((proj) => (
            <div
              key={proj.title}
              className="p-6 rounded-xl card-hover gold-border-card"
              style={{
                boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
              }}
            >
              <span
                className="text-xs px-2 py-1 rounded-full font-medium mb-3 inline-block"
                style={{
                  background: "oklch(0.74 0.12 80 / 0.1)",
                  color: "var(--gold)",
                  border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                }}
              >
                {proj.category}
              </span>
              <h3 className="text-sm font-display font-semibold text-foreground mb-2">
                {proj.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "oklch(0.58 0.01 90)" }}
              >
                {proj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
