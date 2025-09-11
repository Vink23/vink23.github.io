import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResumeSnapshotSection = () => {
  return (
    <section id="resume-snapshot" className="py-20 bg-gradient-section">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Resume Snapshot</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A quick overview of experience, education, and core competencies.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gradient-card border-primary/10">
            <CardHeader>
              <CardTitle className="text-foreground">Experience</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>Senior AI Researcher — Brain-inspired learning systems</p>
              <p>5+ years building neuromorphic and spiking models</p>
              <p>Publications and talks in top AI venues</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/10">
            <CardHeader>
              <CardTitle className="text-foreground">Education</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>Ph.D. in Machine Learning, focus on SNNs</p>
              <p>M.S. in Computer Science</p>
              <p>B.S. in Electrical Engineering</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/10">
            <CardHeader>
              <CardTitle className="text-foreground">Core Skills</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <p>Spiking Neural Networks, Neuromorphic Computing</p>
              <p>Hebbian Learning, Plasticity, Edge AI</p>
              <p>PyTorch, JAX, Model Optimization</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSnapshotSection;
