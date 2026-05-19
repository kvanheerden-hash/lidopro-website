import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, ROUTES } from '../constants';
import { Button, Section } from './UI';
import { Footer } from './ui/footer-section';
import { motion, Variants } from 'framer-motion';
import { cn } from '../lib/utils';
import { MoleculePattern } from './ui/molecule-pattern';
import ctaSectionBg from '../assets/ctasectionbg.webp';

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
  const navigate = useNavigate();

  const handleContactClick = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(ROUTES.HOME);
      setTimeout(() => {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      {/* Skip to main content — visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-white focus:font-semibold focus:text-sm"
        style={{ backgroundColor: '#006481' }}
      >
        Skip to main content
      </a>
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
            <Button onClick={handleContactClick} variant="primary" size="sm" className="ml-4 bg-gradient-to-br from-[#006481] to-[#00151B] hover:from-[#005570] hover:to-[#001018]">
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
          <Button onClick={handleContactClick} fullWidth className="mt-2 bg-gradient-to-br from-[#006481] to-[#00151B] hover:from-[#005570] hover:to-[#001018]">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const ContactForm = ({ showHeader = true }: { showHeader?: boolean }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="contact-form" className="w-full">
      {showHeader && (
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Connect with the LidoPro Team</h3>
          <p className="text-slate-500">Clinical support and general inquiries</p>
        </div>
      )}
      <div style={{ minHeight: '637px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/EmrMl93rniKSMK7dz5UH"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-EmrMl93rniKSMK7dz5UH"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="LidoPro Form"
        data-height="637"
        data-layout-iframe-id="inline-EmrMl93rniKSMK7dz5UH"
        data-form-id="EmrMl93rniKSMK7dz5UH"
        title="LidoPro Form"
      />
      </div>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-grow">
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
    <section
      className="w-full text-center overflow-hidden relative min-h-[500px] flex items-center py-20 md:py-32"
      style={{ backgroundImage: `url(${ctaSectionBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
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
          className="absolute -top-24 -left-24 w-[400px] h-[400px] opacity-40"
        >
          <MoleculePattern color="#296076" />
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
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-40"
        >
          <MoleculePattern color="#296076" />
        </motion.div>

        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.45, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        >
          <MoleculePattern color="#296076" />
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
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white"
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
            className="px-12 py-5 font-bold shadow-2xl hover:scale-105 active:scale-95 transition-transform hover:opacity-90"
            style={{ backgroundColor: '#006481', color: '#ffffff' }}
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
