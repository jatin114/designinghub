import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HugeiconsIcon } from "@hugeicons/react";
import { Call02Icon, Mail01Icon, SentIcon } from "@hugeicons/core-free-icons";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="relative w-full py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden transition-colors duration-300">
            <div className="container px-6 md:px-12 lg:px-24 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider shadow-sm">
                                {t("contact.badge")}
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                                {t("contact.title_p1")} <br />
                                <span className="text-indigo-600 dark:text-indigo-400">{t("contact.title_p2")}</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                                {t("contact.subtitle")}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm transition-colors">
                                    <HugeiconsIcon icon={Call02Icon} size={22} />
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white dir-ltr">+91 7289906833</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm transition-colors">
                                    <HugeiconsIcon icon={Mail01Icon} size={22} />
                                </div>
                                <span className="font-bold text-slate-900 dark:text-white">designinghub0@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/40 dark:shadow-none transition-colors">
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            action="/"
                            className="space-y-5">
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="hidden" name="bot-field" />

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">{t("contact.labels.name")}</label>
                                    <Input name="name" placeholder={t("contact.placeholders.name")} required className="h-12 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl focus:bg-white dark:focus:bg-slate-900 transition-all font-medium" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">{t("contact.labels.email")}</label>
                                    <Input name="email" type="email" placeholder={t("contact.placeholders.email")} required className="h-12 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl focus:bg-white dark:focus:bg-slate-900 transition-all font-medium" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">{t("contact.labels.mobile")}</label>
                                <Input name="mobile" type="tel" placeholder={t("contact.placeholders.mobile")} required className="h-12 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl focus:bg-white dark:focus:bg-slate-900 transition-all font-medium" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">{t("contact.labels.message")}</label>
                                <Textarea name="message" placeholder={t("contact.placeholders.message")} required className="min-h-[120px] border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl focus:bg-white dark:focus:bg-slate-900 transition-all p-4 resize-none font-medium" />
                            </div>

                            <Button type="submit" className="w-full h-14 bg-indigo-600 hover:bg-slate-900 dark:hover:bg-indigo-500 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/10 transition-all flex items-center justify-center gap-2">
                                {t("contact.submit")}
                                <HugeiconsIcon icon={SentIcon} size={18} className="rtl:rotate-180" />
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;