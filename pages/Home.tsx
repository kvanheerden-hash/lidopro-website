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
import ointmentImg from '../assets/lidoproointment.webp';
import patchImg from '../assets/lidopropatchhero.webp';
import clinicalgradebg from '../assets/clinicalgradebg.webp';

export const Home = () => {
  return (
    <>
      {/* Hero wrapper: gradient extends behind both headline and product cards */}
      <div className="[background:linear-gradient(to_right,#003F51,#006481,#003F51)]">
        <BackgroundPaths
          className="min-h-[45vh] md:min-h-[50vh] pb-10 [background:transparent]"
          title={HOME_CONTENT.hero.headline}
          subtitle="Optimized for multimodal treatment. A safe alternative to opioids featuring anesthetic, analgesic, and anti-inflammatory agents designed to restore function and facilitate return-to-work outcomes."
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold">
              <ShieldCheck size={16} />
              <span>Trusted by Pain Specialists Nationwide</span>
            </div>
          }
        />

        <section className="relative z-20 pb-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Ointment Card */}
              <GlowCard customSize className="h-full bg-white overflow-hidden relative" glowColor="blue">
                <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none -mr-10 -mt-10">
                  <div className="w-full h-full rotate-12">
                    <MoleculePattern color="#0ea5e9" />
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="h-[320px] md:h-[520px] mb-5 overflow-hidden rounded-xl bg-slate-50 relative group border border-slate-200 flex items-center justify-center">
                    <img
                      src={ointmentImg}
                      alt="LidoPro® Ointment"
                      fetchPriority="high"
                      className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">LidoPro® Ointment</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">Multimodal relief with a hands-free applicator. Blocks pain at the source while reducing inflammation locally.</p>
                  <div className="mt-auto">
                    <Link to={ROUTES.OINTMENT} className="group/btn inline-flex items-center font-bold hover:opacity-80" style={{ color: '#006481' }}>
                      View Specs <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </GlowCard>

              {/* Patch Card */}
              <GlowCard customSize className="h-full bg-white overflow-hidden relative" glowColor="blue">
                <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.04] pointer-events-none -ml-16 -mb-16">
                  <div className="w-full h-full -rotate-12">
                    <MoleculePattern color="#0ea5e9" />
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="h-[320px] md:h-[520px] mb-5 overflow-hidden rounded-xl bg-slate-50 relative group border border-slate-200 flex items-center justify-center">
                    <img
                      src={patchImg}
                      alt="LidoPro® Patch"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">LidoPro® Patch</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">Hydrogel patch with dual-action ingredients to numb pain and cool inflammation for up to 12 hours.</p>
                  <div className="mt-auto">
                    <Link to={ROUTES.PATCH} className="group/btn inline-flex items-center font-bold hover:opacity-80" style={{ color: '#006481' }}>
                      View Specs <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>
      </div>

      <Section id="benefits" className="relative overflow-hidden">
        <div className="text-center mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight">Clinical Grade Excellence</h2>
          <p className="text-slate-600 text-lg">Non-opioid pain relief engineered for functional recovery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {[
            { title: 'Deep Penetrating', description: 'Clinical formulation drives active ingredients through dermal layers to target the underlying source of pain.', icon: Layers },
            { title: 'Long-Lasting', description: 'Provides sustained, continuous symptom control through a full workday or physical therapy session.', icon: Clock },
            { title: 'Soothing', description: 'Delivers an immediate calming effect upon application to ease local tension and improve consistency with therapy.', icon: Activity },
          ].map((benefit, idx) => (
            <GlareCard key={idx} className="flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm relative overflow-hidden group" style={{ backgroundColor: '#001318' }}>
              {/* Top-left molecule image */}
              <div
                className="absolute -top-6 -left-6 w-48 h-48 pointer-events-none opacity-70"
                style={{
                  backgroundImage: `url(${clinicalgradebg})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: 'top left',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              {/* Bottom-right molecule image */}
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 pointer-events-none opacity-70"
                style={{
                  backgroundImage: `url(${clinicalgradebg})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: 'bottom right',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center mb-6 border border-brand-500/20 relative z-10" style={{ color: '#001318' }}><benefit.icon size={32} /></div>
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
