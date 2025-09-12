import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
const ContactSection = () => {
  return <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in research collaboration, speaking opportunities, or consulting? 
            I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Get in Touch</CardTitle>
                <CardDescription>
                  Available for research collaborations and consulting opportunities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">alex.chen@university.edu</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Stanford, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office Hours</p>
                    <p className="text-sm text-muted-foreground">Tue/Thu 2-4 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/10 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Collaborative AI research projects</li>
                  <li>• PhD student mentorship</li>
                  <li>• Industry partnerships</li>
                  <li>• Conference speaking</li>
                  <li>• Technical consulting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <Card className="border-primary/10">
              
              
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;