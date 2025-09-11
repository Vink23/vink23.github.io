import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import ResumeSnapshotSection from "@/components/ResumeSnapshotSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ResearchSection />
      <ResumeSnapshotSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;