import { ExternalLink, Github, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function DevProjects() {
    const projects = [
        {
            id: 1,
            title: "Car Detail and Management System",
            category: "Major Project-II",
            description:
                "A robust, full-stack web application designed to simplify the management of car information, service history, and user data. Built on the modern MERN stack with a responsive and sleek interface.",
            img: "/car-man.png",
            link: "https://car-detail-and-management-system-fr.vercel.app/",
            github: "https://github.com/Mantu008/Car-Detail-and-Management-System",
            stack: [
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Typescript",
                "Tailwind CSS",
            ],
            featured: true,
        },
        {
            id: 2,
            title: "Online Leave Management System",
            category: "Major Project-I",
            description:
                "A web-based leave management system where employees apply for leave, and managers approve or reject requests. Features real-time notifications and automatic holiday blocking.",
            img: "/leave-managemant.png",
            link: "https://online-leave-management-system-for-phi.vercel.app/",
            github: "https://github.com/Mantu008/Online-Leave-Management-System-for-Organizations",
            stack: [
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Typescript",
                "Tailwind CSS",
            ],
            featured: true,
        },
        {
            id: 3,
            title: "Matrix",
            category: "Freelance Work",
            description:
                "Advanced product packing management system that automates product-to-box assignments and generates labeled PDF packing cards, streamlining order fulfillment.",
            img: "/matrix.png",
            link: "https://vergin-matrix-frontend.vercel.app/",
            github: "",
            stack: ["React", "Node.js", "MySQL", "Hono", "Tailwind CSS"],
            featured: true,
        },
        {
            id: 4,
            title: "KiteFoot",
            category: "E-Commerce",
            description:
                "Dynamic Shoe E-Commerce platform featuring category-wise shoe listings, seamless browsing, advanced filtering options, and an intuitive user interface.",
            img: "/kitefoot.png",
            link: "https://kitefoot.vercel.app/",
            github: "",
            stack: ["React", "React-Router", "Tailwind CSS"],
            featured: false,
        },
        {
            id: 5,
            title: "NextAuth v5",
            category: "Authentication",
            description:
                "Implemented advanced authentication in Next.js using NextAuth v5, integrating OAuth, JWT, and session management for secure user authentication.",
            img: "/nextauth.png",
            link: "https://next-auth-v5-six-lake.vercel.app/login",
            github: "https://github.com/Mantu008/NEXT-AUTH-V5",
            stack: ["Next.js", "NextAuth.js", "OAuth", "JWT", "Tailwind CSS"],
            featured: false,
        },
        {
            id: 6,
            title: "VaultX",
            category: "Media Management",
            description:
                "Web-based platform for uploading, categorizing, and exploring event-based images and videos like Weddings, Birthdays, and Mehandi.",
            img: "/vaultx.png",
            link: "https://vault-x-gamma.vercel.app/",
            github: "https://github.com/Mantu008/VaultX-",
            stack: [
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "Typescript",
                "Cloudinary",
            ],
            featured: false,
        },
        {
            id: 7,
            title: "Hotel Booking",
            category: "Hackathon Work",
            description:
                "Responsive Hotel Booking frontend featuring detailed hotel specifications, amenities, image galleries, and advanced filtering options.",
            img: "/hotel-booking.png",
            link: "https://web-horizon-hackthone.vercel.app/",
            github: "https://github.com/Mantu008/Web-Horizon-Hackthone",
            stack: ["React", "Tailwind CSS", "Axios", "React Router"],
            featured: false,
        },
        {
            id: 8,
            title: "E-Commerce Backend",
            category: "Backend API",
            description:
                "Full CRUD functionality with secure JWT-based authentication using Express.js and MongoDB, enabling efficient user and product management.",
            img: "/backend.png",
            link: "https://e-commerce-mern-frontant.vercel.app/",
            github: "https://github.com/Mantu008/E-commerce-Backend",
            stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
            featured: false,
        },
        {
            id: 9,
            title: "E-Commerce Auth0",
            category: "E-Commerce",
            description:
                "Feature-rich E-Commerce platform using React and Redux Toolkit, integrating Auth0 for secure authentication and React Router for navigation.",
            img: "/ecommerce-auth0.png",
            link: "http://e-commerce-react-ecru-eta.vercel.app",
            github: "https://github.com/Mantu008/E-Commerce-REACT",
            stack: ["React.js", "Redux Toolkit", "Auth0", "Tailwind CSS"],
            featured: false,
        },
        {
            id: 10,
            title: "Quotation System",
            category: "Management Tool",
            description:
                "Web-based quotation management system with a clean UI and robust backend, enabling users to create, manage, and share customer quotations efficiently.",
            img: "/quot.png",
            link: "https://quotation-system-ten.vercel.app/",
            github: "",
            stack: ["React", "Node.js", "MySQL", "Hono", "Typescript"],
            featured: false,
        },
        {
            id: 11,
            title: "Walk Safe",
            category: "Hackathon Work",
            description:
                "Safety app enabling users to report incidents, share unsafe locations, access real-time alerts, chat 24/7, and securely interact through JWT authentication.",
            img: "/walk-safe.png",
            link: "https://walk-safe.netlify.app/",
            github: "https://github.com/Mantu008/Walk-Safe",
            stack: ["React", "Node.js", "MySQL", "Hono", "Typescript"],
            featured: false,
        },
        {
            id: 12,
            title: "Simple E-Commerce",
            category: "Frontend",
            description:
                "Fully responsive Electronic E-Commerce website using HTML, CSS, JavaScript, and Bootstrap, emphasizing modern front-end design.",
            img: "/ecommerce-simple.png",
            link: "https://mantu008.github.io/EComerce/",
            github: "https://github.com/Mantu008/EComerce",
            stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            featured: false,
        },
    ];

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/15 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/15 to-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Featured
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                            Projects
                        </span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-lg shadow-primary/30 mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A collection of projects that showcase my passion for building robust and scalable applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative glass-card-premium rounded-2xl border-0 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 flex flex-col hover:scale-[1.02]"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10 opacity-60" />
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.slice(0, 4).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5">
                                            +{project.stack.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Code</span>
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 text-sm text-gray-600 cursor-not-allowed">
                                            <Code2 className="w-4 h-4" />
                                            <span>Private</span>
                                        </span>
                                    )}
                                    
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button 
                                                size="sm" 
                                                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/50"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/Mantu008"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button 
                            size="lg" 
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full px-8"
                        >
                            <Github className="w-5 h-5 mr-2" />
                            View More on GitHub
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
