import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Lightbulb } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing readable, maintainable, and scalable code following best practices.',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Creating efficient database schemas with proper normalization and optimization.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Approaching challenges with analytical thinking and creative solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Title */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#06B6D4] text-sm font-medium uppercase tracking-wider mb-4">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-6">
              Passionate About Building{' '}
              <span className="text-gradient">Scalable Systems</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-full" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#CBD5E1] text-lg leading-relaxed">
              I'm a passionate <span className="text-white font-medium">.NET Backend Developer</span> with a strong 
              foundation in Computer Science. I specialize in building scalable, 
              maintainable web applications using ASP.NET Core, C#, and SQL Server.
            </p>
            
            <p className="text-[#CBD5E1] text-lg leading-relaxed">
              My approach combines <span className="text-white font-medium">clean architecture principles</span> with 
              practical problem-solving. I believe in writing code that not only works but is also readable, 
              testable, and scalable. Currently, I'm expanding my expertise through the{' '}
              <span className="text-[#06B6D4]">Digital Egypt Pioneers Initiative (DEPI)</span>, where I'm 
              developing production-ready backend systems.
            </p>
            
            <p className="text-[#CBD5E1] text-lg leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
              or deepening my understanding of software design patterns and best practices.
            </p>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#06B6D4] flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
