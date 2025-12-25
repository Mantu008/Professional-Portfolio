import React, { useEffect, useState, Suspense } from "react";
// Use React.lazy with a .then() to extract the named export as default.
const Navigation = React.lazy(() =>
    import("@/components/Navigation").then((module) => ({
        default: module.Navigation,
    }))
);
const Hero = React.lazy(() =>
    import("@/components/Hero").then((module) => ({ default: module.Hero }))
);
const TechToolkit = React.lazy(() =>
    import("@/components/TechToolkit").then((module) => ({
        default: module.TechToolkit,
    }))
);

const Education = React.lazy(() =>
    import("@/components/Education").then((module) => ({
        default: module.Education,
    }))
);
const DevProjects = React.lazy(() =>
    import("@/components/DevProjects").then((module) => ({
        default: module.DevProjects,
    }))
);
const Contact = React.lazy(() =>
    import("@/components/Contact").then((module) => ({
        default: module.Contact,
    }))
);
const Footer = React.lazy(() =>
    import("@/components/Footer").then((module) => ({ default: module.Footer }))
);

const Experience = React.lazy(() =>
    import("@/components/Experience").then((module) => ({
        default: module.ExperiencePage,
    }))
);

const SkeletonLoader = () => (
    <div className="min-h-screen bg-background">
        {/* Navigation Skeleton */}
        <div className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
                <div className="hidden md:flex items-center gap-8">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="h-4 w-20 bg-white/10 rounded animate-pulse"
                        />
                    ))}
                </div>
                <div className="h-10 w-24 bg-white/10 rounded animate-pulse hidden md:block" />
            </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="min-h-screen flex flex-col items-center justify-center relative px-4">
             <div className="space-y-6 w-full max-w-3xl mx-auto text-center">
                <div className="h-20 w-3/4 bg-white/10 rounded-lg mx-auto animate-pulse" />
                <div className="h-8 w-1/2 bg-white/10 rounded-lg mx-auto animate-pulse" />
                <div className="flex gap-4 justify-center mt-8">
                    <div className="h-12 w-32 bg-white/10 rounded-lg animate-pulse" />
                    <div className="h-12 w-32 bg-white/10 rounded-lg animate-pulse" />
                </div>
            </div>
        </div>
    </div>
);

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            import("@/components/Navigation"),
            import("@/components/Hero"),
            import("@/components/TechToolkit"),
            import("@/components/Education"),
            import("@/components/Experience"),
            import("@/components/DevProjects"),
            import("@/components/Contact"),
            import("@/components/Footer"),
        ]).then(() => {
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
            <Suspense fallback={<SkeletonLoader />}>
                <Navigation />
                
                <main>
                    <section id="home">
                        <Hero />
                    </section>

                    <section id="education" className="relative">
                        <Education />
                    </section>

                    <section id="experience" className="relative">
                        <Experience />
                    </section>

                    <section id="techtoolkit" className="relative">
                        <TechToolkit />
                    </section>

                    <section id="projects" className="relative">
                        <DevProjects />
                    </section>

                    <section id="contact" className="relative">
                        <Contact />
                    </section>
                </main>

                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
