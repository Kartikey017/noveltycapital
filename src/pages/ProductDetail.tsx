
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, BarChart3, Banknote, LineChart, ShieldCheck, Briefcase, Globe, ArrowRight, Calendar, ChevronRight, Info, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const productData = {
  "stocks": {
    title: "Stocks",
    subtitle: "Equity Investment Solutions",
    description: "Access global equity markets with our comprehensive stock trading platform and research tools.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "blue",
    features: [
      "Trade in domestic and international stock markets",
      "Real-time market data and analysis",
      "Expert research reports and recommendations",
      "Fractional share investing available",
      "Advanced charting and technical analysis tools",
      "Customized stock screeners and watchlists",
      "Tax-efficient trading strategies"
    ],
    benefits: [
      "Potential for long-term capital appreciation",
      "Participate in company growth and success",
      "Dividend income opportunities",
      "Portfolio diversification across sectors",
      "Highly liquid investment option"
    ],
    marketInsight: "Equity markets continue to offer long-term growth potential despite short-term volatility. Our strategic approach to stock investing helps clients navigate market fluctuations while capturing upside opportunities."
  },
  "bonds": {
    title: "Bonds",
    subtitle: "Fixed Income Solutions",
    description: "Stabilize your portfolio with our selection of government, corporate and municipal bonds.",
    icon: <Banknote className="w-8 h-8" />,
    color: "green",
    features: [
      "Access to government, municipal and corporate bonds",
      "Treasury securities and inflation-protected bonds",
      "International bond offerings",
      "Tailored bond ladder strategies",
      "Comprehensive yield and duration analysis",
      "Secondary market trading capabilities",
      "Bond portfolio stress testing"
    ],
    benefits: [
      "Predictable income streams",
      "Lower volatility than equities",
      "Portfolio stabilization properties",
      "Capital preservation focus",
      "Inflation protection options available"
    ],
    marketInsight: "In the current interest rate environment, our strategic bond allocation approach helps investors capture yield while managing duration risk. Our fixed income specialists construct bond portfolios tailored to individual client objectives."
  },
  "mutual-funds": {
    title: "Mutual Funds",
    subtitle: "Diversified Fund Solutions",
    description: "Access professionally managed fund portfolios tailored to diverse investment objectives and risk profiles.",
    icon: <LineChart className="w-8 h-8" />,
    color: "purple",
    features: [
      "Broad selection of actively managed mutual funds",
      "Index fund options with low expense ratios",
      "Specialty sector and thematic funds",
      "International and emerging market funds",
      "Income-focused fund strategies",
      "Fund selection based on consistent performance",
      "Automatic dividend reinvestment programs"
    ],
    benefits: [
      "Professional portfolio management",
      "Instant diversification across asset classes",
      "Accessible with relatively low minimum investments",
      "Systematic investing options",
      "Transparent fee structures"
    ],
    marketInsight: "Our mutual fund selection process emphasizes consistent risk-adjusted returns, management stability, and reasonable expense ratios. We continually monitor fund performance against relevant benchmarks to ensure optimal portfolio construction.",
    assetManagementCompanies: [
      {
        name: "Vanguard Investment Management",
        description: "Known for low-cost index funds and ETFs with a focus on passive investment strategies.",
        aum: "$8.1 trillion",
        founded: "1975",
        schemes: [
          {
            name: "Vanguard Total Stock Market Index Fund",
            category: "Equity - Large Cap",
            risk: "Moderate",
            returns: {
              oneYear: "18.2%",
              threeYear: "12.7%",
              fiveYear: "15.3%"
            },
            expense: "0.04%",
            minInvestment: "$3,000"
          },
          {
            name: "Vanguard Wellington Fund",
            category: "Hybrid - Balanced",
            risk: "Low to Moderate",
            returns: {
              oneYear: "12.5%",
              threeYear: "9.8%",
              fiveYear: "11.2%"
            },
            expense: "0.24%",
            minInvestment: "$3,000"
          }
        ]
      },
      {
        name: "Blackrock Asset Management",
        description: "Global investment manager focusing on both active and passive strategies across all asset classes.",
        aum: "$9.5 trillion",
        founded: "1988",
        schemes: [
          {
            name: "BlackRock Global Allocation Fund",
            category: "Allocation - Global",
            risk: "Moderate",
            returns: {
              oneYear: "15.7%",
              threeYear: "10.6%",
              fiveYear: "12.1%"
            },
            expense: "0.80%",
            minInvestment: "$1,000"
          },
          {
            name: "BlackRock Technology Opportunities Fund",
            category: "Sector - Technology",
            risk: "High",
            returns: {
              oneYear: "21.3%",
              threeYear: "18.9%",
              fiveYear: "22.5%"
            },
            expense: "1.18%",
            minInvestment: "$1,000"
          }
        ]
      },
      {
        name: "Fidelity Investments",
        description: "Offers a wide range of actively managed funds with strong research capabilities.",
        aum: "$4.2 trillion",
        founded: "1946",
        schemes: [
          {
            name: "Fidelity Contrafund",
            category: "Equity - Growth",
            risk: "Moderate to High",
            returns: {
              oneYear: "19.6%",
              threeYear: "14.2%",
              fiveYear: "16.8%"
            },
            expense: "0.86%",
            minInvestment: "$2,500"
          },
          {
            name: "Fidelity Strategic Income Fund",
            category: "Fixed Income - Multisector",
            risk: "Low to Moderate",
            returns: {
              oneYear: "8.3%",
              threeYear: "6.1%",
              fiveYear: "7.5%"
            },
            expense: "0.67%",
            minInvestment: "$2,500"
          }
        ]
      }
    ]
  },
  "insurance": {
    title: "Insurance",
    subtitle: "Protection & Wealth Solutions",
    description: "Comprehensive insurance solutions to protect your assets and provide financial security for you and your family.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "red",
    features: [
      "Life insurance and income protection",
      "Variable and fixed annuities",
      "Long-term care insurance options",
      "Business continuation insurance",
      "Key person insurance strategies",
      "Estate planning with insurance solutions",
      "Policy evaluation and optimization services"
    ],
    benefits: [
      "Financial protection for dependents",
      "Tax-advantaged wealth transfer options",
      "Income security during retirement",
      "Asset protection strategies",
      "Business continuity assurance"
    ],
    marketInsight: "Modern insurance products offer sophisticated solutions that go beyond basic protection. Our insurance specialists identify optimal coverage options that integrate with your overall financial plan for comprehensive wealth management."
  },
  "ipo": {
    title: "IPO",
    subtitle: "Initial Public Offerings",
    description: "Gain access to carefully selected IPOs with our expert guidance through the entire subscription process.",
    icon: <Globe className="w-8 h-8" />,
    color: "teal",
    features: [
      "Early access to high-quality initial public offerings",
      "Thorough company and sector analysis",
      "Streamlined application process",
      "Expert guidance on allocation strategies",
      "Post-listing advisory services",
      "Preferential allocation opportunities",
      "Comprehensive IPO calendar and alerts"
    ],
    benefits: [
      "Opportunity to invest at the ground floor of public companies",
      "Potential for listing gains",
      "Access to growth-phase companies",
      "Portfolio diversification with new-to-market entities",
      "Participation in key economic sectors and innovations"
    ],
    marketInsight: "The IPO market continues to offer attractive opportunities for investors seeking exposure to innovative companies across various sectors. Our rigorous selection process identifies promising offerings with strong fundamentals and growth prospects.",
    ipoProcess: [
      {
        title: "Filing & Regulatory Review",
        description: "The company files a registration statement (like an S-1 in the US) with securities regulators, which includes detailed financial information, business model, risk factors, and intended use of proceeds."
      },
      {
        title: "Roadshow & Book Building",
        description: "Company management presents to institutional investors to generate interest. Investment banks collect bids to determine optimal pricing and build the order book."
      },
      {
        title: "Pricing & Allocation",
        description: "The final offer price is set based on demand gathered during the book building process. Shares are allocated to investors, with potential oversubscription prioritization."
      },
      {
        title: "Listing & Trading",
        description: "Shares begin trading on the public exchange. The market determines the actual trading price based on supply and demand after listing."
      }
    ],
    upcomingIPOs: [
      {
        name: "GreenTech Innovations Ltd.",
        sector: "Renewable Energy",
        expectedRaise: "$750 million",
        priceRange: "$32-38 per share",
        openDate: "August 15, 2023",
        closeDate: "August 20, 2023",
        leadManagers: ["Morgan Stanley", "Goldman Sachs", "JP Morgan"],
        description: "Leading provider of advanced solar energy solutions with proprietary storage technology."
      },
      {
        name: "NexusHealth Systems",
        sector: "Healthcare Technology",
        expectedRaise: "$425 million",
        priceRange: "$18-22 per share",
        openDate: "September 8, 2023",
        closeDate: "September 12, 2023",
        leadManagers: ["Bank of America", "Credit Suisse"],
        description: "Integrated healthcare platform using AI to optimize patient care and reduce costs."
      },
      {
        name: "Quantum Computing Inc.",
        sector: "Technology",
        expectedRaise: "$1.2 billion",
        priceRange: "$45-52 per share",
        openDate: "September 22, 2023",
        closeDate: "September 27, 2023",
        leadManagers: ["Goldman Sachs", "Morgan Stanley", "Deutsche Bank"],
        description: "Pioneer in commercial quantum computing solutions for enterprise applications."
      }
    ],
    recentIPOPerformance: [
      {
        name: "CloudSecure Technologies",
        sector: "Cybersecurity",
        issuePrice: "$28",
        listingPrice: "$42",
        currentPrice: "$56",
        listingGain: "+50.0%",
        overallReturn: "+100.0%",
        listingDate: "February 15, 2023"
      },
      {
        name: "MobiPay Solutions",
        sector: "Fintech",
        issuePrice: "$18",
        listingPrice: "$22",
        currentPrice: "$35",
        listingGain: "+22.2%",
        overallReturn: "+94.4%",
        listingDate: "March 10, 2023"
      },
      {
        name: "BioGenesis Therapeutics",
        sector: "Biotechnology",
        issuePrice: "$32",
        listingPrice: "$38",
        currentPrice: "$29",
        listingGain: "+18.8%",
        overallReturn: "-9.4%",
        listingDate: "April 5, 2023"
      },
      {
        name: "EcoPackaging Systems",
        sector: "Sustainable Materials",
        issuePrice: "$24",
        listingPrice: "$26",
        currentPrice: "$31",
        listingGain: "+8.3%",
        overallReturn: "+29.2%",
        listingDate: "May 20, 2023"
      },
      {
        name: "DataInsight Analytics",
        sector: "Enterprise Software",
        issuePrice: "$42",
        listingPrice: "$68",
        currentPrice: "$72",
        listingGain: "+61.9%",
        overallReturn: "+71.4%",
        listingDate: "June 8, 2023"
      }
    ]
  },
  "unlisted-shares": {
    title: "Pre IPO",
    subtitle: "Private Equity Opportunities",
    description: "Exclusive access to pre-IPO companies and private market opportunities with high growth potential.",
    icon: <Briefcase className="w-8 h-8" />,
    color: "amber",
    features: [
      "Pre-IPO investment opportunities",
      "Late-stage private company access",
      "Secondary market private shares",
      "Thorough due diligence and company analysis",
      "Diversified private equity portfolio options",
      "Regular valuation updates and reporting",
      "Liquidity event planning and strategies"
    ],
    benefits: [
      "Potential for significant returns during company growth phases",
      "Portfolio diversification beyond public markets",
      "Early access to innovative companies and sectors",
      "Reduced correlation with public market volatility",
      "Exclusive investment opportunities"
    ],
    marketInsight: "Private markets continue to offer compelling opportunities as companies stay private longer. Our rigorous selection process and extensive network provide clients with access to promising private companies with significant growth trajectories."
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productData[productId as keyof typeof productData];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-medium mb-4">Product Not Found</h1>
            <p className="text-foreground/70 mb-8">The product you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="inline-flex items-center text-primary font-medium">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Dynamic color classes based on product
  const getColorClasses = () => {
    switch (product.color) {
      case "green":
        return {
          bgLight: "bg-green-50",
          bgMedium: "bg-green-100",
          text: "text-green-600",
          border: "border-green-200",
          iconBg: "bg-green-100",
          gradient: "from-green-500/10 to-green-500/5"
        };
      case "purple":
        return {
          bgLight: "bg-purple-50",
          bgMedium: "bg-purple-100",
          text: "text-purple-600",
          border: "border-purple-200",
          iconBg: "bg-purple-100",
          gradient: "from-purple-500/10 to-purple-500/5"
        };
      case "red":
        return {
          bgLight: "bg-red-50",
          bgMedium: "bg-red-100",
          text: "text-red-600", 
          border: "border-red-200",
          iconBg: "bg-red-100",
          gradient: "from-red-500/10 to-red-500/5"
        };
      case "amber":
        return {
          bgLight: "bg-amber-50",
          bgMedium: "bg-amber-100",
          text: "text-amber-600",
          border: "border-amber-200",
          iconBg: "bg-amber-100",
          gradient: "from-amber-500/10 to-amber-500/5"
        };
      case "teal":
        return {
          bgLight: "bg-teal-50",
          bgMedium: "bg-teal-100",
          text: "text-teal-600", 
          border: "border-teal-200",
          iconBg: "bg-teal-100",
          gradient: "from-teal-500/10 to-teal-500/5"
        };
      default: // blue
        return {
          bgLight: "bg-blue-50",
          bgMedium: "bg-blue-100",
          text: "text-blue-600",
          border: "border-blue-200",
          iconBg: "bg-blue-100",
          gradient: "from-blue-500/10 to-blue-500/5"
        };
    }
  };
  
  const colorClasses = getColorClasses();

  // Render IPO specific content
  const renderIPOContent = () => {
    if (productId !== 'ipo' || !('ipoProcess' in product)) return null;
    
    return (
      <>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-medium mb-8">How the IPO Process Works</h2>
              <p className="text-lg text-foreground/70">
                Understanding the journey from private to public company is essential for investors looking to participate in initial public offerings.
              </p>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-1 bg-gradient-to-b from-primary/70 to-primary/20 transform md:translate-x-[-0.5px]"></div>
              
              {product.ipoProcess.map((step, index) => (
                <div key={index} className={`relative mb-12 md:mb-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} animate-fade-in`}>
                  <div className={`flex md:block ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-full ${colorClasses.bgMedium} border-4 border-white flex items-center justify-center ${colorClasses.text} z-10 transform md:translate-x-[-50%]`}>
                      {index + 1}
                    </div>
                    
                    <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'} bg-white p-6 rounded-xl shadow-subtle border border-primary/10 max-w-lg`}>
                      <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-medium mb-8">Upcoming IPO Opportunities</h2>
              <p className="text-lg text-foreground/70">
                Stay informed about the latest companies preparing to go public and evaluate potential investment opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.upcomingIPOs.map((ipo, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-subtle overflow-hidden border border-primary/10 animate-fade-in hover:shadow-elevated transition-all duration-300">
                  <div className={`p-4 ${colorClasses.bgLight} border-b ${colorClasses.border}`}>
                    <span className="text-xs font-medium uppercase tracking-wider px-2 py-1 rounded-full bg-white">{ipo.sector}</span>
                    <h3 className="text-xl font-medium mt-2">{ipo.name}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-foreground/70 mb-6">{ipo.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Expected Raise:</span>
                        <span className="font-medium">{ipo.expectedRaise}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Price Range:</span>
                        <span className="font-medium">{ipo.priceRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Subscription Period:</span>
                        <span className="font-medium">{ipo.openDate} - {ipo.closeDate}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-medium mb-2">Lead Managers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {ipo.leadManagers.map((manager, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-secondary/40 rounded-full">
                            {manager}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <a href="#" className="block w-full py-3 text-center rounded-lg bg-primary text-white transition-all hover:bg-primary/90">
                      Register Interest
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/ipo-calendar" className="inline-flex items-center text-primary font-medium transition-all group">
                <Calendar className="mr-2 w-4 h-4" />
                <span>View Complete IPO Calendar</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-medium mb-8">Recent IPO Performance</h2>
              <p className="text-lg text-foreground/70">
                Track the performance of recent listings to understand market trends and investor sentiment.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className={`${colorClasses.bgLight}`}>
                    <TableHead className="font-medium">Company</TableHead>
                    <TableHead className="font-medium">Sector</TableHead>
                    <TableHead className="font-medium text-right">Issue Price</TableHead>
                    <TableHead className="font-medium text-right">Listing Price</TableHead>
                    <TableHead className="font-medium text-right">Listing Gain</TableHead>
                    <TableHead className="font-medium text-right">Current Price</TableHead>
                    <TableHead className="font-medium text-right">Overall Return</TableHead>
                    <TableHead className="font-medium">Listing Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.recentIPOPerformance.map((ipo, index) => (
                    <TableRow key={index} className="hover:bg-secondary/20 transition-colors">
                      <TableCell className="font-medium">{ipo.name}</TableCell>
                      <TableCell>{ipo.sector}</TableCell>
                      <TableCell className="text-right">{ipo.issuePrice}</TableCell>
                      <TableCell className="text-right">{ipo.listingPrice}</TableCell>
                      <TableCell className={`text-right ${ipo.listingGain.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {ipo.listingGain}
                      </TableCell>
                      <TableCell className="text-right">{ipo.currentPrice}</TableCell>
                      <TableCell className={`text-right ${ipo.overallReturn.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {ipo.overallReturn}
                      </TableCell>
                      <TableCell>{ipo.listingDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-12 p-8 rounded-2xl bg-secondary/30 border border-primary/10 max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Important Considerations for IPO Investing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight className="mt-1 mr-2 w-4 h-4 text-primary flex-shrink-0" />
                      <span>IPOs can be volatile in the short term, with significant price fluctuations post-listing.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mt-1 mr-2 w-4 h-4 text-primary flex-shrink-0" />
                      <span>Conduct thorough research on company fundamentals, management team, and growth prospects.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mt-1 mr-2 w-4 h-4 text-primary flex-shrink-0" />
                      <span>Consider lock-up periods and potential share dilution in the months following the IPO.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mt-1 mr-2 w-4 h-4 text-primary flex-shrink-0" />
                      <span>Evaluate IPO pricing in relation to industry peers and comparable public companies.</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="mt-1 mr-2 w-4 h-4 text-primary flex-shrink-0" />
                      <span>Decide on your investment horizon—short-term listing gains or long-term growth potential.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <a 
                      href="/resources/ipo-investor-guide.pdf" 
                      className="inline-flex items-center text-primary font-medium transition-all group"
                    >
                      <span>Download Our Complete IPO Investor Guide</span>
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  // Render mutual fund specific content
  const renderMutualFundsContent = () => {
    if (productId !== 'mutual-funds' || !('assetManagementCompanies' in product)) return null;
    
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-medium mb-12 text-center">Asset Management Companies</h2>
          
          {product.assetManagementCompanies.map((company, index) => (
            <div key={index} className="mb-16 animate-fade-in">
              <div className={`p-8 rounded-2xl shadow-subtle ${colorClasses.bgLight} mb-8`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-medium">{company.name}</h3>
                    <p className="text-foreground/70 mt-2">{company.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
                    <div>
                      <p className="text-foreground/50">Assets Under Management</p>
                      <p className="font-medium text-lg">{company.aum}</p>
                    </div>
                    <div>
                      <p className="text-foreground/50">Founded</p>
                      <p className="font-medium text-lg">{company.founded}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-medium mb-6 pl-4 border-l-4 border-primary">Available Fund Schemes</h4>
              
              <div className="overflow-x-auto">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow className="bg-secondary/70">
                      <TableHead className="font-medium">Scheme Name</TableHead>
                      <TableHead className="font-medium">Category</TableHead>
                      <TableHead className="font-medium">Risk Level</TableHead>
                      <TableHead className="font-medium">1 Year Return</TableHead>
                      <TableHead className="font-medium">3 Year Return</TableHead>
                      <TableHead className="font-medium">5 Year Return</TableHead>
                      <TableHead className="font-medium">Expense Ratio</TableHead>
                      <TableHead className="font-medium">Min Investment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {company.schemes.map((scheme, schemeIndex) => (
                      <TableRow key={schemeIndex} className="hover:bg-secondary/30 transition-colors">
                        <TableCell className="font-medium">{scheme.name}</TableCell>
                        <TableCell>{scheme.category}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-xs ${
                            scheme.risk.includes('High') ? 'bg-red-100 text-red-700' : 
                            scheme.risk.includes('Moderate') ? 'bg-amber-100 text-amber-700' : 
                            'bg-green-100 text-green-700'
                          }`}>
                            {scheme.risk}
                          </span>
                        </TableCell>
                        <TableCell>{scheme.returns.oneYear}</TableCell>
                        <TableCell>{scheme.returns.threeYear}</TableCell>
                        <TableCell>{scheme.returns.fiveYear}</TableCell>
                        <TableCell>{scheme.expense}</TableCell>
                        <TableCell>{scheme.minInvestment}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {index < product.assetManagementCompanies.length - 1 && (
                <div className="my-12 border-b border-border"></div>
              )}
            </div>
          ))}
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-primary text-white shadow-subtle transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px]">
              Schedule a Fund Advisory Consultation
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28">
        {/* Hero section */}
        <section className={`py-16 md:py-24 relative overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient}`}></div>
          <div className="container mx-auto px-6 md:px-8 relative z-10">
            <Link to="/" className="inline-flex items-center text-foreground/70 mb-8 group transition-colors hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Products
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-2/3 animate-fade-in">
                <div className={`w-16 h-16 rounded-2xl ${colorClasses.iconBg} flex items-center justify-center ${colorClasses.text} mb-6`}>
                  {product.icon}
                </div>
                
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bgMedium} ${colorClasses.text} mb-4`}>
                  {product.subtitle}
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                  {product.title}
                </h1>
                
                <p className="text-xl text-foreground/70 max-w-2xl">
                  {product.description}
                </p>
              </div>
              
              <div className="md:w-1/3 animate-fade-in delay-2">
                <div className="bg-white shadow-elevated rounded-2xl p-8">
                  <h3 className="text-xl font-medium mb-6">Ready to invest?</h3>
                  <p className="text-foreground/70 mb-6">
                    Speak with one of our financial advisors to get started with {product.title.toLowerCase()}.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="/contact"
                      className="block w-full py-3 px-4 text-center rounded-lg bg-primary text-white transition-all hover:bg-primary/90"
                    >
                      Schedule a Consultation
                    </a>
                    <a
                      href={`/resources/${productId}`}
                      className="block w-full py-3 px-4 text-center rounded-lg border border-input text-foreground/80 transition-all hover:bg-secondary"
                    >
                      Download Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-3xl font-medium mb-8">Key Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`mt-1 mr-4 p-1 rounded-full ${colorClasses.bgLight}`}>
                        <Check className={`w-4 h-4 ${colorClasses.text}`} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="animate-fade-in delay-1">
                <h2 className="text-2xl md:text-3xl font-medium mb-8">Benefits</h2>
                <ul className="space-y-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`mt-1 mr-4 p-1 rounded-full ${colorClasses.bgLight}`}>
                        <Check className={`w-4 h-4 ${colorClasses.text}`} />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className={`mt-12 p-6 rounded-xl ${colorClasses.bgLight} ${colorClasses.border} border`}>
                  <h3 className="text-xl font-medium mb-4">Market Insight</h3>
                  <p className="text-foreground/80">
                    {product.marketInsight}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product specific content */}
        {productId === 'ipo' && renderIPOContent()}
        {productId === 'mutual-funds' && renderMutualFundsContent()}
        
        {/* CTA section */}
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Start Your {product.title} Investment Journey
              </h2>
              <p className="text-lg text-foreground/70 mb-10">
                Join thousands of investors who trust BrokerHaven with their financial future. Our expert advisors are ready to guide you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-primary text-white shadow-subtle transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px]"
                >
                  Schedule a Consultation
                </a>
                <a
                  href={`/resources/${productId}`}
                  className="px-8 py-4 rounded-full bg-white text-foreground shadow-subtle transition-all duration-300 hover:shadow-elevated hover:translate-y-[-2px]"
                >
                  Download Resources
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related products */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-medium mb-10 text-center">
              Explore Other Products
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(productData)
                .filter(([id]) => id !== productId)
                .slice(0, 4)
                .map(([id, prod]) => (
                  <Link 
                    key={id}
                    to={`/product/${id}`}
                    className="block p-6 bg-white rounded-xl shadow-subtle hover:shadow-elevated transition-all duration-300 animate-fade-in group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                      {prod.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {prod.description.substring(0, 80)}...
                    </p>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
