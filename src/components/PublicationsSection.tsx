import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Attention Mechanisms in Multimodal Learning: A Comprehensive Survey",
      authors: ["A. Chen", "M. Rodriguez", "K. Singh"],
      venue: "Nature Machine Intelligence, 2024",
      type: "Journal Article",
      citations: 127,
      year: "2024",
      abstract: "This survey provides a comprehensive overview of attention mechanisms in multimodal learning, covering recent advances and future directions.",
      tags: ["Attention", "Multimodal", "Survey"]
    },
    {
      title: "Efficient Graph Neural Networks for Large-Scale Knowledge Graphs",
      authors: ["A. Chen", "L. Wang", "J. Thompson"],
      venue: "ICML 2024",
      type: "Conference Paper",
      citations: 89,
      year: "2024",
      abstract: "We propose a novel architecture for scaling graph neural networks to knowledge graphs with millions of nodes while maintaining interpretability.",
      tags: ["GNN", "Knowledge Graphs", "Scalability"]
    },
    {
      title: "Few-Shot Learning with Contextual Embeddings for Domain Adaptation",
      authors: ["A. Chen", "S. Patel"],
      venue: "NeurIPS 2023",
      type: "Conference Paper",
      citations: 203,
      year: "2023",
      abstract: "A novel approach to few-shot learning that leverages contextual embeddings for improved domain adaptation in low-resource scenarios.",
      tags: ["Few-Shot Learning", "Domain Adaptation", "Embeddings"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recent contributions to the artificial intelligence research community
          </p>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="hover:shadow-soft transition-all duration-300 border-primary/10"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl md:text-2xl text-foreground leading-tight mb-3">
                      {pub.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {pub.authors.join(", ")}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {pub.year}
                        </div>
                      </div>
                      <p className="text-primary font-medium">{pub.venue}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      {pub.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {pub.citations} citations
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  {pub.abstract}
                </CardDescription>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, idx) => (
                      <Badge 
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="tech" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Paper
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;