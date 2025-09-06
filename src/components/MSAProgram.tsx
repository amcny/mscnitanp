import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MSAProgram: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const cards = [
    {
      title: "What is the MSA Program?",
      content: "MSA program empowers students to learn, lead, and share tech on campus — get trained by Microsoft, grow your skills, and help others explore the future of tech."
    },
    {
      title: "Who can join the MSA Program?",
      content: "If you're a college student who loves tech, enjoys helping others, and wants to grow as a leader — the MSA program is for you. Share your knowledge, run events, learn new skills, and become the go-to tech voice on your campus."
    },
    {
      title: "What are the benefits of the MSA Program?",
      content: "Get career-boosting access to Microsoft events, official recognition as a Student Ambassador, free tools and cloud credits, and mentorship from Microsoft professionals to guide your journey."
    },
    {
      title: "Events held by Microsoft",
      content: "Microsoft hosts various events throughout the year including tech conferences, hackathons, workshops, and training sessions. These events provide opportunities for learning, networking, and showcasing innovative projects.",
      hasLink: true
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            The MSA Program
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the opportunities and benefits of becoming a Microsoft Student Ambassador
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 cursor-pointer ${expandedCard === index ? 'col-span-full' : ''
                }`}
              onClick={() => toggleCard(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white text-glow">
                  {card.title}
                </h3>
                {expandedCard === index ? (
                  <ChevronUp className="w-6 h-6 text-cyan-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-cyan-400" />
                )}
              </div>

              {expandedCard === index && (
                <div className="text-gray-300 leading-relaxed">
                  <p>{card.content}</p>
                  {card.hasLink && (
                    <a href="https://mvp.microsoft.com/studentambassadors" target="_blank" rel="noopener noreferrer">
                      <button className="btn-3d bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                        Learn More
                      </button>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MSAProgram;