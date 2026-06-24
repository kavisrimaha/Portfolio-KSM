import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { personalInfo } from "@/lib/data";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/20">
            <Navbar />

            <div className="pt-24 md:pt-32 space-y-24 md:space-y-32 pb-24">
                <Hero />
                <Skills />
                <Experience />
                <Education />
                <Certifications />
                <Projects />
                <Contact />
            </div>

            <footer className="py-10 text-center text-xs text-muted-foreground/90 border-t border-border/60">
                <p>
                    © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind.
                </p>
            </footer>
        </main>
    );
}
