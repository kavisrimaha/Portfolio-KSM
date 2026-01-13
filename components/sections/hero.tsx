"use client";
import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2, MapPin, Eye, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Hero() {
    return (
        <section id="hero" className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
                {/* Name Block - Large */}
                <BentoCard className="md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-end min-h-[300px] bg-gradient-to-br from-primary/5 to-primary/10 border-primary/10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-accent">
                            {personalInfo.name}
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-4">
                            {personalInfo.role}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-sm mb-6">
                            {personalInfo.description}
                        </p>

                    </motion.div>
                </BentoCard>

                {/* Availability */}
                <BentoCard className="md:col-span-1 flex flex-col justify-center items-center gap-2 bg-emerald-500/5 border-emerald-500/20">
                    <div className="relative flex items-center justify-center w-4 h-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <p className="font-medium text-emerald-600 dark:text-emerald-400">{personalInfo.availability}</p>
                </BentoCard>

                {/* Location / Status */}
                <BentoCard className="md:col-span-1 flex flex-col justify-between group">
                    <div className="flex justify-between items-start">
                        <MapPin className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                        <span className="text-xs font-mono text-muted-foreground">LOC</span>
                    </div>
                    <div>
                        <p className="font-bold text-lg">{personalInfo.location}</p>
                        <p className="text-sm text-muted-foreground">{personalInfo.timezone}</p>
                    </div>
                </BentoCard>

                {/* Tech Stack Preview */}
                <BentoCard className="md:col-span-1 lg:col-span-1 row-span-1 flex flex-col justify-between overflow-hidden group">
                    <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Code2 className="w-32 h-32" />
                    </div>
                    <div className="z-10">
                        <h3 className="font-semibold mb-2">Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-secondary rounded-md text-xs font-mono">Python</span>
                            <span className="px-2 py-1 bg-secondary rounded-md text-xs font-mono">Django</span>
                            <span className="px-2 py-1 bg-secondary rounded-md text-xs font-mono">SQL</span>
                        </div>
                    </div>
                </BentoCard>

                {/* CTA */}
                {/* Resume Card (Combined CTA) */}
                <BentoCard noHover className="md:col-span-1 lg:col-span-1 bg-primary text-primary-foreground flex flex-col justify-center items-center gap-4 text-center cursor-default">
                    <div className="flex flex-col gap-2 w-full px-4">
                        <Button asChild variant="secondary" size="sm" className="w-full justify-between group">
                            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                                View Resume
                                <Eye className="w-4 h-4" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="w-full justify-between group bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground">
                            <a href={personalInfo.resumeUrl} download>
                                Download Resume
                                <Download className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
}
