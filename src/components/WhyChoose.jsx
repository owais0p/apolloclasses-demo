import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-accent" size={32} />,
    title: "Expert Faculty",
    description: "Learn from the masters of Chemistry with over 15 years of experience in Kota's competitive environment."
  },
  {
    icon: <Target className="text-accent" size={32} />,
    title: "Proven Results",
    description: "Consistent track record of producing top rankers in JEE, NEET, and outstanding Board results every year."
  },
  {
    icon: <ShieldCheck className="text-accent" size={32} />,
    title: "Personal Attention",
    description: "Small batch sizes ensure every student gets individual doubt-solving and personalized academic tracking."
  },
  {
    icon: <BarChart3 className="text-accent" size={32} />,
    title: "Regular Tests",
    description: "Scientifically designed test series to mirror JEE/NEET patterns, followed by in-depth performance analysis."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-sans uppercase tracking-[0.3em] text-sm mb-4"
          >
            The Apollo Advantage
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-primary"
          >
            Why Choose <span className="italic">Apollo Classes?</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-primary/5 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 bg-ivory/30"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-primary/60 font-sans leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
