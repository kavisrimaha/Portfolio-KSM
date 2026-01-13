"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <Layers className="w-8 h-8 text-accent" />
                    Featured Work
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative h-[450px] w-full rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="transform transition-all duration-300">
                                <h3 className="text-3xl font-bold text-white mb-2 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                    {project.title}
                                </h3>

                                {/* Hidden details that slide up on hover */}
                                <div className="max-h-0 group-hover:max-h-96 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                                    <p className="text-gray-100 mb-4 text-sm leading-relaxed mt-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        {project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform duration-200"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <link.icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
