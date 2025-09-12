import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";
import { NeuralNetwork } from "@/components/NeuralNetwork";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Neural Network Background */}
      <div className="fixed inset-0 w-full h-full opacity-20 pointer-events-none z-0">
        <NeuralNetwork 
          className="w-full h-full" 
          nodeCount={60}
          connectionProbability={0.25}
          layers={5}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <ThemeToggle />
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;