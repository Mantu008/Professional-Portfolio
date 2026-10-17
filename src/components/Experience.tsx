import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Briefcase, ChevronDown, MapPin, Pencil, Plus, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useEditMode } from "../lib/portfolioStore";

interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    duration: string;
    desc: string;
    technologies: string[];
    thumbnail: string;
}

const STORAGE_KEY = "portfolio:experience";
const THUMBNAILS = ["/exp1.svg", "/exp2.svg", "/exp3.svg", "/exp4.svg"];

export const workExperience: Experience[] = [
    {
        id: 1,
        title: "Software Developer",
        company: "Simform Solutions",
        location: "Rajkot, Gujarat",
        duration: "Jan 2026 - Jul 2026",
        desc: "• Developed responsive TMS modules and reusable components using React, TypeScript, Redux Toolkit, React Hooks/Router, and TanStack Query, improving workflow efficiency.\n• Implemented robust form validation (React Hook Form, Zod) and designed secure REST APIs with Node.js, Express, and JWT-based authentication/authorization.\n• Optimized database schemas and queries, reducing response time.",
        technologies: ["React", "TypeScript", "Redux Toolkit", "Node.js", "Express", "JWT", "Tailwind CSS", "MUI", "Git"],
        thumbnail: "/exp2.svg",
    },
    {
        id: 2,
        title: "Software Development Engineer Intern",
        company: "Bonrix Software Systems",
        location: "Ahmedabad, Gujarat",
        duration: "Jan 2025 - March 2025",
        desc: "Developing a Quotation and Proforma Invoice Management System with automated PDF generation, role-based access control (RBAC), and seamless management of products, customers, and payment methods.",
        technologies: ["React.js", "Node.js", "Hono", "SQL", "Jest", "Tailwind CSS", "React Router", "React Icon"],
        thumbnail: "/exp1.svg",
    },
];

function loadExperience(): Experience[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw) as Experience[];
    } catch {
        /* fall through to defaults */
    }
    return workExperience;
}

const emptyForm = (): Experience => ({
    id: Date.now(),
    title: "",
    company: "",
    location: "",
    duration: "",
    desc: "",
    technologies: [],
    thumbnail: THUMBNAILS[0],
});

const inputCls =
    "w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.15, type: "spring" as const, stiffness: 80, damping: 12 },
    }),
};

