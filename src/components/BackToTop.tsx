import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-20 opacity-0 scale-50 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      {/* Outer glow ring */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110"></div>
      
      {/* Main button */}
      <div className="relative w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-cyan-500/30">
        {/* Inner highlight */}
        <div className="absolute inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
        
        {/* Icon */}
        <ChevronUp className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Ripple effect on hover */}
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </button>
  );
};

export default BackToTop;