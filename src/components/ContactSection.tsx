import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Collaborate
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline">
              <Github className="w-6 h-6" />
              <span className="text-sm">GitHub</span>
            </Button>
            <Button variant="outline">
              <Linkedin className="w-6 h-6" />
              <span className="text-sm">LinkedIn</span>
            </Button>
            <Button variant="outline">
              <Twitter className="w-6 h-6" />
              <span className="text-sm">Twitter</span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;