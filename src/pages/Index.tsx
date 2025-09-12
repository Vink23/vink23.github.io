import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <ResearchSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;