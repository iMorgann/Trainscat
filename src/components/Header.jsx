import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              Trains<span className="text-primary">Cat</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#services" className="font-semibold text-secondary hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="font-semibold text-secondary hover:text-primary transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="font-semibold text-secondary hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold transition-all transform hover:-translate-y-1 hover:shadow-lg">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-secondary text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#services" 
                  className="block font-semibold text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="block font-semibold text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="block font-semibold text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="block w-full text-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;