import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/70 backdrop-blur-xl border-b border-border/30 shadow-sm" 
        : "bg-background/20 backdrop-blur-lg"
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold font-spartan text-brand-gray hover:opacity-80 transition-all underline"
            >
              baccksee
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium"
            >
              Contact
            </button>
            
            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("earlyaccessform")}
              variant="pink"
              size="sm"
              className="shadow-button"
            >
              Join Early
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground/80 hover:text-pink-bright transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? "max-h-80 opacity-100" 
            : "max-h-0 opacity-0"
        }`}>
          <div className="px-4 py-6 bg-background/95 backdrop-blur-xl border-b border-border/30">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground/80 hover:text-pink-bright transition-colors text-sm font-medium py-2"
              >
                Contact
              </button>
              
              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection("earlyaccessform")}
                  variant="pink"
                  size="sm"
                  className="w-full shadow-button"
                >
                  Join Early
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;