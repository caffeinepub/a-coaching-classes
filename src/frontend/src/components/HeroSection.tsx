import {
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  HelpCircle,
  Monitor,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: CheckCircle2, label: "Expert Faculty" },
  { icon: Users, label: "Small Batches" },
  { icon: ClipboardList, label: "Regular Tests" },
  { icon: HelpCircle, label: "Doubt Sessions" },
  { icon: Monitor, label: "Online & Offline" },
];

export default function HeroSection() {
  const handleEnroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewCourses = () => {
    document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative bg-navy pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.68 0.17 50) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, oklch(0.40 0.065 232) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
              Unlock Your <span className="text-orange">Potential</span>
              <br />
              <span className="text-orange">Classes 9 to 12</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Expert coaching in Mathematics, Physics, Chemistry &amp; Biology
              by experienced faculty from IIT Kanpur &amp; NIT Jalandhar. Small
              batches, personalised attention — available both online and
              offline.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleEnroll}
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-white font-bold text-base hover:bg-orange-light transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Enroll Now
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleViewCourses}
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all duration-200"
              >
                View Courses
              </button>
            </div>
          </motion.div>

          {/* Right column — classroom image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/assets/generated/hero-classroom.dim_800x500.jpg"
                alt="A² Coaching Classes students studying"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A²</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm">
                    6 Expert Teachers
                  </p>
                  <p className="text-muted-foreground text-xs">
                    IIT &amp; NIT Alumni
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="relative bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-white/60 text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
              Batch Highlights:
            </span>
            {highlights.map((item, i) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-orange" />
                <span className="text-white text-sm font-medium">
                  {item.label}
                </span>
                {i < highlights.length - 1 && (
                  <span className="hidden sm:block text-white/20 ml-2">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
