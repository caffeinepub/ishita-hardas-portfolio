import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import AnimatedDivider from "./components/AnimatedDivider";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ExpertiseSection from "./components/ExpertiseSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import StatsBar from "./components/StatsBar";
import ToolsSection from "./components/ToolsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedDivider />
        <StatsBar />
        <AnimatedDivider />
        <AboutSection />
        <AnimatedDivider />
        <ExpertiseSection />
        <AnimatedDivider />
        <ExperienceSection />
        <AnimatedDivider />
        <ProjectsSection />
        <AnimatedDivider />
        <EducationSection />
        <AnimatedDivider />
        <ToolsSection />
        <AnimatedDivider />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
