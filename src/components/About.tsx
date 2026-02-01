import { HugeiconsIcon } from "@hugeicons/react";
import {
    CodeIcon,
    ArtboardIcon,
    BrushIcon,
    Wrench01Icon
} from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    const values = [
        {
            title: t("about.v1_title"),
            description: t("about.v1_desc"),
            icon: CodeIcon
        },
        {
            title: t("about.v2_title"),
            description: t("about.v2_desc"),
            icon: ArtboardIcon
        },
        {
            title: t("about.v3_title"),
            description: t("about.v3_desc"),
            icon: BrushIcon
        },
        {
            title: t("about.v4_title"),
            description: t("about.v4_desc"),
            icon: Wrench01Icon
        }
    ];

    return (
        <section id="about" className="relative w-full py-20 md:py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="relative">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern Creative Workspace"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-indigo-50 dark:border-indigo-900/30 rounded-full -z-10" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -z-10" />
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                {t("about.badge")}
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl leading-tight">
                                {t("about.title_p1")} <span className="text-indigo-600 dark:text-indigo-400">{t("about.title_p2")}</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                {t("about.desc")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {values.map((val, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                        <HugeiconsIcon icon={val.icon} size={20} />
                                    </div>
                                    <div className="ltr:text-left rtl:text-right">
                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-widest">{val.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;