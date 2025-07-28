const BrandLogos = () => {
  // Brand logos with actual images
  const brands = [
    { name: "Best Buy", logo: "/lovable-uploads/3ee6b9ba-a7e8-4d46-b929-7bb7786f65f4.png" },
    { name: "SHEIN", logo: "/lovable-uploads/ff072f8e-e59a-4f1a-8508-5efdc1319125.png" },
    { name: "Sephora", logo: "/lovable-uploads/6cac3d1b-96a9-4718-b5fd-58b7f0448739.png" },
    { name: "The Home Depot", logo: "/lovable-uploads/259c6267-b4bb-4647-8fe3-9c31d27b67c7.png" },
    { name: "Amazon.ca", logo: "/lovable-uploads/c2db7e14-8f99-40fd-9797-b2aa50d03b55.png" },
    { name: "ZARA", logo: "/lovable-uploads/9e35c087-0bca-4074-902f-c8e6fc8d5334.png" },
  ];

  // Duplicate brands for continuous scrolling
  const firstRowBrands = [...brands, ...brands];
  const secondRowBrands = [...brands.slice().reverse(), ...brands.slice().reverse()];

  return (
    <section className="py-20 bg-gradient-to-r from-pink-bright to-pink-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Returns made easy - even from 100+ stores, including:
          </h2>
        </div>
        
        {/* First row - scrolling left */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-left">
            {firstRowBrands.map((brand, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg p-4 mx-4 w-32 h-20 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {secondRowBrands.map((brand, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg p-4 mx-4 w-32 h-20 flex items-center justify-center transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-white/80 text-sm mt-8 max-w-3xl mx-auto">
          All trademarks are the property of their respective owners. baccksee is not affiliated with these brands. 
          We only pick up eligible items purchased online.
        </p>
      </div>
    </section>
  );
};

export default BrandLogos;