import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// Define the Experience interface matching workExperience's shape
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

// Work experience data array
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
    // Add more work experiences as needed...
];

// Define animation variants for the cards
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
        <section className="py-16 px-4 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12"
                >
                    Experience
                </motion.h1>

                {/* Centered Cards */}
                <motion.div
                    className="flex flex-col items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {workExperience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            custom={index}
                            variants={cardVariants}
                            className="relative max-w-2xl w-full bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-purple-500 transition duration-300 overflow-hidden"
                        >
                            {/* Glowing Border Animation */}
                            <div className="absolute inset-0 rounded-xl border-2 border-purple-500 opacity-20 blur-xl animate-pulse pointer-events-none"></div>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500 flex-shrink-0">
                                    <img
                                        src={exp.thumbnail}
                                        alt={exp.company}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">
                                        {exp.title}
                                    </h2>
                                    <p className="text-lg text-gray-400">
                                        {exp.company}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {exp.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-4 relative z-10">
                                <Calendar className="w-5 h-5" />
                                <span>{exp.duration}</span>
                            </div>

                            <p className="text-gray-300 mt-4 relative z-10">
                                {exp.desc}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2 relative z-10">
                                {exp.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
