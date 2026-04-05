import ContactSection from "./components/ContactSection";
import CoursesSection from "./components/CoursesSection";
import FacultySection from "./components/FacultySection";
import FeesSection from "./components/FeesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <FacultySection />
        <FeesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
