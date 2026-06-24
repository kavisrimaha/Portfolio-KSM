"use client";

import { useState } from "react";
import { skills } from "@/lib/data";

const VISIBLE_COUNT = 5;

export function Skills() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    return (
        <section id="skills" className="max-w-6xl mx-auto px-4">
            <div className="mb-10">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Expertise</h2>
                <p className="mt-1 text-sm text-muted-foreground">Stack and working style, kept compact.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl border border-border/70 bg-border/50 overflow-hidden">
                {skills.map((skill) => {
                    const isOpen = expanded[skill.category];
                    const needsMore = skill.items.length > VISIBLE_COUNT;
                    const visibleItems = needsMore && !isOpen ? skill.items.slice(0, VISIBLE_COUNT) : skill.items;
                    const subtitle = "subtitle" in skill ? skill.subtitle : undefined;

                    return (
                        <div
                            key={skill.category}
                            className="bg-background p-5 sm:p-6 flex flex-col min-h-[11rem]"
                        >
                            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                {skill.category}
                            </h3>
                            {subtitle ? (
                                <p className="mt-2 text-xs leading-relaxed text-muted-foreground/85 max-w-md">
                                    {subtitle}
                                </p>
                            ) : null}
                            <ul className="mt-4 flex flex-wrap gap-2 list-none" aria-label={skill.category}>
                                {visibleItems.map((item) => (
                                    <li key={item}>
                                        <span className="inline-block rounded-md border border-border/80 bg-secondary/30 px-2.5 py-1 text-xs text-foreground/90">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            {needsMore ? (
                                <button
                                    type="button"
                                    onClick={() =>
                                        setExpanded((s) => ({
                                            ...s,
                                            [skill.category]: !isOpen,
                                        }))
                                    }
                                    className="mt-4 self-start text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
                                >
                                    {isOpen ? "View less" : `View more (${skill.items.length - VISIBLE_COUNT})`}
                                </button>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
