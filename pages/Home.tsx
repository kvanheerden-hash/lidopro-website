import React from 'react';
import { Section } from '../components/UI';
import { CTABand, ContactForm } from '../components/Layout';
import { HOME_CONTENT, ROUTES } from '../constants';
import { Layers, Clock, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '../components/ui/background-paths';
import { GlowCard } from '../components/ui/spotlight-card';
import { GlareCard } from '../components/ui/glare-card';
import { MoleculePattern } from '../components/ui/molecule-pattern';
import { Testimonials } from '../components/ui/testimonials-columns';

/**
 * Optimizes Cloudinary URLs by injecting transformation parameters for better performance and quality.
 */
const optimizeImage = (url: string) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  return url.replace('/upload/', '/upload/f_auto,q_auto,w_1200,c_limit/');
};

export const Home = () => {
  return (
    <>
      <BackgroundPaths 
        className="min-h-[75vh] md:min-h-[85vh] pb-32"
        title={HOME_CONTENT.hero.headline}
        subtitle="Optimized for multimodal treatment. A safe alternative to opioids featuring anesthetic, analgesic, and anti-inflammatory agents designed to restore function and facilitate return-to-work outcomes."
        badge={
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
            <ShieldCheck size={16} />
            <span>Trusted by Pain Specialists Nationwide</span>
          </div>
        }
      />

      <section className="-mt-32 relative z-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Ointment Card */}
            <GlowCard customSize className="h-full bg-white/80 overflow-hidden relative" glowColor="blue">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none -mr-10 -mt-10">
                <div className="w-full h-full rotate-12">
                   <MoleculePattern color="#0ea5e9" />
                </div>
              </div>
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-slate-50 relative group border border-slate-200 p-10 flex items-center justify-center">
                  <img 
                    src={optimizeImage("https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922398/LidoPro_D_01_zda9ir.jpg")} 
                    alt="LidoPro® Ointment" 
                    className="max-w-full max-h-full object-contain rounded-xl transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 border border-slate-200 shadow-sm">Targeted Ointment</div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">LidoPro® Ointment</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Multimodal relief with a hands-free applicator. Blocks pain at the source while reducing inflammation locally.</p>
                <div className="mt-auto">
                  <Link to={ROUTES.OINTMENT} className="group/btn inline-flex items-center text-brand-600 font-bold hover:text-brand-800">
                    View Specs <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </GlowCard>

            {/* Patch Card */}
            <GlowCard customSize className="h-full bg-white/80 overflow-hidden relative" glowColor="blue">
              <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04] pointer-events-none -ml-16 -mb-16">
                <div className="w-full h-full -rotate-12">
                  <MoleculePattern color="#0ea5e9" />
                </div>
              </div>
              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="aspect-[4/5] mb-6 overflow-hidden rounded-xl bg-slate-50 relative group border border-slate-200 p-10 flex items-center justify-center">
                  <img 
                    src={optimizeImage("https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922473/LidoPro_Patch_L_01_h26q6f.png")} 
                    alt="LidoPro Patch" 
                    className="max-w-full max-h-full object-contain rounded-xl transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 border border-slate-200 shadow-sm">medicated Patch</div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">LidoPro® Patch</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Hydrogel patch with dual-action ingredients to numb pain and cool inflammation for up to 12 hours.</p>
                <div className="mt-auto">
                  <Link to={ROUTES.PATCH} className="group/btn inline-flex items-center text-brand-600 font-bold hover:text-brand-800">
                    View Specs <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      <Section id="benefits" className="relative overflow-hidden">
        <div className="absolute bottom-[-40px] right-[-40px] w-80 h-80 opacity-[0.08] pointer-events-none rotate-12">
          <MoleculePattern color="#0c4a6e" />
        </div>
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Clinical Grade Excellence</h2>
          <p className="text-slate-600 text-lg">Non-opioid pain relief engineered for functional recovery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {[
            { title: 'Deep Penetrating', description: 'Clinical formulation drives active ingredients through dermal layers to target the underlying source of pain.', icon: Layers },
            { title: 'Long-Lasting', description: 'Provides sustained, continuous symptom control through a full workday or physical therapy session.', icon: Clock },
            { title: 'Soothing', description: 'Delivers an immediate calming effect upon application to ease local tension and improve consistency with therapy.', icon: Activity },
          ].map((benefit, idx) => (
            <GlareCard key={idx} className="flex flex-col items-center justify-center p-8 text-center bg-slate-950/90 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none"><MoleculePattern color="#0ea5e9" /></div>
              <div className="w-16 h-16 bg-brand-500/10 text-brand-400 rounded-full flex items-center justify-center mb-6 border border-brand-500/20 relative z-10"><benefit.icon size={32} /></div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight relative z-10">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base relative z-10">{benefit.description}</p>
              <div className="mt-8 w-12 h-1 bg-brand-500 rounded-full opacity-50 relative z-10" />
            </GlareCard>
          ))}
        </div>
      </Section>

      <Testimonials />

      <CTABand />
      <Section id="contact"><div className="max-w-3xl mx-auto"><ContactForm /></div></Section>
    </>
  );
};
