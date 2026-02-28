import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Layout, 
  Database, 
  Zap 
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'RESTful API Development',
    description: 'Building scalable, well-documented REST APIs with proper HTTP methods, status codes, and JSON responses. Focus on clean endpoints and consistent design.',
    color: 'from-[#1E3A8A] to-[#3B82F6]',
  },
  {
    icon: Layout,
    title: 'Backend System Design',
    description: 'Designing robust backend architectures following clean architecture principles and SOLID patterns for maintainable and testable code.',
    color: 'from-[#06B6D4] to-[#22D3EE]',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Creating efficient database schemas with proper normalization, relationships, and optimized queries for performance and scalability.',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Identifying bottlenecks and optimizing application performance through caching, query optimization, and code refactoring.',
    color: 'from-[#F59E0B] to-[#FBBF24]',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#06B6D4]/5 rounded-full blur-3xl -translate-y-1/2" />

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
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-4">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            How I can help your project succeed with my backend development expertise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 card-hover group text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
