import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Download, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../assets/Mantu_Kumar_Morya_Resume.pdf";

export function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = [
                "home",
                "education",
                "experience",
                "projects",
                "contact",
            ];
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const handleLinkClick = (section: string) => {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            const element = document.getElementById(section);
            if (element) {
                const offset = 80; // Height of the navbar + padding
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 300);
    };

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "education", label: "Education" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <nav 
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled || isMobileMenuOpen 
                    ? "bg-background/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-primary/5" 
                    : "bg-transparent border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 group-hover:from-primary/30 group-hover:to-purple-600/30 transition-all duration-300 border border-primary/20">
                            <Code2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <span className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 group-hover:from-primary group-hover:via-purple-300 group-hover:to-pink-400 transition-all duration-300">
                            Mantu.dev
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-1 glass-card px-4 py-2 rounded-full shadow-lg">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                                        activeSection === link.id
                                            ? "text-white"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {activeSection === link.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-full border border-primary/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{link.label}</span>
                                </button>
                            ))}
                        </div>
                        
                        <Button
                            variant="default"
                            size="sm"
                            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-primary/30 rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 active:scale-95"
                            onClick={() => window.open(resume, "_blank")}
                        >
                            <Download className="h-4 w-4 mr-2" />
                            Resume
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMobileMenu}
                            className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                                        activeSection === link.id
                                            ? "bg-gradient-to-r from-primary/20 to-purple-600/20 text-white border border-primary/30"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-4"
                            >
                                <Button
                                    className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg shadow-lg shadow-primary/30 rounded-xl transition-all duration-300"
                                    onClick={() => window.open(resume, "_blank")}
                                >
                                    <Download className="h-5 w-5 mr-2" />
                                    Download Resume
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
