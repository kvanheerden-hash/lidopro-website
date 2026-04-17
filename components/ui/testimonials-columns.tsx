"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface TestimonialData {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialData[];
  duration?: number;
}) => {
  return (
    <div className={cn("relative overflow-hidden", props.className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-brand-500/5 max-w-xs w-full hover:border-brand-200 transition-colors" 
                  key={`${index}-${i}`}
                >
                  <div className="text-slate-600 leading-relaxed italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover border-2 border-slate-50 shadow-sm"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight text-slate-900 text-sm">{name}</div>
                      <div className="text-xs font-medium text-brand-600 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const lidoTestimonials: TestimonialData[] = [
  {
    text: "LidoPro has changed how I manage my post-therapy soreness. It's effective without the systemic side effects of oral medications.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Sarah Jenkins",
    role: "Physical Therapy Patient",
  },
  {
    text: "I prescribe LidoPro because it offers my patients a safe, non-addictive multimodal approach to chronic pain management.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Dr. Aaron Patel",
    role: "Board Certified Physician",
  },
  {
    text: "The patch is the only one I've tried that stays on during activity. The Hydrogel technology makes a massive difference in stability.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Mark Thompson",
    role: "Marathon Runner",
  },
  {
    text: "Transitioning off opioids was difficult until we introduced LidoPro. It managed my breakthrough pain without the foggy side effects.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Elena Rodriguez",
    role: "Post-Op Patient",
  },
  {
    text: "The hands-free applicator on the ointment is a game changer. I get deep relief exactly where I need it without any mess.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    name: "James K.",
    role: "Chronic Back Pain Sufferer",
  },
  {
    text: "Clinical grade topical treatments like LidoPro are essential for multimodal pain protocols in modern rheumatology.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Dr. Linda Morse",
    role: "Rheumatologist",
  },
  {
    text: "I was skeptical about a topical NSAID until I tried the LidoPro patch. The concentration is far superior to drugstore alternatives.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Karen S.",
    role: "Arthritis Patient",
  },
  {
    text: "It's rare to find a non-narcotic solution that actually impacts inflammation at this level. My patients return to routine faster.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Dr. Victor Chen",
    role: "Orthopedic Surgeon",
  },
  {
    text: "Working at a desk all day destroyed my neck. LidoPro ointment provides that cooling comfort that lets me finish my workday.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
    name: "Samantha Lee",
    role: "Software Engineer",
  },
];

const firstColumn = lidoTestimonials.slice(0, 3);
const secondColumn = lidoTestimonials.slice(3, 6);
const thirdColumn = lidoTestimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-brand-50 text-brand-700 border border-brand-100 py-1 px-4 rounded-full text-xs font-bold uppercase tracking-widest">
              Patient Success
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 text-center mb-6">
            What our users say
          </h2>
          <p className="text-center text-slate-600 text-lg leading-relaxed">
            Trusted by medical professionals and thousands of patients nationwide for effective, non-addictive pain management.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={26} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={24} />
        </div>
      </div>
    </section>
  );
};