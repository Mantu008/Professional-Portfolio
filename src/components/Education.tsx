import { useRef } from "react";
import { Calendar } from "lucide-react";
import { BookOpen } from "react-feather";
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

    // Animation variants for the cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        }),
    };

    // Animation variants for the year display
    const yearVariants = {
        hidden: (custom: any) => ({
            x: custom === "left" ? 50 : -50,
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 120, damping: 20 },
        },
    };

    return (
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <BookOpen className="inline-block mr-3 h-8 w-8 text-purple-500" />
                Education Journey
            </h2>

            <div className="relative" ref={ref}>
                {/* Timeline vertical line */}
                <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-indigo-500 transform -translate-x-1/2"></div>

                {educationData.map((edu, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardVariants}
                            className={`mb-12 w-full ${
                                isEven ? "pr-8" : "pl-8"
                            }`}
                        >
                            <div
                                className={`relative flex ${
                                    isEven ? "flex-row" : "flex-row-reverse"
                                } items-center`}
                            >
                                {/* Timeline node */}
                                <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-purple-500"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [1, 0.5, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    ></motion.div>
                                </div>

                                {/* Content card */}
                                <div
                                    className={`w-full md:w-1/2 ${
                                        isEven ? "md:pr-4" : "md:pl-4"
                                    } text-center md:text-left mx-auto`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/30 hover:border-purple-500 transition-all duration-300 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 border-2 border-purple-500 p-1">
                                                <img
                                                    src={edu.logo}
                                                    alt={edu.institution}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-2">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-purple-400 font-medium mb-2">
                                                    {edu.institution}
                                                </p>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{edu.year}</span>
                                                </div>
                                                <p className="text-gray-300 text-sm mb-3">
                                                    {edu.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.courses.map(
                                                        (course, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                                                            >
                                                                {course}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Year display (for larger screens) */}
                                <div
                                    className={`hidden md:block w-1/2 ${
                                        isEven
                                            ? "text-left pl-8"
                                            : "text-right pr-8"
                                    }`}
                                >
                                    <motion.div
                                        custom={isEven ? "left" : "right"}
                                        initial="hidden"
                                        animate={
                                            isInView ? "visible" : "hidden"
                                        }
                                        variants={yearVariants}
                                        className="text-2xl font-bold text-purple-500 bg-gray-800/50 px-4 py-2 rounded-lg inline-block"
                                    >
                                        {edu.year}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
