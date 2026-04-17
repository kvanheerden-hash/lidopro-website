import { NavItem, FAQItem, Testimonial, Benefit, SEOMetadata } from './types';
import React from 'react';

export const ROUTES = {
  HOME: '/',
  OINTMENT: '/lidopro-ointment',
  PATCH: '/lidopro-patch',
  TREATS: '/what-it-treats',
  FAQ: '/faq',
  PROVIDER: '/ask-your-provider',
  SAFETY: '/safety-information',
  PRIVACY: '/privacy-policy',
  TERMS: '/terms-of-use',
  RETURNS: '/refunds-returns',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'LidoPro Ointment', path: ROUTES.OINTMENT },
  { label: 'LidoPro Patch', path: ROUTES.PATCH },
  { label: 'How it Helps', path: ROUTES.TREATS },
  { label: 'FAQ', path: ROUTES.FAQ },
  { label: 'Ask Your Provider', path: ROUTES.PROVIDER },
];

export const SEO_DATA: Record<string, SEOMetadata> = {
  [ROUTES.HOME]: {
    title: 'LidoPro® | Effective Non-Addictive Pain Relief',
    description: 'Physicians trust LidoPro® for safe and effective pain relief. Discover our advanced Ointment and Patch solutions for targeted comfort.',
  },
  [ROUTES.OINTMENT]: {
    title: 'LidoPro® Ointment | Deep Penetrating Relief',
    description: 'Our Ointment features anesthetic, analgesic, and anti-inflammatory agents with a hands-free applicator for deep, localized treatment.',
  },
  [ROUTES.PATCH]: {
    title: 'LidoPro® Patch | Long-Lasting Comfort',
    description: 'The dual active ingredients work together to relieve localized pain, helping support improved mobility and overall comfort.',
  },
  [ROUTES.TREATS]: {
    title: 'What LidoPro® Treats | Targeted Pain Management',
    description: 'Learn about the conditions LidoPro® helps manage, from muscle aches and back pain to minor arthritis and joint discomfort.',
  },
  [ROUTES.FAQ]: {
    title: 'FAQ | Common Questions About LidoPro®',
    description: 'Find answers about LidoPro® usage, safety, ingredients, and how to discuss pain management options with your healthcare provider.',
  },
  [ROUTES.PROVIDER]: {
    title: 'Ask Your Provider | LidoPro® Resources',
    description: 'Resources to help you discuss LidoPro® with your physician, including conversation starters and printable checklists.',
  },
  [ROUTES.SAFETY]: {
    title: 'Safety Information | Using LidoPro® Responsibly',
    description: 'Important safety information, warnings, and directions for using LidoPro® products safely and effectively.',
  },
};

export const HOME_CONTENT = {
  hero: {
    headline: 'EFFECTIVE NON-ADDICTIVE PAIN RELIEF.',
    subhead: 'Physicians trust LidoPro® for safe and effective pain relief. Advanced topical solutions designed for deep, localized comfort.',
    trustSignal: 'Trusted by Pain Management Specialists Nationwide',
  },
  benefits: [
    { title: 'Deep Penetrating', description: 'Clinical formulas designed to reach the source of pain.', iconName: 'Layers' },
    { title: 'Long Lasting', description: 'Sustained release technology for up to 12 hours of pain relief.', iconName: 'Clock' },
    { title: 'Soothing Relief', description: 'Immediate cooling relief followed by a gentle numbing sensation.', iconName: 'Activity' },
  ] as Benefit[],
  testimonials: [
    {
      quote: "LidoPro has changed how I manage my post-therapy soreness. It's effective without the systemic side effects of oral medications.",
      author: "Sarah J.",
      role: "Physical Therapy Patient"
    },
    {
      quote: "I prescribe LidoPro because it offers my patients a safe, non-addictive multimodal approach to pain management.",
      author: "Dr. A. Patel",
      role: "Board Certified Physician"
    }
  ] as Testimonial[]
};

export const FAQ_CONTENT: FAQItem[] = [
  {
    question: "What is LidoPro®?",
    answer: "LidoPro® is a line of premium topical pain relief products, including an Ointment and a Patch, formulated with anesthetic, analgesic, and anti-inflammatory agents to provide targeted relief."
  },
  {
    question: "Is it non-addictive?",
    answer: "Yes. LidoPro® products use topical ingredients like Lidocaine, Menthol, Capsaicin, and Methyl Salicylate, which work locally on the body and do not carry the addiction risks associated with opioids."
  },
  {
    question: "How quickly does it work?",
    answer: "Most users feel a soothing cooling sensation immediately upon application (due to Menthol), with deeper numbing relief typically developing within 15 to 60 minutes."
  },
  {
    question: "Can I use it with other products?",
    answer: "While LidoPro® acts locally, you should always consult your healthcare provider before combining it with other medications, skin products, or treatments."
  },
  {
    question: "Where can I get it?",
    answer: "LidoPro® is often available through physician offices, independent pharmacies and mail-order pharmacies. Ask your provider for the best way to obtain it."
  },
  {
    question: "Ointment vs Patch—how to choose?",
    answer: "The Ointment is ideal for irregular areas (knees, elbows, hands) and allows for massage. The Patch is excellent for large, flat areas (back, shoulders, thighs) where you want steady, mess-free application."
  },
  {
    question: "Is it safe for sensitive skin?",
    answer: "LidoPro® is formulated to be gentle, but irritation can occur. We recommend performing a small patch test before full use. Discontinue if rash or irritation develops."
  },
  {
    question: "Who should not use it?",
    answer: "Individuals with known allergies to any of the active or inactive ingredients should avoid these products. Consult the Safety Information page and your doctor for specific contraindications."
  }
];

export const SAFETY_WARNINGS = [
  "For external use only.",
  "Do not use on wounds or damaged skin.",
  "Avoid contact with eyes.",
  "Do not bandage tightly or apply local heat (such as heating pads) to the area of use.",
  "Stop use and ask a doctor if condition worsens, or if symptoms persist for more than 7 days.",
  "Keep out of reach of children. If swallowed, get medical help or contact a Poison Control Center right away."
];