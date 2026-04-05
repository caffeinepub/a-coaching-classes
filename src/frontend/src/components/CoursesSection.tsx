import { Atom, Calculator, FlaskConical, Leaf } from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: Calculator,
    subject: "Mathematics",
    classes: "Class 9, 10, 11 & 12",
    color: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
    teachers: ["Subhash Maurya (Cl. 11-12)", "Ankit Sharma (Cl. 9-10)"],
    highlights: [
      "Algebra & Calculus",
      "Trigonometry",
      "Co-ordinate Geometry",
      "Board & Competitive prep",
    ],
  },
  {
    icon: Atom,
    subject: "Physics",
    classes: "Class 9, 10, 11 & 12",
    color: "bg-purple-50 text-purple-700",
    iconBg: "bg-purple-100",
    teachers: ["Arjun Sharma"],
    highlights: [
      "Mechanics & Thermodynamics",
      "Electromagnetism",
      "Optics & Waves",
      "Numerical Problem Solving",
    ],
  },
  {
    icon: FlaskConical,
    subject: "Chemistry",
    classes: "Class 11 & 12",
    color: "bg-green-50 text-green-700",
    iconBg: "bg-green-100",
    teachers: ["Atul Chaturvedi"],
    highlights: [
      "Organic Chemistry",
      "Inorganic & Physical Chem",
      "Reaction Mechanisms",
      "Lab-based Learning",
    ],
  },
  {
    icon: Leaf,
    subject: "Biology",
    classes: "Class 9 & 10",
    color: "bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-100",
    teachers: ["Jyoti Hasija"],
    highlights: [
      "Cell Biology & Genetics",
      "Human Physiology",
      "Plant Science",
      "NCERT + Board Focus",
    ],
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-background">
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
            What We Teach
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Our Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprehensive academic coaching across core Science and Mathematics
            subjects for Classes 9 through 12.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.subject}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-ocid={`courses.item.${i + 1}`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${course.iconBg} flex items-center justify-center mb-4`}
              >
                <course.icon
                  className={`w-6 h-6 ${course.color.split(" ")[1]}`}
                />
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-1">
                {course.subject}
              </h3>
              <span
                className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${course.color}`}
              >
                {course.classes}
              </span>
              <ul className="space-y-1.5 mb-4">
                {course.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
                  Faculty
                </p>
                {course.teachers.map((t) => (
                  <p key={t} className="text-xs font-semibold text-navy">
                    {t}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
