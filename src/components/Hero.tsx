import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    CodeIcon,
    ChartIncreaseIcon,
    BrushIcon
} from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();
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
        <section className="relative flex min-h-[calc(100vh-5rem)] w-full items-center justify-center bg-white dark:bg-slate-950 px-6 pt-32 pb-12 md:px-12 lg:px-24 md:pt-40 lg:pt-52 md:pb-24 lg:pb-32 overflow-hidden transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

            <div className="container relative z-10 flex flex-col items-center gap-8 text-center">
                {/* Floating Elements (Decorative) */}
                <div className="hidden lg:block absolute left-0 top-1/4 -translate-x-12 animate-bounce duration-[3000ms]">
                    <div className="p-4 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-2xl shadow-xl flex items-center justify-center text-indigo-600">
                        <HugeiconsIcon icon={BrushIcon} size={32} />
                    </div>
                </div>
                <div className="hidden lg:block absolute right-0 top-1/3 translate-x-12 animate-bounce duration-[3000ms] delay-700">
                    <div className="p-4 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-2xl shadow-xl flex items-center justify-center text-purple-600 dark:text-violet-400">
                        <HugeiconsIcon icon={CodeIcon} size={32} />
                    </div>
                </div>
                <div className="hidden lg:block absolute left-1/4 bottom-0 -translate-x-20 translate-y-10 animate-bounce duration-[4000ms] delay-500">
                    <div className="p-4 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-2xl shadow-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <HugeiconsIcon icon={ChartIncreaseIcon} size={32} />
                    </div>
                </div>

                <div className="space-y-6 max-w-4xl relative">
                    <div className="inline-flex items-center rounded-full border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50 dark:bg-indigo-950/30 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
                        {t("hero.badge")}
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:text-6xl md:text-7xl lg:text-8xl">
                        {t("hero.title_p1")} {t("hero.title_p2")} <span className="text-indigo-600 dark:text-indigo-400">{t("hero.title_p3")}</span>
                    </h1>

                    <p className="mx-auto max-w-[700px] text-lg text-slate-600 dark:text-slate-400 md:text-xl lg:text-2xl leading-relaxed font-medium">
                        {t("hero.subtitle")}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
                    <Button
                        size="lg"
                        onClick={() => scrollToSection("#contact")}
                        className="w-full sm:w-auto min-w-[180px] h-14 text-lg font-semibold bg-indigo-600 hover:bg-slate-900 dark:hover:bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/30 transition-all rounded-full"
                    >
                        {t("hero.cta_quote")}
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => scrollToSection("#services")}
                        className="w-full sm:w-auto min-w-[180px] h-14 text-lg font-medium border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-800 shadow-sm transition-all rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm"
                    >
                        {t("hero.cta_services")}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;