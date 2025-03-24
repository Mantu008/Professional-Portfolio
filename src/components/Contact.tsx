import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

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
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Details */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold tracking-tighter mb-4 text-white">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400">
                        Have a project in mind? Let's work together to bring
                        your ideas to life.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-purple-500" />
                            <span className="text-gray-300">
                                Rajkot, Gujarat
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-purple-500" />
                            <span className="text-gray-300">
                                mantukumar87586299@gmail.com
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Mantu008"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                                <Github className="h-5 w-5 text-gray-300" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mantu-kumar-morya-011927253/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                                <Linkedin className="h-5 w-5 text-gray-300" />
                            </a>
                            <a
                                href="mailto:mantukumar87586299@gmail.com"
                                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                            >
                                <Mail className="h-5 w-5 text-gray-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                        />
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            required
                        />
                        <Button type="submit" size="lg" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                        {message.text && (
                            <p
                                className={`mt-4 text-sm ${
                                    message.type === "success"
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {message.text}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
