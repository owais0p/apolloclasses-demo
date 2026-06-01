import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Microscope, Award } from 'lucide-react';

const courses = [
  {
    title: "Class 11",
    subtitle: "Foundation for Excellence",
    icon: <BookOpen size={24} />,
    color: "from-blue-500/10 to-blue-600/5",
    accentColor: "bg-blue-600",
    features: ["Basic to Advanced Chemistry", "Foundation for JEE/NEET", "Regular School Syllabus"]
  },
  {
    title: "Class 12",
    subtitle: "Board & Competitive Edge",
    icon: <Award size={24} />,
    color: "from-purple-500/10 to-purple-600/5",
    accentColor: "bg-purple-600",
    features: ["Board Exam Preparation", "Quick Revision Modules", "Inorganic & Organic focus"]
  },
  {
    title: "JEE Mains/Adv",
    subtitle: "Engineering Aspirants",
    icon: <GraduationCap size={24} />,
    color: "from-orange-500/10 to-orange-600/5",
    accentColor: "bg-orange-600",
    features: ["Advanced Problem Solving", "Previous Year Analytics", "Exclusive Test Series"]
  },
  {
    title: "NEET",
    subtitle: "Medical Aspirants",
    icon: <Microscope size={24} />,
    color: "from-green-500/10 to-green-600/5",
    accentColor: "bg-green-600",
    features: ["NCERT Targeted Revision", "Conceptual Chemistry", "Mock NEET Simulations"]
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-ivory relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -left-20 top-40 w-80 h-80 bg-accent/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-sans uppercase tracking-[0.3em] text-sm mb-4"
            >
              Our Programs
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-primary"
            >
              Tailored Pathways to <span className="italic underline decoration-accent/30 underline-offset-8">Success.</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block pb-2"
          >
            <button className="text-primary font-bold border-b-2 border-accent hover:text-accent smooth-hover">View Full Curriculum</button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden p-8 rounded-3xl bg-white shadow-sm border border-primary/5 bg-gradient-to-br ${course.color}`}
            >
              <div className={`w-12 h-12 rounded-xl ${course.accentColor} text-white flex items-center justify-center mb-6 shadow-lg`}>
                {course.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">{course.title}</h3>
              <p className="text-primary/60 text-sm mb-6 font-sans font-medium uppercase tracking-wider">{course.subtitle}</p>
              
              <ul className="space-y-4 mb-8">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-primary/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl border border-primary/10 font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300">
                Course Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
