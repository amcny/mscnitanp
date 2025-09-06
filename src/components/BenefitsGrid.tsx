import React from 'react';
import { 
  Cloud, Network, Code, Palette, Trophy, Rocket, 
  Award, Users, GraduationCap, MessageSquare, 
  FileText, Cpu, Gamepad2, Package, Gift, TrendingUp 
} from 'lucide-react';

const BenefitsGrid: React.FC = () => {
  const benefits = [
    {
      title: "Azure Credits",
      description: "Get free $100 Azure credits as a lucky winner in events or as an official microsoft student ambassador!",
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Microsoft Networking",
      description: "Get a chance to network with the leading industry experts",
      icon: <Network className="w-6 h-6" />,
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Visual Studio Enterprise Edition",
      description: "Get free Visual Studio enterprise and Github Enterprise as an official microsoft student ambassador",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Figma Courses",
      description: "Microsoft Provides with free UI/UX Templates and courses on figma",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Imagine Cup Guidance",
      description: "Imagine Cup is one of the biggest startup driven hackathon for young enteprenerrs, lets get your startup accelerated!",
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Founders Hub",
      description: "Accelerate your startup with Founders Hub",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Microsoft Badges",
      description: "We will encourage you to participate in events held by MSAs and to use the microsoft learn platform to gain microsoft badges and polish your resume",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-green-500 to-cyan-400"
    },
    {
      title: "Network With Engineers",
      description: "Find the right team for your project.",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Linkedin Learning",
      description: "Get free access to Linkedin Learning courses as an ambassador or as an event winner!",
      icon: <GraduationCap className="w-6 h-6" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Product Feedback Loops",
      description: "Opportunity to participate in product feedback loops with microsoft",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-400"
    },
    {
      title: "Microsoft Certification",
      description: "Ambassadors get a chance to earn the certificate vouchers, and we as a community spread the knowledge to pass the exams",
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-purple-600 to-pink-500"
    },
    {
      title: "Free AI tools",
      description: "Get Access to free generative AI tools to go all creative!",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "XBOX free pass",
      description: "Microsoft events provide 3 month free passes to event winners!",
      icon: <Gamepad2 className="w-6 h-6" />,
      gradient: "from-green-600 to-lime-500"
    },
    {
      title: "Microsoft 365",
      description: "Get free Microsoft 365 on turning an official microsoft student ambassador.",
      icon: <Package className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Swags Swags and Swags",
      description: "For all the microsoft fans out there!",
      icon: <Gift className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Entrepreneur support",
      description: "Get the best guidance and support",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 parallax-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            Benefits & Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock amazing benefits and opportunities as part of MSA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 text-glow group-hover:text-cyan-400 transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;