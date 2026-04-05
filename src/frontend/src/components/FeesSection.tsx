import { CheckCircle2, IndianRupee } from "lucide-react";
import { motion } from "motion/react";

const feeRows = [
  {
    id: "combined-9-10",
    classes: "Class 9 & 10",
    subject: "Maths + Science (Combined)",
    amount: "₹16,000",
    duration: "3 Months",
    note: "Best value combo",
    highlight: true,
  },
  {
    id: "single-9-10",
    classes: "Class 9 & 10",
    subject: "Only Maths OR Only Science",
    amount: "₹9,000",
    duration: "Per Quarter",
    note: "Flexible option",
    highlight: false,
  },
  {
    id: "all-11-12",
    classes: "Class 11 & 12",
    subject: "Per Subject (Maths / Physics / Chemistry / Biology)",
    amount: "₹50,000",
    duration: "Per Year",
    note: "Per subject per year",
    highlight: true,
  },
];

const included = [
  "Study material & notes provided",
  "Regular mock tests & assessments",
  "Weekly doubt-clearing sessions",
  "Progress reports to parents",
  "Small batch size for attention",
  "Experienced & qualified faculty",
];

export default function FeesSection() {
  return (
    <section id="fees" className="py-20 lg:py-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-orange/10 text-orange text-xs font-bold uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Fee Structure
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic Year 2025–26 · All fees subject to revision
          </p>
        </motion.div>

        {/* Fee table card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card rounded-2xl shadow-card border border-border overflow-hidden mb-10"
        >
          {/* Table header */}
          <div className="bg-navy px-6 py-4 grid grid-cols-4 gap-4">
            <span className="text-white/70 text-xs font-bold uppercase tracking-wider">
              Class
            </span>
            <span className="text-white/70 text-xs font-bold uppercase tracking-wider col-span-1">
              Subject
            </span>
            <span className="text-white/70 text-xs font-bold uppercase tracking-wider text-right">
              Fee
            </span>
            <span className="text-white/70 text-xs font-bold uppercase tracking-wider text-right">
              Duration
            </span>
          </div>

          {/* Table rows */}
          {feeRows.map((row, idx) => (
            <div
              key={row.id}
              data-ocid={`fees.item.${idx + 1}`}
              className={`px-6 py-5 grid grid-cols-4 gap-4 items-center border-b border-border last:border-0 ${
                row.highlight ? "bg-orange/5" : "bg-card"
              }`}
            >
              <div>
                <span className="inline-block bg-navy/10 text-navy text-xs font-bold px-2.5 py-1 rounded-lg">
                  {row.classes}
                </span>
              </div>
              <div className="col-span-1">
                <p className="text-navy font-semibold text-sm">{row.subject}</p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {row.note}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <IndianRupee className="w-4 h-4 text-orange" />
                  <span className="font-display font-extrabold text-navy text-xl">
                    {row.amount.replace("₹", "")}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-muted-foreground text-sm font-medium">
                  {row.duration}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-navy rounded-2xl p-8"
        >
          <h3 className="font-display font-bold text-white text-xl mb-6 text-center">
            Everything Included in the Fee
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-white/85 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
