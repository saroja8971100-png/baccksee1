
import { Button } from "@/components/ui/button";
import { Calendar, Truck, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <Calendar className="w-8 h-8" />,
      title: "Book a Pickup",
      description: "File the return with the brand. Get your return label confirmation from the store's website",
      highlight: "No packaging needed"
    },
    {
      step: "02", 
      icon: <Truck className="w-8 h-8" />,
      title: "Pickup from your doorstep",
      description: "Upload your return and choose a time for pick up — no box or label needed",
      highlight: "No need to travel around"
    },
    {
      step: "03",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Dropped off and confirmed",
      description: "Leave your return in a safe spot. We pick it up and return it to the right place and send you a confirmation.",
      highlight: "You get your time (and your refund) back"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From your door to done - here's how it works.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 Simple steps less than an hour to complete your whole return process. baccksee makes it happen.
          </p>
        </div>
        
        {/* Steps */}
        <div className="space-y-16">
          {steps.map((stepItem, index) => {
            const stepImages = [
              "/lovable-uploads/d96c89e6-4d8e-41d8-9f2f-74559b3186d6.png", // Step 1: Woman with dog
              "/lovable-uploads/8c83bf8d-cf22-4f4b-a783-444e727d875a.png", // Step 2: Delivery person
              "/lovable-uploads/10bf1690-5dc5-4014-b336-b9c07ccc6820.png"  // Step 3: Person with bag
            ];
            
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className="relative">
                
                {/* Mobile Layout */}
                <div className="block lg:hidden">
                  {/* Step Number */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-bright text-white rounded-full text-2xl font-bold mb-4">
                      {stepItem.step}
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                      STEP {stepItem.step}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="text-primary">
                        {stepItem.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {stepItem.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {stepItem.description}
                    </p>
                    
                    <div className="inline-block bg-pink-bright/10 text-pink-bright px-4 py-2 rounded-full text-sm font-medium">
                      {stepItem.highlight}
                    </div>
                  </div>
                  
                  {/* Step Image */}
                  <div className="rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm border border-white/20">
                    <img 
                      src={stepImages[index]} 
                      alt={`Step ${stepItem.step}: ${stepItem.title}`}
                      className="w-full h-80 object-contain bg-gradient-to-br from-white to-gray-50 hover:scale-105 transition-all duration-500 opacity-95 hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="max-w-6xl mx-auto">
                    <div className={`grid lg:grid-cols-2 gap-16 items-stretch ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      
                      {/* Content Side */}
                      <div className={`flex flex-col justify-center space-y-6 ${isEven ? 'lg:col-start-2' : ''}`}>
                        {/* Step Number */}
                        <div className="flex items-center space-x-4 mb-2">
                          <div className="flex items-center justify-center w-16 h-16 bg-pink-bright text-white rounded-full text-2xl font-bold">
                            {stepItem.step}
                          </div>
                          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            STEP {stepItem.step}
                          </div>
                        </div>
                        
                        {/* Content Card */}
                        <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <div className="text-primary">
                              {stepItem.icon}
                            </div>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                            {stepItem.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {stepItem.description}
                          </p>
                          
                          <div className="bg-pink-bright/10 text-pink-bright px-4 py-2 rounded-full text-sm font-medium inline-block">
                            {stepItem.highlight}
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Side */}
                      <div className={`flex items-center ${isEven ? 'lg:col-start-1' : ''}`}>
                        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm border border-white/20 aspect-square">
                          <img 
                            src={stepImages[index]} 
                            alt={`Step ${stepItem.step}: ${stepItem.title}`}
                            className="w-full h-full object-contain bg-gradient-to-br from-white to-gray-50 hover:scale-105 transition-all duration-500 p-4"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
