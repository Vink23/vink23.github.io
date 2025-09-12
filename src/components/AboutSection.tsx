import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Code, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const aboutCards = [{
    icon: User,
    title: "Who I Am",
    description: "I'm Vinith Kuruppu, a passionate AI researcher and machine learning scientist dedicated to pushing the boundaries of artificial intelligence and creating meaningful technological solutions.",
    keywords: ["AI Researcher", "Problem Solver", "Innovator"]
  }, {
    icon: Heart,
    title: "What Drives Me",
    description: "I'm fascinated by the intersection of neuroscience and artificial intelligence, constantly seeking to understand how we can create more intelligent and efficient computational systems.",
    keywords: ["Curiosity", "Innovation", "Impact"]
  }, {
    icon: Code,
    title: "How I Work",
    description: "I believe in combining theoretical knowledge with practical implementation, using cutting-edge technologies to solve real-world problems and contribute to the advancement of AI.",
    keywords: ["Research", "Development", "Collaboration"]
  }, {
    icon: Lightbulb,
    title: "My Vision",
    description: "I envision a future where AI systems are not just powerful, but also efficient, interpretable, and beneficial to society, inspired by the elegance of biological intelligence.",
    keywords: ["Future-focused", "Ethical AI", "Sustainability"]
  }];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about artificial intelligence, driven by curiosity, and committed to making a meaningful impact through technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutCards.map((card, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{card.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {card.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {card.keywords.map((keyword, keyIndex) => (
                    <Badge key={keyIndex} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;