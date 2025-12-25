import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    duration: string;
    desc: string;
    technologies: string[];
    thumbnail: string;
}

export const workExperience: Experience[] = [
    {
        id: 1,
        title: "Software Development Engineer Intern",
        company: "Bonrix Software Systems",
        location: "Ahmedabad, Gujarat",
        duration: "Jan 2025 - March 2025",
        desc: "Developing a Quotation and Proforma Invoice Management System with automated PDF generation, role-based access control (RBAC), and seamless management of products, customers, and payment methods.",
        technologies: [
            "React.js",
            "Node.js",
            "Hono",
            "SQL",
            "Jest",
            "Tailwind CSS",
            "React Router",
            "React Icon",
        ],
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Trainee Engineer",
        company: "Simform Software LLP",
        location: "Ahmedabad, Gujarat",
        duration: "Jan 2026 - Present",
        desc: "",
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "SQL",
            "Jest",
            "Tailwind CSS",
        ],
        thumbnail: "/exp1.svg",
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.3,
            type: "spring",
            stiffness: 80,
            damping: 12,
        },
    }),
};

export const ExperiencePage: React.FC = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Work
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                            Experience
                        </span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-lg shadow-primary/30" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">Professional journey and accomplishments</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/60 to-transparent ml-4 md:ml-0 shadow-lg shadow-primary/20" />

                    <div className="space-y-12">
                        {workExperience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                className="relative flex flex-col md:flex-row gap-8 md:pl-16"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-8 top-0 w-8 h-8 flex items-center justify-center transform -translate-x-1/2 md:-translate-x-1/2 ml-4 md:ml-0 z-10">
                                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-purple-600 rounded-full ring-4 ring-primary/30 shadow-lg shadow-primary/50 animate-pulse" />
                                </div>

                                <div className="ml-12 md:ml-0 flex-1">
                                    <div className="group relative glass-card-premium rounded-2xl p-5 md:p-7 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.01]">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/10 p-2 flex-shrink-0">
                                                <img
                                                    src={exp.thumbnail}
                                                    alt={exp.company}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                            
                                            <div className="flex-1">
                                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                                    <h3 className="text-2xl font-bold text-white">
                                                        {exp.title}
                                                    </h3>
                                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                                                        <Calendar className="w-4 h-4" />
                                                        {exp.duration}
                                                    </span>
                                                </div>
                                                
                                                <div className="flex items-center gap-2 text-gray-400 mb-4">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span className="font-medium">{exp.company}</span>
                                                    <span>•</span>
                                                    <span>{exp.location}</span>
                                                </div>

                                                <p className="text-gray-300 mb-6 leading-relaxed">
                                                    {exp.desc}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5 group-hover:border-primary/20 transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
