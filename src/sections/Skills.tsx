import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Database, 
  Layers, 
  Wrench, 
  Terminal, 
  Brain 
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Backend Development',
    skills: ['C#', 'ASP.NET Core', 'Web API', 'RESTful APIs', 'Entity Framework Core', 'LINQ', 'Dependency Injection'],
    color: 'from-[#1E3A8A] to-[#3B82F6]',
  },
  {
    icon: Database,
    title: 'Database & Storage',
    skills: ['SQL Server', 'Database Design', 'Complex Queries', 'Stored Procedures', 'CRUD Operations', 'Normalization'],
    color: 'from-[#06B6D4] to-[#22D3EE]',
  },
  {
    icon: Layers,
    title: 'Architecture & Patterns',
    skills: ['OOP', 'SOLID Principles', 'Design Patterns', 'Clean Architecture', 'MVC Pattern', 'Layered Architecture'],
    color: 'from-[#8B5CF6] to-[#A78BFA]',
  },
  {
    icon: Wrench,
    title: 'Tools & Environment',
    skills: ['Git', 'GitHub', 'Visual Studio', 'Docker (Basics)', 'VS Code'],
    color: 'from-[#F59E0B] to-[#FBBF24]',
  },
  {
    icon: Terminal,
    title: 'Programming Languages',
    skills: ['C#', 'Java', 'JavaScript (Basic)', 'Python', 'SQL', 'HTML/CSS'],
    color: 'from-[#10B981] to-[#34D399]',
  },
  {
    icon: Brain,
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Time Complexity', 'Space Complexity'],
    color: 'from-[#EC4899] to-[#F472B6]',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1E3A8A]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#06B6D4] text-sm font-medium uppercase tracking-wider mb-4">
            My Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build scalable, high-performance applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 card-hover group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-[#0F172A] text-[#CBD5E1] rounded-lg border border-white/5 hover:border-[#06B6D4]/30 hover:text-[#06B6D4] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
