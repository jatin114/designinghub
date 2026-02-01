import { HugeiconsIcon } from "@hugeicons/react";
import {
    InstagramIcon,
    Linkedin01Icon,
    Facebook01Icon,
    WhatsappIcon,
    Mail01Icon,
    Call02Icon,
    ArrowUp01Icon
} from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";

import logo from "@/assets/logo.webp";
import logoWhite from "@/assets/logo-white.webp";

const Footer = () => {
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
        <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-20 transition-colors duration-300">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <img
                            src={logo}
                            alt="DesigningHub"
                            className="h-20 w-auto cursor-pointer transition-all duration-300 hover:scale-105 dark:hidden"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                        <img
                            src={logoWhite}
                            alt="DesigningHub"
                            className="h-20 w-auto cursor-pointer transition-all duration-300 hover:scale-105 hidden dark:block"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        />
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                            {t("about.v4_desc")}
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">{t("footer.explore")}</h4>
                        <ul className="space-y-4">
                            {["Services", "Portfolio", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(`#${item.toLowerCase()}`);
                                        }}
                                        className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {t(`nav.${item.toLowerCase()}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">{t("footer.specialties")}</h4>
                        <ul className="space-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                            <li onClick={() => scrollToSection("#services")} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">{t("services.web_dev.title")}</li>
                            <li onClick={() => scrollToSection("#services")} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">{t("services.ui_ux.title")}</li>
                            <li onClick={() => scrollToSection("#services")} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">{t("services.branding.title")}</li>
                            <li onClick={() => scrollToSection("#services")} className="hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors">{t("services.fixing.title")}</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Socials */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">{t("footer.get_in_touch")}</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="tel:+917289906833" className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                        <HugeiconsIcon icon={Call02Icon} size={16} className="text-indigo-600 dark:text-indigo-400" />
                                        <span dir="ltr">+91 72899 06833</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:designinghub0@gmail.com" className="flex items-center gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                        <HugeiconsIcon icon={Mail01Icon} size={16} className="text-indigo-600 dark:text-indigo-400" />
                                        designinghub0@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t("footer.follow_us")}</h4>
                            <div className="flex gap-3">
                                {[
                                    { Icon: InstagramIcon, href: "https://www.instagram.com/designinghub_india/" },
                                    { Icon: Linkedin01Icon, href: "https://www.facebook.com/designing.hub.7" },
                                    { Icon: Facebook01Icon, href: "https://www.facebook.com/designing.hub.7" },
                                    { Icon: WhatsappIcon, href: "https://wa.me/917289906833" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-900 dark:hover:bg-indigo-600 hover:text-white dark:hover:text-white transition-all shadow-sm hover:-translate-y-1"
                                    >
                                        <HugeiconsIcon icon={social.Icon} size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-slate-200/60 dark:border-slate-800/50 flex flex-col items-center gap-8">
                    {/* Back to Top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all shadow-sm">
                            <HugeiconsIcon icon={ArrowUp01Icon} size={20} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{t("footer.back_to_top")}</span>
                    </button>

                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
