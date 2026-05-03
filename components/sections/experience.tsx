"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
    return (
        <section id="experience" className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-accent" />
                Experience
            </h2>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <BentoCard key={index} className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-between items-start lg:items-start group">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{exp.role}</h3>
                            <p className="text-muted-foreground">{exp.company}</p>
                            <p className="text-xs text-muted-foreground/80 mt-1">{exp.location}</p>
                        </div>
                        <div className="flex-[1.25] min-w-0">
                            <p className="text-sm text-balance text-muted-foreground leading-relaxed">{exp.description}</p>
                        </div>
                        <div className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1.5 rounded-md shrink-0 self-start lg:self-center">
                            {exp.duration}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
