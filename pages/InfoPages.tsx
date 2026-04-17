import React, { useState } from 'react';
import { Section, Button } from '../components/UI';
import { CTABand, ContactForm } from '../components/Layout';
import { ROUTES, SAFETY_WARNINGS } from '../constants';
import { FileText, Download, Printer, AlertTriangle, CheckCircle2, MessageCircle, ClipboardList, Stethoscope, Activity, Zap, ShieldAlert, Droplets, Bone, ActivitySquare } from 'lucide-react';
import { GlowCard } from '../components/ui/spotlight-card';
import { MoleculePattern } from '../components/ui/molecule-pattern';
import { FAQ } from '../components/ui/faq-tabs';
import CardFlip from '../components/ui/flip-card';

export const FAQPage = () => {
  const categories = {
    "patients": "For Patients",
    "physicians": "For Physicians", 
    "pharmacists": "For Pharmacists",
    "wholesalers": "For Wholesalers"
  };

  const faqData = {
    "patients": [
      {
        question: "What conditions does LidoPro® help relieve?",
        answer: "LidoPro® helps relieve most symptoms of pain, including neck, back, muscle, nerve, joint, and ligament pain. It is also effective for conditions such as arthritis, sciatica, tendonitis, fibromyalgia, bursitis, and complex regional pain syndrome (CRPS)."
      },
      {
        question: "Can I use LidoPro® on children?",
        answer: "No. Do not use LidoPro® on children under 18 years of age."
      },
      {
        question: "Does LidoPro® have any side effects?",
        answer: "LidoPro® typically does not have harmful side effects. However, in rare cases or if overused, it may cause skin irritation or rash. We recommend testing a tiny portion on your arm for sensitivity prior to regular use."
      },
      {
        question: "Are there specific precautions I should take before using it?",
        answer: "Yes. Do not use on open wounds, cuts, or damaged skin. Avoid using with a heating pad or bandage. Do not use while in a hot tub or sauna. If you are pregnant, breastfeeding, or allergic to aspirin, sulfa, or PABA, ask your doctor before use."
      },
      {
        question: "Can I use LidoPro® while taking other medications?",
        answer: "You should not discontinue any oral medication prescribed by your physician. However, do not use LidoPro® if you are taking anticoagulant medications such as Warfarin or Coumadin. Always follow your physician's dosing instructions when combining treatments."
      },
      {
        question: "What should I do if my pain gets worse?",
        answer: "If your condition worsens or symptoms persist for more than 7 days, discontinue use immediately and discuss appropriate next steps with your physician."
      }
    ],
    "physicians": [
      {
        question: "What are the primary clinical indications for LidoPro®?",
        answer: "LidoPro® is indicated for mild to moderate, acute or chronic pain. It effectively helps reduce muscle pain (myalgias, strains), nerve pain (neuropathies, sciatica, post-herpetic neuralgia), joint pain (osteoarthritis, RA), and spinal/neck pain associated with conditions like degenerative disc disease and facet joint arthritis."
      },
      {
        question: "What are the key contraindications?",
        answer: "LidoPro® is contraindicated for patients taking anticoagulant medications (Warfarin, Coumadin). It should not be used on patients with known allergies to PABA, aspirin products, or sulfa. It is not approved for use in pediatric patients under 18."
      },
      {
        question: "How does LidoPro® fit into a multimodal pain management strategy?",
        answer: "LidoPro® offers a topical alternative that targets local inflammation and pain receptors without the systemic risks often associated with oral opioids or NSAIDs. It is suitable for treating complex conditions like CRPS/RSD and neuropathies where targeted local relief is beneficial."
      },
      {
        question: "Is LidoPro® available over the counter?",
        answer: "LidoPro® Ointment is available by prescription. Patients can obtain it through your office or via mail-order pharmacy services."
      }
    ],
    "pharmacists": [
      {
        question: "What are the critical counseling points for patients dispensing LidoPro®?",
        answer: "Advise patients to wash hands immediately after use (even if using the applicator). Warn against contact with eyes or mucous membranes. Remind them not to apply heat (heating pads, hot tubs) to the application site, as this can increase absorption rates unpredictably."
      },
      {
        question: "Are there significant drug interactions to screen for?",
        answer: "Yes. Screen for concurrent use of anticoagulants like Warfarin or Coumadin, as this is a strict contraindication. Also screen for salicylate allergies (aspirin) and sulfa allergies."
      },
      {
        question: "What is the recommended duration of therapy?",
        answer: "For best results, patients are often advised to continue use for one to four weeks. If symptoms persist beyond 7 days of treatment without improvement, or if the condition worsens, they should consult their prescriber."
      }
    ],
    "wholesalers": [
      {
        question: "What are the handling and safety requirements for LidoPro® inventory?",
        answer: "Ensure safety seals are intact upon receipt and distribution. Do not distribute units where the safety seal appears tampered with."
      },
      {
        question: "What are the storage recommendations?",
        answer: "Store at room temperature. Avoid excessive heat or freezing, as this may alter the viscosity or stability of the ointment base."
      },
      {
        question: "What safety information must be conveyed?",
        answer: "All distributed units must convey standard warnings: 'For external use only,' 'Keep away from children and pets,' and instructions to contact poison control (1-800-222-1222) immediately in case of accidental ingestion."
      }
    ]
  };

  return (
    <>
      <Section bg="gray" className="text-center pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-10 right-[-40px] w-64 h-64 opacity-[0.05] pointer-events-none rotate-45">
          <MoleculePattern color="#0c4a6e" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Clinical Resources</h1>
          <p className="text-xl text-slate-600 leading-relaxed">Expert information tailored for patients, healthcare providers, and distribution partners.</p>
        </div>
      </Section>

      <div className="bg-slate-50 pb-20">
        <FAQ 
          title="Clinical Support & FAQ"
          subtitle="Support for every stakeholder"
          categories={categories}
          faqData={faqData}
          className="bg-transparent"
        />
        
        <div className="text-center mt-8 bg-white p-12 rounded-[3rem] max-w-4xl mx-auto border border-slate-100 shadow-xl relative z-10 overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
             <MoleculePattern color="#0ea5e9" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Still have questions?</h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto text-lg leading-relaxed">Our clinical specialists are available to provide technical support and detailed documentation for your practice or facility.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to={ROUTES.PROVIDER} size="lg" className="px-10">Ask Your Provider</Button>
            <Button to="#contact-form" variant="outline" size="lg" className="px-10 bg-white shadow-sm">Contact Us</Button>
          </div>
        </div>
      </div>
      
      <CTABand />
    </>
  );
};

