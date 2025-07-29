import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
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
          
          {/* Right Column - Image Gallery */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl mb-1">
              <img 
                src="/lovable-uploads/033afee6-820c-4af4-86f4-27d43c80ba50.png" 
                alt="Professional delivery service" 
                className="w-full h-48 sm:h-56 lg:h-64 object-contain bg-secondary/50" 
              />
            </div>
            
            {/* Secondary images grid */}
            <div className="grid grid-cols-3">
              <div className="overflow-hidden">
                <img 
                  src="/lovable-uploads/fc504a2c-a614-47b9-ac8e-e4ac0369aa29.png" 
                  alt="Package handover" 
                  className="w-full h-20 sm:h-24 lg:h-28 object-contain bg-secondary/50 hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/lovable-uploads/d1933ebf-1418-416f-9036-8900d40feb62.png" 
                  alt="Package processing" 
                  className="w-full h-20 sm:h-24 lg:h-28 object-contain bg-secondary/50 hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="overflow-hidden">
                <img 
                  src="/lovable-uploads/604dcfdd-09cb-46e5-8710-3183c5fc8a8d.png" 
                  alt="Doorstep delivery" 
                  className="w-full h-20 sm:h-24 lg:h-28 object-contain bg-secondary/50 hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-bright/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
          </div>
          
        </div>
      </div>
    </section>;
};
export default HeroSection;