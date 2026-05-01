import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Products',
		links: [
			{ title: 'LidoPro Ointment', href: ROUTES.OINTMENT },
			{ title: 'LidoPro Patch', href: ROUTES.PATCH },
			{ title: 'What it Treats', href: ROUTES.TREATS },
			{ title: 'Safety Info', href: ROUTES.SAFETY },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: ROUTES.FAQ },
			{ title: 'Ask Your Provider', href: ROUTES.PROVIDER },
			{ title: 'How to Access', href: ROUTES.DISTRIBUTION },
			{ title: 'Privacy Policy', href: ROUTES.PRIVACY },
			{ title: 'Terms of Use', href: ROUTES.TERMS },
		],
	},
];

export function Footer() {
	return (
		<footer className="w-full text-slate-300 py-12 lg:py-20 border-t border-slate-800 relative overflow-hidden" style={{ backgroundColor: '#001920' }}>
			{/* Brand Glow Effect */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent blur-sm" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(colors.brand.500/10%),transparent)] pointer-events-none" />

			<div className="container mx-auto px-6 max-w-7xl relative z-10">
				<div className="grid w-full gap-12 xl:grid-cols-3 xl:gap-8">
					<AnimatedContainer className="space-y-6">
						<div className="flex items-center gap-2">
                            <img 
                                src="https://res.cloudinary.com/dwt8avwjv/image/upload/v1765922380/Lidopro_Logo_2_ce8lhq.png" 
                                alt="LidoPro® Logo"
                                loading="lazy"
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </div>
						<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
							Providing effective, non-addictive topical pain relief trusted by physicians and patients nationwide.
						</p>
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-widest">
                            <ShieldCheck size={14} />
                            <span>Clinical Grade Excellence</span>
                        </div>
                        <p className="text-slate-500 text-xs">
						    © {new Date().getFullYear()} LidoPro®. All rights reserved.
					    </p>
					</AnimatedContainer>

					<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<div>
									<h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">{section.label}</h3>
									<ul className="text-slate-400 space-y-3 text-sm">
										{section.links.map((link) => (
											<li key={link.title}>
												<Link
													to={link.href}
													className="hover:text-brand-400 inline-flex items-center transition-all duration-300"
												>
													{link.icon && <link.icon className="me-2 size-4" />}
													{link.title}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</AnimatedContainer>
						))}
					</div>
				</div>

                <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-slate-500 max-w-2xl text-center md:text-left leading-relaxed">
                        Disclaimer: The information on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. LidoPro products should be used only as directed on the label.
                    </p>
                    <div className="flex gap-4">
                        <Link to={ROUTES.PRIVACY} className="text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-tighter">Privacy</Link>
                        <Link to={ROUTES.TERMS} className="text-[10px] text-slate-500 hover:text-slate-300 uppercase tracking-tighter">Terms</Link>
                    </div>
                </div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: 10, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