export const TreatsPage = () => {
  const conditionCategories = [
    {
      title: "Muscle Pain",
      icon: <ActivitySquare size={28} />,
      items: ["Myalgias", "Muscle strains or sprains", "Pulled muscles", "Muscle stiffness", "Muscle soreness", "Fibromyalgia", "Myofacial pain syndrome", "Exercise-induced myalgias", "Delayed onset myalgias", "Piriformis syndrome"],
      color: "#0ea5e9",
      description: "Clinically formulated to penetrate deep into muscle tissue to relieve soreness, chronic stiffness, and strains from activity or injury."
    },
    {
      title: "Nerve Pain",
      icon: <Zap size={28} />,
      items: ["Neuropathies", "Neuralgia", "Neuritis", "Post herpetic neuralgia (Shingles)", "Occipital neuralgia/neuritis", "Peripheral neuropathy", "Complex Regional Pain Syndrome (CRPS)", "Reflex Sympathetic Dystrophy (RSD)", "Sciatica", "Meralgia paresthetica", "Intercostal neuralgia", "Lumbar radiculopathy"],
      color: "#f59e0b",
      description: "Targets nerve receptors locally to block abnormal signals, providing relief for neuropathies, shingles pain, and persistent neuralgias."
    },
    {
      title: "Joint Pain",
      icon: <Bone size={28} />,
      items: ["Osteoarthritis (OA)", "Rheumatoid Arthritis (RA)", "Degenerative Joint Disease (DJD)", "Psoriatic arthritis", "Gouty arthritis", "Cervical/Lumbar facet joint disease", "Bursitis", "Carpal tunnel syndrome", "Impingement syndrome of the shoulder"],
      color: "#10b981",
      description: "Reduces localized inflammation in joints and cartilage, improving mobility for arthritis and degenerative joint conditions."
    },
    {
      title: "Ligament & Tendon",
      icon: <Droplets size={28} />,
      items: ["Sprains or strains", "Tendonitis", "Tendinopathy", "Epicondylitis", "Costochondritis", "Osgood Schlatters", "Ligamentous strain"],
      color: "#6366f1",
      description: "Focuses therapeutic anti-inflammatories on tendons and ligaments to manage sprains, tendonitis, and recovery from repetitive strain."
    },
    {
      title: "Spinal & Neck",
      icon: <Activity size={28} />,
      items: ["Bulging or herniated disc", "Slipped disc", "Degenerative disc disease", "Facet joint arthritis", "Sacroiliitis", "Scoliosis", "Spinal stenosis", "Spondylolisthesis"],
      color: "#0c4a6e",
      description: "Provides powerful transdermal relief for complex spinal discomfort, degenerative disc issues, and chronic lower back or neck pain."
    }
  ];

  return (
    <>
      <Section bg="brand" className="text-center pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-[-80px] w-96 h-96 opacity-[0.1] pointer-events-none -translate-y-1/2">
          <MoleculePattern color="#ffffff" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">How LidoPro® Helps</h1>
          <p className="text-xl text-brand-100 opacity-90 leading-relaxed">Topical, non-addictive relief designed for a wide spectrum of localized acute and chronic pain conditions.</p>
        </div>
      </Section>

      <Section className="-mt-16 pt-0 relative overflow-hidden bg-slate-50/50">
        <div className="absolute bottom-10 right-[-40px] w-64 h-64 opacity-[0.05] pointer-events-none">
          <MoleculePattern color="#0ea5e9" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-7xl mx-auto relative z-10">
          {conditionCategories.map((cat, i) => (
            <CardFlip 
              key={i}
              title={cat.title}
              subtitle="Targeted Indication"
              description={cat.description}
              features={cat.items}
              color={cat.color}
              icon={cat.icon}
            />
          ))}
          {/* Placeholder/CTA for the last slot to keep layout balanced */}
          <div className="flex items-center justify-center h-full min-h-[420px]">
             <div className="text-center p-8 bg-white/50 backdrop-blur rounded-[2.5rem] border border-slate-200 border-dashed max-w-[340px] w-full flex flex-col justify-center gap-6 group hover:border-brand-400 transition-colors">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto text-slate-400 group-hover:text-brand-500 transition-colors">
                  <Stethoscope size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Discuss Your Pain Condition</h3>
                <p className="text-sm text-slate-500">Every pain profile is unique. Consult with your healthcare specialist to see if LidoPro fits your protocol.</p>
                <Button to={ROUTES.PROVIDER} variant="outline" size="sm">Provider Guide</Button>
             </div>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-100 rounded-[2.5rem] p-8 md:p-12 mt-20 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 shadow-lg shadow-orange-900/5">
           <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
             <AlertTriangle size={36} />
           </div>
           <div>
             <h4 className="font-bold text-orange-900 mb-3 text-2xl tracking-tight">Clinical Stewardship & Best Practices</h4>
             <p className="text-orange-800 leading-relaxed text-lg">
               LidoPro® is engineered for the symptomatic relief of pain and inflammation. As a critical component of multimodal pain management, it should be utilized alongside physical therapy or other directed treatments. Always adhere to the application guidelines provided by your clinician to ensure optimal outcomes and safety.
             </p>
           </div>
        </div>
      </Section>
      <CTABand />
    </>
  );
};

