import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";
import { NeuralNetwork } from "@/components/NeuralNetwork";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      {/* Global Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <NeuralNetwork 
          className="w-full h-full" 
          nodeCount={100}
          connectionProbability={0.25}
          layers={6}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <ThemeToggle />
        <HeroSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;