import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Zap } from "lucide-react";

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Developing novel neural network architectures and training methodologies for complex pattern recognition and decision making.",
      keywords: ["Neural Networks", "Transformers", "Computer Vision"]
    },
    {
      icon: Cpu,
      title: "Natural Language Processing",
      description: "Creating advanced language models for understanding, generation, and reasoning across multiple languages and domains.",
      keywords: ["LLMs", "Semantic Analysis", "Multilingual AI"]
    },
    {
      icon: Database,
      title: "Knowledge Graphs",
      description: "Building intelligent systems that can represent, reason about, and extract insights from structured knowledge.",
      keywords: ["Graph Neural Networks", "Ontologies", "Semantic Web"]
    },
    {
      icon: Zap,
      title: "Efficient AI",
      description: "Optimizing AI models for resource-constrained environments while maintaining high performance and accuracy.",
      keywords: ["Model Compression", "Edge AI", "Green Computing"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the cutting edge of artificial intelligence across multiple domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-neural transition-all duration-300 bg-gradient-card border-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((keyword, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-tech-accent/10 text-tech-accent hover:bg-tech-accent hover:text-background transition-smooth"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;