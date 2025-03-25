
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        
        {/* Stats Section */}
        <section className="py-20 bg-secondary/70">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-medium text-primary mb-2 animate-fade-in">10+</h3>
                <p className="text-foreground/70 animate-fade-in delay-1">Years of Excellence</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-medium text-primary mb-2 animate-fade-in">$2B+</h3>
                <p className="text-foreground/70 animate-fade-in delay-1">Assets Under Management</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-medium text-primary mb-2 animate-fade-in">50K+</h3>
                <p className="text-foreground/70 animate-fade-in delay-1">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-medium text-primary mb-2 animate-fade-in">100+</h3>
                <p className="text-foreground/70 animate-fade-in delay-1">Financial Experts</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider rounded-full bg-secondary text-foreground/70 animate-fade-in">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 animate-fade-in">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-subtle transition-all duration-300 hover:shadow-elevated animate-fade-in">
                <svg className="w-10 h-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-foreground/80 mb-6">
                  "BrokerHaven transformed my investment approach. Their expertise and personalized guidance helped me achieve returns I never thought possible."
                </p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full bg-blue-100 overflow-hidden mr-4">
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Thompson</h4>
                    <p className="text-sm text-foreground/60">Entrepreneur</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-subtle transition-all duration-300 hover:shadow-elevated animate-fade-in delay-1">
                <svg className="w-10 h-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-foreground/80 mb-6">
                  "The diverse investment options and transparent advisory services make BrokerHaven stand out. They genuinely care about your financial success."
                </p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full bg-blue-100 overflow-hidden mr-4">
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-foreground/60">Financial Analyst</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-subtle transition-all duration-300 hover:shadow-elevated animate-fade-in delay-2">
                <svg className="w-10 h-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-foreground/80 mb-6">
                  "The unlisted shares opportunity BrokerHaven presented me with yielded exceptional returns. Their market insights are truly unmatched."
                </p>
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full bg-blue-100 overflow-hidden mr-4">
                    <div className="absolute inset-0 bg-primary/10"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">David Chen</h4>
                    <p className="text-sm text-foreground/60">Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5"></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 animate-fade-in">
                Ready to Elevate Your Investment Strategy?
              </h2>
              <p className="text-lg text-foreground/70 mb-10 animate-fade-in delay-1">
                Join thousands of successful investors who have transformed their financial future with BrokerHaven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-2">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-primary text-white shadow-subtle transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px]"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
