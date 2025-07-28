import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const heroImage = "/lovable-uploads/4a76c6ae-fa1d-4973-81a9-d884b6f8ad9c.png";
const HeroSection = () => {
  return <section className="min-h-screen bg-gradient-to-br from-secondary to-background flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-bright/20 to-pink-light/20 backdrop-blur-sm rounded-full border border-pink-bright/30 text-pink-bright font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              
              <span className="bg-gradient-to-r from-pink-bright to-pink-light bg-clip-text text-transparent">
                baccksee - Returns Made Easy
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We pick. We pack. We return
            </h1>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-muted-foreground">No packaging</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-muted-foreground">No printing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-pink-bright rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-muted-foreground">No trips to the post office</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-xl px-12 py-6"
                onClick={() => scrollToSection("earlyaccessform")}
              >
                Join Early
              </Button>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Professional delivery service" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-bright/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-lg"></div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;