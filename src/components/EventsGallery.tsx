import React, { useEffect, useState } from "react";
import { Calendar, MapPin, BadgeCheck, Speech } from "lucide-react";

interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
  type: string;
  speaker: string;
  register?: string;
  status: "upcoming" | "past";
}

const EventsGallery: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
  const fetchData = () => {
    fetch("https://opensheet.elk.sh/1WXxPExRsmRUzSF8JMwu21JZ_3mhriNRICSP9ROdvQio/events")
      .then((res) => res.json())
      .then((data: Event[]) => {
        const upcoming = data
          .filter(e => e.status.toLowerCase() === "upcoming")
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        const past = data
          .filter(e => e.status.toLowerCase() === "past")
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        setEvents([...upcoming, ...past]);
      })
      .catch(console.error);
  };
  fetchData();
  const interval = setInterval(fetchData, 2000);
  return () => clearInterval(interval);
}, []);


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
            We host tech and non‑tech sessions — from hackathons to design and
            career‑focused events — helping students grow in every way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, i) => (
            <div
              key={i}
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
  {event.title} <span className="text-sm font-medium text-cyan-300">({event.status})</span>
</h3>

                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BadgeCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Speech className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{event.speaker}</span>
                  </div>
                  {event.register && (
                    <div className="pt-2">
                      <a
                        href={event.register}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn-3d bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                          Register Now
                        </button>
                      </a>
                    </div>
                  )}
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
