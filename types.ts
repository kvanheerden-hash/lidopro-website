import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
}

export interface ProductFeature {
  label: string;
  value: string;
}