import { useTranslation } from "react-i18next";

const Portfolio = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t("portfolio.p1_title"),
            category: "Business",
            image: "/images/portfolio/business_new.png",
            description: t("portfolio.p1_desc"),
            tech: ["React", "UI/UX", "Corporate"]
        },
        {
            title: t("portfolio.p2_title"),
            category: "Static",
            image: "/images/portfolio/static_new.png",
            description: t("portfolio.p2_desc"),
            tech: ["Next.js", "SEO", "Speed"]
        },
        {
            title: t("portfolio.p3_title"),
            category: "Mobile UI",
            image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop",
            description: t("portfolio.p3_desc"),
            tech: ["Figma", "UI/UX", "App"]
        }
    ];

    return (
        <section id="portfolio" className="relative w-full py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                        {t("portfolio.badge")}
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                        {t("portfolio.title_p1")} <span className="text-indigo-600 dark:text-indigo-400">{t("portfolio.title_p2")}</span>
                    </h2>
                    <p className="max-w-2xl text-slate-500 dark:text-slate-400 text-lg font-medium">
                        {t("portfolio.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-950 p-8 border border-slate-200/60 dark:border-slate-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/10 dark:hover:shadow-indigo-500/5 hover:border-indigo-100 dark:hover:border-indigo-900/50"
                        >
                            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-8">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;