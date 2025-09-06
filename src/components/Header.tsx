import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home', 'About', 'Vision', 'Benefits', 'Apply', 'Events', 'Contact'
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10' 
          : 'bg-white/5 backdrop-blur-md'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Microsoft Logo SVG */}
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 23 23" className="w-full h-full">
                  <rect x="1" y="1" width="10" height="10" fill="#f25022"/>
                  <rect x="12" y="1" width="10" height="10" fill="#7fba00"/>
                  <rect x="1" y="12" width="10" height="10" fill="#00a4ef"/>
                  <rect x="12" y="12" width="10" height="10" fill="#ffb900"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl text-glow">MSC x NIT ANP</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors backdrop-blur-sm"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Navigation Menu */}
          <div className="absolute top-20 left-4 right-4 bg-black/40 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header gradient */}
            <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
            
            {/* Menu items */}
            <div className="p-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left py-4 px-6 text-gray-200 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 text-lg font-medium group relative overflow-hidden"
                    style={{ 
                      animation: `slideInUp 0.4s ease-out ${index * 0.05}s both`
                    }}
                  >
                    <span className="relative z-10">{item}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;