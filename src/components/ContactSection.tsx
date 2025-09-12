import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Collaborate
          </h2>
          
          <Card className="border-border/[0.02] max-w-4xl mx-auto bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
            </CardHeader>
            <CardContent className="flex items-center justify-center py-16">
              <div className="flex items-center justify-center gap-8">
                <div className="p-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                
                <div className="p-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                
                <div className="p-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;