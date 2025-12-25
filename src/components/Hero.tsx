import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function Hero() {
    const technologies = [
        { name: "Python", logo: "/images/python.png" },
        { name: "React", logo: "/images/react.png" },
        { name: "JavaScript", logo: "/images/javascript.png" },
        { name: "Express.js", logo: "/images/express-js.png" },
        { name: "Mongo DB", logo: "/images/mongodb.png" },
        { name: "NodeJs", logo: "/images/node.png" },
        { name: "Mysql", logo: "/images/mysql.png" },
        { name: "Java", logo: "/images/java.png" },
    ];

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Enhanced Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-full blur-[120px] animate-blob" />
                <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8 px-4">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card shadow-lg"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <Sparkles className="h-4 w-4 text-green-400" />
                    <span className="text-sm font-medium text-gray-200">Available for work</span>
                </motion.div>

                {/* Name and Tagline */}
                <div className="space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold tracking-tight leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            Mantu Kumar
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                            Morya
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-medium">Software Developer</span> crafting beautiful, functional, and accessible web experiences.
                    </motion.p>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex justify-center gap-4"
                >
                    <a href="https://github.com/Mantu008" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/mantu-kumar-morya-011927253/" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:mantukumar008@gmail.com" className="p-3 glass-card rounded-full text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white h-14 px-8 rounded-full text-lg font-medium shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 group"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 px-8 rounded-full text-lg font-medium border-2 border-white/10 glass-card hover:border-primary/50 hover:text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </Button>
                </motion.div>

                {/* Tech Stack Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="pt-20"
                >
                    <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">Powered By</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                                className="group relative p-5 glass-card-premium rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                                <div className="relative flex flex-col items-center gap-3">
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-14 h-14 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                                    />
                                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
