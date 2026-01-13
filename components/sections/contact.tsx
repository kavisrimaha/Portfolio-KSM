"use client";

import { BentoCard } from "@/components/ui/bento-card";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contact Info */}
                <BentoCard className="flex flex-col justify-between h-full bg-primary text-primary-foreground min-h-[300px]">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Let's work together.</h2>
                        <p className="text-primary-foreground/80">
                           Open to full-stack Python development opportunities and actively seeking roles where I can contribute to scalable, end-to-end web solutions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors">
                            <Mail className="w-5 h-5" />
                            {personalInfo.email}
                        </a>
                        <div className="flex gap-4">
                            {personalInfo.socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </BentoCard>

                {/* Form */}
                <BentoCard>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <input id="name" type="text" className="w-full p-2 rounded-md bg-secondary border-none focus:ring-2 focus:ring-accent outline-none" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input id="email" type="email" className="w-full p-2 rounded-md bg-secondary border-none focus:ring-2 focus:ring-accent outline-none" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea id="message" rows={4} className="w-full p-2 rounded-md bg-secondary border-none focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <Button className="w-full gap-2">
                            Send Message
                            <Send className="w-4 h-4" />
                        </Button>
                    </form>
                </BentoCard>
            </div>
        </section>
    );
}
