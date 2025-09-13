import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";
const ProjectsSection = () => {
  const projects = [{
    title: "SurgiRAG",
    description: "An end-to-end surgical QA system using a fine-tuned BioBERT retriever and LoRA-adapted LLaMA-3 to generate factually grounded answers, outperforming baselines by over 40 percentage points on faithfulness metrics.",
    tech: ["Python", "PyTorch", "HuggingFace", "PEFT (LoRA)", "FAISS", "SentenceTransformers"],
    stars: "2.3k",
    status: "Active",
    types: ["Framework", "Medical AI"],
    highlights: ["Domain-Adapted Retriever", "Cross-Encoder Reranking", "LoRA Fine-Tuning", "Faithfulness Evaluation"]
  }, {
    title: "PathoVision",
    description: "A hybrid computer vision pipeline that classifies brain tumors with 96.7% accuracy by fusing classical features (edges, textures) with deep embeddings from a DINOv2 Vision Transformer.",
    tech: ["Python", "PyTorch", "OpenCV", "DINOv2", "Scikit-learn", "NumPy"],
    stars: "1.8k",
    status: "Active",
    types: ["Computer Vision", "Medical AI"],
    highlights: ["DINOv2", "Grid Search CV", "Blob Detection", "PCA"]
  }];
  return <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Open Source Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the AI community through open source tools and frameworks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className="group hover:shadow-neural transition-all duration-300 bg-gradient-card border-primary/10 h-full">
              <CardHeader className="md:min-h-[220px]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-3">
                      {project.types.map((type, typeIdx) => <Badge key={typeIdx} variant="secondary" className="bg-primary/10 text-primary">
                          {type}
                        </Badge>)}
                      
                    </div>
                  </div>
                  <Badge variant={project.status === 'Active' ? 'default' : 'secondary'} className={project.status === 'Active' ? 'bg-tech-accent/20 text-tech-accent' : ''}>
                    {project.status}
                  </Badge>
                </div>
                
                <CardDescription className="text-base leading-relaxed clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="min-h-[78px]">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => <Badge key={idx} variant="outline" className="text-xs border-tech-accent/30 text-tech-accent">
                          {highlight}
                        </Badge>)}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => <Badge key={idx} variant="secondary" className="text-xs bg-muted/50">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>
                </div>
                
                <div className={`flex gap-2 ${project.title === 'PathoVision' ? 'mt-6' : 'mt-4'}`}>
                  <Button variant="tech" size="sm" className="flex-1 gap-2 mt-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className={`gap-2 ${project.title === 'PathoVision' ? 'mt-4' : ''}`}>
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/vink23" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;