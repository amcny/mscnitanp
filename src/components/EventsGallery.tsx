import React from 'react';
import { Calendar, Users, MapPin, } from 'lucide-react';

const EventsGallery: React.FC = () => {
  const events = [
    {
      title: "MLSC x NIT Andhra Pradesh Launch (Upcoming)",
      date: "August 14, 2025 (Tentative)",
      participants: "300+ Students",
      location: "RKB Auditorium",
      image: "https://media.konfhub.com/event_poster/2025/June/29/1751196045995-01637862-1457-442d-a314-b644a623b96a.png"
    },
    {
      title: "Resume Building (Upcoming)",
      date: "September 4, 2025",
      participants: "100+ students",
      location: "SRK/MMM Block",
      image: "https://www.myamericannurse.com/wp-content/uploads/2022/07/Your-resume.jpg"
    },
    {
      title: "Intro. to Market & Finance Essentials (Upcoming)",
      date: "September 10, 2025",
      participants: "170+ students",
      location: "SRK/MMM Block",
      image: "https://www.earn2trade.com/blog/wp-content/uploads/2022/05/Trading-Market-Events-768x340.png"
    }
  ];

  return (
    <section id="events" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 parallax-bg opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow-blue">
            Events Gallery
          </h2>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
            Technical & Non - Technical
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We host tech and non-tech sessions — from hackathons to design and career-focused events — helping students grow in every way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="card-3d card-glow bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 text-glow group-hover:text-cyan-400 transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.participants}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;