import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent/20">
            <Navbar />

            <div className="pt-24 md:pt-32 space-y-24 md:space-y-32 pb-24">
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </div>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
                <p>© {new Date().getFullYear()} Premium Portfolio. Built with Next.js & Tailwind.</p>
            </footer>
        </main>
    );
}