export const ProviderPage = () => {
  return (
    <>
      <Section bg="gray" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-40 left-[-40px] w-64 h-64 opacity-[0.05] pointer-events-none rotate-45">
          <MoleculePattern color="#0c4a6e" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-xs mb-3">
                <Stethoscope size={16} />
                <span>Clinical Accessibility</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Ask Your Provider</h1>
              <p className="text-xl text-slate-600 leading-relaxed">LidoPro® is available with a prescription through your physician’s office or mail-order pharmacy services. Use these resources to start the conversation.</p>
            </div>
            <button onClick={() => window.print()} className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-xl text-brand-600 hover:bg-slate-50 transition-colors font-semibold shadow-sm">
              <Printer size={18} /> Print Discussion Guide
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full transform translate-x-16 -translate-y-16"></div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <MessageCircle className="text-brand-500" /> Discussion Starters
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-brand-500">
                    <p className="text-lg text-slate-800 italic leading-relaxed">
                      "I've been looking for a topical pain management solution to avoid the systemic risks of oral opioids or NSAIDs. Is LidoPro® Ointment or Patch appropriate for my condition?"
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-accent-500">
                    <p className="text-lg text-slate-800 italic leading-relaxed">
                      "Can we discuss how LidoPro® fits into a multimodal strategy for my chronic pain management?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <ClipboardList className="text-brand-500" /> Appointment Checklist
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "List of all current oral medications",
                    "Specific location of pain (local vs systemic)",
                    "History of aspirin or sulfa allergies",
                    "Description of sensation (dull, sharp, burning)",
                    "Mobility goals for recovery",
                    "Insurance and pharmacy preference"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-md border-2 border-slate-200 flex items-center justify-center flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 opacity-10">
                  <MoleculePattern color="#ffffff" />
                </div>
                <h3 className="text-xl font-bold mb-6">Clinician Resources</h3>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors border border-white/10 group">
                    <div className="flex items-center gap-3">
                      <FileText size={20} className="text-brand-400" />
                      <span className="font-semibold text-sm">Clinical Data Sheet</span>
                    </div>
                    <Download size={18} className="opacity-50 group-hover:opacity-100" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors border border-white/10 group">
                    <div className="flex items-center gap-3">
                      <FileText size={20} className="text-brand-400" />
                      <span className="font-semibold text-sm">Multimodal Overview</span>
                    </div>
                    <Download size={18} className="opacity-50 group-hover:opacity-100" />
                  </button>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm text-brand-200 mb-6">Physicians can request clinical starter kits and technical documentation for their practice.</p>
                  <Button variant="white" fullWidth className="text-brand-900">Request Clinical Kit</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 print:hidden" id="contact-form">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-center tracking-tight">Technical Support</h2>
            <p className="text-slate-500 text-center mb-16 text-lg">Inquiries from physicians, pharmacies, or distributors are prioritized.</p>
            <GlowCard customSize className="max-w-3xl mx-auto p-0 rounded-[2.5rem]" glowColor="blue">
               <ContactForm />
            </GlowCard>
          </div>
        </div>
      </Section>
    </>
  );
};

