import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, ChevronRight } from 'lucide-react';

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
                   <WhatsAppIcon size={20} /> WhatsApp Now
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
        <WhatsAppIcon size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Questions? Chat with us
        </span>
      </a>
    </section>
  );
};

export default ContactCTA;
