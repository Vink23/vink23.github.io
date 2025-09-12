import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Zap, Network } from "lucide-react";
const ResearchSection = () => {
  const researchAreas = [{
    icon: Brain,
    title: "Spiking Neural Networks",
    description: "Developing biologically-plausible neural networks that communicate through discrete spikes, mimicking the temporal dynamics of real neurons.",
    keywords: ["Temporal Coding", "Spike-Timing", "Neuromorphic AI"]
  }, {
    icon: Cpu,
    title: "Neuromorphic Computing",
    description: "Creating energy-efficient hardware architectures inspired by the brain's structure and computational principles for next-generation AI systems.",
    keywords: ["Neuromorphic Chips", "Memristors", "Edge Computing"]
  }, {
    icon: Zap,
    title: "Neural Plasticity & Adaptation",
    description: "Investigating how artificial neural networks can dynamically adapt and reorganize their connections, inspired by synaptic plasticity mechanisms.",
    keywords: ["Hebbian Learning", "Synaptic Plasticity", "Adaptive Networks"]
  }, {
    icon: Network,
    title: "Brain-Inspired Architectures",
    description: "Designing novel AI architectures that replicate the hierarchical organization and distributed processing of biological neural systems.",
    keywords: ["Cortical Models", "Attention Mechanisms", "Hierarchical Processing"]
  }];
  return <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging neuroscience and artificial intelligence to create brain-inspired computational systems
          </p>
        </div>
        
        
      </div>
    </section>;
};
export default ResearchSection;