import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Restaurant Ordering & Billing System',
    description: 'A modular console-based system built using Java and OOP principles. Features dynamic item creation, order processing, automated billing with tax calculation, and receipt generation.',
    image: '/assets/project-1.jpg',
    technologies: ['Java', 'OOP', 'SOLID Principles', 'Design Patterns'],
    github: 'https://github.com/DimaKhaled/Restaurant-Ordering-System',
    featured: true,
  },
  {
    title: 'Hotel Reservation System',
    description: 'A comprehensive Java application for managing hotel bookings with user authentication, room management, and reservation workflows.',
    image: '/assets/project-2.jpg',
    technologies: ['Java', 'OOP', 'File I/O', 'Data Structures'],
    github: 'https://github.com/DimaKhaled/Hotel-Reservation-System',
    featured: false,
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#06B6D4]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl" />

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
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Some of my recent work showcasing my skills in backend development and problem-solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass-card overflow-hidden card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] rounded-full text-xs font-medium text-white">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#06B6D4] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-[#0F172A] text-[#06B6D4] rounded-md border border-[#06B6D4]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#CBD5E1] hover:text-[#06B6D4] transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/DimaKhaled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-white transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
