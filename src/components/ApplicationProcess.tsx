import React from 'react';
import { FileText, Users, Trophy, CheckCircle } from 'lucide-react';

const ApplicationProcess: React.FC = () => {
  const selectionProcess = [
    {
      step: 1,
      title: "Fill Application",
      description:
        "Go to the MSA Portal, create your account, and click on Apply Now to fill out your details.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 2,
      title: "Review & Selection",
      description:
        "Microsoft reviews your application and may inform you if you're shortlisted.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      step: 3,
      title: "Onboarding & Start",
      description:
        "Once selected, you'll join as a Student Ambassador with access to training, resources, and a global tech community.",
      icon: <Trophy className="w-8 h-8" />,
    },
  ];

  const selectionCriteria = [
    "Microsoft checks your motivation, clarity, and community interest.",
    "They assess leadership, communication, and how you plan to contribute.",
    "The Microsoft team selects candidates who align with the program's goals.",
  ];

  return (
    <section
      id="apply"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            Application Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Become Microsoft Student Ambassador through a simple and easy process
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center text-glow">
            Selection Process
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {selectionProcess.map((process, index) => (
              <div
                key={index}
                className="card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 text-center group relative"
              >
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {process.step}
                </div>

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 mt-4 mx-auto">
                  <div className="text-white">{process.icon}</div>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 text-glow group-hover:text-cyan-400 transition-colors">
                  {process.title}
                </h4>

                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {process.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center text-glow">
            Selection Criteria
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {selectionCriteria.map((criteria, index) => (
              <div
                key={index}
                className="card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {criteria}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="https://mvp.microsoft.com/studentambassadors" target="_blank" rel="noopener noreferrer">
            <button className="btn-3d bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 glow">
              Apply Now
            </button></a>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
