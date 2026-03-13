import { Star, Trophy } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const education = [
  {
    degree: "MSc Marketing",
    school: "Alliance Manchester Business School",
    university: "University of Manchester, United Kingdom",
    icon: Trophy,
    badge: "Runner-Up: Branding Competition",
    badgeSub: "Top 2 of 44 Teams",
    projects: [
      "Manchester Museum Marketing Consultancy",
      "Beyond Meat Marketing Strategy",
      "Oddbox Digital Marketing Strategy",
      "Coca-Cola AdeZ Market Research Plan",
      "PitchU Digital Business Project",
      "House of Books Digital Campaign",
    ],
  },
  {
    degree: "Bachelor of Management Studies",
    school: "Marketing",
    university: "University of Mumbai",
    icon: Star,
    badge: "CGPA: 9.05 / 10",
    badgeSub: "Distinction",
    projects: [],
  },
];

const SPARKLES = [
  { id: "s1", size: 4, left: 10, top: 15, duration: 5, delay: 0 },
  { id: "s2", size: 7, left: 25, top: 55, duration: 6.5, delay: 0.8 },
  { id: "s3", size: 4, left: 40, top: 15, duration: 8, delay: 1.6 },
  { id: "s4", size: 7, left: 55, top: 55, duration: 9.5, delay: 2.4 },
  { id: "s5", size: 4, left: 70, top: 15, duration: 11, delay: 3.2 },
  { id: "s6", size: 7, left: 85, top: 55, duration: 12.5, delay: 4 },
];

export default function EducationSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal relative overflow-hidden"
    >
      {/* Graduation photo as atmospheric background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/assets/uploads/WhatsApp-Image-2026-01-08-at-11.29.43-AM-1--2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.12,
          }}
        />
        {/* Strong dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.08 0.005 285 / 0.96) 0%, oklch(0.1 0.008 285 / 0.88) 40%, oklch(0.08 0.005 285 / 0.96) 100%)",
          }}
        />
      </div>

      {/* Magical effect: floating star sparkles */}
      {SPARKLES.map((sp) => (
        <div
          key={sp.id}
          className="absolute pointer-events-none rounded-full"
          style={{
            width: `${sp.size}px`,
            height: `${sp.size}px`,
            background: "var(--gold)",
            left: `${sp.left}%`,
            top: `${sp.top}%`,
            opacity: 0.35,
            filter: "blur(1px)",
            animation: `sparkle-float ${sp.duration}s ease-in-out infinite`,
            animationDelay: `${sp.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Graduation photo - floating circular element */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Halo rings */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                margin: "-16px",
                border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                animation: "spin-slow 20s linear infinite",
                borderTopColor: "var(--gold)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                margin: "-8px",
                border: "1px dashed oklch(0.74 0.12 80 / 0.25)",
              }}
            />
            <div
              className="w-48 h-48 rounded-full overflow-hidden"
              style={{
                border: "3px solid var(--gold)",
                boxShadow:
                  "0 0 50px oklch(0.74 0.12 80 / 0.3), 0 0 100px oklch(0.74 0.12 80 / 0.12)",
              }}
            >
              <img
                src="/assets/uploads/WhatsApp-Image-2026-01-08-at-11.29.43-AM-1--2.jpeg"
                alt="Ishita Hardas Graduation"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Badge */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-semibold animate-float"
              style={{
                background: "oklch(0.74 0.12 80 / 0.15)",
                border: "1px solid var(--gold)",
                color: "var(--gold)",
                backdropFilter: "blur(8px)",
              }}
            >
              🎓 University of Manchester
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Academic Foundation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => {
            const IconComp = edu.icon;
            return (
              <div
                key={edu.degree}
                className="p-8 rounded-2xl card-hover relative overflow-hidden"
                style={{
                  background: "var(--surface-1)",
                  border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--gold), var(--gold-light))",
                  }}
                />
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                  style={{ background: "var(--gold)" }}
                />

                <div className="relative">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6"
                    style={{
                      background: "oklch(0.74 0.12 80 / 0.12)",
                      border: "1px solid oklch(0.74 0.12 80 / 0.3)",
                    }}
                  >
                    <IconComp size={16} style={{ color: "var(--gold)" }} />
                    <div>
                      <div
                        className="text-sm font-bold"
                        style={{ color: "var(--gold)" }}
                      >
                        {edu.badge}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "oklch(0.65 0.01 90)" }}
                      >
                        {edu.badgeSub}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p
                    className="text-base font-medium mb-1"
                    style={{ color: "var(--gold-light)" }}
                  >
                    {edu.school}
                  </p>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "oklch(0.58 0.02 90)" }}
                  >
                    {edu.university}
                  </p>

                  {edu.projects.length > 0 && (
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase mb-3 font-semibold"
                        style={{ color: "oklch(0.55 0.09 80)" }}
                      >
                        Selected Projects
                      </p>
                      <ul className="space-y-1.5">
                        {edu.projects.map((p) => (
                          <li
                            key={p}
                            className="flex items-center gap-2 text-xs"
                            style={{ color: "oklch(0.65 0.01 90)" }}
                          >
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: "var(--gold)" }}
                            />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
