import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Zap, Network } from "lucide-react";

const ResearchSection = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Spiking Neural Networks",
      description: "Developing biologically-plausible neural networks that communicate through discrete spikes, mimicking the temporal dynamics of real neurons.",
      keywords: ["Temporal Coding", "Spike-Timing", "Neuromorphic AI"]
    },
    {
      icon: Cpu,
      title: "Neuromorphic Computing",
      description: "Creating energy-efficient hardware architectures inspired by the brain's structure and computational principles for next-generation AI systems.",
      keywords: ["Neuromorphic Chips", "Memristors", "Edge Computing"]
    },
    {
      icon: Zap,
      title: "Neural Plasticity & Adaptation",
      description: "Investigating how artificial neural networks can dynamically adapt and reorganize their connections, inspired by synaptic plasticity mechanisms.",
      keywords: ["Hebbian Learning", "Synaptic Plasticity", "Adaptive Networks"]
    },
    {
      icon: Network,
      title: "Brain-Inspired Architectures",
      description: "Designing novel AI architectures that replicate the hierarchical organization and distributed processing of biological neural systems.",
      keywords: ["Cortical Models", "Attention Mechanisms", "Hierarchical Processing"]
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
            Bridging neuroscience and artificial intelligence to create brain-inspired computational systems
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