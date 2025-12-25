import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-white/10 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-2xl mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-4 col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            Mantu.dev
                        </h3>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Crafting digital experiences with code and creativity. 
                            Focused on building scalable, user-centric applications 
                            that solve real-world problems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {["About", "Projects", "Experience", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-400 hover:text-primary transition-colors block py-1"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-semibold">Connect</h4>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Mantu008"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-gradient-to-br hover:from-primary/20 hover:to-purple-600/20 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mantu-kumar-morya-011927253/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-gradient-to-br hover:from-primary/20 hover:to-purple-600/20 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                            </a>
                            <a
                                href="mailto:mantukumar87586299@gmail.com"
                            >
                                <Button size="icon" variant="ghost" className="rounded-full hover:bg-gradient-to-br hover:from-primary/20 hover:to-purple-600/20 hover:text-white text-gray-400 transition-all duration-300 hover:scale-110">
                                    <Mail className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        © 2025 Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by Mantu Kumar Morya
                    </p>
                    
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={scrollToTop}
                        className="text-gray-400 hover:text-white hover:bg-white/5 gap-2"
                    >
                        Back to Top
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </footer>
    );
}
