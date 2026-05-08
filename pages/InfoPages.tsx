import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, Button } from '../components/UI';
import { CTABand, ContactForm } from '../components/Layout';
import { ROUTES, SAFETY_WARNINGS } from '../constants';
import { AlertTriangle, CheckCircle2, MessageCircle, ClipboardList, Stethoscope, Activity, Zap, ShieldAlert, Droplets, Bone, ActivitySquare, Lock, ScrollText, PhoneCall, ExternalLink, MapPin, FileDown } from 'lucide-react';
import musclePainImg from '../assets/musclepain.webp';
import nervePainImg from '../assets/nervepain.webp';
import jointPainImg from '../assets/jointpain.webp';
import ligamentTendonImg from '../assets/ligamenttendon.webp';
import spinalNeckImg from '../assets/spinalneck.webp';
import { GlowCard } from '../components/ui/spotlight-card';
import { MoleculePattern } from '../components/ui/molecule-pattern';
import { FAQ } from '../components/ui/faq-tabs';
import CardFlip from '../components/ui/flip-card';

export const FAQPage = () => {
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

  // Inject FAQPage JSON-LD schema for search engines
  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What conditions does LidoPro® help relieve?", "acceptedAnswer": { "@type": "Answer", "text": "LidoPro® helps relieve most symptoms of pain, including neck, back, muscle, nerve, joint, and ligament pain. It is also effective for conditions such as arthritis, sciatica, tendonitis, fibromyalgia, bursitis, and complex regional pain syndrome (CRPS)." } },
        { "@type": "Question", "name": "Can I use LidoPro® on children?", "acceptedAnswer": { "@type": "Answer", "text": "No. Do not use LidoPro® on children under 18 years of age." } },
        { "@type": "Question", "name": "Is LidoPro® non-addictive?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. LidoPro® products use topical ingredients including Lidocaine, Menthol, Capsaicin, and Methyl Salicylate which work locally and do not carry the addiction risks associated with opioids." } },
        { "@type": "Question", "name": "Can I use LidoPro® during pregnancy?", "acceptedAnswer": { "@type": "Answer", "text": "Do not use LidoPro® during pregnancy unless directed by your physician. If you are breastfeeding, consult a health professional before use." } },
        { "@type": "Question", "name": "Where can I get LidoPro®?", "acceptedAnswer": { "@type": "Answer", "text": "LidoPro® is dispensed through licensed pharmacies and physician offices. Ask your healthcare provider for a recommendation or prescription. LidoPro® is not available for direct purchase from Clinic Pharma." } },
        { "@type": "Question", "name": "What is the difference between LidoPro® Ointment and Patch?", "acceptedAnswer": { "@type": "Answer", "text": "The Ointment is ideal for irregular areas like knees, elbows, and hands and allows for massage. The Patch is excellent for large, flat areas like the back, shoulders, and thighs for steady, mess-free application." } }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      document.getElementById('faq-schema')?.remove();
    };
  }, []);

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
        answer: "Yes. Do not use on open wounds, cuts, or damaged skin. Avoid using with a heating pad or bandage. Do not use while in a hot tub or sauna. Do not use during pregnancy; LidoPro® should not be used while pregnant unless directed otherwise by your physician. If you are breastfeeding, or allergic to aspirin, sulfa, or PABA, consult your doctor before use."
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
        question: "How do physicians and pharmacies obtain LidoPro®?",
        answer: "LidoPro® is distributed exclusively through licensed wholesale distributors. Physician offices and pharmacies must place orders through an authorized Clinic Pharma distributor; product cannot be purchased directly from Clinic Pharma. Contact us through the provider page and we will connect you with your regional distributor."
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
        question: "How does LidoPro®'s distribution model work?",
        answer: "Clinic Pharma sells LidoPro® exclusively to licensed wholesale distributors. Distributors then supply licensed pharmacies, physician offices, and other authorized healthcare dispensing channels. End consumers and healthcare providers cannot purchase directly from Clinic Pharma; all orders must flow through an authorized distributor."
      },
      {
        question: "How do I become an authorized LidoPro® distributor?",
        answer: "To inquire about becoming an authorized wholesale distributor, please contact Clinic Pharma directly through the contact form on our website. Our team will review your credentials, licensing, and distribution footprint and respond with next steps for onboarding."
      },
      {
        question: "What are the handling and safety requirements for LidoPro® inventory?",
        answer: "Ensure safety seals are intact upon receipt and prior to distribution. Do not distribute units where the tamper-evident seal appears compromised. Store products as directed and maintain chain-of-custody records in accordance with applicable state and federal pharmacy distribution regulations."
      },
      {
        question: "What are the storage recommendations?",
        answer: "Store at room temperature. Avoid excessive heat or freezing, as this may alter the viscosity or stability of the ointment base and affect patch adhesion."
      },
      {
        question: "What safety information must be conveyed to dispensing channels?",
        answer: "All distributed units must carry standard OTC drug warnings: 'For external use only,' 'Do not use during pregnancy unless directed by a physician,' 'Not for use on children under 18 years of age,' 'Keep out of reach of children,' and instructions to contact Poison Control (1-800-222-1222) in case of accidental ingestion. Distributors are responsible for ensuring downstream channels have access to current product labeling and Safety Data Sheets (SDS)."
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
          <h1 className="text-5xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight">Clinical Resources</h1>
          <p className="text-xl text-slate-600 leading-relaxed">Expert information tailored for patients, healthcare<br />providers, and distribution partners.</p>
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
            <Button to={ROUTES.PROVIDER} size="lg" className="px-10" style={{ backgroundColor: '#022933', borderColor: '#022933' }}>Ask Your Provider</Button>
            <Button onClick={handleContactClick} variant="outline" size="lg" className="px-10 bg-white shadow-sm">Contact Us</Button>
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
      iconImgSrc: musclePainImg,
      items: ["Myalgias", "Muscle strains or sprains", "Pulled muscles", "Muscle stiffness", "Muscle soreness", "Fibromyalgia", "Myofacial pain syndrome", "Exercise-induced myalgias", "Delayed onset myalgias", "Piriformis syndrome"],
      color: "#0ea5e9",
      description: "Clinically formulated to penetrate deep into muscle tissue to relieve soreness, chronic stiffness, and strains from activity or injury."
    },
    {
      title: "Nerve Pain",
      icon: <Zap size={28} />,
      iconImgSrc: nervePainImg,
      items: ["Neuropathies", "Neuralgia", "Neuritis", "Post herpetic neuralgia (Shingles)", "Occipital neuralgia/neuritis", "Peripheral neuropathy", "Complex Regional Pain Syndrome (CRPS)", "Reflex Sympathetic Dystrophy (RSD)", "Sciatica", "Meralgia paresthetica", "Intercostal neuralgia", "Lumbar radiculopathy"],
      color: "#f59e0b",
      description: "Targets nerve receptors locally to block abnormal signals, providing relief for neuropathies, shingles pain, and persistent neuralgias."
    },
    {
      title: "Joint Pain",
      icon: <Bone size={28} />,
      iconImgSrc: jointPainImg,
      items: ["Osteoarthritis (OA)", "Rheumatoid Arthritis (RA)", "Degenerative Joint Disease (DJD)", "Psoriatic arthritis", "Gouty arthritis", "Cervical/Lumbar facet joint disease", "Bursitis", "Carpal tunnel syndrome", "Impingement syndrome of the shoulder"],
      color: "#10b981",
      description: "Reduces localized inflammation in joints and cartilage, improving mobility for arthritis and degenerative joint conditions."
    },
    {
      title: "Ligament & Tendon",
      icon: <Droplets size={28} />,
      iconImgSrc: ligamentTendonImg,
      items: ["Sprains or strains", "Tendonitis", "Tendinopathy", "Epicondylitis", "Costochondritis", "Osgood Schlatters", "Ligamentous strain"],
      color: "#6366f1",
      description: "Focuses therapeutic anti-inflammatories on tendons and ligaments to manage sprains, tendonitis, and recovery from repetitive strain."
    },
    {
      title: "Spinal & Neck",
      icon: <Activity size={28} />,
      iconImgSrc: spinalNeckImg,
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
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">How LidoPro® Helps</h1>
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
              iconImgSrc={cat.iconImgSrc}
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
                <Button to={ROUTES.PROVIDER} variant="outline" size="sm">Ask Your Provider</Button>
             </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 flex items-stretch">
            <div className="bg-orange-50 border border-orange-100 rounded-[2.5rem] p-8 md:p-12 w-full flex flex-col md:flex-row items-center md:items-start gap-8 shadow-lg shadow-orange-900/5">
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
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-xs mb-3">
              <Stethoscope size={16} />
              <span>Patient Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Ask Your Provider</h1>
            <p className="text-xl text-slate-600 leading-relaxed">Not sure if LidoPro® is right for you? Bring these talking points to your next appointment. LidoPro® is dispensed through licensed pharmacies. Your physician can recommend it and help you obtain it through your preferred pharmacy.</p>
          </div>

          <div className="space-y-8">
            {/* Prepare for Your Visit — Patient Discussion Guide download */}
            <div className="bg-gradient-to-br from-brand-600 to-[#003F51] p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.07] pointer-events-none -mr-10 -mt-10">
                <MoleculePattern color="#ffffff" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div className="w-16 h-16 bg-white/15 rounded-3xl flex items-center justify-center flex-shrink-0">
                  <FileDown size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Prepare for Your Visit</h2>
                  <p className="text-brand-100 leading-relaxed max-w-2xl">
                    Make your next appointment easier with our Patient Discussion Guide. This downloadable conversation starter helps you talk to your provider about your specific pain, safety considerations like your medical history, and which LidoPro® product best supports your personal treatment goals.
                  </p>
                </div>
                <a
                  href="https://terrain-pharma-marketing-department.s3.us-east-1.amazonaws.com/Assets/Discussion+Points.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-brand-700 font-bold rounded-2xl shadow-lg hover:bg-brand-50 transition-colors flex-shrink-0 whitespace-nowrap"
                >
                  <FileDown size={18} />
                  Download Your Guide
                </a>
              </div>
            </div>

            {/* Is LidoPro Right for You */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-50 rounded-full transform translate-x-24 -translate-y-24 pointer-events-none" />
              <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3 relative z-10">
                <Stethoscope className="text-brand-500" /> Is LidoPro® Right for You?
              </h2>
              <p className="text-slate-500 mb-8 relative z-10">Topics to raise with your physician at your next visit.</p>

              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                {[
                  {
                    heading: "Describe where and how your pain feels",
                    points: [
                      "Is the pain localized to a specific joint, muscle, or area of skin?",
                      "Is it a burning, aching, or sharp sensation?",
                      "Is the pain constant or does it come and go with activity?",
                      "How long have you been experiencing it?",
                    ]
                  },
                  {
                    heading: "Share your concerns about oral medications",
                    points: [
                      "Have oral pain relievers caused stomach upset, drowsiness, or other side effects?",
                      "Are you looking to reduce or avoid opioid or NSAID use?",
                      "Do you have difficulty swallowing pills or maintaining a dosing schedule?",
                      "Have you tried other topical treatments without success?",
                    ]
                  },
                  {
                    heading: "Mention relevant medical history",
                    points: [
                      "Any known allergies to aspirin, salicylates, sulfa drugs, PABA, or lidocaine.",
                      "Whether you are pregnant, breastfeeding, or trying to conceive.",
                      "Any blood-thinning medications (e.g., Warfarin or Coumadin), as these are a contraindication.",
                      "Active skin conditions, open wounds, or rashes near the pain site.",
                    ]
                  },
                  {
                    heading: "Ask about Ointment vs. Patch",
                    points: [
                      "Ointment may be better for irregular or hard-to-reach areas like knees, elbows, or hands, and allows for massage application.",
                      "Patch may be better for large, flat areas like the lower back, shoulders, or thighs, ideal for sustained 12-hour relief with no mess.",
                      "Ask which format suits your lifestyle, activity level, and the nature of your pain.",
                      "Some patients benefit from using both products for different pain sites.",
                    ]
                  },
                  {
                    heading: "Discuss your treatment goals",
                    points: [
                      "Are you seeking relief to improve daily function, sleep, or mobility?",
                      "Is this for short-term recovery (acute injury) or ongoing chronic pain management?",
                      "Are you interested in a non-addictive option as part of a broader pain plan?",
                      "What does success look like for you: partial relief, full pain control, reduced oral medication use?",
                    ]
                  },
                  {
                    heading: "Ask your provider directly",
                    points: [
                      "\"Given my conditions and current medications, is LidoPro® a safe option for me?\"",
                      "\"Which product (Ointment or Patch) would you recommend for my type of pain?\"",
                      "\"Can you recommend a pharmacy that carries LidoPro® or can order it?\"",
                      "\"How long should I use it before evaluating whether it’s working?\"",
                    ]
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">{card.heading}</h3>
                    <ul className="space-y-2">
                      {card.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 items-start text-sm text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0 mt-1.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Discussion Starters + Checklist side by side */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full transform translate-x-16 -translate-y-16 pointer-events-none" />
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 relative z-10">
                  <MessageCircle className="text-brand-500" /> Discussion Starters
                </h2>
                <div className="space-y-5 relative z-10">
                  <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-brand-500">
                    <p className="text-slate-800 italic leading-relaxed text-sm">
                      "I’ve been looking for a topical option to avoid the systemic risks of oral opioids or NSAIDs. Is LidoPro® Ointment or Patch appropriate for my condition?"
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-accent-500">
                    <p className="text-slate-800 italic leading-relaxed text-sm">
                      "Can we discuss how LidoPro® fits into a multimodal strategy for my chronic pain management?"
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border-l-4 border-brand-300">
                    <p className="text-slate-800 italic leading-relaxed text-sm">
                      "I’d like to reduce my reliance on oral pain medications. Is a non-addictive topical like LidoPro® a viable long-term option for me?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <ClipboardList className="text-brand-500" /> Appointment Checklist
                </h2>
                <div className="space-y-4">
                  {[
                    "List of all current oral medications",
                    "Specific location and description of your pain",
                    "History of aspirin, sulfa, or PABA allergies",
                    "Description of sensation (dull, sharp, burning, tingling)",
                    "Any blood-thinning medications you currently take",
                    "Mobility and daily function goals",
                    "Previous topical treatments tried (and results)",
                    "Preferred pharmacy for obtaining the product",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded border-2 border-slate-200 flex-shrink-0" />
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Integration & Multimodal Guide — HCP download */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl shadow-xl relative overflow-hidden mt-8">
            <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.07] pointer-events-none -ml-10 -mb-10">
              <MoleculePattern color="#ffffff" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center flex-shrink-0">
                <FileDown size={32} className="text-accent-500" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/15 text-accent-500 text-xs font-bold uppercase tracking-widest mb-3">
                  <Stethoscope size={12} />
                  <span>For Licensed Healthcare Providers</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Clinical Integration &amp; Multimodal Guide</h2>
                <p className="text-slate-300 leading-relaxed max-w-2xl text-sm">
                  Designed exclusively for licensed healthcare providers, this comprehensive guide offers practical protocols for incorporating LidoPro® Ointment and Patch into complex, patient-centered pain management plans. Explore evidence-based strategies for integrating topicals with physical and occupational therapy, managing specialized populations and utilizing LidoPro® as an adjunctive option when oral NSAIDs are contraindicated. The guide also includes detailed pharmacological profiles and essential safety references regarding absolute contraindications like Warfarin use.
                </p>
              </div>
              <a
                href="https://terrain-pharma-marketing-department.s3.us-east-1.amazonaws.com/Assets/Multimodal+Overview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent-500 text-white font-bold rounded-2xl shadow-lg hover:bg-accent-600 transition-colors flex-shrink-0 whitespace-nowrap"
              >
                <FileDown size={18} />
                Download Clinical Guide
              </a>
            </div>
          </div>

          <div className="mt-24" id="contact-form">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-center tracking-tight">Connect with the LidoPro Team</h2>
            <p className="text-slate-500 text-center mb-16 text-lg">Clinical support and general inquiries.</p>
            <GlowCard customSize className="max-w-3xl mx-auto p-0 rounded-[2.5rem]" glowColor="blue">
               <ContactForm />
            </GlowCard>
          </div>
        </div>
      </Section>
    </>
  );
};

export const DistributionPage = () => {
  return (
    <Section className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-[-60px] w-80 h-80 opacity-[0.03] pointer-events-none -rotate-12">
        <MoleculePattern color="#006481" />
      </div>
      <div className="absolute bottom-40 left-[-60px] w-64 h-64 opacity-[0.03] pointer-events-none rotate-12">
        <MoleculePattern color="#006481" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center shadow-inner flex-shrink-0">
            <MapPin size={30} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">How to Access LidoPro®</h1>
            <p className="text-slate-500 mt-1 text-sm">Distribution model &amp; ordering information</p>
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mt-8 mb-10 bg-brand-50 border border-brand-100 rounded-2xl px-8 py-6">
          LidoPro® products are sold exclusively through a licensed wholesale distribution network. <strong>Clinic Pharma does not sell directly to patients, physicians, or pharmacies.</strong> All product access flows through authorized distributors to ensure regulatory compliance and supply chain integrity.
        </p>

        <div className="space-y-8">
          {/* Distribution chain visual */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-6">The LidoPro® Supply Chain</h2>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center flex-wrap">
              {[
                { label: "Clinic Pharma", sub: "Manufacturer & Marketer", color: "bg-slate-900 text-white" },
                { label: "→", sub: "", color: "text-slate-400 text-2xl font-light bg-transparent shadow-none border-none" },
                { label: "Licensed Wholesalers", sub: "Authorized Distributors", color: "bg-brand-600 text-white" },
                { label: "→", sub: "", color: "text-slate-400 text-2xl font-light bg-transparent shadow-none border-none" },
                { label: "Pharmacies & Physicians", sub: "Dispensing Channels", color: "bg-brand-100 text-brand-900" },
                { label: "→", sub: "", color: "text-slate-400 text-2xl font-light bg-transparent shadow-none border-none" },
                { label: "Patients", sub: "End Users", color: "bg-slate-100 text-slate-800" },
              ].map((step, i) => (
                step.label === "→" ? (
                  <span key={i} className="text-2xl text-slate-400 font-light hidden sm:block">→</span>
                ) : (
                  <div key={i} className={`${step.color} rounded-2xl px-5 py-4 text-center shadow-sm min-w-[130px]`}>
                    <p className="font-bold text-sm leading-tight">{step.label}</p>
                    {step.sub && <p className="text-xs mt-1 opacity-75">{step.sub}</p>}
                  </div>
                )
              ))}
            </div>
          </div>

          {/* For patients */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-7 h-7 bg-brand-600 text-white rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0">P</span>
              For Patients
            </h2>
            <ul className="space-y-3">
              {[
                "LidoPro® is not available for direct purchase from Clinic Pharma or this website.",
                "Ask your physician or healthcare provider about LidoPro®. They can write a prescription or recommendation and direct you to the appropriate pharmacy.",
                "LidoPro® is stocked by independent pharmacies, specialty pharmacies, and mail-order pharmacy services that source through authorized distributors.",
                "If your pharmacy doesn't currently carry LidoPro®, ask them to contact their wholesale distributor to request it.",
              ].map((item, i) => (
                <li key={i} className="text-slate-600 leading-relaxed flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button to={ROUTES.PROVIDER} size="sm">Talk to Your Provider</Button>
            </div>
          </div>

          {/* For HCPs */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-7 h-7 bg-brand-600 text-white rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0">Rx</span>
              For Physicians &amp; Pharmacies
            </h2>
            <ul className="space-y-3">
              {[
                "Physician offices and pharmacies cannot purchase LidoPro® directly from Clinic Pharma.",
                "All orders must be placed through an authorized Clinic Pharma wholesale distributor.",
                "If you are not yet connected with a regional distributor, contact us through the form below and we will facilitate the introduction.",
                "Clinical documentation, product data sheets, and prescribing resources are available on our Clinical Resources (FAQ) page.",
              ].map((item, i) => (
                <li key={i} className="text-slate-600 leading-relaxed flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button to={ROUTES.PROVIDER} size="sm">Contact Our Team</Button>
            </div>
          </div>

          {/* For distributors */}
          <div className="bg-brand-50 rounded-3xl border border-brand-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="w-7 h-7 bg-brand-600 text-white rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0">W</span>
              Wholesale Distribution Inquiries
            </h2>
            <ul className="space-y-3 mb-6">
              {[
                "Clinic Pharma partners with licensed wholesale distributors to supply LidoPro® across the United States.",
                "To inquire about becoming an authorized distributor, please contact us with your company name, state(s) of operation, licensing information, and current product lines.",
                "Our team will review your application and respond within 2–3 business days.",
                "All distribution agreements are subject to licensing verification, territory review, and execution of a formal distribution agreement with Clinic Pharma LLC.",
              ].map((item, i) => (
                <li key={i} className="text-slate-600 leading-relaxed flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-brand-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button to={ROUTES.PROVIDER} size="sm">Distributor Inquiry</Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button to={ROUTES.HOME} variant="outline">Back to Home</Button>
        </div>
      </div>
    </Section>
  );
};

export const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information you voluntarily provide when contacting us through our website forms, including your name, email address, phone number, professional credentials (if applicable), and any message content you submit.",
        "This website is primarily an informational resource for patients, healthcare providers, pharmacists, and prospective wholesale distribution partners. We do not process any sales transactions or collect payment information; all LidoPro® product orders are handled through authorized wholesale distributors outside of this website.",
        "We may also automatically collect certain technical information when you visit our website, such as your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through standard server logs and cookies.",
        "We do not collect sensitive personal information such as Social Security numbers, financial account details, or medical records through this website."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries, whether you are a patient seeking information, a healthcare provider with clinical questions, or a business seeking distributor information.",
        "To evaluate and follow up on wholesale distributor inquiries and partnership requests.",
        "To improve the content, functionality, and user experience of our website.",
        "To send you relevant updates about LidoPro® products if you have opted in to receive communications.",
        "To comply with applicable legal obligations and protect the rights, property, or safety of Clinic Pharma, our users, or the public.",
        "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
      ]
    },
    {
      title: "Health-Related Information",
      content: [
        "Our contact forms may invite you to describe your pain condition, symptoms, or health-related questions. While Clinic Pharma LLC is not a HIPAA-covered entity (we are not a healthcare provider, health plan, or healthcare clearinghouse), we treat any health-related information you voluntarily share with the same care and confidentiality as other personal data.",
        "Health-related information submitted through our forms is used solely to respond to your inquiry and provide relevant clinical or product support. We do not sell, share, or use this information for marketing profiling.",
        "We strongly recommend that you do not submit sensitive protected health information (PHI) such as detailed medical diagnoses, insurance information, or prescription details through our general contact forms.",
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        "Our website uses third-party services to facilitate contact form submissions and website analytics. These providers process data on our behalf under confidentiality obligations.",
        "Contact forms on this website are powered by LeadConnector (GoHighLevel). Information submitted through these forms is processed and stored on their secure platform in accordance with their privacy policy.",
        "Our website may link to external sites, including social media platforms. We are not responsible for the privacy practices of those third-party sites and encourage you to review their individual privacy policies.",
        "We use Cloudinary for image delivery. No personally identifiable user data is shared with Cloudinary."
      ]
    },
    {
      title: "Cookies & Tracking Technologies",
      content: [
        "Our website uses cookies (small text files stored on your device) to enhance your browsing experience and gather aggregate analytics data.",
        "You may configure your browser to refuse cookies or to alert you when cookies are being sent. Please note that some features of our website may not function properly without cookies.",
        "We do not use cookies to collect personally identifiable information without your consent."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement commercially reasonable technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.",
        "No method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.",
        "In the event of a data breach that affects your rights and freedoms, we will notify affected individuals as required by applicable law."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.",
        "Contact form submissions are retained for a reasonable period to allow us to respond and follow up on clinical or business inquiries.",
        "You may request deletion of your personal information at any time by contacting us at the address below, subject to legal retention requirements."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Depending on your location, you may have rights under applicable privacy laws including the right to access, correct, delete, or restrict processing of your personal data.",
        "You may opt out of marketing communications at any time by following the unsubscribe instructions in any email we send, or by contacting us directly.",
        "To exercise any of these rights, please contact us at privacy@clinicpharma.com."
      ]
    },
    {
      title: "California Consumer Privacy Act (CCPA)",
      content: [
        "If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) regarding your personal information.",
        "Right to Know: You have the right to request that we disclose what personal information we collect, use, disclose, and sell about you.",
        "Right to Delete: You have the right to request deletion of personal information we have collected from you, subject to certain exceptions.",
        "Right to Opt-Out: We do not sell personal information to third parties. However, if our practices change, you would have the right to opt out of the sale of your personal information.",
        "Right to Non-Discrimination: We will not discriminate against you for exercising any of your CCPA rights.",
        "To submit a verifiable California privacy request, contact us at privacy@clinicpharma.com. We will respond within 45 days of receiving a verifiable request.",
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will take steps to delete it."
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will post any updates on this page with a revised effective date.",
        "Your continued use of our website following the posting of any changes constitutes your acceptance of those changes."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact Clinic Pharma at:",
        "Clinic Pharma LLC\nEmail: privacy@clinicpharma.com\nWebsite: www.lidopro.com"
      ]
    }
  ];

  return (
    <Section className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-[-60px] w-80 h-80 opacity-[0.03] pointer-events-none -rotate-12">
        <MoleculePattern color="#006481" />
      </div>
      <div className="absolute bottom-40 left-[-60px] w-64 h-64 opacity-[0.03] pointer-events-none rotate-12">
        <MoleculePattern color="#006481" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center shadow-inner flex-shrink-0">
            <Lock size={30} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Privacy Policy</h1>
            <p className="text-slate-500 mt-1 text-sm">Effective Date: May 1, 2026 &nbsp;·&nbsp; Clinic Pharma LLC</p>
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mt-8 mb-12 bg-brand-50 border border-brand-100 rounded-2xl px-8 py-6">
          Clinic Pharma LLC ("we," "us," or "our") operates the LidoPro® website located at www.lidopro.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or submit information through our contact forms. Please read this policy carefully. By using the Site, you agree to the practices described herein.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-7 h-7 bg-brand-600 text-white rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.content.map((para, j) => (
                  <li key={j} className="text-slate-600 leading-relaxed flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0 mt-2.5" />
                    <span style={{ whiteSpace: 'pre-line' }}>{para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to={ROUTES.HOME} variant="outline">Back to Home</Button>
        </div>
      </div>
    </Section>
  );
};

export const TermsOfUsePage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using the LidoPro® website (www.lidopro.com), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
        "These Terms of Use apply to all visitors, users, and others who access or use the Site. Clinic Pharma LLC reserves the right to modify these terms at any time without prior notice."
      ]
    },
    {
      title: "Medical & Health Disclaimer",
      content: [
        "IMPORTANT: The information provided on this website is for general informational and educational purposes only and is not intended as, nor should it be considered a substitute for, professional medical advice, diagnosis, or treatment.",
        "Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition or treatment. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.",
        "LidoPro® products are intended to be used only as directed on the product label and under the guidance of a licensed healthcare professional. Nothing on this site constitutes a doctor-patient relationship.",
        "LidoPro® products are not intended to diagnose, treat, cure, or prevent any disease. Results may vary between individuals."
      ]
    },
    {
      title: "Distribution & Sales Model",
      content: [
        "Clinic Pharma LLC sells LidoPro® products exclusively to licensed wholesale distributors. We do not sell directly to consumers, patients, physicians, pharmacists, or any other end-user.",
        "Physicians, pharmacists, clinics, and other healthcare dispensing channels must purchase LidoPro® through an authorized Clinic Pharma wholesale distributor. If you are a healthcare provider seeking product access, please contact us through our provider page and we will connect you with your regional distributor.",
        "Patients and end consumers cannot purchase LidoPro® directly from Clinic Pharma or this website. LidoPro® is available through licensed pharmacies and physician offices, which obtain product through authorized distributors.",
        "Inquiries about becoming an authorized distributor should be directed to Clinic Pharma LLC via the contact form on this website. Distribution agreements are subject to licensing verification, territory review, and execution of a formal distribution agreement.",
      ]
    },
    {
      title: "Off-Label Use Prohibition",
      content: [
        "LidoPro® products are OTC drugs regulated by the U.S. Food & Drug Administration (FDA). They must be used only for the indications listed on the approved product label (Drug Facts). Nothing on this website constitutes a recommendation, promotion, or authorization to use LidoPro® for any purpose not described on the official product label.",
        "This website does not make disease treatment claims beyond those permitted under OTC drug monographs. LidoPro® is not intended to diagnose, treat, cure, or prevent any disease.",
        "Statements on this Site have not been evaluated by the FDA beyond what is required for OTC drug approval. Always follow label directions and consult a licensed healthcare professional with questions about your specific condition.",
      ]
    },
    {
      title: "Product Availability & Geographic Restrictions",
      content: [
        "LidoPro® products may not be available in all states, territories, or countries. Availability is subject to state pharmacy regulations, licensing requirements, and distribution agreements.",
        "This website is intended for users located in the United States. If you access this Site from outside the United States, you do so at your own risk and are responsible for compliance with local laws.",
        "Clinic Pharma LLC makes no representation that the products described on this website are appropriate, approved, or available for use in any particular jurisdiction outside the United States.",
      ]
    },
    {
      title: "Permitted Use",
      content: [
        "You may use this website for lawful purposes and in accordance with these Terms. You agree not to use the Site in any way that violates any applicable federal, state, local, or international law or regulation.",
        "You may not use this website to transmit unsolicited or unauthorized advertising or promotional material, to engage in any conduct that restricts or inhibits anyone's use of the Site, or to attempt to gain unauthorized access to any part of the Site.",
        "You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site without express written permission from Clinic Pharma LLC."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "The Site and its entire content, features, and functionality, including but not limited to all text, graphics, logos, images, product formulations, and software, are the exclusive property of Clinic Pharma LLC and are protected by United States and international copyright, trademark, patent, and other intellectual property laws.",
        "LidoPro® is a registered trademark of Clinic Pharma LLC. Unauthorized use of the LidoPro® name, logo, or brand assets is strictly prohibited.",
        "Nothing on this Site should be construed as granting any license or right to use any trademark or copyrighted material without the prior written permission of Clinic Pharma LLC."
      ]
    },
    {
      title: "Accuracy of Information",
      content: [
        "We make reasonable efforts to ensure that the content on this Site is accurate and up to date. However, we make no representations or warranties of any kind, express or implied, as to the completeness, accuracy, reliability, suitability, or availability of the information, products, or related services on the Site.",
        "Product formulations, labeling, and availability are subject to change without notice. Always refer to the current product label for the most accurate directions, warnings, and ingredient information."
      ]
    },
    {
      title: "Third-Party Links",
      content: [
        "This Site may contain links to third-party websites or services that are not owned or controlled by Clinic Pharma LLC. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites.",
        "We strongly advise you to read the terms and privacy policies of any third-party sites you visit. The inclusion of any link does not imply endorsement by Clinic Pharma LLC."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by applicable law, Clinic Pharma LLC, its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, goodwill, or other intangible losses, arising out of or in connection with your use of, or inability to use, the Site or its content.",
        "In no event shall our total liability to you for all claims arising from or relating to the use of the Site exceed the amount you paid, if any, for accessing the Site.",
        "Some jurisdictions do not allow limitations on implied warranties or exclusions of liability for certain types of damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law."
      ]
    },
    {
      title: "Indemnification",
      content: [
        "You agree to defend, indemnify, and hold harmless Clinic Pharma LLC and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Site."
      ]
    },
    {
      title: "Governing Law & Jurisdiction",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.",
        "Any dispute arising from or relating to these Terms or the use of the Site shall be subject to the exclusive jurisdiction of the state and federal courts located in Texas."
      ]
    },
    {
      title: "Adverse Event & Safety Reporting",
      content: [
        "Clinic Pharma LLC is committed to patient and consumer safety throughout our distribution chain. If you or a patient experiences a serious adverse event, unexpected side effect, or product quality concern related to any LidoPro® product, please report it to the FDA.",
        "FDA MedWatch Adverse Event Reporting Program:\nPhone: 1-800-FDA-1088 (1-800-332-1088)\nOnline: www.fda.gov/medwatch",
        "In the event of accidental ingestion or suspected poisoning, call the Poison Control Center immediately at 1-800-222-1222. This line is available 24 hours a day, 7 days a week.",
        "Product quality concerns, compromised seals, or distribution-level defects may also be reported directly to Clinic Pharma LLC at safety@clinicpharma.com. Distributors are responsible for ensuring their downstream dispensing channels are aware of these reporting pathways.",
      ]
    },
    {
      title: "Termination",
      content: [
        "Clinic Pharma LLC reserves the right to terminate or suspend access to the Site immediately, without prior notice or liability, for any reason, including if you breach these Terms.",
        "All provisions of these Terms which by their nature should survive termination, including without limitation ownership provisions, warranty disclaimers, indemnity, and limitations of liability, shall survive termination."
      ]
    },
    {
      title: "Contact Us",
      content: [
        "If you have questions about these Terms of Use, please contact Clinic Pharma LLC:",
        "Clinic Pharma LLC\nEmail: info@clinicpharma.com\nWebsite: www.lidopro.com"
      ]
    }
  ];

  return (
    <Section className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-[-60px] w-80 h-80 opacity-[0.03] pointer-events-none -rotate-12">
        <MoleculePattern color="#006481" />
      </div>
      <div className="absolute bottom-40 left-[-60px] w-64 h-64 opacity-[0.03] pointer-events-none rotate-12">
        <MoleculePattern color="#006481" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-3xl flex items-center justify-center shadow-inner flex-shrink-0">
            <ScrollText size={30} />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Terms of Use</h1>
            <p className="text-slate-500 mt-1 text-sm">Effective Date: May 1, 2026 &nbsp;·&nbsp; Clinic Pharma LLC</p>
          </div>
        </div>

        <p className="text-slate-600 text-lg leading-relaxed mt-8 mb-12 bg-amber-50 border border-amber-100 rounded-2xl px-8 py-6">
          Please read these Terms of Use carefully before using the LidoPro® website. These terms constitute a legally binding agreement between you and Clinic Pharma LLC governing your access to and use of www.lidopro.com.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i} className={`bg-white rounded-3xl border shadow-sm p-8 ${s.title === 'Medical & Health Disclaimer' ? 'border-amber-200 bg-amber-50/30' : 'border-slate-100'}`}>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className={`w-7 h-7 text-white rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 ${s.title === 'Medical & Health Disclaimer' ? 'bg-amber-500' : 'bg-brand-600'}`}>{i + 1}</span>
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.content.map((para, j) => (
                  <li key={j} className="text-slate-600 leading-relaxed flex gap-3 items-start">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2.5 ${s.title === 'Medical & Health Disclaimer' ? 'bg-amber-400' : 'bg-brand-400'}`} />
                    <span style={{ whiteSpace: 'pre-line' }}>{para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to={ROUTES.HOME} variant="outline">Back to Home</Button>
        </div>
      </div>
    </Section>
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
                <span>DO NOT use during pregnancy. LidoPro® is not to be used while pregnant unless directed otherwise by your physician.</span>
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
                  "You are pregnant (do not use unless your physician directs otherwise) or breastfeeding",
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

          {/* Adverse Event Reporting */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-3xl p-8 flex gap-5 items-start">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <PhoneCall size={24} />
              </div>
              <div>
                <h4 className="font-bold text-red-900 text-lg mb-1">Poison Control Center</h4>
                <p className="text-red-700 text-sm mb-3 leading-relaxed">In case of accidental ingestion or overdose, call immediately, available 24 hours a day, 7 days a week.</p>
                <a href="tel:18002221222" className="text-red-700 font-black text-xl hover:underline">1-800-222-1222</a>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 flex gap-5 items-start">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ExternalLink size={24} />
              </div>
              <div>
                <h4 className="font-bold text-amber-900 text-lg mb-1">Report an Adverse Event</h4>
                <p className="text-amber-700 text-sm mb-3 leading-relaxed">To report a serious problem or side effect with this product, contact FDA MedWatch.</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:18003321088" className="text-amber-800 font-bold hover:underline">1-800-FDA-1088</a>
                  <a href="https://www.fda.gov/medwatch" target="_blank" rel="noopener noreferrer" className="text-brand-600 text-sm font-semibold hover:underline inline-flex items-center gap-1">www.fda.gov/medwatch <ExternalLink size={12} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-200 text-center">
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