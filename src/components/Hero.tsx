
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Diamond } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const move = 15; // max movement in pixels
      const tiltX = (move * x - move / 2);
      const tiltY = (move * y - move / 2);
      
      containerRef.current.style.setProperty('--move-x', `${tiltX}px`);
      containerRef.current.style.setProperty('--move-y', `${tiltY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Background blur elements */}
      <div className="absolute top-[15%] right-[10%] w-[25rem] h-[25rem] rounded-full bg-primary/20 blur-3xl opacity-50 animate-pulse-subtle"></div>
      <div className="absolute bottom-[5%] left-[10%] w-[20rem] h-[20rem] rounded-full bg-blue-400/20 blur-3xl opacity-40 animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div ref={containerRef} className="max-w-5xl mx-auto text-center" style={{ 
          transform: 'perspective(1000px) rotateX(calc(var(--move-y, 0) * -0.05deg)) rotateY(calc(var(--move-x, 0) * 0.05deg))',
          transition: 'transform 0.1s ease-out'
        }}>
          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full bg-secondary text-foreground/70 animate-fade-in border border-primary/10 shadow-subtle">
              <Diamond className="w-3 h-3 text-primary" />
              Exclusive Investment Solutions
              <Diamond className="w-3 h-3 text-primary" />
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 animate-fade-in delay-1">
            Elevate Your <br className="hidden sm:block" /> Financial Aspirations
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10 animate-fade-in delay-2">
            Experience elite investment opportunities with Novelty Capital's sophisticated platform and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-3">
            <Link
              to="/product/stocks"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white shadow-subtle transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px]"
            >
              Explore Premium Products
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-foreground/80 transition-all duration-300 hover:bg-secondary/70 border border-primary/10"
            >
              <span>Consult with an Advisor</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-5">
        <span className="text-xs font-medium text-foreground/50">Scroll to discover</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-foreground/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
