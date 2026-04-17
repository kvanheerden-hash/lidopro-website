import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FAQItemProps[]>;
  className?: string;
}

// Main reusable FAQ component
export const FAQ: React.FC<FAQProps> = ({ 
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
  ...props 
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section 
      className={cn(
        "relative overflow-hidden bg-background px-4 py-12 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs 
        categories={categories}
        selected={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <FAQList 
        faqData={faqData}
        selected={selectedCategory} 
      />
    </section>
  );
};

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <span className="mb-4 bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text font-bold uppercase tracking-widest text-transparent text-sm">
      {subtitle}
    </span>
    <h2 className="mb-12 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">{title}</h2>
    <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-brand-500/10 to-brand-500/5 blur-3xl" />
  </div>
);

const FAQTabs = ({ categories, selected, setSelected }: { categories: Record<string, string>; selected: string; setSelected: (k: string) => void }) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-full border px-6 py-2 text-sm font-semibold transition-colors duration-500",
          selected === key
            ? "border-brand-600 text-white"
            : "border-slate-200 bg-white text-slate-500 hover:text-brand-600 hover:border-brand-200"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-brand-600 to-brand-500"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

const FAQList = ({ faqData, selected }: { faqData: Record<string, FAQItemProps[]>; selected: string }) => (
  <div className="mx-auto mt-16 max-w-3xl">
    <AnimatePresence mode="wait">
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {faqData[selected]?.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-2xl border transition-all duration-300",
        isOpen ? "bg-white shadow-xl border-brand-100" : "bg-white/50 border-slate-100 hover:border-slate-200"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span
          className={cn(
            "text-lg font-bold transition-colors",
            isOpen ? "text-brand-900" : "text-slate-700"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-brand-600" : "text-slate-400"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : "0px", 
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? "16px" : "0px" 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-6"
      >
        <div className="text-slate-600 leading-relaxed pb-4">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
};