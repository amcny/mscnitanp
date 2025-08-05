import React from 'react';
import { Linkedin, Mail, InstagramIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/Group 2.png"
                alt="Microsoft Learn Student Chapter Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Microsoft Learn Student Chapter at National Institute of Technology, Andhra Pradesh.
              Empowering students to become technology leaders and innovators.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/mlsc-nitandhra/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:mlsc-nitandhra@outlook.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mlsc_nitandhra/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-glow">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-cyan-400 transition-colors">Benefits</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-cyan-400 transition-colors">Events</a></li>
              <li><a href="#apply" className="text-gray-400 hover:text-cyan-400 transition-colors">Apply</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-glow">Technologies</h4>
            <ul className="space-y-2">
              <li><a href="https://azure.microsoft.com/en-in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Azure Cloud</a></li>
              <li><a href="https://learn.microsoft.com/en-us/training/github/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">GitHub</a></li>
              <li><a href="https://learn.microsoft.com/en-us/training/m365/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Microsoft 365</a></li>
              <li><a href="https://learn.microsoft.com/en-us/shows/machine-learning-for-beginners/introduction-to-machine-learning-for-beginners-machine-learning-for-beginners" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">AI & ML</a></li>
              <li><a href="https://microsoft.design/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">Design</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Microsoft Learn Student Chapter - NIT Andhra Pradesh. All rights reserved.
          </p>
          <p className="text-gray-400">
            Chapter managed by Varma Tirumani, IV - EEE & Jayanth, IV - CSE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;