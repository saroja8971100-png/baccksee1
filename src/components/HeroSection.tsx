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
      <div className="container mx-auto px-4 py-12">
        
        {/* Hero Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-bright/20 to-pink-light/20 backdrop-blur-sm rounded-full border border-pink-bright/30 text-pink-bright font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in">
            <span className="bg-gradient-to-r from-pink-bright to-pink-light bg-clip-text text-transparent">
              baccksee - Returns Made Easy
            </span>
          </div>
        </div>

        {/* Main Content with Integrated Images */}
        <div className="grid lg:grid-cols-5 gap-0 items-center max-w-7xl mx-auto">
          
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6 lg:pr-8 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              We pick. We pack. We return
            </h1>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-pink-bright rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-base lg:text-lg text-muted-foreground">No packaging</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-pink-bright rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-base lg:text-lg text-muted-foreground">No printing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-pink-bright rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-base lg:text-lg text-muted-foreground">No trips to the post office</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg lg:text-xl px-8 lg:px-12 py-4 lg:py-6 hover-scale"
                onClick={() => scrollToSection("earlyaccessform")}
              >
                Join Early
              </Button>
            </div>
          </div>

          {/* Right Images Grid - 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-2 grid-rows-2 h-96 lg:h-[500px] mt-8 lg:mt-0">
            
            {/* Main large image - spans 2x2 grid on mobile, 1x2 on desktop */}
            <div className="col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 relative group overflow-hidden bg-secondary/30">
              <img 
                src="/lovable-uploads/033afee6-820c-4af4-86f4-27d43c80ba50.png" 
                alt="Professional delivery service" 
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 animate-fade-in" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              
              {/* Overlay content on main image */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-1">Professional Pickup</h3>
                <p className="text-sm text-white/90">Reliable door-to-door service</p>
              </div>
            </div>
            
            {/* Secondary images */}
            <div className="relative group overflow-hidden bg-secondary/30">
              <img 
                src="/lovable-uploads/fc504a2c-a614-47b9-ac8e-e4ac0369aa29.png" 
                alt="Package handover" 
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 animate-fade-in" 
                style={{ animationDelay: "0.1s" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="relative group overflow-hidden bg-secondary/30">
              <img 
                src="/lovable-uploads/d1933ebf-1418-416f-9036-8900d40feb62.png" 
                alt="Package processing" 
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 animate-fade-in" 
                style={{ animationDelay: "0.2s" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <div className="col-span-2 lg:col-span-1 relative group overflow-hidden bg-secondary/30">
              <img 
                src="/lovable-uploads/604dcfdd-09cb-46e5-8710-3183c5fc8a8d.png" 
                alt="Doorstep delivery" 
                className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 animate-fade-in" 
                style={{ animationDelay: "0.3s" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
          </div>
          
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-bright/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
      </div>
    </section>;
};
export default HeroSection;