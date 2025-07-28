import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            See How baccksee Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our quick demo to see how easy it is to return items with our service
          </p>
          
          <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-pink-bright/20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 hover:bg-white transition-colors cursor-pointer group">
                <Play className="w-12 h-12 text-primary group-hover:text-pink-bright transition-colors" fill="currentColor" />
              </div>
            </div>
            
            {/* Video placeholder overlay */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-white text-sm font-medium">Video Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;