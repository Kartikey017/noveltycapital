
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";
import { ArrowRight, TrendingUp, Clock, Shield, BarChart2, Calculator, Coins, BarChart, PiggyBank, LineChart } from "lucide-react";

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
        
        {/* Consistent Investing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider rounded-full bg-secondary text-foreground/70 animate-fade-in">
                Financial Wisdom
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 animate-fade-in">
                The Power of Consistent Investing
              </h2>
              <p className="text-lg text-foreground/70 animate-fade-in delay-1">
                Building wealth isn't about timing the market perfectly—it's about time in the market and consistency in your investment approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Compound Growth</h3>
                      <p className="text-foreground/70">
                        The eighth wonder of the world, compound interest transforms modest regular investments into substantial wealth over time, working harder the earlier you begin.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Disciplined Approach</h3>
                      <p className="text-foreground/70">
                        Systematic investing through market cycles eliminates emotional decision-making and leverages dollar-cost averaging to optimize long-term returns.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Financial Security</h3>
                      <p className="text-foreground/70">
                        Consistent investing establishes a foundation for future financial independence, providing security through retirement, market volatility, and unexpected life events.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <BarChart2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Goal Achievement</h3>
                      <p className="text-foreground/70">
                        Regular investments aligned with specific financial goals—whether education funding, homeownership, or retirement—create the momentum needed to transform aspirations into reality.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Link
                    to="/calculators"
                    className="inline-flex items-center text-primary font-medium transition-all group"
                  >
                    <span>Explore Our Financial Calculators</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-2xl shadow-elevated border border-primary/10">
                  <h3 className="text-2xl font-medium mb-6">The Consistent Investor Advantage</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-secondary/30 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Consistent Investor</span>
                        <span className="text-primary font-medium">$745,180</span>
                      </div>
                      <p className="text-sm text-foreground/70">$500 monthly for 30 years at 8% average return</p>
                    </div>
                    
                    <div className="bg-secondary/30 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Market Timer</span>
                        <span className="text-foreground/90 font-medium">$573,320</span>
                      </div>
                      <p className="text-sm text-foreground/70">Irregular investments trying to time market moves</p>
                    </div>
                    
                    <div className="bg-secondary/30 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Late Starter</span>
                        <span className="text-foreground/90 font-medium">$298,130</span>
                      </div>
                      <p className="text-sm text-foreground/70">$1,000 monthly for just 15 years at 8% average return</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Link
                      to="/calculators"
                      className="inline-block px-6 py-3 rounded-full bg-primary text-white shadow-subtle transition-all hover:shadow-elevated hover:bg-primary/90"
                    >
                      Calculate Your Growth
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* New section: Generational Wealth Through Early Investing */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary animate-fade-in">
                Generational Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 animate-fade-in">
                Building Generational Wealth Through Early Investing
              </h2>
              <p className="text-lg text-foreground/70 animate-fade-in delay-1">
                The earlier you begin investing, the more profound the impact on your family's financial future for generations to come.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-subtle border border-primary/10 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">The Mathematics of Time</h3>
                <p className="text-foreground/70 mb-4">
                  Someone who invests $10,000 at age 25 with an 8% annual return will have nearly $217,000 by age 65, while someone starting at 45 will accumulate just $46,000 by 65—less than a quarter of the wealth.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/60">25-year-old investor (40 years)</span>
                    <span className="font-medium">$217,000</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 mt-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm mt-4">
                    <span className="text-foreground/60">45-year-old investor (20 years)</span>
                    <span className="font-medium">$46,000</span>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 mt-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '21%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-subtle border border-primary/10 animate-fade-in delay-1">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">Intergenerational Transfer</h3>
                <p className="text-foreground/70 mb-4">
                  Early investing creates opportunities for significant wealth transfer to future generations. With proper estate planning, investments can continue growing tax-efficiently across generations.
                </p>
                <p className="text-foreground/70 mb-4">
                  A portfolio of $1 million at retirement can generate $40,000 annually at a 4% withdrawal rate while preserving capital for heirs, creating lasting family financial security.
                </p>
                <p className="text-foreground/70">
                  Studies show that families with established investment habits are more likely to pass both wealth and financial literacy to subsequent generations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-subtle border border-primary/10 animate-fade-in delay-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <PiggyBank className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-4">The Psychological Edge</h3>
                <p className="text-foreground/70 mb-4">
                  Early investors develop resilience through market cycles, learning to manage emotions during volatility—a crucial skill that compounds over time and can be passed to future generations.
                </p>
                <p className="text-foreground/70 mb-4">
                  Patience becomes an ingrained virtue, with early investors understanding that true wealth creation happens gradually over decades, not overnight.
                </p>
                <p className="text-foreground/70">
                  Financial independence achieved through early investing creates freedom of choice for future career decisions, business opportunities, and lifestyle options for both you and your children.
                </p>
              </div>
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-elevated border border-primary/10 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-medium mb-4">The Rule of 72</h3>
                  <p className="text-foreground/70 mb-4">
                    This simple formula helps estimate how long it takes for an investment to double. Divide 72 by your expected annual return:
                  </p>
                  <div className="p-4 bg-secondary/30 rounded-xl mb-6">
                    <p className="text-center font-medium">72 ÷ Annual Return Rate = Years to Double</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                      <span>At 8% return: Doubles every 9 years</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                      <span>At 10% return: Doubles every 7.2 years</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
                      <span>At 12% return: Doubles every 6 years</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <div className="bg-secondary/20 p-6 rounded-xl">
                    <h4 className="font-medium mb-4 flex items-center">
                      <LineChart className="w-5 h-5 text-primary mr-2" />
                      Doubling Effect Over 40 Years (8% Return)
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Initial $10,000</span>
                          <span>Year 0</span>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: '5%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>First doubling: $20,000</span>
                          <span>Year 9</span>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: '10%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Second doubling: $40,000</span>
                          <span>Year 18</span>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Third doubling: $80,000</span>
                          <span>Year 27</span>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Fourth doubling: $160,000</span>
                          <span>Year 36</span>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Final value: $217,000</span>
                          <span>Year 40</span>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full">
                          <div className="bg-primary h-full rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link
                to="/calculators"
                className="inline-block px-8 py-4 rounded-full bg-primary text-white shadow-subtle transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px]"
              >
                Plan Your Generational Wealth Strategy
              </Link>
            </div>
          </div>
        </section>
        
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
