import { CheckCircle } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const certifications = [
  "Google Ads Search Certification",
  "Google Ads Creative Certification",
  "Google Analytics Certification",
  "Google Analytics Individual Qualification",
  "Saint-Gobain Weber Marketing Internship Certification",
];

export default function ToolsSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="tools"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Toolbox
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Certifications
          </h2>
        </div>

        {/* Text above the image */}
        <div className="text-center mb-6">
          <p
            className="text-base font-display font-semibold italic"
            style={{
              color: "oklch(0.88 0.04 80)",
              textShadow: "none",
            }}
          >
            Certified across Google, HubSpot, and leading marketing platforms
          </p>
        </div>

        {/* Inline tools image - full uncropped, 60vw centered */}
        <div className="mb-12 flex justify-center">
          <img
            src="/assets/generated/tools-inline.dim_800x450.jpg"
            alt="Marketing tools and technology stack"
            className="rounded-2xl"
            style={{
              width: "60vw",
              height: "auto",
              display: "block",
              filter: "brightness(0.92) saturate(1.15)",
            }}
          />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Certifications */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "var(--surface-1)",
              border: "1px solid oklch(0.74 0.12 80 / 0.15)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}
          >
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "var(--gold)" }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: "oklch(0.75 0.01 90)" }}
                  >
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
