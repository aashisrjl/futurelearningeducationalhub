import React, { useState, useEffect } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  return (
    <>
      <div className="bg-brand-blue text-white hidden md:flex justify-between items-center px-4 py-1 lg:px-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <a href="tel:+9779810303451" className="text-sm hover:text-brand-gold">
              +977 9810303451
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4" />
            <a href="mailto:futurelearningeducationalhub@gmail.com" className="text-sm hover:text-brand-gold">
              futurelearningeducationalhub@gmail.com
            </a>
          </div>
        </div>
        <div className="text-sm">
          <span>Samakhusi-3, Kathmandu (Opposite to Sekuwa by Kilo)</span>
        </div>
      </div>

      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-blue">
                Future<span className="text-brand-gold">Learning</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-brand-blue hover:text-brand-gold font-medium transition">
              Home
            </Link>
            <a href="#about" className="text-brand-blue hover:text-brand-gold font-medium transition">
              About
            </a>
            
            <div className="dropdown relative">
              <button className="text-brand-blue hover:text-brand-gold font-medium transition flex items-center">
                Study Abroad <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-content">
                <Link to="/study/japan" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  Japan 🇯🇵
                </Link>
                <a href="#study-australia" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  Australia 🇦🇺
                </a>
                <a href="#study-uk" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  UK 🇬🇧
                </a>
                <a href="#study-canada" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  Canada 🇨🇦
                </a>
                <a href="#study-korea" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  South Korea 🇰🇷
                </a>
                <a href="#study-usa" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  USA 🇺🇸
                </a>
              </div>
            </div>

            <div className="dropdown relative">
              <button className="text-brand-blue hover:text-brand-gold font-medium transition flex items-center">
                Test Preparation <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="dropdown-content">
                <a href="#japanese-language" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  Japanese Language
                </a>
                <a href="#ielts" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  IELTS
                </a>
                <a href="#pte" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">
                  PTE
                </a>
              </div>
            </div>

            <a href="#contact" className="text-brand-blue hover:text-brand-gold font-medium transition">
              Contact
            </a>

            <Button className="bg-brand-blue hover:bg-brand-gold text-white transition">
              <a href="#contact">Get Started</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-blue focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full">
            <div className="container mx-auto py-3 space-y-2">
              <a href="#home" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">Home</a>
              <a href="#about" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">About</a>
              
              <div className="px-4 py-2 text-brand-blue">Study Abroad</div>
              <a href="#study-japan" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">Japan 🇯🇵</a>
              <a href="#study-australia" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">Australia 🇦🇺</a>
              <a href="#study-uk" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">UK 🇬🇧</a>
              <a href="#study-canada" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">Canada 🇨🇦</a>
              <a href="#study-korea" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">South Korea 🇰🇷</a>
              <a href="#study-usa" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">USA 🇺🇸</a>
              
              <div className="px-4 py-2 text-brand-blue">Test Preparation</div>
              <a href="#japanese-language" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">Japanese Language</a>
              <a href="#ielts" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">IELTS</a>
              <a href="#pte" className="block px-8 py-2 hover:bg-gray-100 text-brand-blue">PTE</a>
              
              <a href="#contact" className="block px-4 py-2 hover:bg-gray-100 text-brand-blue">Contact</a>
              
              <div className="px-4 py-2">
                <Button className="w-full bg-brand-blue hover:bg-brand-gold text-white transition">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
