import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, User, Send, CheckCircle2, MessageSquare, ChevronDown, Loader2 } from 'lucide-react';
import { NAV_ITEMS, ROUTES } from '../constants';
import { Button, Section } from './UI';
import { Footer } from './ui/footer-section';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from '../lib/utils';
import { MoleculePattern } from './ui/molecule-pattern';

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link to={ROUTES.HOME} className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922380/Lidopro_Logo_2_ce8lhq.png" 
              alt="LidoPro® Logo" 
              loading="eager" 
              className="h-9 md:h-12 w-auto object-contain" 
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${location.pathname === item.path ? 'text-brand-600' : 'text-slate-600'}`}
              >
                {item.label}
              </Link>
            ))}
            <Button to={ROUTES.PROVIDER} variant="primary" size="sm" className="ml-4">
              Contact
            </Button>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-brand-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-lg font-medium py-2 border-b border-slate-50 ${location.pathname === item.path ? 'text-brand-600' : 'text-slate-600'}`}
            >
              {item.label}
            </Link>
          ))}
          <Button to={ROUTES.PROVIDER} fullWidth className="mt-2">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    console.log('Form Submission:', formData);
    
    // Simulate high-end backend processing
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative background element */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-8 md:p-12 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="py-12 text-center"
            >
              <div className="w-24 h-24 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Message Received</h3>
              <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. One of our clinical specialists will review your inquiry and respond within 24 hours.
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="text-brand-600 font-bold hover:underline underline-offset-4"
              >
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit} 
              className="space-y-8"
            >
              <div className="text-center md:text-left mb-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Connect with LidoPro®</h3>
                <p className="text-slate-500">Clinical support and general inquiries</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <User size={14} /> Full Name
                  </label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white outline-none transition-all duration-300 shadow-sm" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                    <Mail size={14} /> Email Address
                  </label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white outline-none transition-all duration-300 shadow-sm" 
                    placeholder="name@healthcare.com" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  <ChevronDown size={14} /> Subject
                </label>
                <div className="relative">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white outline-none transition-all duration-300 shadow-sm appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Request Samples</option>
                    <option>Clinical Support</option>
                    <option>Product Information</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                  <MessageSquare size={14} /> Detailed Message
                </label>
                <textarea 
                  required 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white outline-none transition-all duration-300 shadow-sm resize-none" 
                  placeholder="How can we assist you today?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className={cn(
                  "group w-full py-5 rounded-2xl font-bold text-white transition-all duration-500 shadow-lg flex items-center justify-center gap-3 overflow-hidden relative",
                  status === 'submitting' ? "bg-brand-400 cursor-not-allowed" : "bg-gradient-to-r from-brand-600 to-brand-500 hover:shadow-brand-500/30 hover:shadow-2xl active:scale-[0.98]"
                )}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send size={20} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export const CTABand: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-center overflow-hidden relative min-h-[500px] flex items-center py-20 md:py-32">
      {/* Background Animated Molecules */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            y: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-24 -left-24 w-[400px] h-[400px] opacity-[0.07] text-white"
        >
          <MoleculePattern color="currentColor" />
        </motion.div>

        <motion.div 
          animate={{ 
            rotate: -360,
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 80, repeat: Infinity, ease: "linear" },
            y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-[0.05] text-white"
        >
          <MoleculePattern color="currentColor" />
        </motion.div>

        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-white pointer-events-none"
        >
          <MoleculePattern color="currentColor" className="opacity-10" />
        </motion.div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white"
        >
          Ready to Experience Effective Relief?
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-brand-100 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90"
        >
          Talk to your healthcare provider about whether LidoPro® is right for you, or contact us for more information.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button 
            to={ROUTES.PROVIDER} 
            variant="white" 
            size="lg" 
            className="px-12 py-5 font-bold text-brand-900 shadow-2xl hover:scale-105 active:scale-95 transition-transform"
          >
            Ask Your Provider
          </Button>
          <Button 
            to={ROUTES.FAQ} 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 px-12 py-5 font-bold hover:scale-105 active:scale-95 transition-transform"
          >
            Read FAQs
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
