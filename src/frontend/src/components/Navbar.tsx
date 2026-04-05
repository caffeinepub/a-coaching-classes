import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-nav" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2"
            data-ocid="nav.link"
            onClick={() => handleNavClick("#home")}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy text-white font-display font-extrabold text-lg leading-none">
              A²
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-extrabold text-navy text-base">
                A² Coaching
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                Classes
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-foreground hover:text-navy hover:bg-secondary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            type="button"
            data-ocid="nav.primary_button"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange text-white font-semibold text-sm hover:bg-orange-light transition-colors duration-200 shadow-sm"
            onClick={() => handleNavClick("#contact")}
          >
            <GraduationCap className="w-4 h-4" />
            Register Now
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-ocid="nav.link"
              className="block py-3 px-3 rounded-lg text-sm font-semibold text-foreground hover:text-navy hover:bg-secondary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            data-ocid="nav.primary_button"
            className="mt-3 flex items-center justify-center gap-2 w-full py-3 rounded-full bg-orange text-white font-semibold text-sm hover:bg-orange-light transition-colors"
            onClick={() => handleNavClick("#contact")}
          >
            <GraduationCap className="w-4 h-4" />
            Register Now
          </button>
        </div>
      )}
    </header>
  );
}
