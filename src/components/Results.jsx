import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users2, Award } from 'lucide-react';

const toppers = [
  {
    name: "Aryan Sharma",
    rank: "AIR 45",
    exam: "JEE Advanced",
    year: "2023",
    score: "99.8%",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Sneha Gupta",
    rank: "AIR 128",
    exam: "NEET UG",
    year: "2023",
    score: "710/720",
    color: "from-green-600 to-green-400"
  },
  {
    name: "Rohan Verma",
    rank: "City Topper",
    exam: "CBSE Boards",
    year: "2023",
    score: "98.5%",
    color: "from-orange-600 to-orange-400"
  }
];

const Results = () => {
  return (
    <section id="results" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-sans uppercase tracking-[0.3em] text-sm mb-4"
          >
            A Legacy of Excellence
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-white mb-6"
          >
            Our Hall of <span className="italic text-accent">Fame</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-10 mt-12">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-accent">
                <Trophy size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-serif text-white leading-none">500+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">IIT Selections</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-accent">
                <Users2 size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-serif text-white leading-none">1200+</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Medical Ranks</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-accent">
                <Award size={24} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-serif text-white leading-none">95%</p>
                <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Board Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {toppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-500 overflow-hidden">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-1">{topper.name}</h3>
                    <p className="text-accent text-sm font-sans font-bold uppercase tracking-widest">{topper.exam}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${topper.color}`}>
                    {topper.rank}
                  </div>
                </div>

                <div className="aspect-[4/5] rounded-2xl bg-white/10 mb-8 overflow-hidden flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
                   <p className="text-white/20 font-serif text-xl">Topper Image</p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-1">Score</p>
                    <p className="text-xl font-serif text-white">{topper.score}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-1">Batch</p>
                    <p className="text-xl font-serif text-white">{topper.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
