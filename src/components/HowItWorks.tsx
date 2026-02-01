import { HugeiconsIcon } from "@hugeicons/react";
import {
    Chat01Icon,
    Layers01Icon,
    RocketIcon
} from "@hugeicons/core-free-icons";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const HowItWorks = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: "01",
            title: t("how_it_works.step1_title"),
            description: t("how_it_works.step1_desc"),
            icon: Chat01Icon,
            color: "text-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-950/30",
            borderColor: "border-blue-100 dark:border-blue-900/50"
        },
        {
            number: "02",
            title: t("how_it_works.step2_title"),
            description: t("how_it_works.step2_desc"),
            icon: Layers01Icon,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
            borderColor: "border-indigo-100 dark:border-indigo-900/50"
        },
        {
            number: "03",
            title: t("how_it_works.step3_title"),
            description: t("how_it_works.step3_desc"),
            icon: RocketIcon,
            color: "text-purple-600",
            bgColor: "bg-purple-50 dark:bg-purple-950/30",
            borderColor: "border-purple-100 dark:border-purple-900/50"
        },
    ];

    return (
        <section id="how-it-works" className="w-full py-20 md:py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 overflow-hidden">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto relative">
                {/* Decorative background element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 dark:bg-indigo-900/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50">
                        <span className="text-indigo-600 dark:text-indigo-400 text-sm font-bold uppercase tracking-widest">{t("nav.process")}</span>
                    </div>
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                        {t("how_it_works.title_p1")} <span className="text-indigo-600 dark:text-indigo-400">{t("how_it_works.title_p2")}</span>
                    </h2>
                    <p className="max-w-2xl text-slate-500 dark:text-slate-400 text-lg font-medium">
                        {t("how_it_works.subtitle")}
                    </p>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Connecting lines for Desktop */}
                    <div className="hidden md:block absolute top-[15%] left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-800 -z-0"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 group">
                            <Card className="h-full border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 group-hover:border-indigo-200 dark:group-hover:border-indigo-800/50">
                                <CardHeader className="p-8 flex flex-col items-center text-center">
                                    <div className="relative mb-8">
                                        <div className={`w-20 h-20 rounded-2xl ${step.bgColor} ${step.color} flex items-center justify-center border ${step.borderColor} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-indigo-500/5`}>
                                            <HugeiconsIcon icon={step.icon} size={36} />
                                        </div>
                                        <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-700 flex items-center justify-center text-sm font-black text-slate-400 dark:text-slate-500 shadow-sm">
                                            {step.number}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                        {step.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-semibold">
                                        {step.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
