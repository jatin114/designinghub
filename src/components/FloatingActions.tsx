import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HugeiconsIcon } from "@hugeicons/react";
import { WhatsappIcon, Call02Icon } from "@hugeicons/core-free-icons";
import { Send, X } from "lucide-react";

export function FloatingActions() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (!message.trim()) return;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/917289906833?text=${encodedMessage}`, "_blank");
        setMessage("");
        setIsOpen(false);
    };

    const handleCall = () => {
        window.open("tel:+917289906833", "_self");
    };

    return (
        <div className="fixed bottom-6 z-50 flex flex-col items-end gap-4 ltr:right-6 rtl:left-6">
            {/* Chat Popup */}
            {isOpen && (
                <div className="flex flex-col w-[320px] sm:w-[360px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-5 duration-300 mb-2">
                    {/* Header */}
                    <div className="bg-[#25D366] p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 overflow-hidden">
                                <HugeiconsIcon icon={WhatsappIcon} size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm leading-tight">{t("footer.whatsapp_header_title")}</h4>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    <span className="text-[11px] opacity-90">{t("footer.whatsapp_header_status")}</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-black/10 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="h-[240px] p-4 bg-[#e5ddd5] dark:bg-slate-950 overflow-y-auto flex flex-col gap-3 relative">
                        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

                        <div className="relative self-start max-w-[85%] bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-800 dark:text-slate-200">
                            <p>{t("footer.whatsapp_welcome_msg")}</p>
                            <span className="text-[10px] opacity-50 block text-right mt-1">
                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    </div>

                    {/* Footer / Input */}
                    <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-end gap-2">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={t("footer.whatsapp_placeholder")}
                            rows={1}
                            className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#25D366]/50 resize-none max-h-32 dark:text-white"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!message.trim()}
                            className="p-2.5 bg-[#25D366] text-white rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}

            {/* Call Button */}
            {!isOpen && (
                <button
                    onClick={handleCall}
                    className="flex items-center justify-center rounded-full bg-indigo-600 p-3.5 text-white shadow-[0_8px_30px_rgb(79,70,229,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgb(79,70,229,0.5)] active:scale-95 group overflow-hidden border border-white/20"
                    aria-label={t("footer.call_us")}
                >
                    <div className="flex items-center">
                        <HugeiconsIcon icon={Call02Icon} size={24} className="relative z-10" />
                        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 ease-out group-hover:max-w-xs ltr:group-hover:ml-2 rtl:group-hover:mr-2">
                            {t("footer.call_us")}
                        </span>
                    </div>
                </button>
            )}

            {/* WhatsApp Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)] active:scale-95 group overflow-hidden border border-white/20"
                aria-label={t("footer.whatsapp_chat")}
            >
                {/* Soft Outer Pulse */}
                {!isOpen && (
                    <div className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping duration-[2000ms] group-hover:hidden -z-10" />
                )}

                <div className="flex items-center">
                    {isOpen ? (
                        <X size={24} className="relative z-10" />
                    ) : (
                        <>
                            <HugeiconsIcon icon={WhatsappIcon} size={24} className="relative z-10" />
                            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 ease-out group-hover:max-w-xs ltr:group-hover:ml-2 rtl:group-hover:mr-2">
                                {t("footer.whatsapp_chat")}
                            </span>
                        </>
                    )}
                </div>
            </button>
        </div>
    );
}
