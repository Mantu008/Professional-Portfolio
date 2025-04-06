import { useEffect } from "react";
import { ExternalLink, Code, GitBranch } from "lucide-react";
import { GitHub } from "react-feather";
import { motion } from "framer-motion";

export function DevProjects() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        document
            .querySelectorAll(".fade-in")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // const projects = [
    //     {
    //         id: 1,
    //         title: "Matrix - Freelance Work",
    //         description:
    //             "Developed an advanced product packing management system, optimizing order fulfillment by automating product-to-box assignments and generating labeled packing cards in PDF format, reducing processing time by 15%.",
    //         img: "/matrix.png",
    //         iconLists: ["/react.svg", "/node.svg", "/mysql.svg", "/hono.svg"],
    //         link: "https://vergin-matrix-frontend.vercel.app/",
    //         github: "",
    //         stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    //         status: "active",
    //         deployed: true,
    //     },
    //     {
    //         id: 2,
    //         title: "KiteFoot - Shoe E-Commerce Website",
    //         description:
    //             "Developed a Shoe E-Commerce platform with category-wise shoe listings, enabling seamless browsing and selection.",
    //         img: "/kitefoot.png",
    //         iconLists: ["/react.svg", "/tail.svg", "/react-router.svg"],
    //         link: "https://www.kitefoot.com/",
    //         github: "",
    //         stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    //         status: "active",
    //         deployed: true,
    //     },
    //     {
    //         id: 3,
    //         title: "NextAuth v5 - Secure Authentication",
    //         description:
    //             "Implemented cutting-edge authentication using NextAuth v5 in Next.js, supporting OAuth, JWT, and session management for secure user authentication.",
    //         img: "/nextauth.png",
    //         iconLists: ["/next.svg", "/oauth.svg", "/jwt.svg"],
    //         link: "https://next-auth-v5-six-lake.vercel.app/login",
    //         github: "https://github.com/Mantu008/NEXT-AUTH-V5",
    //         stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    //         status: "active",
    //         deployed: true,
    //     },
    //     {
    //         id: 4,
    //         title: "Hotel Booking - Hackathon Work",
    //         description:
    //             "Built a Hotel Booking frontend with detailed hotel specifications, amenities, and filtering options for easy search and selection.",
    //         img: "/hotel-booking.png",
    //         iconLists: ["/react.svg", "/tail.svg", "/axios.svg"],
    //         link: "https://web-horizon-hackthone.vercel.app/",
    //         github: "https://github.com/Mantu008/Web-Horizon-Hackthone",
    //         stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    //         status: "active",
    //         deployed: true,
    //     },
    // ];

    const projects = [
        {
            id: 1,
            title: "Matrix - Freelance Work",
            description:
                "Developed an advanced product packing management system, optimizing order fulfillment by automating product-to-box assignments and generating labeled packing cards in PDF format, reducing processing time by 15%.",
            img: "/matrix.png",
            iconLists: ["/react.svg", "/node.svg", "/mysql.svg", "/hono.svg"],
            link: "https://vergin-matrix-frontend.vercel.app/",
            github: "",
            stack: ["React", "Node.js", "MySQL", "Hono"],
            status: "active",
            deployed: true,
        },
        {
            id: 2,
            title: "KiteFoot - Shoe E-Commerce Website",
            description:
                "Developed a Shoe E-Commerce platform with category-wise shoe listings, enabling seamless browsing and selection.",
            img: "/kitefoot.png",
            iconLists: ["/react.svg", "/tail.svg", "/react-router.svg"],
            link: "https://www.kitefoot.com/",
            github: "",
            stack: ["React", "React-Router", "Tailwind CSS"],
            status: "active",
            deployed: true,
        },
        {
            id: 3,
            title: "NextAuth v5 - Secure Authentication",
            description:
                "Implemented cutting-edge authentication using NextAuth v5 in Next.js, supporting OAuth, JWT, and session management for secure user authentication.",
            img: "/nextauth.png",
            iconLists: ["/next.svg", "/oauth.svg", "/jwt.svg"],
            link: "https://next-auth-v5-six-lake.vercel.app/login",
            github: "https://github.com/Mantu008/NEXT-AUTH-V5",
            stack: ["Next.js", "NextAuth.js", "OAuth", "JWT"],
            status: "active",
            deployed: true,
        },
        {
            id: 4,
            title: "Hotel Booking - Hackathon Work",
            description:
                "Built a Hotel Booking frontend with detailed hotel specifications, amenities, and filtering options for easy search and selection.",
            img: "/hotel-booking.png",
            iconLists: ["/react.svg", "/tail.svg", "/axios.svg"],
            link: "https://web-horizon-hackthone.vercel.app/",
            github: "https://github.com/Mantu008/Web-Horizon-Hackthone",
            stack: ["React", "Tailwind CSS", "Axios", "React Router"],
            status: "active",
            deployed: true,
        },
        {
            id: 5,
            title: "E-Commerce Backend - MERN Stack",
            description:
                "Implemented CRUD operations and JWT-based authentication using Express.js and MongoDB to manage users and products efficiently.",
            img: "/backend.png",
            iconLists: ["/node.svg", "/express.svg", "/mongodb.svg"],
            link: "https://e-commerce-mern-frontant.vercel.app/",
            github: "https://github.com/Mantu008/E-commerce-Backend",
            stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
            status: "active",
            deployed: true,
        },
        {
            id: 6,
            title: "E-Commerce - React with Auth0",
            description:
                "Feature-rich E-Commerce platform built with React and Redux Toolkit, includes secure authentication via Auth0 and client-side routing using React Router.",
            img: "/ecommerce-auth0.png",
            iconLists: ["/react.svg", "/redux.svg", "/auth0.svg"],
            link: "http://e-commerce-react-ecru-eta.vercel.app",
            github: "https://github.com/Mantu008/E-Commerce-REACT",
            stack: ["React.js", "Redux Toolkit", "Auth0", "React Router"],
            status: "active",
            deployed: true,
        },
        {
            id: 7,
            title: "Simple E-Commerce - HTML/CSS/JS",
            description:
                "Crafted a fully responsive Electronic E-Commerce website using HTML, CSS, JavaScript, and Bootstrap with a focus on front-end design and usability.",
            img: "/ecommerce-simple.png",
            iconLists: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap.svg"],
            link: "https://mantu008.github.io/EComerce/",
            github: "https://github.com/Mantu008/EComerce",
            stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            status: "active",
            deployed: true,
        },
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                <Code className="inline-block mr-3 h-8 w-8 text-purple-500" />
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="relative bg-gray-800 rounded-lg shadow-2xl overflow-hidden hover:shadow-purple-500/20 transition-shadow"
                    >
                        {/* Browser Window Header */}
                        <div className="flex items-center px-4 py-2 bg-gray-700 border-b border-gray-600">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="flex-1 text-center text-sm text-gray-300">
                                {project.title} • {project.status}
                            </div>
                        </div>

                        {/* Project Preview Area */}
                        <div className="relative aspect-video bg-gray-900 p-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                            <div className="relative z-10 h-full flex items-center justify-center">
                                {project.img ? (
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={project.img}
                                        alt={project.title}
                                    />
                                ) : (
                                    <p className="text-gray-400">
                                        No Image Available
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Terminal Interface */}
                        <div className="p-6 font-mono bg-black/50">
                            <div className="space-y-2 text-sm">
                                {/* Deployment status */}
                                <div className="flex items-center text-gray-400">
                                    <GitBranch className="h-4 w-4 mr-2 text-purple-500" />
                                    <span>
                                        {project.deployed
                                            ? "▲ Deployed"
                                            : "Not Deployed"}
                                    </span>
                                </div>

                                {/* Project Description */}
                                <p className="text-gray-300">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 bg-gray-800 rounded-md text-gray-300 text-xs"
                                        >
                                            <span className="text-purple-500">
                                                #
                                            </span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex gap-4 border-t border-gray-800 pt-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <GitHub className="h-4 w-4" />
                                        Source Code
                                    </a>
                                )}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
