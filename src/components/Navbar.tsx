import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/programs", label: "Programs" },
  { to: "/admissions", label: "Admissions" },
  { to: "/life", label: "School Life" },
  { to: "/gallery", label: "Gallery" },
  { to: "/vacancies", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_4px_20px_rgba(20,70,40,0.08)] border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo className={`h-12 w-12 ${scrolled ? "" : "drop-shadow-lg"}`} />
          <div className="leading-tight">
            <div className={`font-display font-bold text-base ${scrolled ? "text-primary" : "text-white"}`}>
              Infinity View Academy
            </div>
            <div className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? "text-brand-orange" : "text-brand-gold"}`}>
              Learning Today, Leading Tomorrow
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-secondary"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
              activeProps={{
                className: scrolled
                  ? "px-3 py-2 rounded-full text-sm font-semibold text-primary bg-secondary"
                  : "px-3 py-2 rounded-full text-sm font-semibold text-white bg-white/15",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/admissions" className="btn-orange !py-2.5 !px-5 text-sm">
            Enroll Today
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-primary" : "text-white"}`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-foreground/85 hover:bg-secondary"
                activeProps={{ className: "px-3 py-3 rounded-md text-sm font-semibold text-primary bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="btn-orange mt-3">
              Enroll Today
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
