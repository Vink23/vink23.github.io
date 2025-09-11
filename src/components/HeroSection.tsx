import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = ["AI Researcher", "Machine Learning Scientist"];
  
  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion than typing
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Dr. Alex Chen
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-foreground/90 font-medium min-h-[2rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Advancing the frontiers of artificial intelligence through deep learning, 
            natural language processing, and neural network architectures.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button variant="neural" size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-6">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="w-6 h-6 text-primary-foreground/60 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;