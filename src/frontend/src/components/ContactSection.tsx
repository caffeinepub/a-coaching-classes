import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    cls: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", cls: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/40">
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
            Get in Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to start your journey? Fill in the form and our team will get
            back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — contact info + form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-2xl p-5 border border-border shadow-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="font-semibold text-navy text-sm">
                    +91 9716086754
                  </p>
                  <p className="font-semibold text-navy text-sm">
                    +91 9149373066
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-5 border border-border shadow-card flex items-start gap-4 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="font-semibold text-navy text-sm">
                    Mother's Pride School
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Love Blossoms Here, Near SRS Residency,
                  </p>
                  <p className="text-muted-foreground text-xs">
                    RPS City, Sector 88, Faridabad, Haryana 121014
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <h3 className="font-display font-bold text-navy text-lg mb-5">
                Send Us a Message
              </h3>
              {submitted && (
                <div
                  data-ocid="contact.success_state"
                  className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium"
                >
                  ✅ Thanks! We'll reach out to you shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-navy font-semibold text-sm mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.input"
                    placeholder="Your full name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="border-border focus-visible:ring-orange/40"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-class"
                    className="text-navy font-semibold text-sm mb-1.5 block"
                  >
                    Class *
                  </Label>
                  <Select
                    value={formState.cls}
                    onValueChange={(v) =>
                      setFormState((p) => ({ ...p, cls: v }))
                    }
                  >
                    <SelectTrigger
                      id="contact-class"
                      data-ocid="contact.select"
                      className="border-border"
                    >
                      <SelectValue placeholder="Select your class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">Class 9</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                      <SelectItem value="11">Class 11</SelectItem>
                      <SelectItem value="12">Class 12</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="text-navy font-semibold text-sm mb-1.5 block"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.input"
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, phone: e.target.value }))
                    }
                    required
                    className="border-border focus-visible:ring-orange/40"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-navy font-semibold text-sm mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.textarea"
                    placeholder="Any questions or specific requirements..."
                    rows={3}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, message: e.target.value }))
                    }
                    className="border-border focus-visible:ring-orange/40 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange-light transition-all duration-200 hover:shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right — map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl overflow-hidden border border-border shadow-card min-h-[400px] lg:min-h-full"
          >
            <div className="relative w-full h-full min-h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(203,213,225,0.5) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(203,213,225,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative flex flex-col items-center gap-4 text-center px-8">
                <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-lg mb-1">
                    A² Coaching Classes
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Mother's Pride School, Love Blossoms Here
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Near SRS Residency, RPS City
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Sector 88, Faridabad, Haryana 121014
                  </p>
                </div>
                <a
                  href="https://maps.google.com/maps/search/Mother's+Pride+School+RPS+City+Sector+88+Faridabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.link"
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
              <div className="absolute top-8 right-12 w-3 h-3 rounded-full bg-orange ring-4 ring-orange/20" />
              <div className="absolute bottom-24 left-16 w-2 h-2 rounded-full bg-navy/30" />
              <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-navy/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
