
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  slug,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-subtle transition-all duration-300 bg-white hover:shadow-elevated animate-fade-in ${delayClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Visual indicator line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      
      <div className="relative p-8 md:p-10">
        <div className="flex flex-col h-full">
          <div className="mb-6 rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center text-primary">
            {icon}
          </div>
          
          <h3 className="text-xl font-medium mb-3 transition-colors group-hover:text-primary">
            {title}
          </h3>
          
          <p className="text-foreground/70 mb-8 flex-grow">
            {description}
          </p>
          
          <Link
            to={`/product/${slug}`}
            className="inline-flex items-center text-primary font-medium transition-all"
          >
            <span className="relative overflow-hidden">
              <span 
                className={`inline-block transition-transform duration-300 ${
                  isHovered ? 'transform -translate-y-full' : ''
                }`}
              >
                Learn More
              </span>
              <span 
                className={`absolute left-0 inline-block transition-transform duration-300 ${
                  isHovered ? 'transform translate-y-0' : 'transform translate-y-full'
                }`}
              >
                Explore Now
              </span>
            </span>
            <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
