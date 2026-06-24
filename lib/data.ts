import { Code2, Layout, Server, Database, Brain, Settings, Github, Linkedin } from "lucide-react";

export const personalInfo = {
    name: "Kavi Sri Maha",
    role: "Full Stack Developer",
    title: "Full Stack Developer",
    description:
        "Full Stack Developer (Fresher, 2026) with hands-on experience in Python, FastAPI, Django, REST API design, and SQL databases (MySQL, PostgreSQL). Built a RAG pipeline using LangChain, ChromaDB, and Sentence Transformers. Experienced with JWT authentication, SQLAlchemy ORM, Agile/SDLC, and Git/GitHub. CGPA 8.1/10, no arrears, with honors.",
    contactBlurb:
        "Open to full-stack Python and AI engineering roles where I can ship scalable APIs, intelligent features, and polished user experiences.",
    location: "Tenkasi, Tamil Nadu",
    timezone: "IST",
    availability: "Available for work",
    email: "kavisri4812@gmail.com",
    phone: "7904991178",
    resumeUrl: "/resume_kavi_sri_maha_python.pdf",
    socials: [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/kavi-sri-maha/",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "https://github.com/kavisrimaha",
            icon: Github,
        },
    ],
};

export const experiences = [
    {
        role: "Software Development Intern",
        company: "ANCIT Consulting",
        location: "Dindigul",
        duration: "Aug – Sep 2025",
        highlights: [
            "Owned end-to-end delivery of a live Trainer Tracking System for the Naan Mudhalvan state government program (Java, Node.js, REST APIs), enabling real-time zone-wise and hub-wise session tracking for trainers and admins.",
            "Built geo-tagged photo capture for session verification, 12-week curriculum progress tracking, student attendance logging, and expense reporting in one unified platform.",
            "Delivered role-based access control (RBAC) for trainer and admin roles, and built RESTful API endpoints for real-time data submission and session management across Agile sprint cycles.",
        ],
    },
    {
        role: "Technical Support Intern",
        company: "Kottravai Enterprises",
        location: "Tenkasi",
        duration: "Jun – Jul 2025",
        highlights: [
            "Built and shipped a responsive company website end-to-end (PHP, CodeIgniter, MySQL, Bootstrap, JavaScript) with mobile-first UI and RESTful API integrations for core business functions.",
            "Improved frontend page load speed by ~35% by optimizing Bootstrap components and asset loading.",
        ],
    },
];

export const education = [
    {
        degree: "B.E. Computer Science and Engineering",
        school: "University College of Engineering, Dindigul",
        duration: "May 2026",
        details: "CGPA: 8.1 / 10 · No Arrears · With Honors",
    },
];

export const projects = [
    {
        title: "AI Chatbot Platform with Authentication",
        description:
            "Full-stack AI chatbot with JWT authentication, persistent multi-turn conversation storage, and a React frontend on a FastAPI REST backend. Groq API streams real-time responses at sub-200ms latency; SQLAlchemy ORM handles users and chat history.",
        tech: ["React", "FastAPI", "Python", "Groq API", "SQLAlchemy", "JWT", "Bootstrap"],
        image:
            "https://images.unsplash.com/photo-1531746797559-6f088ce039ca?q=80&w=2070&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha/chatbot-project" }],
    },
    {
        title: "Semantic AI Ticket Routing System",
        description:
            "NLP classification engine on 28,587 enterprise support tickets using Sentence-BERT embeddings, reaching 94.2% accuracy and 0.92 F1-score. Reduced manual triage by 82% via automated REST endpoints and a web UI for submission, routing, and management.",
        tech: ["Python", "FastAPI", "Sentence-BERT", "MySQL", "Cosine Similarity"],
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha/semantic-ticket-router" }],
    },
    {
        title: "AI Interview Preparation Bot (RAG)",
        description:
            "RAG pipeline that extracts and chunks PDFs, embeds with Sentence Transformers, stores in ChromaDB, and retrieves context for grounded interview-prep answers via a locally hosted Phi-3 model (Ollama), with a Streamlit front end.",
        tech: ["Python", "LangChain", "ChromaDB", "Sentence Transformers", "Ollama", "Streamlit"],
        image:
            "https://images.unsplash.com/photo-1481627834876-b9933f59d650?q=80&w=2128&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha/ai_interview_bot" }],
    },
];

export const skills = [
    {
        category: "Languages",
        icon: Code2,
        iconColor: "text-emerald-500",
        subtitle: "Application logic, scripting, and data access.",
        items: ["Python", "JavaScript", "Java", "PHP", "SQL"],
    },
    {
        category: "Frontend",
        icon: Layout,
        iconColor: "text-blue-500",
        subtitle: "Interfaces built for clarity and mobile-first use.",
        items: ["React.js", "Bootstrap", "HTML/CSS", "Responsive Design", "Mobile-First Design"],
    },
    {
        category: "Backend & APIs",
        icon: Server,
        iconColor: "text-green-500",
        items: ["FastAPI", "Django", "CodeIgniter", "REST API", "JWT", "SQLAlchemy"],
    },
    {
        category: "Databases",
        icon: Database,
        iconColor: "text-purple-500",
        subtitle: "Relational storage and ORM-backed data layers.",
        items: ["MySQL", "PostgreSQL", "SQLite", "ORM"],
    },
    {
        category: "AI / ML",
        icon: Brain,
        iconColor: "text-pink-500",
        items: [
            "RAG",
            "LangChain",
            "ChromaDB",
            "Sentence-BERT",
            "Scikit-learn",
            "NLP",
            "Groq API",
            "Ollama",
        ],
    },
    {
        category: "Tools & Practices",
        icon: Settings,
        iconColor: "text-orange-500",
        subtitle: "Delivery workflow, testing, and architecture patterns.",
        items: ["Git", "GitHub", "Postman", "Agile/SDLC", "RBAC", "MVC"],
    },
];

export const certifications = [
    "Python: Basic to Advanced, and MySQL Database Management Certification",
    "Software Development Internship Certificate — ANCIT Consulting, 2025",
    "HackerRank Software Engineer Intern — Assessment Completed",
    "CGPA 8.1 / 10 · No Arrears · With Honors — B.E. CSE, 2026 | 12th Grade: 87%",
];