export const ExperiencePage: React.FC = () => {
    const [items, setItems] = useState<Experience[]>(loadExperience);
    const [expanded, setExpanded] = useState<number | null>(null);
    const [form, setForm] = useState<Experience | null>(null);
    const [techInput, setTechInput] = useState("");
    const [isNew, setIsNew] = useState(false);
    const { editMode } = useEditMode();

    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 70%", "end 60%"] });
    const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            /* ignore */
        }
    }, [items]);

    const openEdit = (exp: Experience) => {
        setForm({ ...exp });
        setTechInput("");
        setIsNew(false);
    };
    const openAdd = () => {
        setForm(emptyForm());
        setTechInput("");
        setIsNew(true);
    };

    const addTech = () => {
        const t = techInput.trim();
        if (!t || !form || form.technologies.includes(t)) return setTechInput("");
        setForm({ ...form, technologies: [...form.technologies, t] });
        setTechInput("");
    };

    const save = () => {
        if (!form || !form.title.trim() || !form.company.trim()) return;
        setItems((prev) => (isNew ? [form, ...prev] : prev.map((e) => (e.id === form.id ? form : e))));
        setForm(null);
    };

    const remove = (id: number) => {
        if (window.confirm("Delete this experience?")) setItems((prev) => prev.filter((e) => e.id !== id));
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Work</span>{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600">
                            Experience
                        </span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full shadow-lg shadow-primary/30" />
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">Professional journey and accomplishments</p>

                    <AnimatePresence>
                        {editMode && (
                            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6">
                                <Button onClick={openAdd} className="rounded-full bg-gradient-to-r from-primary to-purple-600 text-white">
                                    <Plus className="h-4 w-4 mr-2" /> Add Experience
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <div className="relative" ref={timelineRef}>
                    {/* Timeline track + scroll-driven progress */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-white/10 ml-4 md:ml-0" />
                    <motion.div
                        style={{ scaleY: progress, transformOrigin: "top" }}
                        className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-pink-500 ml-4 md:ml-0 shadow-lg shadow-primary/40"
                    />

                    <div className="space-y-12">
                        <AnimatePresence initial={false}>
                            {items.map((exp, index) => {
                                const open = expanded === exp.id;
                                const bullets = exp.desc.split("\n").filter(Boolean);
                                const long = bullets.length > 1;
                                return (
                                    <motion.div
                                        key={exp.id}
                                        layout
                                        custom={index}
                                        initial="hidden"
                                        whileInView="visible"
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        viewport={{ once: true }}
                                        variants={cardVariants}
                                        className="relative flex flex-col md:flex-row gap-8 md:pl-16"
                                    >
                                        <div className="absolute left-0 md:left-8 top-0 w-8 h-8 flex items-center justify-center -translate-x-1/2 ml-4 md:ml-0 z-10">
                                            <div className="w-4 h-4 bg-gradient-to-r from-primary to-purple-600 rounded-full ring-4 ring-primary/30 shadow-lg shadow-primary/50 animate-pulse" />
                                        </div>

                                        <div className="ml-12 md:ml-0 flex-1">
                                            <motion.div
                                                whileHover={{ y: -4 }}
                                                onClick={() => long && setExpanded(open ? null : exp.id)}
                                                className={`group relative glass-card-premium rounded-2xl p-5 md:p-7 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${long ? "cursor-pointer" : ""}`}
                                            >
                                                {editMode && (
                                                    <div className="absolute top-3 right-3 flex gap-1 z-20" onClick={(e) => e.stopPropagation()}>
                                                        <button
                                                            title="Edit"
                                                            onClick={() => openEdit(exp)}
                                                            className="p-2 rounded-full bg-white/10 hover:bg-primary/40 text-white transition"
                                                        >
                                                            <Pencil className="h-4 w-4" />
                                                        </button>
                                                        <button
                                                            title="Delete"
                                                            onClick={() => remove(exp.id)}
                                                            className="p-2 rounded-full bg-white/10 hover:bg-red-500/60 text-white transition"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                )}

                                                <div className="flex flex-col md:flex-row gap-6">
                                                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/10 p-2 flex-shrink-0 group-hover:rotate-3 group-hover:scale-105 transition-transform duration-300">
                                                        <img src={exp.thumbnail} alt={exp.company} className="w-full h-full object-cover rounded-lg" />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className={`flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2 ${editMode ? "md:pr-20" : ""}`}>
                                                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium whitespace-nowrap">
                                                                <Calendar className="w-4 h-4" />
                                                                {exp.duration}
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-400 mb-4">
                                                            <Briefcase className="w-4 h-4" />
                                                            <span className="font-medium">{exp.company}</span>
                                                            <MapPin className="w-4 h-4 ml-2" />
                                                            <span>{exp.location}</span>
                                                        </div>

                                                        {/* Collapsed: first bullet only; expanded: all */}
                                                        <div className="text-gray-300 mb-4 leading-relaxed space-y-2">
                                                            {(open || !long ? bullets : bullets.slice(0, 1)).map((b, i) => (
                                                                <motion.p
                                                                    key={i}
                                                                    initial={i > 0 ? { opacity: 0, height: 0 } : false}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                >
                                                                    {b}
                                                                </motion.p>
                                                            ))}
                                                        </div>

                                                        {long && (
                                                            <button
                                                                className="inline-flex items-center gap-1 text-sm text-primary mb-4 hover:text-white transition"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setExpanded(open ? null : exp.id);
                                                                }}
                                                            >
                                                                {open ? "Show less" : `Show ${bullets.length - 1} more`}
                                                                <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                                                            </button>
                                                        )}

                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech, i) => (
                                                                <motion.span
                                                                    key={tech + i}
                                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                                    className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/5 hover:border-primary/50 hover:text-white hover:bg-primary/10 transition-colors"
                                                                >
                                                                    {tech}
                                                                </motion.span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <Dialog open={!!form} onOpenChange={(o) => !o && setForm(null)}>
                <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto bg-background border-white/10 text-white">
                    <DialogHeader>
                        <DialogTitle>{isNew ? "Add experience" : "Edit experience"}</DialogTitle>
                    </DialogHeader>
                    {form && (
                        <form
                            className="space-y-3"
                            onSubmit={(e) => {
                                e.preventDefault();
                                save();
                            }}
                        >
                            <input className={inputCls} placeholder="Job title *" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                            <input className={inputCls} placeholder="Company *" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <input className={inputCls} placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                                <input className={inputCls} placeholder="Duration (e.g. Jan 2026 - Jul 2026)" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
                            </div>
                            <textarea
                                className={inputCls}
                                rows={6}
                                placeholder={"Description — one bullet per line"}
                                value={form.desc}
                                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                            />

                            <div>
                                <p className="text-xs text-gray-400 mb-2">Icon</p>
                                <div className="flex gap-2">
                                    {THUMBNAILS.map((t) => (
                                        <button
                                            type="button"
                                            key={t}
                                            onClick={() => setForm({ ...form, thumbnail: t })}
                                            className={`w-12 h-12 p-1.5 rounded-lg bg-white/10 border-2 transition ${form.thumbnail === t ? "border-primary" : "border-transparent hover:border-white/30"}`}
                                        >
                                            <img src={t} alt="" className="w-full h-full object-cover rounded" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 mb-2">Technologies (press Enter to add)</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {form.technologies.map((t) => (
                                        <button
                                            type="button"
                                            key={t}
                                            title="Remove"
                                            onClick={() => setForm({ ...form, technologies: form.technologies.filter((x) => x !== t) })}
                                            className="px-3 py-1 rounded-lg text-xs bg-primary/15 text-primary hover:bg-red-500/30 hover:text-white transition"
                                        >
                                            {t} ×
                                        </button>
                                    ))}
                                </div>
                                <input
                                    className={inputCls}
                                    placeholder="Add technology"
                                    value={techInput}
                                    onChange={(e) => setTechInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            addTech();
                                        }
                                    }}
                                />
                            </div>

                            <div className="flex justify-end gap-2 pt-2">
                                <Button type="button" variant="ghost" onClick={() => setForm(null)}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-gradient-to-r from-primary to-purple-600 text-white">
                                    Save
                                </Button>
                            </div>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
