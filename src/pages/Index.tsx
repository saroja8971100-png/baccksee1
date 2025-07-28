import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import BrandLogos from "@/components/BrandLogos";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import SignupForm from "@/components/SignupForm";
import EarlyAccessForm from "@/components/EarlyAccessForm";
import FAQ from "@/components/FAQ";
import PreFooterCTA from "@/components/PreFooterCTA";
import ShippingNote from "@/components/ShippingNote";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--cream-soft))]">
      <Navbar />
      <div id="hero" className="border-b border-[hsl(var(--yellow-pastel))]">
        <HeroSection />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <VideoSection />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <BrandLogos />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <CategoriesSection />
      </div>
      <div id="about" className="border-b border-[hsl(var(--yellow-pastel))]">
        <FeaturesSection />
      </div>
      <div id="how-it-works" className="border-b border-[hsl(var(--yellow-pastel))]">
        <HowItWorks />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <ShippingNote />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <PricingSection />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <SignupForm />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <EarlyAccessForm />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <FAQ />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <BenefitsSection />
      </div>
      <div className="border-b border-[hsl(var(--yellow-pastel))]">
        <PreFooterCTA />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
