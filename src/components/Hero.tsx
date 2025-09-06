import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with sci-fi patterns and particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 parallax-bg">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        
        {/* Enhanced particle system */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        
        {/* Data streams */}
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        <div className="data-stream"></div>
        
        {/* Hexagonal elements */}
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        <div className="hexagon"></div>
        
        {/* Circuit lines */}
        <div className="circuit-line"></div>
        <div className="circuit-line"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow-blue animate-on-scroll">
            Microsoft
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Student Chapter
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll">
            Explore. Learn. Share. <br></br> Let's grow together and make something awesome.
          </p>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 blur-xl float-animation"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-xl float-animation-delay"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-20 blur-xl float-animation-delay-2"></div>
      
      {/* Additional sci-fi elements */}
      <div className="absolute top-1/3 left-1/6 w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-15 blur-xl float-animation"></div>
      <div className="absolute bottom-1/3 left-2/3 w-28 h-28 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-15 blur-xl float-animation-delay"></div>
    </section>
  );
};

export default Hero;