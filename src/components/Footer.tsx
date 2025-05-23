
import React from "react";
import { Link } from "react-router-dom";
import { Diamond, Info } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Products",
      links: [
        { name: "Stocks", path: "/product/stocks" },
        { name: "Bonds", path: "/product/bonds" },
        { name: "Mutual Funds", path: "/product/mutual-funds" },
        { name: "Insurance", path: "/product/insurance" },
        { name: "IPO", path: "/product/ipo" },
        { name: "Pre IPO", path: "/product/unlisted-shares" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" },
        { name: "Press", path: "/press" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" }
      ]
    }
  ];

  // India-specific financial information
  const indiaFinancialInfo = [
    {
      title: "Know Your Investment",
      content: "In India, investments in equity markets are regulated by SEBI. Direct equity investments require a Demat and Trading account with a registered broker."
    },
    {
      title: "Tax Implications",
      content: "STCG (Short Term Capital Gains) on equity holdings less than 1 year are taxed at 15%, while LTCG (Long Term Capital Gains) above ₹1 lakh are taxed at 10% without indexation benefits."
    },
    {
      title: "Mutual Fund Categories",
      content: "SEBI categorizes mutual funds into Equity, Debt, Hybrid, Solution-oriented, and other schemes to standardize mutual fund offerings across the industry."
    },
    {
      title: "SIP Benefits",
      content: "In the Indian context, SIPs help mitigate the impact of market volatility through rupee cost averaging and allow investments starting from as low as ₹500 per month."
    }
  ];

  // Advanced technical financial knowledge
  const technicalFinancialKnowledge = [
    {
      title: "Modern Portfolio Theory",
      content: "We apply Markowitz's Modern Portfolio Theory to construct optimally diversified portfolios that maximize expected returns for a given level of risk through efficient frontier analysis."
    },
    {
      title: "Factor-Based Investing",
      content: "Our strategies leverage the Fama-French Five-Factor Model which extends beyond market risk to include size, value, profitability, and investment patterns to generate alpha."
    },
    {
      title: "Quantitative Analysis",
      content: "We employ sophisticated statistical methods like Monte Carlo simulations with 10,000+ iterations to stress-test portfolio performance across multiple economic scenarios."
    },
    {
      title: "Risk-Adjusted Performance Metrics",
      content: "We evaluate investments using Sharpe Ratio, Sortino Ratio, and Jensen's Alpha to ensure superior risk-adjusted returns compared to respective benchmarks."
    }
  ];

  // Advanced asset allocation strategies
  const assetAllocationStrategies = [
    {
      title: "Strategic vs. Tactical Asset Allocation",
      content: "Our dual approach combines long-term strategic allocation based on capital market assumptions with tactical adjustments to capitalize on short-term market dislocations."
    },
    {
      title: "Liability-Driven Investment (LDI)",
      content: "For clients with specific future financial obligations, we implement LDI strategies that match investment horizons with liability schedules to ensure financial security."
    },
    {
      title: "Smart Beta Strategies",
      content: "We utilize factor-tilted ETFs and funds that systematically target specific risk premia like momentum, quality, and low volatility to enhance portfolio efficiency."
    },
    {
      title: "Alternative Asset Integration",
      content: "Beyond traditional asset classes, we provide access to alternative investments including REITs, private equity, and structured products for enhanced diversification."
    }
  ];

  return (
    <footer className="bg-secondary/50 pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-semibold tracking-tight inline-flex items-center mb-6">
              <Diamond className="w-5 h-5 mr-2 text-primary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Novelty Capital</span>
            </Link>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              Empowering discerning investors with exclusive financial solutions and personalized guidance to excel in complex global markets.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground/80 transition-all hover:bg-primary hover:text-white shadow-subtle border border-primary/10"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground/80 transition-all hover:bg-primary hover:text-white shadow-subtle border border-primary/10"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-foreground/80 transition-all hover:bg-primary hover:text-white shadow-subtle border border-primary/10"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-medium mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* India-specific financial knowledge section */}
        <div className="mb-10 bg-white p-6 rounded-xl shadow-subtle border border-primary/10">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Info className="w-5 h-5 text-primary mr-2" />
            Indian Financial Markets Knowledge
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indiaFinancialInfo.map((info, index) => (
              <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-medium mb-2">{info.title}</h4>
                <p className="text-sm text-foreground/80">{info.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-secondary/20 rounded-lg">
              <h4 className="font-medium mb-2">Indian Market Regulators</h4>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li><span className="font-medium">SEBI:</span> Securities and Exchange Board of India regulates securities markets</li>
                <li><span className="font-medium">RBI:</span> Reserve Bank of India controls monetary policy and banking regulations</li>
                <li><span className="font-medium">IRDAI:</span> Insurance Regulatory and Development Authority regulates insurance sector</li>
                <li><span className="font-medium">PFRDA:</span> Pension Fund Regulatory and Development Authority oversees pension funds</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary/20 rounded-lg">
              <h4 className="font-medium mb-2">Tax-Efficient Investments in India</h4>
              <ul className="text-sm text-foreground/80 space-y-2">
                <li><span className="font-medium">ELSS Funds:</span> Equity Linked Saving Schemes with 3-year lock-in and Sec 80C benefits</li>
                <li><span className="font-medium">PPF:</span> Public Provident Fund offering sovereign guarantee with 15-year tenure</li>
                <li><span className="font-medium">NPS:</span> National Pension System with additional tax benefits under Sec 80CCD(1B)</li>
                <li><span className="font-medium">Tax-Free Bonds:</span> Government-issued bonds with tax-free interest income</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Advanced Technical Investment Knowledge Section */}
        <div className="mb-10 bg-white p-6 rounded-xl shadow-subtle border border-primary/10">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Info className="w-5 h-5 text-primary mr-2" />
            Advanced Investment Methodology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalFinancialKnowledge.map((info, index) => (
              <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-medium mb-2">{info.title}</h4>
                <p className="text-sm text-foreground/80">{info.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {assetAllocationStrategies.map((strategy, index) => (
              <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-medium mb-2">{strategy.title}</h4>
                <p className="text-sm text-foreground/80">{strategy.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <h4 className="font-medium mb-2 text-primary">Our Proprietary Risk Management Framework</h4>
            <p className="text-sm text-foreground/80 mb-3">
              At Novelty Capital, we employ a proprietary multi-layered risk management system:
            </p>
            <ul className="text-sm text-foreground/80 space-y-2">
              <li><span className="font-medium">Value at Risk (VaR) Analysis:</span> Calculating potential losses using 95% confidence intervals across multiple time horizons</li>
              <li><span className="font-medium">Stress Testing:</span> Simulating portfolio performance across historical market crashes (2008, 2020) and hypothetical scenarios</li>
              <li><span className="font-medium">Correlation Decay Monitoring:</span> Tracking dynamic asset correlations to detect potential diversification breakdowns during market stress</li>
              <li><span className="font-medium">Tail Risk Hedging:</span> Strategic options positioning to protect against extreme market downturns while preserving upside potential</li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer section */}
        <div className="mb-8 p-4 bg-secondary/80 border border-primary/10 rounded-lg text-sm text-foreground/80">
          <p className="font-medium mb-2">Disclaimer:</p>
          <p className="mb-2">
            Mutual Fund distribution services are offered through AMFI-registered Mutual Fund Distributor, Novelty Capital with AMFI
            Registration No: ARN - 322456 (Date of initial Registration - 13/FEB/2025 & Current validity of ARN - till 12/FEB/2028).
          </p>
          <p className="font-medium mb-2">*Mutual fund investments are subject to market risks, read all scheme related documents carefully*</p>
          <p className="mb-2">Terms and conditions of the website are applicable. Privacy policy of the website is applicable.</p>
          <p>No employee, partner, affiliate of Novelty Capital accepts any funds pertaining to investments into their personal accounts.</p>
        </div>
        
        <div className="pt-8 border-t border-border text-sm text-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Novelty Capital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-foreground/40">•</span>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span className="text-foreground/40">•</span>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
