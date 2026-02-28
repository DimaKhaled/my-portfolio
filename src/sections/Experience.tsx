import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    icon: Briefcase,
    title: 'Full Stack .NET Web Developer Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'Nov 2025 - Present',
    description: 'Developing backend-centric web applications using C#, ASP.NET Core MVC, and Web API. Implementing server-side logic following clean architecture and MVC principles. Designing and consuming RESTful APIs with attention to scalability and maintainability.',
    skills: ['ASP.NET Core', 'Web API', 'MVC', 'SQL Server', 'Git'],
  },
  {
    type: 'work',
    icon: GraduationCap,
    title: 'Artificial Intelligence Trainee',
    organization: 'Information Technology Institute (ITI)',
    period: 'July 2025 - Aug 2025',
    description: 'Completed intensive training in AI fundamentals. Applied Python for data manipulation and analysis. Built strong foundation in mathematical concepts including linear algebra and probability.',
    skills: ['Python', 'AI Fundamentals', 'Data Analysis', 'Machine Learning Basics'],
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1E3A8A]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#06B6D4] text-sm font-medium uppercase tracking-wider mb-4">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my skills
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E3A8A] via-[#06B6D4] to-[#1E3A8A] md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#06B6D4] rounded-full border-4 border-[#0F172A] md:-translate-x-1/2 z-10 shadow-lg shadow-[#06B6D4]/30" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="glass-card p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                        <exp.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="text-[#06B6D4] text-sm">{exp.organization}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-[#1E3A8A]/30 text-[#06B6D4] text-xs font-medium rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-xs bg-[#0F172A] text-[#CBD5E1] rounded border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 inline-block max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[#06B6D4]" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            <p className="text-white font-medium mb-2">
              Bachelor of Computer Science
            </p>
            <p className="text-[#94A3B8] mb-2">
              Cairo University - Faculty of Computers and Artificial Intelligence
            </p>
            <p className="text-[#06B6D4] text-sm">2023 - Present</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
