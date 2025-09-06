import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MSAProgram from './components/MSAProgram';
import ClubMission from './components/ClubMission';
import TechnologyFocus from './components/TechnologyFocus';
import BenefitsGrid from './components/BenefitsGrid';
import ApplicationProcess from './components/ApplicationProcess';
import EventsGallery from './components/EventsGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Update page title
    document.title = 'MSC - NIT Andhra Pradesh';

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <MSAProgram />
      <ClubMission />
      <TechnologyFocus />
      <BenefitsGrid />
      <ApplicationProcess />
      <EventsGallery />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;