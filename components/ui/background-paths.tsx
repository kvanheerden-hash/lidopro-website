import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

function FloatingPaths({ position }: { position: number }) {
    const prefersReducedMotion = useReducedMotion();
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(14, 165, 233, ${0.05 + i * 0.02})`, // LidoPro brand blue
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-brand-500/20"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={prefersReducedMotion ? {} : {
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    badge,
    className
}: {
    title?: string;
    subtitle?: string;
    badge?: React.ReactNode;
    className?: string;
}) {
    const words = title.split(" ");

    return (
        <div className={cn(
            "relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden [background:linear-gradient(to_right,#003F51,#006481,#003F51)]",
            className
        )}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-8 pb-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto"
                >
                    {badge && (
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mb-8"
                        >
                            {badge}
                        </motion.div>
                    )}

                    <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 tracking-wide font-sans leading-tight">
                        {/* First two words each on their own line */}
                        {words.slice(0, 2).map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className={`block${word === "NON-ADDICTIVE" ? " font-bold" : " font-light"}`}
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-white"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                        {/* Last two words share one line, light weight like EFFECTIVE */}
                        <span className="block font-light">
                            {words.slice(2).map((word, i) => {
                                const wordIndex = i + 2;
                                return (
                                    <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                                        {word.split("").map((letter, letterIndex) => (
                                            <motion.span
                                                key={`${wordIndex}-${letterIndex}`}
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    delay: wordIndex * 0.1 + letterIndex * 0.03,
                                                    type: "spring",
                                                    stiffness: 150,
                                                    damping: 25,
                                                }}
                                                className="inline-block text-white"
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                );
                            })}
                        </span>
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-lg text-white max-w-4xl mx-auto leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}