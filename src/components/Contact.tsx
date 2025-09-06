import React from 'react';
import { Mail, ExternalLink, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our Microsoft Student Ambassador
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 md:p-8 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 text-center">
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm md:text-lg">CP</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-glow">
                Microsoft Student Ambassador
              </h3>
              <p className="text-lg md:text-xl text-cyan-400 font-semibold mb-4 md:mb-6">
                Chaitanya Pullagura
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 mb-6 md:mb-8 text-left">
              <div className="flex items-center space-x-3 p-3 md:p-4 bg-black/30 rounded-lg">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-xs md:text-sm break-all">
                  chaitanya.pullagura@studentambassadors.com
                </span>
              </div>

              <div className="flex items-center space-x-3 p-3 md:p-4 bg-black/30 rounded-lg">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">
                  National Institute of Technology, Andhra Pradesh
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
              <a
                href="https://mvp.microsoft.com/en-US/studentambassadors/profile/b9538491-4654-4e01-ad7e-bd4a30164f50"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm btn-3d bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-center w-full">View MLSA Profile</span>
              </a>

              <a
                href="https://in.linkedin.com/in/chaitanyapullagura"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm btn-3d bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-center w-full">View LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
