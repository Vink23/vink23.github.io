import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-section">
      {/* Navigation */}
      <nav className="p-6">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </nav>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <div className="bg-background rounded-lg shadow-lg p-8">
          {/* Header */}
          <header className="text-center mb-8 border-b pb-6">
            <h1 className="text-4xl font-bold text-foreground mb-2">Dr. Alex Chen</h1>
            <h2 className="text-xl text-muted-foreground mb-4">AI Researcher & Machine Learning Scientist</h2>
            
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
            <h3 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Professional Summary
            </h3>
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
            <h3 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-tech-accent">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Senior AI Researcher</CardTitle>
                      <p className="text-muted-foreground">NeuroTech Research Institute</p>
                    </div>
                    <Badge variant="secondary">2020 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Led development of novel spiking neural network architectures achieving 40% energy efficiency improvement</li>
                    <li>Published 15+ papers in top-tier conferences (NeurIPS, ICML, ICLR) on neuromorphic computing</li>
                    <li>Managed team of 6 researchers focusing on brain-inspired AI systems</li>
                    <li>Secured $2.5M in research funding from NSF and industry partnerships</li>
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
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Education
            </h3>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Ph.D. in Computer Science</CardTitle>
                      <p className="text-muted-foreground">Massachusetts Institute of Technology</p>
                      <p className="text-sm text-muted-foreground">Thesis: "Temporal Dynamics in Spiking Neural Networks for Adaptive Learning"</p>
                    </div>
                    <Badge variant="outline">2013 - 2017</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">M.S. in Electrical Engineering</CardTitle>
                      <p className="text-muted-foreground">Stanford University</p>
                    </div>
                    <Badge variant="outline">2011 - 2013</Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">B.S. in Computer Engineering</CardTitle>
                      <p className="text-muted-foreground">University of California, Berkeley</p>
                      <p className="text-sm text-muted-foreground">Summa Cum Laude, Phi Beta Kappa</p>
                    </div>
                    <Badge variant="outline">2007 - 2011</Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Technical Skills
            </h3>
            
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
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">JAX</Badge>
                    <Badge variant="secondary">NEST Simulator</Badge>
                    <Badge variant="secondary">Brian2</Badge>
                    <Badge variant="secondary">CUDA</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Publications */}
          <section className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Selected Publications
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <div className="border-l-2 border-muted pl-4">
                <p className="font-medium">"Adaptive Plasticity in Spiking Neural Networks for Continual Learning"</p>
                <p className="text-sm">NeurIPS 2023 • <span className="text-primary">Best Paper Award</span></p>
              </div>
              
              <div className="border-l-2 border-muted pl-4">
                <p className="font-medium">"Neuromorphic Computing with Memristive Synapses: A Hardware-Software Co-design Approach"</p>
                <p className="text-sm">Nature Machine Intelligence 2022</p>
              </div>
              
              <div className="border-l-2 border-muted pl-4">
                <p className="font-medium">"Temporal Coding in Biologically-Plausible Neural Networks"</p>
                <p className="text-sm">ICML 2021</p>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h3 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
              Awards & Recognition
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">NSF CAREER Award</p>
                  <p className="text-sm text-muted-foreground">2022</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">IEEE Neural Networks Pioneer Award</p>
                  <p className="text-sm text-muted-foreground">2021</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">MIT Technology Review Innovator Under 35</p>
                  <p className="text-sm text-muted-foreground">2020</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium">Google Faculty Research Award</p>
                  <p className="text-sm text-muted-foreground">2019</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;