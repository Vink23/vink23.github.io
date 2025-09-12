import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
const ResumeSection = () => {
  return <section id="resume-snapshot" className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        

        <div className="bg-background rounded-lg shadow-lg p-8">
          {/* Header */}
          <header id="resume-anchor" className="text-center mb-8 border-b pb-6">
            <h3 className="text-3xl font-bold text-foreground mb-2">Vinith Kuruppu</h3>
            <h4 className="text-lg text-muted-foreground mb-4">AI Researcher & Machine Learning Scientist</h4>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                alex.chen@email.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                alexchen.ai
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-8">
            <h5 className="text-xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Professional Summary
            </h5>
            <p className="text-muted-foreground leading-relaxed">
              Leading AI researcher specializing in neuro-inspired artificial intelligence with 8+ years of experience 
              developing biologically-plausible neural networks, neuromorphic computing systems, and brain-inspired 
              architectures. Published researcher with expertise in spiking neural networks, synaptic plasticity, 
              and energy-efficient AI hardware. Passionate about bridging neuroscience and artificial intelligence 
              to create next-generation intelligent systems.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h5 className="text-xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Professional Experience
            </h5>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-tech-accent">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Graduate Student Instructor</CardTitle>
                      <p className="text-muted-foreground italic">University of California, Berkeley</p>
                    </div>
                    <Badge variant="secondary">Jan 2025 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Mentored graduate students on experimental design and causal inference, raising proposal quality by 20% as
                    measured by rubric scores.</li>
                    <li>Guided 80+ master’s students through research design and ML applications, improving project quality and raising
                    average project scores by 12%</li>
                    <li>Delivered feedback on 40+ research projects, strengthening methodological rigor</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-tech-accent">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">AI/ML Research Associate</CardTitle>
                      <p className="text-muted-foreground italic">RAND Corporation</p>
                    </div>
                    <Badge variant="secondary">May 2024 - May 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built fairness-aware allocation models that directed $70 billon across 3,300+ hospitals, reducing variance
                    between need and award and improving equity across US regions.</li>
                    <li>Developed Python pipelines for hospital-expense modeling that improved predictive accuracy by 22% vs. baseline,
                    establishing cost-ceiling estimates used in FEMA funding reviews.</li>
                    <li>Designed and validated disaster-response modeling frameworks that informed federal preparedness policy
                    decisions.</li>
                    <li>Authored 30+ technical reports used by congressional committees, FEMA, and RAND leadership, driving ongoing
                    allocation-QA workstreams</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-tech-accent">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Research Data Scienctist</CardTitle>
                      <p className="text-muted-foreground italic">Exponent Incorporated</p>
                    </div>
                    <Badge variant="secondary">July 2022 - May 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built Python pipelines ingesting data from 3,000+ biosensors, cutting integration time by 15% and reducing
                    pipeline latency.</li>
                    <li>Led end-to-end FDA-compliant validation for biosensor trials, achieving 100% pass on internal QA audits and
                    enabling accurate real-time health monitoring</li>
                    <li>Analyzed high-frequency signals to prioritize design changes for a $12B product line, shortening decision cycles by
                     20% and increasing signal-quality pass rate</li>
                     <li>Diagnosed and resolved defects in proprietary study software, raising automated test coverage from 42% to 78%
                     and accelerating release cadence by 50%</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-tech-accent">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Computer Vision Research Assistant</CardTitle>
                      <p className="text-muted-foreground italic">Loyola University Chicago</p>
                    </div>
                    <Badge variant="secondary">Jan 2020 - June 2022</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Led a 6-person team to build DL/CV models of human visual perception and established a lab benchmark for
                    object recognition.</li>
                    <li>Improved model accuracy by 11% vs. prior lab baseline on object recognition tasks by systematic TensorFlow
                    hyperparameter search, targeted augmentations, and architecture refinements.</li>
                    <li>Engineered Python data pipelines for image and behavioral datasets, reducing preprocessing time by 30% and
                    cutting experiment turnaround time.</li>
                    <li>Developed papers and technical documentation that supported new grant funding and standardized analysis
                    methods across the lab</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h5 className="text-xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Education
            </h5>
            
            <div className="space-y-4">
              

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">M.S. in Data Science</CardTitle>
                      <p className="text-muted-foreground">University of California, Berkeley</p>
                    </div>
                    <Badge variant="outline">2025</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">B.S. in Computational Neuroscience</CardTitle>
                      <p className="text-muted-foreground">University of California, Berkeley</p>
                      
                    </div>
                    <Badge variant="outline">2022</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h5 className="text-xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Technical Skills
            </h5>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI/ML Domains</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Natural Language Processing</Badge>
                    <Badge variant="secondary">Computer Vision</Badge>
                    <Badge variant="secondary">Generative AI</Badge>
                    <Badge variant="secondary">Foundation Models</Badge>
                    <Badge variant="secondary">Retrieval-Augmented Generation</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Libraries & Frameworks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Scikit-learn</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">Vector Databases (FAISS)</Badge>
                    <Badge variant="secondary">SentenceTransformers</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Programming & Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">R</Badge>
                    <Badge variant="secondary">Bash</Badge>
                    <Badge variant="secondary">CUDA</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Jupyter</Badge>
                    <Badge variant="secondary">GCP</Badge>
                    <Badge variant="secondary">Github</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Awards */}
          
        </div>
      </div>
    </section>;
};
export default ResumeSection;