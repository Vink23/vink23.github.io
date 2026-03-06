import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";
const ProjectsSection = () => {
  const projects = [
    {
      title: "SurgiRAG",
      bullets: [
        "Built a domain-adaptive RAG pipeline for Q&A by fine-tuning LLaMA-3.2-11B with LoRA and pairing BioBERT retrieval with cross-encoder reranking, improving LLM-judged faithfulness from 0.25 to 0.66 vs. the base model.",
        "Designed a custom LLM-as-judge evaluation framework using GPT-4o-mini to assess faithfulness and fluency tradeoffs not well captured by standard metrics like ROUGE and BLEU.",
        "Evaluated 12 retrieval, reranking, and generation configurations, identifying cross-encoder reranking as the highest-leverage component for improving answer quality.",
      ],
      tech: ["Python", "PyTorch", "HuggingFace", "PEFT (LoRA)", "FAISS", "SentenceTransformers"],
      stars: "2.3k",
      status: "Active",
      types: ["Framework", "Medical AI"],
      highlights: [
        "Domain-Adapted Retriever",
        "Cross-Encoder Reranking",
        "LoRA Fine-Tuning",
      ],
      buttonStyles: {
        container: "",
        codeButton: "",
        demoButton: "",
      },
    },
    {
      title: "PathoVision",
      bullets: [
        "Built a brain tumor MRI classifier achieving 96.7% test accuracy by combining DINOv2 embeddings with handcrafted edge features, outperforming CNN baselines with a fraction of the compute.",
        "Identified contrast and orientation artifacts as key misclassification drivers through cross-source error analysis, leading to preprocessing changes that improved robustness across imaging sources.",
      ],
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
      bullets: [
        "Fine-tuned Whisper ASR models using LoRA for older-adult and dementia-affected speech, improving WER by 17% vs. baseline; deployed via Hugging Face Inference API and an interactive web demo for real-time transcription.",
        "Built an end-to-end AWS training pipeline with distributed training, custom preprocessing (noise removal, disfluency handling, audio normalization), experiment tracking, and systematic hyperparameter sweeps (LR, LoRA rank, dropout).",
        "Performed stratified failure analysis across acoustic conditions and speaker characteristics using regression modeling and hypothesis testing to identify drivers of elevated WER; findings guided targeted data augmentation to mitigate demographic bias.",
      ],
      tech: ["Python", "PyTorch", "PEFT", "Whisper", "AWS", "torchaudio", "FFmpeg", "Librosa"],
      stars: "1.2k",
      status: "Active",
      types: ["Speech Recognition", "Voice AI"],
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
              className="group hover:shadow-neural transition-all duration-300 bg-gradient-card border-primary/10 h-full grid grid-rows-[auto_1fr_auto_auto_auto]"
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

              <CardContent className="pt-2 pb-4 self-start">
                <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
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
                              ? "https://github.com/Vink23/AgeVoice"
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
