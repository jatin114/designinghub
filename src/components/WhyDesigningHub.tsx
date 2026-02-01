import { HugeiconsIcon } from "@hugeicons/react";
import {
    CodeIcon,
    BrushIcon,
    ChatBotIcon,
    Wrench01Icon
} from "@hugeicons/core-free-icons";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const WhyDesigningHub = () => {
    const { t } = useTranslation();

    const reasons = [
        {
            title: t("why_us.clean_code_title"),
            description: t("why_us.clean_code_desc"),
            icon: CodeIcon,
        },
        {
            title: t("why_us.design_purpose_title"),
            description: t("why_us.design_purpose_desc"),
            icon: BrushIcon,
        },
        {
            title: t("why_us.communication_title"),
            description: t("why_us.communication_desc"),
            icon: ChatBotIcon,
        },
        {
            title: t("why_us.support_title"),
            description: t("why_us.support_desc"),
            icon: Wrench01Icon,
        },
    ];

    return (
        <section id="why-us" className="w-full py-20 md:py-24 bg-slate-50 dark:bg-slate-950/50 border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                        {t("why_us.title_p1")} <span className="text-indigo-600 dark:text-indigo-400">{t("why_us.title_p2")}</span>
                    </h2>
                    <p className="max-w-2xl text-slate-500 dark:text-slate-400 text-lg font-medium">
                        {t("why_us.subtitle")}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <Card key={index} className="bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 transition-all duration-300 group">
                            <CardHeader className="p-8">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <HugeiconsIcon icon={reason.icon} size={24} />
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                    {reason.title}
                                </CardTitle>
                                <CardDescription className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium">
                                    {reason.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyDesigningHub;