export const SafetyPage = () => {
  return (
    <Section className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-[-60px] w-80 h-80 opacity-[0.03] pointer-events-none -rotate-12">
        <MoleculePattern color="#0ea5e9" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center shadow-inner">
            <ShieldAlert size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Important Safety Information</h1>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <div className="bg-red-50 p-10 rounded-3xl border border-red-100 mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-[-20px] left-[-20px] w-40 h-40 opacity-10">
              <MoleculePattern color="#ef4444" />
            </div>
            <h2 className="text-red-900 font-bold text-2xl mb-6 relative z-10">Strict Usage Warnings</h2>
            <ul className="space-y-4 text-red-800 relative z-10 font-medium">
              <li className="flex gap-4 items-start">
                <AlertTriangle size={20} className="flex-shrink-0 mt-1" />
                <span>FOR EXTERNAL USE ONLY. Wash hands immediately after every use, including when using the applicator.</span>
              </li>
              <li className="flex gap-4 items-start">
                <AlertTriangle size={20} className="flex-shrink-0 mt-1" />
                <span>Avoid contact with eyes, genitals, and mucous membranes. If contact occurs, rinse with cold water.</span>
              </li>
              <li className="flex gap-4 items-start">
                <AlertTriangle size={20} className="flex-shrink-0 mt-1" />
                <span>DO NOT use on open wounds, cuts, damaged, or infected skin.</span>
              </li>
              <li className="flex gap-4 items-start">
                <AlertTriangle size={20} className="flex-shrink-0 mt-1" />
                <span>DO NOT use with a bandage, heating pad, or in a hot tub/sauna.</span>
              </li>
              <li className="flex gap-4 items-start">
                <AlertTriangle size={20} className="flex-shrink-0 mt-1" />
                <span>IF SWALLOWED: Contact Poison Control immediately at 1-800-222-1222.</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Consult Your Physician If:</h3>
              <ul className="space-y-3">
                {[
                  "Condition worsens or symptoms persist > 7 days",
                  "Excessive skin irritation, itching, or rash occurs",
                  "You are pregnant or breastfeeding",
                  "You are taking anticoagulants (Warfarin/Coumadin)",
                  "You have a history of sulfa or aspirin allergies"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-slate-700">
                    <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contraindications</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Do not use if you have a known history of hypersensitivity to:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Lidocaine", "Menthol", "Methyl Salicylate", "Aspirin products", "Sulfa", "PABA"].map((c) => (
                   <div key={c} className="flex items-center gap-2 text-slate-800 font-bold text-sm bg-slate-50 p-3 rounded-xl border border-slate-100">
                     <AlertTriangle size={14} className="text-red-500" />
                     {c}
                   </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-200 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-slate-500 text-sm italic mb-6 leading-relaxed">
                *The information provided here is for safety awareness and does not substitute for the Drug Facts label on your packaging. Always read the complete label before use.
              </p>
              <Button to={ROUTES.FAQ} variant="outline">Clinical FAQ</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};