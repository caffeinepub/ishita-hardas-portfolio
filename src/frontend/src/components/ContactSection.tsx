import {
  AlertCircle,
  CheckCircle,
  Linkedin,
  Loader2,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ContactSection() {
  const ref = useScrollReveal();
  const { actor } = useActor();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setStatus("loading");
    try {
      await actor.submitContact(form.name, form.email, form.message);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--surface-2)",
    border: "1px solid oklch(0.74 0.12 80 / 0.2)",
    color: "oklch(0.9 0.01 90)",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "var(--gold)";
    e.target.style.boxShadow =
      "0 0 0 1px var(--gold), 0 0 15px oklch(0.74 0.12 80 / 0.15)";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "oklch(0.74 0.12 80 / 0.2)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 px-6 section-reveal"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-3 font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Let&apos;s Collaborate
          </h2>
          <p
            className="text-base mt-4 max-w-lg mx-auto"
            style={{ color: "oklch(0.65 0.01 90)" }}
          >
            Ready to bring strategic marketing thinking and creative
            storytelling to your team. Let&apos;s talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Contact form */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: "var(--surface-1)",
              border: "1px solid oklch(0.74 0.12 80 / 0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs tracking-widest uppercase mb-2 font-semibold"
                  style={{ color: "oklch(0.65 0.01 90)" }}
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  data-ocid="contact.input"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs tracking-widest uppercase mb-2 font-semibold"
                  style={{ color: "oklch(0.65 0.01 90)" }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  data-ocid="contact.email_input"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs tracking-widest uppercase mb-2 font-semibold"
                  style={{ color: "oklch(0.65 0.01 90)" }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  data-ocid="contact.textarea"
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                data-ocid="contact.submit_button"
                className="w-full py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.74 0.12 80), oklch(0.84 0.1 80))",
                  color: "oklch(0.08 0.005 285)",
                }}
              >
                {status === "loading" && (
                  <Loader2 size={16} className="animate-spin" />
                )}
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-center gap-3 p-4 rounded-lg"
                  style={{
                    background: "oklch(0.74 0.12 80 / 0.1)",
                    border: "1px solid oklch(0.74 0.12 80 / 0.3)",
                  }}
                >
                  <CheckCircle size={18} style={{ color: "var(--gold)" }} />
                  <p className="text-sm" style={{ color: "var(--gold)" }}>
                    Message sent! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 p-4 rounded-lg"
                  style={{
                    background: "oklch(0.577 0.245 27 / 0.1)",
                    border: "1px solid oklch(0.577 0.245 27 / 0.3)",
                  }}
                >
                  <AlertCircle
                    size={18}
                    style={{ color: "oklch(0.7 0.2 27)" }}
                  />
                  <p className="text-sm" style={{ color: "oklch(0.7 0.2 27)" }}>
                    Something went wrong. Please try again or email directly.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Open to Opportunities
              </h3>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.01 90)" }}
              >
                Currently seeking full-time marketing roles in the UK. With an
                MSc from the University of Manchester and hands-on experience
                with global brands, I bring both strategic depth and creative
                execution to every campaign.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "atihsi02@gmail.com",
                  href: "mailto:atihsi02@gmail.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "linkedin.com/in/ishitahardas",
                  href: "https://linkedin.com/in/ishitahardas",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                  style={{
                    background: "var(--surface-1)",
                    border: "1px solid oklch(0.74 0.12 80 / 0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--gold)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 20px oklch(0.74 0.12 80 / 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.74 0.12 80 / 0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "oklch(0.74 0.12 80 / 0.1)",
                      border: "1px solid oklch(0.74 0.12 80 / 0.2)",
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "oklch(0.55 0.01 90)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-sm font-medium transition-colors"
                      style={{ color: "oklch(0.85 0.01 90)" }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
