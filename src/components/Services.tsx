import { HugeiconsIcon } from "@hugeicons/react";
import {
    CodeIcon,
    ArtboardIcon,
    BrushIcon,
    Wrench01Icon,
    CreditCardIcon
} from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t("services.web_dev.title"),
            description: t("services.web_dev.desc"),
            icon: CodeIcon,
            features: [t("services.web_dev.f1"), t("services.web_dev.f2"), t("services.web_dev.f3")]
        },
        {
            title: t("services.wireframe_to_code.title"),
            description: t("services.wireframe_to_code.desc"),
            icon: BrushIcon,
            features: [t("services.wireframe_to_code.f1"), t("services.wireframe_to_code.f2"), t("services.wireframe_to_code.f3")]
        },
        {
            title: t("services.ui_ux.title"),
            description: t("services.ui_ux.desc"),
            icon: ArtboardIcon,
            features: [t("services.ui_ux.f1"), t("services.ui_ux.f2"), t("services.ui_ux.f3")]
        },
        {
            title: t("services.fixing.title"),
            description: t("services.fixing.desc"),
            icon: Wrench01Icon,
            features: [t("services.fixing.f1"), t("services.fixing.f2"), t("services.fixing.f3")]
        },
        {
            title: t("services.branding.title"),
            description: t("services.branding.desc"),
            icon: CreditCardIcon,
            features: [t("services.branding.f1"), t("services.branding.f2"), t("services.branding.f3")]
        }
    ];

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="services" className="relative w-full py-20 md:py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 overflow-hidden transition-colors duration-300">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 border border-indigo-100/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                        {t("services.badge")}
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                        {t("services.title_p1")} <span className="text-indigo-600 dark:text-indigo-400">{t("services.title_p2")}</span>
                    </h2>
                    <p className="max-w-2xl text-slate-500 dark:text-slate-400 text-lg font-medium">
                        {t("services.subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-1 hover:border-indigo-100 dark:hover:border-indigo-900/50"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                <HugeiconsIcon icon={service.icon} size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                                        <div className="w-1 h-1 rounded-full bg-indigo-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => scrollToSection("#contact")}
                                    className="text-xs font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
                                >
                                    {t("services.get_quote")}
                                    <svg className="rtl:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;