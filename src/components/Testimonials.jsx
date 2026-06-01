import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Alok Verma",
    role: "Parent of Aryan (AIR 45)",
    text: "Apollo Classes provides the kind of focused environment every aspirant needs. The Chemistry faculty is unparalleled in their depth of knowledge and teaching style.",
    rating: 5
  },
  {
    name: "Priya Singh",
    role: "MBBS Student, AIIMS",
    text: "The conceptual clarity I gained at Apollo for NEET Chemistry was the turning point in my preparation. Highly recommended for medical aspirants.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "IIT Delhi Alumnus",
    text: "Even years later, I still remember the organic chemistry shortcuts taught at Apollo. It wasn't just about formulas, but understanding the logic.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-sans uppercase tracking-[0.3em] text-sm mb-4"
          >
            Voice of our Students
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary"
          >
            What our <span className="italic">Community Says</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-ivory/50 border border-primary/5 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-accent/20 mb-6" size={48} />
                <p className="text-primary/70 font-sans italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              <div>
                <div className="flex gap-1 text-accent mb-4">
                   {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h4 className="text-lg font-serif font-bold text-primary">{t.name}</h4>
                <p className="text-primary/40 text-sm font-sans">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
