import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle, Star } from 'lucide-react';
import Counter from './Counter';

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
              <WhatsAppIcon size={20} className="text-[#25D366]" /> WhatsApp Us
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
              <p className="text-accent text-3xl font-serif">
                <Counter value={15} suffix="+" />
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-sans">Years Experience</p>
            </div>
            <div>
              <p className="text-accent text-3xl font-serif">
                <Counter value={10} suffix="k+" />
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-sans">Students Taught</p>
            </div>
            <div>
              <p className="text-accent text-3xl font-serif">
                <Counter value={98} suffix="%" />
              </p>
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
