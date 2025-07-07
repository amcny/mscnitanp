import React from 'react';
import { Cloud, Github, Palette, Globe } from 'lucide-react';

const TechnologyFocus: React.FC = () => {
  const technologies = [
    {
      title: "Cloud With Azure",
      content: "Azure is one of Microsoft's top technologies, and we'll be holding sessions to help you learn it. Let's get Azure certified together!",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Opensource with Github",
      content: "Welcome to the world of open source! — it's never too late to start contributing.",
      icon: <Github className="w-8 h-8" />,
      gradient: "from-gray-600 to-gray-400"
    },
    {
      title: "Microsoft Design Templates in Figma",
      content: "You thought Microsoft was all tech? Nope — we love good design too! Let's make our projects easy to use and open to all.",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-400"
    },
    {
      title: "Exposure to the Microsoft World",
      content: "Join global events by MLSAs, meet experts, and explore cool programs like Founders Hub, Imagine Cup, and much more!",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <section id="developers" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            Technology Focus Areas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the latest technologies and learn the skills that actually help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tilt-card card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${tech.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {tech.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-glow group-hover:text-cyan-400 transition-colors">
                {tech.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                {tech.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyFocus;