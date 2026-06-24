"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { education } from "@/lib/data";

export function Education() {
    return (
        <section id="education" className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Education</h2>
            <p className="text-sm text-muted-foreground mb-8">Academic background and performance.</p>

            <div className="space-y-4">
                {education.map((item, index) => (
                    <BentoCard key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h3 className="font-bold text-lg">{item.degree}</h3>
                            <p className="text-muted-foreground">{item.school}</p>
                            <p className="text-sm text-muted-foreground/90 mt-1">{item.details}</p>
                        </div>
                        <div className="text-sm font-mono text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1.5 rounded-md shrink-0 self-start sm:self-center">
                            {item.duration}
                        </div>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
