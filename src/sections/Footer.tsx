import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/DimaKhaled', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/dima-khaled', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dimakhaledallam@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0F172A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-bold font-['Poppins'] text-white mb-4 block">
              Dima<span className="text-[#06B6D4]">.</span>
            </a>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
              .NET Backend Developer specializing in building scalable, high-performance 
              web applications with clean architecture.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#CBD5E1] hover:text-[#06B6D4] hover:bg-[#1E3A8A]/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:dimakhaledallam@gmail.com"
                  className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  dimakhaledallam@gmail.com
                </a>
              </li>
              <li className="text-[#94A3B8] text-sm">
                Cairo, Egypt
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-[#64748B] text-sm flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Dima Khaled. All rights reserved. Built with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and clean code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
