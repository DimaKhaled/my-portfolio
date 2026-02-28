import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A] via-[#0F172A] to-[#06B6D4] opacity-20" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/30 via-transparent to-[#06B6D4]/30"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Poppins'] text-white mb-6"
          >
            Let's Build Something{' '}
            <span className="text-gradient">Amazing</span> Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#CBD5E1] text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            I'm currently available for internship opportunities and collaborative projects. 
            If you're looking for a dedicated backend developer who cares about clean code 
            and scalable architecture, let's talk!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={handleScroll}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1E3A8A] to-[#06B6D4] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#06B6D4]/30 hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-20 h-20 border border-[#06B6D4]/20 rounded-full -translate-y-1/2 hidden lg:block" />
      <div className="absolute top-1/2 right-10 w-32 h-32 border border-[#1E3A8A]/20 rounded-full -translate-y-1/2 hidden lg:block" />
    </section>
  );
}
