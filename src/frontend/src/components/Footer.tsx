import {
  Facebook,
  GraduationCap,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Fees", href: "#fees" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange text-white font-display font-extrabold text-base">
                A²
              </div>
              <div>
                <p className="font-display font-extrabold text-white text-base leading-tight">
                  A² Coaching Classes
                </p>
                <p className="text-white/50 text-xs">Excellence in Education</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering students in Classes 9–12 with expert coaching in Maths,
              Physics, Chemistry, and Biology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="footer.link"
                    className="text-white/70 text-sm hover:text-orange transition-colors font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-orange hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <GraduationCap className="w-4 h-4 text-orange" />
              <span>+91 98765 43210</span>
            </div>
            <p className="text-white/60 text-sm mt-1">info@a2coaching.in</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs text-center">
            © {year} A² Coaching Classes. All rights reserved.
          </p>
          <p className="text-white/30 text-xs text-center">
            Built with <span className="text-orange">♥</span> using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-orange transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
