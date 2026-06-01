import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, ChevronRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-24 bg-ivory overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Left Side: Info */}
          <div className="lg:w-1/2 p-12 md:p-16 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Start Your <span className="text-accent italic">Success</span> Story Today.
            </h2>
            <p className="text-white/60 font-sans text-lg mb-12">
              Have questions? Our academic counselors are here to help you choose the right path for your competitive journey.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call for Enquiry</p>
                  <p className="text-xl text-white font-serif">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Our Center</p>
                  <p className="text-xl text-white font-serif">Education Hub, Rajeev Gandhi Nagar, Kota</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl text-white font-serif">info@apollokota.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Visual/Action */}
          <div className="lg:w-1/2 bg-accent p-12 md:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #0B192C 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
             
             <motion.div
               whileHover={{ scale: 1.05 }}
               className="relative z-10"
             >
               <h3 className="text-primary text-3xl font-serif font-bold mb-6">Want a Trial Class?</h3>
               <p className="text-primary/70 mb-10 font-sans font-medium">Experience the teaching methodology of Kota's best faculty for free.</p>
               
               <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
                 <a 
                   href="https://wa.me/911234567890" 
                   className="bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300"
                 >
                   <MessageCircle size={20} /> WhatsApp Now
                 </a>
                 <a 
                   href="tel:+911234567890" 
                   className="bg-white/20 backdrop-blur-md border border-primary/10 text-primary py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/30 transition-all duration-300"
                 >
                   <Phone size={20} /> Request Call Back
                 </a>
               </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[99999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Questions? Chat with us
        </span>
      </a>
    </section>
  );
};

export default ContactCTA;
