
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Diamond } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Stocks", path: "/product/stocks" },
    { name: "Bonds", path: "/product/bonds" },
    { name: "Mutual Funds", path: "/product/mutual-funds" },
    { name: "Insurance", path: "/product/insurance" },
    { name: "Unlisted Shares", path: "/product/unlisted-shares" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-expo-out ${
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-semibold tracking-tight relative flex items-center"
          >
            <Diamond className="w-6 h-6 mr-2 text-primary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Novelty Capital</span>
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-primary/0"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-primary after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === link.path ? "text-primary after:scale-x-100 after:origin-left" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-white transition-all shadow-subtle hover:shadow-elevated hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 glass pt-24 transform transition-transform duration-300 ease-expo-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium transition-all hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-full bg-primary text-white transition-all"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
