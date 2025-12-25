import { useRef } from "react";
import { Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const educationData = [
        {
            year: "2022 - 2026",
            degree: "B.Tech in Computer Engineering",
            institution: "Marwadi University, Rajkot",
            description:
                "Full-Stack Development with a focus on modern web technologies.",
            courses: [
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Operating Systems",
                "C/C++ Programming",
                "HTML, CSS, and JavaScript",
                "React.js & Next.js",
                "Node.js & Express.js",
                "MongoDB & SQL",
                "Java & Spring Boot",
            ],
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCQ7E5N3JSrPHHpiqNveOkNl5ng26aF3VXA&s",
        },
        {
            year: "2020 - 2022",
            degree: "Higher Secondary Education (12th)",
            institution: "BSEB, Patna, Bihar",
            description:
                "Focused on Science stream with core subjects in Mathematics, Physics, and Computer Science.",
            courses: ["Mathematics", "Physics", "Chemistry", "Biology"],
            logo: "https://content.jdmagicbox.com/comp/def_content/colleges/default-colleges-8.jpg",
        },
        {
            year: "2019 - 2020",
            degree: "Secondary Education (10th)",
            institution: "BSEB, Patna, Bihar",
            description:
                "Completed secondary education with a strong foundation in Science and Mathematics.",
            courses: [
                "Mathematics",
                "Science",
                "English",
                "Social Studies",
                "Sanskrit",
            ],
            logo: "https://content.jdmagicbox.com/comp/def_content/colleges/default-colleges-8.jpg",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.2,
                type: "spring",
                stiffness: 50,
                damping: 20,
            },
        }),
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Education
                    </span>{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                        Journey
                    </span>
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-lg shadow-primary/30" />
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">Academic milestones that shaped my journey</p>
            </motion.div>

            <div className="relative" ref={ref}>
                {/* Timeline vertical line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/60 to-transparent md:transform md:-translate-x-1/2 ml-4 md:ml-0 shadow-lg shadow-primary/20" />

                <div className="space-y-12">
                    {educationData.map((edu, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants}
                                className={`relative flex flex-col md:flex-row gap-8 ${
                                    isEven ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 flex items-center justify-center md:transform md:-translate-x-1/2 ml-0 md:ml-0 z-10">
                                    <div className="w-4 h-4 bg-gradient-to-r from-primary to-purple-600 rounded-full ring-4 ring-primary/30 shadow-lg shadow-primary/50 animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-12 md:ml-0 ${isEven ? "md:pl-12" : "md:pr-12 text-right"}`}>
                                    <div className={`group relative glass-card-premium rounded-2xl p-5 md:p-7 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] ${!isEven && "md:text-right"}`}>
                                        <div className={`flex flex-col gap-4 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/10 p-2 flex-shrink-0 mx-auto md:mx-0">
                                                <img
                                                    src={edu.logo}
                                                    alt={edu.institution}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className={`flex flex-col ${isEven ? "md:items-start" : "md:items-end"}`}>
                                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                                                        <Calendar className="w-4 h-4" />
                                                        {edu.year}
                                                    </span>
                                                    <h3 className="text-xl font-bold text-white mb-1">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-gray-400 font-medium mb-4">
                                                        {edu.institution}
                                                    </p>
                                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                                        {edu.description}
                                                    </p>
                                                    <div className={`flex flex-wrap gap-2 ${isEven ? "justify-start" : "justify-end"}`}>
                                                        {edu.courses.map((course, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5 hover:border-primary/30 transition-colors"
                                                            >
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Empty space for the other side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
