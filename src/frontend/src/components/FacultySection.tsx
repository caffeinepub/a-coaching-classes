import { Award, BookOpen, Crown, Star } from "lucide-react";
import { motion } from "motion/react";

const faculty = [
  {
    initials: "SM",
    name: "Subhash Maurya",
    role: "Founder",
    subject: "Mathematics",
    classes: "Class 11 & 12",
    qualification: "Ex-Aakash Faculty",
    experience: "25+ Years",
    bio: "Former faculty at the prestigious Aakash Institute. Renowned for his clarity in advanced calculus and algebra, helping hundreds of students crack JEE & board exams.",
    color: "bg-blue-600",
    badgeColor: "bg-blue-50 text-blue-700",
  },
  {
    initials: "AS",
    name: "Arjun Sharma",
    role: "Managing Director",
    subject: "Physics",
    classes: "Class 9, 10, 11 & 12",
    qualification: "NIT Jalandhar Alumnus",
    experience: "8+ Years",
    bio: "Graduate of NIT Jalandhar with a passion for making Physics intuitive. Known for his problem-solving approach and building conceptual foundations in students.",
    color: "bg-purple-600",
    badgeColor: "bg-purple-50 text-purple-700",
  },
  {
    initials: "AnS",
    name: "Ankit Sharma",
    role: "Managing Director",
    subject: "Mathematics",
    classes: "Class 9 & 10",
    qualification: "Senior Mathematics Faculty",
    experience: "12+ Years",
    bio: "A dedicated mathematics educator specialising in building strong foundational skills for Classes 9 and 10, ensuring students transition confidently to senior classes.",
    color: "bg-teal-600",
    badgeColor: "bg-teal-50 text-teal-700",
  },
  {
    initials: "AC",
    name: "Atul Chaturvedi",
    role: undefined,
    subject: "Chemistry",
    classes: "Class 11 & 12",
    qualification: "IIT Kanpur Alumnus",
    experience: "10+ Years",
    bio: "An IIT Kanpur graduate who brings rigorous scientific thinking to chemistry education. Specialises in organic chemistry and helping students excel in competitive exams.",
    color: "bg-green-600",
    badgeColor: "bg-green-50 text-green-700",
  },
  {
    initials: "VS",
    name: "Vishal Sir",
    role: undefined,
    subject: "Chemistry",
    classes: "Class 9 & 10",
    qualification: "Senior Chemistry Faculty",
    experience: "20+ Years",
    bio: "An experienced chemistry educator with over 20 years of dedicated teaching. Specialises in building strong foundational chemistry concepts for Classes 9 and 10 students.",
    color: "bg-indigo-600",
    badgeColor: "bg-indigo-50 text-indigo-700",
  },
  {
    initials: "JH",
    name: "Dr. Jyoti Hasija",
    role: undefined,
    subject: "Biology",
    classes: "Class 9 & 10",
    qualification: "Ph.D. (Biology)",
    experience: "25+ Years",
    bio: "A highly experienced biology educator with a Ph.D. and over two decades of teaching excellence. Her student-centric approach and detailed NCERT coverage set students up for board success.",
    color: "bg-rose-600",
    badgeColor: "bg-rose-50 text-rose-700",
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-widest mb-4">
            Meet the Team
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Our Distinguished Faculty
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Learn from the best — our faculty includes alumni from IIT Kanpur,
            NIT Jalandhar, and ex-faculty from Aakash Institute.
          </p>
        </motion.div>

        {/* Cards grid — 3 col on lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-ocid={`faculty.item.${i + 1}`}
            >
              {/* Avatar */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0`}
                >
                  {f.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-navy text-base leading-tight">
                    {f.name}
                  </h3>
                  {f.role && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full mt-1 bg-amber-50 text-amber-700 border border-amber-200">
                      <Crown className="w-3 h-3" />
                      {f.role}
                    </span>
                  )}
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {f.subject}
                  </p>
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mt-1 ${f.badgeColor}`}
                  >
                    {f.classes}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {f.bio}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                <div className="flex items-center gap-1.5 bg-navy/5 rounded-lg px-2.5 py-1.5">
                  <Award className="w-3.5 h-3.5 text-orange" />
                  <span className="text-xs font-semibold text-navy">
                    {f.qualification}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-orange/10 rounded-lg px-2.5 py-1.5">
                  <Star className="w-3.5 h-3.5 text-orange" />
                  <span className="text-xs font-semibold text-orange">
                    {f.experience}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-secondary rounded-lg px-2.5 py-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs font-semibold text-muted-foreground">
                    {f.subject}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
