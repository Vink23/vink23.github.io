import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";
const ProjectsSection = () => {
  const projects = [
    {
      title: "SurgiRAG",
      description:
        "An end-to-end surgical QA system using a fine-tuned BioBERT retriever and LoRA-adapted LLaMA-3 to generate factually grounded answers, outperforming baselines by over 40 percentage points on faithfulness metrics.",
      tech: ["Python", "PyTorch", "HuggingFace", "PEFT (LoRA)", "FAISS", "SentenceTransformers"],
      stars: "2.3k",
      status: "Active",
      types: ["Framework", "Medical AI"],
      highlights: [
        "Domain-Adapted Retriever",
        "Cross-Encoder Reranking",
        "LoRA Fine-Tuning",
        "Faithfulness Evaluation",
      ],
      buttonStyles: {
        container: "",
        codeButton: "",
        demoButton: "",
      },
    },
    {
      title: "PathoVision",
      description:
        "A hybrid computer vision pipeline that classifies brain tumors with 96.7% accuracy by fusing classical features (edges, textures) with deep embeddings from a DINOv2 Vision Transformer.",
      tech: ["Python", "PyTorch", "OpenCV", "DINOv2", "Scikit-learn", "NumPy", "Matplotlib", "PIL"],
      stars: "1.8k",
      status: "Active",
      types: ["Computer Vision", "Medical AI"],
      highlights: ["DINOv2", "Grid Search CV", "Blob Detection", "PCA"],
      buttonStyles: {
        container: "",
        codeButton: "",
        demoButton: "",
      },
    },
    {
      title: "AgeVoicE",
      description:
        "A specialized speech recognition pipeline designed to transcribe dysfluent speech patterns from older adults with dementia. Fine-tuned OpenAI's Whisper model to handle speech irregularities and orchestrated a scalable AWS inference pipeline to achieve a 17% improvement.",
      tech: ["Python", "PyTorch", "PEFT", "Whisper", "AWS", "torchaudio", "FFmpeg", "Librosa"],
      stars: "1.2k",
      status: "Active",
      types: ["Speech Recognition", "Medical AI"],
      highlights: ["Whisper Fine-Tuning", "Scalable Inference", "LoRA Adaptation", "Token Augmentation"],
      buttonStyles: {
        container: "",
        codeButton: "",
        demoButton: "",
      },
    },
  ];
  return (
    <section className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Open Source Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the AI community through open source tools and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-neural transition-all duration-300 bg-gradient-card border-primary/10 h-full grid grid-rows-[auto_1fr_1fr_auto_auto]"
            >
              <CardHeader className="pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-3">
                      {project.types.map((type, typeIdx) => (
                        <Badge key={typeIdx} variant="secondary" className="bg-primary/10 text-primary">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge
                    variant={project.status === "Active" ? "default" : "secondary"}
                    className={project.status === "Active" ? "bg-tech-accent/20 text-tech-accent" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-2 pb-4">
                <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>
              </CardContent>

              <CardContent className="pt-0 pb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-tech-accent/30 text-tech-accent">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardContent className="pt-0 pb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-muted/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardContent className="pt-2">
                <div className={`flex gap-2 ${project.buttonStyles.container}`}>
                  <Button
                    variant="tech"
                    size="sm"
                    className={`flex-1 gap-2 ${project.buttonStyles.codeButton}`}
                    asChild
                  >
                    <a
                      href={
                        project.title === "SurgiRAG"
                          ? "https://github.com/Vink23/SurgiRAG/tree/main"
                          : project.title === "PathoVision"
                            ? "https://github.com/Vink23/PathoVision"
                            : project.title === "AgeVoicE"
                              ? "#"
                              : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className={`gap-2 ${project.buttonStyles.demoButton}`} asChild>
                    <a
                      href={
                        project.title === "SurgiRAG"
                          ? "https://github.com/Vink23/SurgiRAG/blob/main/SurgiRAG%20Paper.pdf"
                          : project.title === "PathoVision"
                            ? "https://github.com/Vink23/PathoVision/blob/main/Brain%20Tumor%20Report.pdf"
                            : project.title === "AgeVoicE"
                              ? "#"
                              : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Paper
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a
              href="https://github.com/vink23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
