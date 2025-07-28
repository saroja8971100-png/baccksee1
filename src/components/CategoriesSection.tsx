const CategoriesSection = () => {
  const categories = [
    { name: "Fashion & Apparel", color: "bg-pink-200 text-pink-800" },
    { name: "Electronics", color: "bg-blue-200 text-blue-800" },
    { name: "Home & Garden", color: "bg-green-200 text-green-800" },
    { name: "Beauty & Health", color: "bg-purple-200 text-purple-800" },
    { name: "Sports & Outdoors", color: "bg-red-200 text-red-800" },
    { name: "Books & Media", color: "bg-blue-200 text-blue-800" },
    { name: "Toys & Games", color: "bg-yellow-200 text-yellow-800" },
    { name: "And Many More", color: "bg-gray-200 text-gray-800" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8">
            Don't see your brand? We work with most major retailers that accept returns. 
            Contact us to confirm compatibility with your specific retailer.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full font-medium text-sm ${category.color} hover:shadow-md transition-all duration-200`}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;