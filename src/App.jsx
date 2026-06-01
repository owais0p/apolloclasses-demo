import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Courses from './components/Courses';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ivory text-primary selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <Courses />
        <Results />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
