import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, CpuIcon, Database, Terminal, Layers, Wrench } from "lucide-react";
import {
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiPostgresql,
    SiMongodb,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiFlask,
    SiFastapi,
    SiPostman,
    SiTableau,
    SiFigma,
    SiAndroidstudio,
    SiApache,
    SiFramer,
    SiNumpy,
    SiPandas,
} from "react-icons/si";
import { FaJava, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Button } from "./ui/button";

export function TechToolkit() {
    const [showMore, setShowMore] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const categories = [
        {
            title: "Core Languages",
            icon: <Code className="h-5 w-5" />,
            color: "from-blue-500 to-cyan-500",
            items: [
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Python", icon: <SiPython /> },
                { name: "Java", icon: <FaJava /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "SQL", icon: <SiPostgresql /> },
            ],
        },
        {
            title: "Frameworks & Runtime",
            icon: <CpuIcon className="h-5 w-5" />,
            color: "from-green-500 to-emerald-500",
            items: [
                { name: "React", icon: <SiReact /> },
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express", icon: <SiExpress /> },
                { name: "Flask", icon: <SiFlask /> },
                { name: "Fast API", icon: <SiFastapi /> },
            ],
        },
        {
            title: "Databases",
            icon: <Database className="h-5 w-5" />,
            color: "from-orange-500 to-red-500",
            items: [
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
            ],
        },
        {
            title: "Libraries & Tools",
            icon: <Layers className="h-5 w-5" />,
            color: "from-purple-500 to-pink-500",
            items: [
                { name: "Framer Motion", icon: <SiFramer /> },
                { name: "NumPy", icon: <SiNumpy /> },
                { name: "Pandas", icon: <SiPandas /> },
                { name: "Tableau", icon: <SiTableau /> },
            ],
        },
        {
            title: "Dev Environment",
            icon: <Terminal className="h-5 w-5" />,
            color: "from-gray-500 to-slate-500",
            items: [
                { name: "VS Code", icon: <VscVscode /> },
                { name: "Github", icon: <FaGithub /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Android Studio", icon: <SiAndroidstudio /> },
            ],
        },
        {
            title: "Design & Others",
            icon: <Wrench className="h-5 w-5" />,
            color: "from-indigo-500 to-violet-500",
            items: [
                { name: "Figma", icon: <SiFigma /> },
                { name: "Apache", icon: <SiApache /> },
            ],
        },
    ];

    // Controls number of categories shown on mobile
    const visibleCategories = isMobile
        ? showMore
            ? categories
            : categories.slice(0, 2)
        : categories;

    return (
        <section
            id="techtoolkit"
            className="py-24 px-4 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Tech
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                            Arsenal
                        </span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-lg shadow-primary/30 mb-4" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive toolkit that empowers me to build robust and scalable applications.
                    </p>
                </motion.div>

                {/* Grid of Tech Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative glass-card-premium rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02]"
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-sm text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-all duration-300"
                                        >
                                            <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">
                                                {tech.icon}
                                            </span>
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "Show More" Button - Visible Only on Mobile */}
                {isMobile && (
                    <div className="flex justify-center mt-12">
                        <Button
                            onClick={() => setShowMore(!showMore)}
                            variant="outline"
                            className="rounded-full px-8 border-white/10 hover:bg-white/5 hover:text-white"
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
