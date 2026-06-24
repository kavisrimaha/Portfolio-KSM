"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Experience</h2>
            <p className="text-sm text-muted-foreground mb-8">Internships aligned with production delivery and Agile workflows.</p>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <BentoCard key={index} className="group">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                            <div className="min-w-0 flex-1">
                                <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-xs text-muted-foreground/80 mt-1">{exp.location}</p>
                            </div>
                            <div className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1.5 rounded-md shrink-0 self-start">
                                {exp.duration}
                            </div>
                        </div>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                            {exp.highlights.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
