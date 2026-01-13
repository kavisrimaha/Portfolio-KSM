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
                    <BentoCard key={index} className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center group">
                        <div className="flex-1">
                            <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{exp.role}</h3>
                            <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-balance text-muted-foreground">{exp.description}</p>
                        </div>
                        <div className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-secondary px-2 py-1 rounded">
                            {exp.duration}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
