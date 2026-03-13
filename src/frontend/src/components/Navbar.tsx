import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div
            className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-display font-bold text-sm tracking-wider transition-all duration-300 group-hover:shadow-gold"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            IH
          </div>
          <span
            className="hidden sm:block text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--gold-light)" }}
          >
            Ishita Hardas
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNav(link.href)}
              data-ocid="nav.link"
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-gold transition-colors duration-200 relative group"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--gold)" }}
              />
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300"
            style={{
              borderColor: "var(--gold)",
              color: "var(--gold)",
            }}
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground/70"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden navbar-glass border-t border-border/30">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                data-ocid="nav.link"
                className="text-sm font-medium text-left text-foreground/70 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
