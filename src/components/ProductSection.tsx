
import React from "react";
import ProductCard from "./ProductCard";
import { BarChart3, Banknote, LineChart, ShieldCheck, Briefcase } from "lucide-react";

const ProductSection = () => {
  const products = [
    {
      title: "Stocks",
      description: "Trade equities from leading exchanges with advanced tools for informed investing.",
      icon: <BarChart3 className="w-6 h-6" />,
      slug: "stocks",
      delay: 1
    },
    {
      title: "Bonds",
      description: "Access stable fixed-income securities for reliable returns and portfolio diversification.",
      icon: <Banknote className="w-6 h-6" />,
      slug: "bonds",
      delay: 2
    },
    {
      title: "Mutual Funds",
      description: "Invest in professionally managed fund portfolios tailored to various risk profiles.",
      icon: <LineChart className="w-6 h-6" />,
      slug: "mutual-funds",
      delay: 3
    },
    {
      title: "Insurance",
      description: "Protect your investments and secure your financial future with comprehensive coverage.",
      icon: <ShieldCheck className="w-6 h-6" />,
      slug: "insurance",
      delay: 4
    },
    {
      title: "Unlisted Shares",
      description: "Discover exclusive opportunities in high-potential private companies before they go public.",
      icon: <Briefcase className="w-6 h-6" />,
      slug: "unlisted-shares",
      delay: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider rounded-full bg-secondary text-foreground/70 animate-fade-in">
            Our Products
          </span>
          
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 animate-fade-in">
            Comprehensive Investment Solutions
          </h2>
          
          <p className="text-lg text-foreground/70 animate-fade-in delay-1">
            Explore our range of premium financial products designed to help you achieve your financial goals with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              title={product.title}
              description={product.description}
              icon={product.icon}
              slug={product.slug}
              delay={product.delay}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-[10%] -right-[10%] w-[40rem] h-[40rem] rounded-full bg-blue-100/50 blur-3xl opacity-50"></div>
      <div className="absolute -bottom-[20%] -left-[10%] w-[30rem] h-[30rem] rounded-full bg-blue-50 blur-3xl opacity-30"></div>
    </section>
  );
};

export default ProductSection;
