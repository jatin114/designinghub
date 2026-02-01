import { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";
import logoWhite from "@/assets/logo-white.webp";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { name: t("nav.services"), href: "#services" },
        { name: t("nav.process"), href: "#how-it-works" },
        { name: t("nav.why_us"), href: "#why-us" },
        { name: t("nav.portfolio"), href: "#portfolio" },
        { name: t("nav.about"), href: "#about" },
        { name: t("nav.contact"), href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-24 flex items-center border-b",
                isScrolled
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200/60 dark:border-slate-800/60 shadow-sm h-20"
                    : "bg-transparent border-transparent"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between">

                    {/* Brand */}
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="flex-shrink-0"
                    >
                        <img src={logo} alt="DesigningHub" className="h-10 md:h-14 w-auto cursor-pointer object-contain transition-all duration-300 dark:hidden" />
                        <img src={logoWhite} alt="DesigningHub" className="h-10 md:h-14 w-auto cursor-pointer object-contain transition-all duration-300 hidden dark:block" />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="px-5 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Theme & Language */}
                    <div className="hidden lg:flex items-center gap-3">
                        <LanguageSwitcher />
                        <ThemeToggle />
                        <Button
                            onClick={() => scrollToSection("#contact")}
                            className="bg-indigo-600 hover:bg-slate-900 text-white font-bold rounded-xl h-11 px-7 shadow-lg shadow-indigo-600/15 transition-all ml-1"
                        >
                            {t("nav.get_quote")}
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-slate-900 dark:text-white z-[110]"
                    >
                        <HugeiconsIcon icon={isMenuOpen ? Cancel01Icon : Menu01Icon} size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-white dark:bg-slate-950 z-[105] flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden",
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            )}>
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col items-center gap-6 mt-4">
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                        <Button
                            onClick={() => scrollToSection("#contact")}
                            size="lg"
                            className="bg-indigo-600 hover:bg-slate-900 dark:hover:bg-indigo-500 text-white font-bold rounded-2xl h-14 px-10 shadow-xl shadow-indigo-600/20 transition-all"
                        >
                            {t("nav.get_quote")}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;