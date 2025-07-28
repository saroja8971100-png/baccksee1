import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="relative bg-gradient-to-br from-pink-bright via-pink-light to-pink-bright/80 py-16 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/15 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-md animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-pink-bright/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left gap-8">
          
          {/* Left Side - Branding */}
          <div className="space-y-4">
            <div className="text-3xl font-bold font-spartan text-brand-gray underline drop-shadow-lg">baccksee</div>
            <p className="text-white/80 max-w-md backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              Currently in early rollout (Toronto only). Not affiliated with any retailers mentioned. backsee — early access test in progress
            </p>
          </div>
          
          {/* Right Side - Contact and Social */}
          <div className="space-y-4">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
              <h4 className="font-semibold text-white mb-2">Contact :</h4>
              <a href="mailto:hello@backsee.com" className="text-white/80 hover:text-white transition-colors">
                hello@backsee.com
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                <span className="text-sm font-bold">@</span>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Border and Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 backdrop-blur-sm">
          <p className="text-sm text-white/70 text-center">
            (c) 2025 backsee. All rights Reserved
          </p>
        </div>
        
      </div>
    </footer>;
};
export default Footer;