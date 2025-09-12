import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";
import { NeuralNetwork } from "@/components/NeuralNetwork";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;