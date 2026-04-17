import React from 'react';
import { Section, Button } from '../components/UI';
import { CTABand } from '../components/Layout';
import { CheckCircle2, Shield, Droplets, Zap, Info, ArrowRight, Layers, Clock, ThermometerSnowflake, Activity } from 'lucide-react';
import { ROUTES } from '../constants';
import { Link } from 'react-router-dom';
import { MoleculePattern } from '../components/ui/molecule-pattern';

interface ProductPageProps {
  type: 'ointment' | 'patch';
}

/**
 * Optimizes Cloudinary URLs by injecting transformation parameters for better performance and quality.
 * @param url The original Cloudinary image URL
 * @returns The optimized URL with f_auto, q_auto, w_1200, and c_limit
 */
const optimizeImage = (url: string) => {
  if (!url || !url.includes('cloudinary.com')) return url;
  // Injects transformations after '/upload/'
  return url.replace('/upload/', '/upload/f_auto,q_auto,w_1200,c_limit/');
};

export const ProductPage: React.FC<ProductPageProps> = ({ type }) => {
  const isOintment = type === 'ointment';

  const productData = {
    ointment: {
      title: "LidoPro® Ointment",
      subtitle: "A Unique Combination of Anesthetic, Analgesic, and Anti-Inflammatory Ingredients",
      heroImg: "https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922430/LidoPro_J_01_toevzq.jpg",
      usageImg: "https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922398/LidoPro_D_01_zda9ir.jpg",
      description: "Backed by over 12 years of reliability, LidoPro® Ointment is a staple in pain relief therapy, uniquely combining four key pharmaceutical ingredients. Designed for deep localized treatment, our hands-free applicator helps to deliver clinical relief without the mess or systemic risks of oral opioids.",
      benefits: [
        "Unique 4-Ingredient Multi-Action Formula",
        "Hands-free applicator for targeted delivery",
        "Deeply penetrating clinical formulation",
        "Non-addictive alternative to oral narcotics"
      ],
      features: [
        { title: "Precision Applicator", desc: "Delivers consistent results directly to the site of pain without manual contact.", icon: Shield },
        { title: "Rapid Absorption", desc: "Clinical-grade formulation enables ingredients to penetrate at the deepest levels.", icon: Droplets },
        { title: "Clinical Integrity", desc: "Manufactured in FDA-compliant cGMP facilities and stored in temperature-controlled warehouses.", icon: ThermometerSnowflake },
      ],
      ingredients: [
        { name: "Lidocaine 4%", type: "External Anesthetic", desc: "Blocks pain signals at the nerve level for immediate numbing.", color: "bg-brand-600" },
        { name: "Capsaicin 0.0325%", type: "External Analgesic", desc: "Desensitizes sensory neurons to manage chronic and neuropathic pain.", color: "bg-red-500" },
        { name: "Menthol 10%", type: "External Analgesic", desc: "Provides cooling relief and activates TRPM8 receptors for fast comfort.", color: "bg-accent-500" },
        { name: "Methyl Salicylate 27.5%", type: "External Analgesic", desc: "Topical anti-inflammatory that targets tissue swelling and pain.", color: "bg-brand-900" }
      ]
    },
    patch: {
      title: "LidoPro® Patch",
      subtitle: "Proven Across the Nation with over 8 Million Patches Dispensed",
      heroImg: "https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922473/LidoPro_Patch_L_01_h26q6f.png",
      usageImg: "https://res.cloudinary.com/dwt8avwjv/image/upload/v1766067338/Combination_06_mtnebl.jpg",
      description: "LidoPro® Patch has been a trusted pain relief option for more than 12 years. Featuring dual active ingredients and Hydrogel distributive technology, it targets persistent pain for up to 12 hours with consistent, sustained delivery.",
      benefits: [
        "Trusted by physicians for over 12 years",
        "Adhesive Hydrogel for sustained release",
        "12-hour therapeutic delivery window",
        "Non-addictive alternative to oral narcotics"
      ],
      features: [
        { title: "Hydrogel Technology", desc: "Ensures ingredient stability and consistent medicinal distribution over time.", icon: Clock },
        { title: "Clinical Formulation", desc: "Enable deep and rapid absorption into muscles, tendons and joints.", icon: Droplets },
        { title: "Secure Movement", desc: "Engineered for superior adhesion to move with you.", icon: Shield },
      ],
      ingredients: [
        { name: "Lidocaine 4%", type: "External Anesthetic", desc: "Numbs acute pain signals locally to provide comfort.", color: "bg-brand-600" },
        { name: "Menthol 1%", type: "External Analgesic", desc: "Immediate cooling sensation to help calm the irritated area.", color: "bg-accent-500" },
      ]
    }
  };

  const data = isOintment ? productData.ointment : productData.patch;

  return (
    <>
      <section className="bg-slate-900 text-white pt-24 pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-500/10 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] opacity-[0.03] pointer-events-none">
          <MoleculePattern color="#0ea5e9" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-600/20 text-brand-400 border border-brand-500/30 rounded-full text-xs font-bold tracking-wider mb-6 uppercase">
                {isOintment ? 'Multimodal Ointment' : 'Clinical Grade Patch'}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-blur-reveal">{data.title}</h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-xl animate-blur-reveal [animation-delay:200ms] reveal-hidden">
                {data.description}
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-4 mb-10 animate-blur-reveal [animation-delay:400ms] reveal-hidden">
                {data.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-200 text-sm md:text-base font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 animate-blur-reveal [animation-delay:600ms] reveal-hidden">
                <Button to={ROUTES.PROVIDER} size="lg" className="px-10">Ask Your Provider</Button>
                <a href="#details" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-medium">
                  Technical Specs
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center animate-blur-reveal">
               <div className="relative group max-w-md w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-accent-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                    <img src={optimizeImage(data.heroImg)} alt={data.title} className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="details" className="scroll-mt-20 relative overflow-hidden">
        <div className="absolute top-20 left-[-60px] w-64 h-64 opacity-[0.04] pointer-events-none rotate-45">
          <MoleculePattern color="#0ea5e9" />
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Precision Engineered Relief</h2>
          <p className="text-slate-600 text-lg">LidoPro® is manufactured to the highest quality standards in fully licensed, FDA-compliant facilities to ensure potency and compliance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {data.features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 group-hover:scale-110 transition-transform duration-500">
                <MoleculePattern color="#0284c7" />
              </div>
              <div className="w-14 h-14 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-6 relative z-10">
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="gray" className="relative overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 opacity-[0.06] pointer-events-none rotate-12">
          <MoleculePattern color="#075985" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                {isOintment ? "Advanced 4-Component Clinical Formula" : "Triple-Action Multimodal Formula"}
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                {isOintment 
                  ? "No other ointment on the market combines Capsaicin, Lidocaine, Menthol, and Methyl Salicylate. This unique formulation treats both pain and inflammation at the deepest level." 
                  : "LidoPro® addresses pain through distinct pharmacological pathways, combining analgesic, anesthetic, and anti-inflammatory components for optimized localized relief."}
              </p>
              <div className="space-y-4">
                {data.ingredients.map((ing) => (
                  <div key={ing.name} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 group hover:border-brand-300 transition-colors">
                    <div className={`w-1 h-auto ${ing.color} rounded-full`}></div>
                    <div>
                      <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        {ing.name} <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{ing.type}</span>
                      </h4>
                      <p className="text-sm text-slate-600 mt-1">{ing.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-xl border border-slate-200 relative group overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] group-hover:scale-105 transition-transform duration-1000">
                <MoleculePattern color="#075985" />
              </div>
              <div className="bg-slate-50 rounded-xl p-10 flex flex-col items-center justify-center text-center aspect-square relative z-10">
                 <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brand-200 blur-3xl rounded-full opacity-40 scale-150"></div>
                    <Activity size={56} className="text-brand-600 relative z-10" />
                 </div>
                 <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Superior Patient Outcomes</h4>
                 <p className="text-slate-600 leading-relaxed text-lg">
                   Physicians trust LidoPro® because it offers the strongest ingredient concentration available. Experience the difference of a formulation engineered for the active patient.
                 </p>
                 <Link to={ROUTES.PROVIDER} className="mt-8 text-brand-600 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
                   Explore Provider Resources <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden">
        <div className="absolute bottom-[-20px] left-[-30px] w-48 h-48 opacity-[0.05] pointer-events-none -rotate-45">
          <MoleculePattern color="#0ea5e9" />
        </div>
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div className="relative h-full">
             <img 
               src={optimizeImage(data.usageImg)} 
               alt="Application Guide" 
               className="rounded-xl shadow-lg w-full h-full relative z-10 border border-slate-100 object-cover" 
             />
             <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10"><MoleculePattern color="#0ea5e9" /></div>
             <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-[220px] border border-slate-100 hidden sm:block z-20">
                <p className="text-xs font-bold text-brand-600 uppercase mb-2 tracking-widest">Clinical Standard</p>
                <p className="text-sm text-slate-800 leading-relaxed">For optimal results, maintain consistent use for one to four weeks as directed by your physician.</p>
             </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Usage & Application Standards</h2>
            <div className="space-y-8">
              {[
                { step: "1", title: "Site Preparation", desc: "Ensure the skin is clean and dry. Avoid oily skin or pre-application of other lotions to maximize absorption." },
                { step: "2", title: "Directed Application", desc: isOintment ? "Utilize the hands-free applicator to massage the ointment into the muscle or joint area until absorbed." : "Apply the Hydrogel patch directly to the pain center. Add the optional adhesive for movement areas like the lower back or knees." },
                { step: "3", title: "Daily Routine", desc: "Return to your routine faster without the productivity declines associated with opiate therapies. Do not exceed 4 applications daily." }
              ].map((s) => (
                <div key={s.step} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold shadow-md">{s.step}</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-brand-50 rounded-xl border border-brand-100 flex items-start gap-4">
               <Info className="text-brand-600 flex-shrink-0 mt-1" size={20} />
               <p className="text-sm text-brand-800 leading-relaxed">
                 <strong>Safe Alternative:</strong> LidoPro® is a non-opiate, non-addictive therapy allowing for high-performance recovery without narcotic risks.
               </p>
            </div>
          </div>
        </div>
      </Section>

      <CTABand />
    </>
  );
};
