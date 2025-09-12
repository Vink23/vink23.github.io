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
          
           <Card className="max-w-4xl mx-auto relative border-0 bg-card/50 backdrop-blur-sm">
             <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-primary/20 to-transparent p-[1px]">
               <div className="w-full h-full bg-card rounded-lg"></div>
             </div>
             <div className="relative z-10">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-foreground relative inline-block px-8 py-4">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 -mx-16">
                  <div className="absolute top-0 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transform -translate-x-1/2"></div>
                  <div className="absolute left-0 top-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent transform -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/60 to-transparent transform -translate-y-1/2"></div>
                </div>
              </CardTitle>
              <CardDescription>
                Available for research collaborations and consulting opportunities
              </CardDescription>
            </CardHeader>
             <CardContent className="text-center">
               <div className="flex items-center justify-center gap-8">
                 <div className="p-3 rounded-lg bg-primary/10">
                   <Mail className="w-8 h-8 text-primary" />
                 </div>
                 
                 <div className="p-3 rounded-lg bg-primary/10">
                   <Github className="w-8 h-8 text-primary" />
                 </div>
                 
                 <div className="p-3 rounded-lg bg-primary/10">
                   <Linkedin className="w-8 h-8 text-primary" />
                 </div>
               </div>
             </CardContent>
             </div>
           </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;