import { Code2, Database, Layout, Server, Settings, Terminal, Github, Linkedin, Twitter, Globe, Phone, Mail, MapPin } from "lucide-react";

export const personalInfo = {
    name: "Kavi Sri Maha",
    role: "Python Full Stack Developer",
    title: "Python Full Stack Developer",
    description: "Passionate about building real-world applications and continuously improving full stack development skills. Skilled in developing RESTful APIs, implementing CRUD operations, and designing scalable backend systems.",
    location: "Tenkasi, Tamil Nadu",
    timezone: "IST",
    availability: "Available for work",
    email: "kavisri4812@gmail.com",
    phone: "7904991178",
    resumeUrl: "/resume_kavi_sri_maha_april.pdf",
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
        role: "Full Stack Developer – Intern",
        company: "Kottravai Enterprises Private Limited",
        location: "Tenkasi",
        duration: "July – August",
        description: "Technical Supportive Intern. Gained hands-on experience in full stack development.",
    },
];

export const education = [
    {
        degree: "B.E. Computer Science and Engineering",
        school: "University College of Engineering, Dindigul",
        duration: "2022 – 2026",
        details: "CGPA: 8.1 | Honors"
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        school: "Grama Committee Higher Secondary School, Tenkasi",
        duration: "",
        details: "Score: 85.8%"
    },
    // SSLC omitted for brevity unless requested
];

export const projects = [
    {
        title: "Career Drift Detection System",
        description:
            "Full-stack AI career drift system using Python, React, and SQLite with FastAPI, JWT auth, and SQLModel ORM. Integrated a Scikit-learn (Joblib) ML engine to analyze activity patterns and produce real-time drift scores for learning-path alignment.",
        tech: ["Python", "React", "SQLite", "FastAPI", "JWT", "SQLModel", "Scikit-learn"],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha" }],
    },
    {
        title: "AI-Powered ChatBot with Authentication and Streaming",
        description:
            "Full-stack AI chatbot with Python, React, and SQLite: JWT authentication, REST APIs, SQLAlchemy ORM, and Groq API integration for real-time streamed responses with a modular backend.",
        tech: ["Python", "React", "SQLite", "JWT", "SQLAlchemy", "Groq API"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha" }],
    },
    {
        title: "Task Management System",
        description:
            "Productivity app with Django: secure authentication and full CRUD for tasks, routines, and notes; dashboard with real-time totals (completed, pending) and status-based views; Bootstrap and Django templates on the frontend.",
        tech: ["Python", "Django", "Bootstrap", "CRUD"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha" }],
    },
    {
        title: "Student Attendance Tracker",
        description:
            "Web-based attendance system using PHP, MySQL, HTML, CSS, and JavaScript with admin and user modules, a structured MySQL schema, and secure session-based authentication.",
        tech: ["PHP", "MySQL", "JavaScript", "Session Auth"],
        image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop",
        links: [{ icon: Github, href: "https://github.com/kavisrimaha/Projects.git" }],
    },
];

export const skills = [
    {
        category: "Frontend",
        icon: Layout,
        iconColor: "text-blue-500",
        items: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
        category: "Backend",
        icon: Server,
        iconColor: "text-green-500",
        items: ["Python", "Django", "Django REST Framework"],
    },
    {
        category: "Databases",
        icon: Database,
        iconColor: "text-purple-500",
        items: ["PostgreSQL", "MySQL", "SQL"],
    },
    {
        category: "Tools & Others",
        icon: Settings,
        iconColor: "text-orange-500",
        items: ["Git", "GitHub", "VS Code", "Problem Solving"],
    },
];

export const certifications = [
    "HTML Certificate – Great Learning",
    "C Certification – Great Foundation",
    "Technical Supportive Intern – Kottravai Enterprises Pvt. Ltd",
    "Deloitte – Technology Job Simulation"
];

export const hobbies = ["Editing", "Photography", "Dancing"];
