"use client";

import { Award } from "lucide-react";
import { certifications } from "@/lib/data";

export function Certifications() {
    return (
        <section id="certifications" className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Certifications & Achievements</h2>
            <p className="text-sm text-muted-foreground mb-8">Credentials and milestones from training and assessments.</p>

            <ul className="space-y-3 rounded-2xl border border-border/70 bg-card/20 p-5 sm:p-6">
                {certifications.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <Award className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
