import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";
const ResumeSection = () => {
  return <section id="resume-snapshot" className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        

        <div className="bg-background rounded-lg shadow-lg p-8">
          {/* Header */}
          <header id="resume-anchor" className="text-center mb-8 border-b pb-6">
            <h3 className="text-3xl font-bold text-foreground mb-2">Vinith Kuruppu</h3>
            <h4 className="text-lg text-muted-foreground mb-4">AI Researcher & Machine Learning Scientist</h4>
            
            
            <div className="flex justify-center gap-4 mt-4">
              <a href="mailto:vinkuruppu@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://github.com/Vink23" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vinithkuruppu/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-8">
            <h5 className="text-xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Professional Summary
            </h5>
            <p className="text-muted-foreground leading-relaxed">AI researcher specializing in neuro-inspired artificial intelligence with experience translating rigorous research into high-impact, production-ready systems. Passionate about bridging neuroscience and artificial intelligence to create next-generation intelligent systems that align with human values.</p>
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
                      <CardTitle className="text-lg">Machine Learning Researcher</CardTitle>
                      <p className="text-muted-foreground italic">University of California, Berkeley</p>
                    </div>
                    <Badge variant="secondary">Aug 2025 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Engineer an LLM-powered clinical decision-support system for physician-facing Q&A, combining dense retrieval, cross-encoder reranking, and grounded generation over medical literature to produce faithfully sourced diagnostic answers.</li>
                    <li>Build a reproducible evaluation pipeline to benchmark 54 retrieval, reranking, and generation configurations across recall, clinical relevance, and answer grounding, replacing ad hoc model selection with a systematic, versioned process.</li>
                    <li>Identify failure patterns across disease categories and patient age groups through stratified error analysis, directly informing retrieval and model changes that reduced performance gaps across underrepresented diagnostic categories.</li>
                  </ul>
                </CardContent>
              </Card>

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
                    <li>Design and grade assignments for 80+ students in causal inference, experimental design, and statistical analysis, providing written feedback to reinforce applied research skills.</li>
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
                    <li>Developed fairness-aware allocation models that informed the allocation of $70 billion across 3,300+ hospitals, reducing allocation error and improving equity in disaster reimbursement across U.S. regions.</li>
                    <li>Shipped an Excel-integrated classification tool backed by an AWS ML endpoint, enabling non-technical analysts to label 1M+ expense records with one click; improved accuracy by 22% vs. manual baseline and was adopted in FEMA allocation review workflows.</li>
                    <li>Designed simulation frameworks for disaster-response scenarios under uncertainty and ran sensitivity analyses across 50+ parameter configurations; findings directly shaped FEMA preparedness protocols.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-tech-accent">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Research Data Scientist</CardTitle>
                      <p className="text-muted-foreground italic">Exponent Incorporated</p>
                    </div>
                    <Badge variant="secondary">July 2022 - May 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Engineered data pipelines processing high-frequency physiological signals from 3,000+ Apple Watch devices, reducing integration time by 15% and enabling rapid iteration on Apple Health's hypertension detection algorithms.</li>
                    <li>Led end-to-end FDA-compliant validation for biosensor clinical trials, achieving a 100% pass rate on QA audits through rigorous statistical validation and bias analysis; work enabled product launch for a health monitoring platform.</li>
                    <li>Conducted fairness-aware analysis of biosensor signals across demographic subgroups (age, gender, skin tone), identifying algorithm performance disparities that informed design changes, improving signal-quality acceptance by 25% and reducing group-level performance gaps.</li>
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
                    <li>Led a 6-person team developing bio-inspired CNN architectures with attention mechanisms to model human visual perception, establishing lab benchmarks for human behavioral data from EEG/eye-tracking studies.</li>
                    <li>Improved model accuracy by 11% vs. prior lab baseline via targeted augmentation, systematic hyperparameter optimization, and architecture refinements on object recognition tasks.</li>
                    <li>Engineered Python data pipelines for image and behavioral datasets, reducing preprocessing time by 30% through parallelization and automated quality checks.</li>
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
                      <CardTitle className="text-lg">B.S. in Neuroscience</CardTitle>
                      <p className="text-muted-foreground">Loyola University Chicago</p>
                      
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
                    <Badge variant="secondary">Spark/PySpark</Badge>
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
