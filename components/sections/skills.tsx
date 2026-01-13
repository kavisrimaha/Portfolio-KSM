"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { Terminal } from "lucide-react";
import { skills } from "@/lib/data";

export function Skills() {
    return (
        <section id="skills" className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Terminal className="w-8 h-8 text-accent" />
                Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                    <BentoCard key={index} className="col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
                            <h3 className="font-bold">{skill.category}</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {skill.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </BentoCard>
                ))}
            </div>
        </section>
    );
}
