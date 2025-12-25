import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: "", text: "" });

        const form = new FormData();
        form.append("access_key", "a44a8150-6b8d-475d-b0b6-0558f26a503b");
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("subject", formData.subject);
        form.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });
            const result = await response.json();

            if (result.success) {
                setMessage({
                    type: "success",
                    text: "Your message has been sent successfully!",
                });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setMessage({
                    type: "error",
                    text:
                        result.message ||
                        "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            setMessage({
                type: "error",
                text: "Error sending message. Please check your internet connection.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
             
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            Get in
                        </span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                            Touch
                        </span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-lg shadow-primary/30 mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="glass-card-premium rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Location</h4>
                                        <p className="text-gray-400">Rajkot, Gujarat, India</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email</h4>
                                        <a href="mailto:mantukumar87586299@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                                            mantukumar87586299@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/Mantu008"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/mantu-kumar-morya-011927253/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="mailto:mantukumar87586299@gmail.com"
                                        className="p-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:scale-110"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleContactSubmit} className="space-y-6 glass-card-premium rounded-2xl p-8 border-0">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Name</label>
                                    <Input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">Email</label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Subject</label>
                                <Input
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project Inquiry"
                                    required
                                    className="bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Message</label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                    className="min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus:border-primary/50 focus:ring-primary/20"
                                />
                            </div>

                            <Button 
                                type="submit" 
                                size="lg" 
                                disabled={isSubmitting}
                                className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg shadow-lg shadow-primary/25"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>

                            {message.text && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg text-sm font-medium text-center ${
                                        message.type === "success"
                                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                                    }`}
                                >
                                    {message.text}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
