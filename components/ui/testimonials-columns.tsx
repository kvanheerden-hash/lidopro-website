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
                      alt={`${name}, ${role}`}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover border-2 border-slate-50 shadow-sm"
                    />
                    <div className="flex flex-col">
                      <div className="font-bold tracking-tight text-slate-900 text-sm">{name}</div>
                      <div className="text-xs font-medium tracking-tight" style={{ color: '#006481' }}>{role}</div>
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
  // --- Patients: Ointment ---
  {
    text: "LidoPro ointment is the only thing that helps with pain. Best product ever made!",
    image: "https://ui-avatars.com/api/?name=AJ+W&background=006481&color=fff&size=100&bold=true",
    name: "AJ W.",
    role: "LidoPro Ointment User",
  },
  {
    text: "I have scoliosis and I had a spinal fusion at age 14. I have 18\" & 16\" rods on either side of my spine. I am now 42 and have been suffering for 28 years! In those 28 years, I have found one product that helps ease the pain... LidoPro. It's even better than the opioids!",
    image: "https://ui-avatars.com/api/?name=Sarah+G&background=006481&color=fff&size=100&bold=true",
    name: "Sarah G.",
    role: "LidoPro Ointment User",
  },
  {
    text: "I love this!! I was living on Ibuprofen before it.",
    image: "https://ui-avatars.com/api/?name=Lindsey+F&background=006481&color=fff&size=100&bold=true",
    name: "Lindsey F.",
    role: "LidoPro Ointment User",
  },
  {
    text: "This ointment helps my mother with Arthritis pain.",
    image: "https://ui-avatars.com/api/?name=John+Y&background=006481&color=fff&size=100&bold=true",
    name: "John Y.",
    role: "LidoPro Ointment User",
  },
  {
    text: "I have been using LidoPro on my neck, back, and left shoulder. I have spinal stenosis and it helps with the pain. I'd rather use this than take pain meds.",
    image: "https://ui-avatars.com/api/?name=Frank+R&background=006481&color=fff&size=100&bold=true",
    name: "Frank R.",
    role: "LidoPro Ointment User",
  },
  {
    text: "LidoPro® is the best product I have found for my aching joints, back, and shoulder pain. I even rub some on the back of my neck when I have a migraine. My mother uses it on her hands for arthritis and at night for her shoulder pain. We swear by this product!",
    image: "https://ui-avatars.com/api/?name=Jessica+H&background=006481&color=fff&size=100&bold=true",
    name: "Jessica H.",
    role: "LidoPro Ointment User",
  },
  {
    text: "I've had 5 back operations and 2 fusions on my back. I have a shoulder that needs to be replaced, and I'm in constant pain. My relative let me borrow LidoPro®, and it gave me the relief I've been searching for.",
    image: "https://ui-avatars.com/api/?name=Robert+T&background=006481&color=fff&size=100&bold=true",
    name: "Robert T.",
    role: "LidoPro Ointment User",
  },
  // --- Patients: Patch ---
  {
    text: "I love your product! It's absolutely amazing on my chronic neck and back pain. I don't like taking pills, so this helps me a lot and lets me go to work.",
    image: "https://ui-avatars.com/api/?name=Maria+P&background=006481&color=fff&size=100&bold=true",
    name: "Maria P.",
    role: "LidoPro Patch User",
  },
  {
    text: "A friend of mine recommended LidoPro Patch after I complained about recurring tendon and ligament pain from an injury I had 5 years ago. Your product is amazingly effective! I've already talked to my doctor about it.",
    image: "https://ui-avatars.com/api/?name=David+D&background=006481&color=fff&size=100&bold=true",
    name: "David D.",
    role: "LidoPro Patch User",
  },
  {
    text: "I've been dealing with lower back pain from years of heavy lifting at work. LidoPro® Patch provides steady relief throughout my shifts without the side effects of pain meds. It stays in place and keeps me moving!",
    image: "https://ui-avatars.com/api/?name=Mike+D&background=006481&color=fff&size=100&bold=true",
    name: "Mike D.",
    role: "LidoPro Patch User",
  },
  // --- Providers: Ointment ---
  {
    text: "My patients love LidoPro Ointment and ask for more information all of the time. I literally use the product every day myself and have seen the benefits to our patients. LidoPro® absolutely sells itself once it's used by patients. This is a great alternative to narcotics and opioids.",
    image: "https://ui-avatars.com/api/?name=Harold+G&background=006481&color=fff&size=100&bold=true",
    name: "Harold G.",
    role: "OTR/L, CHT",
  },
  {
    text: "Having treated many patients for pain with a variety of products throughout my career, I personally find LidoPro Ointment to be the most effective topical available. The unique formulation along with Lidocaine penetrates the dermis and provides actual relief.",
    image: "https://ui-avatars.com/api/?name=Tanvir+D&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Tanvir D.",
    role: "Physician",
  },
  {
    text: "As a physician focused on non-opioid pain management, I often turn to LidoPro® Ointment for patients who need relief from chronic inflammation and soft tissue injuries. The combination of lidocaine and NSAIDs provides excellent results without the risks of systemic side effects.",
    image: "https://ui-avatars.com/api/?name=Anthony+K&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Anthony K.",
    role: "Pain Management Physician",
  },
  {
    text: "Many of my patients with arthritis or joint pain struggle with oral medications due to gastrointestinal issues or other contraindications. LidoPro® Ointment offers them a safe and effective alternative that directly targets the affected area, improving mobility and reducing pain.",
    image: "https://ui-avatars.com/api/?name=Rachel+S&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Rachel S.",
    role: "Physician",
  },
  {
    text: "LidoPro Ointment has been a great addition to my practice for patients dealing with persistent musculoskeletal pain. The combination of anesthetic and anti-inflammatory properties makes it an effective alternative to oral medications.",
    image: "https://ui-avatars.com/api/?name=Michael+R&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Michael R.",
    role: "Physician",
  },
  // --- Providers: Patch ---
  {
    text: "I frequently recommend LidoPro Patch for my patients with lower back and knee pain. It's an excellent alternative for those who want to avoid systemic medications but need lasting relief.",
    image: "https://ui-avatars.com/api/?name=Kevin+J&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Kevin J.",
    role: "Physician",
  },
  {
    text: "Many of my patients suffer from work-related musculoskeletal injuries, and LidoPro® Patch has been an outstanding treatment option. It provides localized relief without interfering with their ability to function.",
    image: "https://ui-avatars.com/api/?name=Lisa+M&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Lisa M.",
    role: "Occupational Medicine Physician",
  },
  {
    text: "LidoPro Patch has become a staple in my practice for patients dealing with chronic pain who are wary of opioids. It's easy to use, provides consistent relief, and fits seamlessly into multimodal pain management strategies.",
    image: "https://ui-avatars.com/api/?name=Aaron+S&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Aaron S.",
    role: "Pain Management Physician",
  },
  {
    text: "I've incorporated LidoPro Patch into my post-surgical pain management plans for patients recovering from knee and hip procedures. It helps reduce pain and inflammation without the risks associated with narcotic pain relievers.",
    image: "https://ui-avatars.com/api/?name=Rachel+K&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Rachel K.",
    role: "Orthopedic Surgeon",
  },
  {
    text: "I am a physical therapist and have personally used this product and it works wonderfully! My patients have also received relief. If you haven't tried it you should.",
    image: "https://ui-avatars.com/api/?name=Kim+C&background=006481&color=fff&size=100&bold=true",
    name: "Dr. Kim C.",
    role: "Physical Therapist",
  },
];

const firstColumn = lidoTestimonials.slice(0, 7);
const secondColumn = lidoTestimonials.slice(7, 14);
const thirdColumn = lidoTestimonials.slice(14, 21);

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
            What our customers say
          </h2>
          <p className="text-center text-slate-600 text-lg leading-relaxed">
            Trusted by medical professionals and thousands of patients nationwide for effective, non-addictive pain management.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={80} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={95} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={88} />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-400 mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          * Individual results may vary. Testimonials reflect the personal experiences of individual users and are not necessarily representative of typical outcomes. Some testimonials may be from healthcare professionals who were provided product samples.
        </motion.p>
      </div>
    </section>
  );
};