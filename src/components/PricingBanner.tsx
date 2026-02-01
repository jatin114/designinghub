import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ZapIcon, CheckListIcon } from "@hugeicons/core-free-icons";

const PricingBanner = () => {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.dir() === "rtl";

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
        <section className="w-full py-16 md:py-24 relative overflow-hidden transition-colors duration-300">
            {/* Rich Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-900 dark:from-indigo-950 dark:via-blue-900 dark:to-indigo-950"></div>

            {/* Animated Mesh-style decorative elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] bg-blue-400 blur-[120px] rounded-full animate-pulse-slow"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[60%] bg-purple-400 blur-[120px] rounded-full animate-pulse-slow delay-700"></div>
            </div>

            <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left Side: Value Prop */}
                    <div className={`flex-1 flex flex-col items-center lg:items-start text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold uppercase tracking-widest mb-6 shadow-xl shadow-black/5">
                            <HugeiconsIcon icon={ZapIcon} size={18} className="text-yellow-400" />
                            {t("pricing.title")}
                        </div>
                        <div className="flex flex-col sm:flex-row items-center lg:items-baseline gap-2 sm:gap-4 mb-6">
                            <span className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
                                ₹{t("pricing.price")}
                            </span>
                            <span className="text-indigo-200 text-2xl md:text-3xl font-bold opacity-80 decoration-indigo-300 underline-offset-8">
                                /-
                            </span>
                        </div>
                        <p className="text-xl md:text-2xl text-indigo-50 font-semibold max-w-xl leading-relaxed drop-shadow-md">
                            {t("pricing.tagline")}
                        </p>
                    </div>
                    {/* Right Side: CTA & Trust */}
                    <div className="flex flex-col items-center gap-6 w-full lg:w-auto">
                        <Button
                            onClick={() => scrollToSection("#contact")}
                            size="lg"
                            className="w-full sm:w-auto bg-white text-indigo-700 hover:bg-slate-50 font-black text-xl px-16 h-20 rounded-[2rem] shadow-2xl shadow-black/20 transition-all hover:scale-105 active:scale-95 group relative overflow-hidden"
                        >
                            <span className="relative z-10">{t("pricing.cta")}</span>
                            <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                        <div className="flex items-center gap-2 text-white/70 text-sm font-bold">
                            <HugeiconsIcon icon={CheckListIcon} size={16} />
                            <span>100% Satisfaction Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </section>
    );
};

export default PricingBanner;
