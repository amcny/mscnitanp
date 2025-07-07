import React from 'react';
import { Rocket, Users, Cloud } from 'lucide-react';

const ClubMission: React.FC = () => {
  const missions = [
    {
      title: "Build The Future",
      icon: <Rocket className="w-8 h-8" />,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Grow and Help your Community",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Be on Cloud Nine",
      icon: <Cloud className="w-8 h-8" />,
      gradient: "from-purple-600 to-cyan-400"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 parallax-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Join a vibrant tech community where you can learn, lead, and grow together. Build real-world solutions, share knowledge, and make an impact with your peers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 text-center group`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${mission.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {mission.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-glow group-hover:text-cyan-400 transition-colors">
                {mission.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClubMission;