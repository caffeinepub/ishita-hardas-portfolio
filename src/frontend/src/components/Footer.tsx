import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "ishita.uk")}`;

  return (
    <footer
      className="py-10 px-6"
      style={{
        background: "oklch(0.06 0.004 285)",
        borderTop: "1px solid oklch(0.74 0.12 80 / 0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center font-display font-bold text-xs"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            IH
          </div>
          <span
            className="text-sm font-display"
            style={{ color: "oklch(0.65 0.01 90)" }}
          >
            Ishita Hardas — Marketing Strategist
          </span>
        </div>

        <p
          className="text-xs flex items-center gap-1.5"
          style={{ color: "oklch(0.45 0.01 90)" }}
        >
          © {year}. Built with{" "}
          <Heart
            size={11}
            className="inline"
            style={{ color: "var(--gold)" }}
          />{" "}
          using{" "}
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-colors"
            style={{ color: "var(--gold-dim)" }}
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
