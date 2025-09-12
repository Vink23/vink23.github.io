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
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Graduate Student Instructor</CardTitle>
                      <p className="text-muted-foreground">University of California, Berkeley</p>
                    </div>
                    <Badge variant="secondary">Jan 2025 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
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
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">AI Research Scientist</CardTitle>
                      <p className="text-muted-foreground">Neural Dynamics Lab, Stanford University</p>
                    </div>
                    <Badge variant="secondary">2017 - 2020</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Developed biologically-plausible learning algorithms inspired by synaptic plasticity</li>
                    <li>Collaborated with neuroscientists to validate computational models against biological data</li>
                    <li>Created open-source framework for spiking neural network simulation (500+ GitHub stars)</li>
                    <li>Mentored 4 PhD students and 8 undergraduate researchers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-tech-accent">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Machine Learning Engineer</CardTitle>
                      <p className="text-muted-foreground">TechCorp AI Division</p>
                    </div>
                    <Badge variant="secondary">2015 - 2017</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built production-ready ML pipelines processing 10M+ data points daily</li>
                    <li>Implemented real-time recommendation systems increasing user engagement by 35%</li>
                    <li>Optimized deep learning models for mobile deployment, reducing inference time by 60%</li>
                    <li>Led cross-functional team of 6 engineers delivering AI-powered product features</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-tech-accent">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Research Intern</CardTitle>
                      <p className="text-muted-foreground">Google DeepMind</p>
                    </div>
                    <Badge variant="secondary">Summer 2014</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Contributed to research on attention mechanisms in transformer architectures</li>
                    <li>Implemented and tested novel optimization algorithms for large language models</li>
                    <li>Collaborated with senior researchers on scaling laws for neural networks</li>
                    <li>Presented findings at internal research symposium</li>
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
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Spiking Neural Networks</Badge>
                    <Badge variant="secondary">Neuromorphic Computing</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">Reinforcement Learning</Badge>
                    <Badge variant="secondary">Hebbian Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Programming & Tools</CardTitle>
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