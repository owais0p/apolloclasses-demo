import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      
      {/* Subtle Chemical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex gap-1 text-accent">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
            </div>
            <span className="text-ivory/60 text-xs uppercase tracking-[0.3em] font-sans">Kota's Most Trusted Chemistry Institute</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-ivory mb-6 leading-[1.15]"
          >
            Master <span className="text-accent italic">Chemistry</span> <br className="hidden sm:block" />
            For Your Dreams.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-ivory/70 mb-10 max-w-xl font-sans leading-relaxed"
          >
            Empowering aspirants for JEE, NEET, and Board Exams with personalized guidance and Kota's legendary teaching methodology. 
            Join Apollo Classes to ignite your academic journey.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="gold-gradient text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-accent/20 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              Book Free Demo Class <ChevronRight size={20} />
            </button>
            <a 
              href="https://wa.me/911234567890" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle size={20} className="text-green-400" /> WhatsApp Us
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 pt-8 border-t border-white/10 flex gap-12"
          >
            <div>
              <p className="text-accent text-3xl font-serif">15+</p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-sans">Years Experience</p>
            </div>
            <div>
              <p className="text-accent text-3xl font-serif">10k+</p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-sans">Students Taught</p>
            </div>
            <div>
              <p className="text-accent text-3xl font-serif">98%</p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-sans">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image Mockup Area */}
      <div className="hidden lg:block absolute right-[-5%] bottom-0 w-[45%] h-[80%] opacity-40">
        <div className="w-full h-full border-[1px] border-accent/20 rounded-tl-[100px] overflow-hidden">
           {/* This would be a high-quality classroom or topper photo */}
           <div className="w-full h-full bg-gradient-to-br from-accent/5 to-transparent flex items-center justify-center">
             <p className="text-accent/20 font-serif text-4xl transform -rotate-12">Academic Excellence</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
