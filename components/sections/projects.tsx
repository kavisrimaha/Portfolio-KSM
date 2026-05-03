"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [active, setActive] = useState(0);

    const updateScrollState = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        const { scrollLeft, scrollWidth, clientWidth } = el;
        const max = scrollWidth - clientWidth;
        setCanScrollLeft(scrollLeft > 12);
        setCanScrollRight(scrollLeft < max - 12);

        const cards = el.querySelectorAll("[data-project-card]");
        let nearest = 0;
        let best = Infinity;
        cards.forEach((card, i) => {
            const r = (card as HTMLElement).getBoundingClientRect();
            const elRect = el.getBoundingClientRect();
            const dist = Math.abs(r.left + r.width / 2 - (elRect.left + elRect.width / 2));
            if (dist < best) {
                best = dist;
                nearest = i;
            }
        });
        setActive(nearest);
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener("scroll", updateScrollState, { passive: true });
        const ro = new ResizeObserver(updateScrollState);
        ro.observe(el);
        return () => {
            el.removeEventListener("scroll", updateScrollState);
            ro.disconnect();
        };
    }, [updateScrollState]);

    const scrollByDirection = (dir: -1 | 1) => {
        const el = scrollRef.current;
        if (!el) return;
        const first = el.querySelector("[data-project-card]") as HTMLElement | null;
        const gap = 24;
        const step = (first?.offsetWidth ?? 400) + gap;
        el.scrollBy({ left: dir * step, behavior: "smooth" });
    };

    const scrollToIndex = (index: number) => {
        const el = scrollRef.current;
        const card = el?.querySelectorAll("[data-project-card]")[index] as HTMLElement | undefined;
        card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    return (
        <section id="projects" className="py-20 scroll-mt-24">
            <div className="max-w-6xl mx-auto px-4 mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Layers className="w-8 h-8 text-accent shrink-0" />
                        Featured Work
                    </h2>
                    <p className="text-muted-foreground text-sm mt-2 max-w-md">
                        Scroll horizontally or use arrows to browse projects. Each card opens GitHub in a new tab.
                    </p>
                </motion.div>

                <div className="flex items-center gap-2 shrink-0">
                    <button
                        type="button"
                        aria-label="Previous projects"
                        onClick={() => scrollByDirection(-1)}
                        disabled={!canScrollLeft}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-secondary hover:border-accent/40 disabled:opacity-35 disabled:pointer-events-none"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next projects"
                        onClick={() => scrollByDirection(1)}
                        disabled={!canScrollRight}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:bg-secondary hover:border-accent/40 disabled:opacity-35 disabled:pointer-events-none"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="relative">
                {/* Edge fades */}
                <div
                    className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 sm:w-16 bg-gradient-to-r from-background to-transparent transition-opacity duration-300"
                    style={{ opacity: canScrollLeft ? 1 : 0 }}
                    aria-hidden
                />
                <div
                    className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 sm:w-16 bg-gradient-to-l from-background to-transparent transition-opacity duration-300"
                    style={{ opacity: canScrollRight ? 1 : 0 }}
                    aria-hidden
                />

                <div
                    ref={scrollRef}
                    className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-2 sm:px-8 lg:px-12"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            data-project-card
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: index * 0.06 }}
                            className="snap-center shrink-0 w-[min(100vw-2rem,420px)] sm:w-[400px]"
                        >
                            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-lg shadow-black/10 transition hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 dark:shadow-black/40">
                                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />
                                </div>

                                <div className="flex flex-1 flex-col gap-3 p-6 pt-5">
                                    <h3 className="text-xl font-bold leading-snug tracking-tight">{project.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-5">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex gap-3 pt-2">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/20"
                                            >
                                                <link.icon className="h-4 w-4" />
                                                View on GitHub
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-2">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Go to project ${i + 1}`}
                        aria-current={active === i}
                        onClick={() => scrollToIndex(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            active === i ? "w-8 bg-accent" : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
