import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "seo": {
                "title": "DesigningHub | Professional Web Design & Development Agency",
                "description": "DesigningHub is a leading web design and development agency. We specialize in custom business websites, SEO optimization, and UI/UX design to grow your brand's digital presence.",
                "keywords": "web development, web design, UI/UX, SEO optimization, business websites, DesigningHub"
            },
            "nav": {
                "services": "Services",
                "process": "Process",
                "why_us": "Why Us",
                "portfolio": "Portfolio",
                "about": "About",
                "contact": "Contact",
                "get_quote": "Get a Quote"
            },
            "hero": {
                "badge": "Accepting New Projects",
                "title_p1": "Design.",
                "title_p2": "Develop.",
                "title_p3": "Deliver.",
                "subtitle": "We transform ideas into high-performance digital experiences. From pixel-perfect designs to robust code, we build for your growth.",
                "cta_quote": "Get a Free Quote",
                "cta_services": "View Services"
            },
            "services": {
                "badge": "Expertise",
                "title_p1": "Our Core",
                "title_p2": "Services",
                "subtitle": "We deliver end-to-end digital solutions focused on technical precision and creative impact.",
                "get_quote": "Get a Quote",
                "web_dev": {
                    "title": "Web Development",
                    "desc": "Custom, high-performance websites built with the latest technologies for maximum scalability.",
                    "f1": "React & Next.js",
                    "f2": "Responsive Design",
                    "f3": "SEO Optimization"
                },
                "wireframe_to_code": {
                    "title": "Wireframe to Code",
                    "desc": "Turning your low-fidelity concepts into production-ready, interactive digital experiences.",
                    "f1": "Pixel Perfection",
                    "f2": "Interactive UI",
                    "f3": "Clean Architecture"
                },
                "ui_ux": {
                    "title": "Wireframe Design (UI/UX)",
                    "desc": "Strategic user experience design focusing on intuitive flows and high conversion rates.",
                    "f1": "User Research",
                    "f2": "Visual Systems",
                    "f3": "Low/High Fidelity"
                },
                "fixing": {
                    "title": "Website Fixing",
                    "desc": "Technical audit and optimization to resolve bugs, improve speed, and enhance security.",
                    "f1": "Speed Optimization",
                    "f2": "Bug Squashing",
                    "f3": "Security Audits"
                },
                "branding": {
                    "title": "Brand Identity",
                    "desc": "Premium visual identity assets designed to ensure your brand leaves a powerful and lasting impression.",
                    "f1": "Business card design",
                    "f2": "Social media post",
                    "f3": "Banner design"
                }
            },
            "how_it_works": {
                "title_p1": "How does it",
                "title_p2": "work?",
                "subtitle": "A simple, transparent process designed to bring your vision to life with precision and care.",
                "step1_title": "Step 1 – Discuss Requirements",
                "step1_desc": "Share your idea, business goal, or existing website. We understand your needs and suggest the right approach.",
                "step2_title": "Step 2 – Design & Development",
                "step2_desc": "We design, build, and iterate your website or UI with clear communication and regular updates.",
                "step3_title": "Step 3 – Launch & Support",
                "step3_desc": "After final approval, we launch your project and provide support for updates and improvements."
            },
            "why_us": {
                "title_p1": "Why",
                "title_p2": "DesigningHub",
                "subtitle": "Build trust through quality, transparency, and long-term partnership.",
                "clean_code_title": "Clean, Scalable Code",
                "clean_code_desc": "We write clean, well-structured code that is easy to maintain, scale, and improve over time.",
                "design_purpose_title": "Design with Purpose",
                "design_purpose_desc": "We focus on usability, clarity, and business goals — not just visual appeal.",
                "communication_title": "Clear Communication",
                "communication_desc": "You get regular updates, honest timelines, and direct communication throughout the project.",
                "support_title": "Long-Term Support",
                "support_desc": "We don’t disappear after delivery. We support updates, fixes, and improvements when needed."
            },
            "pricing": {
                "title": "Website Starts At",
                "price": "5,999",
                "tagline": "High-Performance, Custom-Built & SEO Ready.",
                "cta": "Start today"
            },
            "portfolio": {
                "badge": "Selected Works",
                "title_p1": "Featured",
                "title_p2": "Projects",
                "subtitle": "A collection of high-performance digital solutions crafted for specific business needs.",
                "p1_title": "Business Website",
                "p1_desc": "Professional, high-conversion websites tailored for modern brands and corporate identity.",
                "p2_title": "Static Website",
                "p2_desc": "Lightning-fast, SEO-optimized static sites perfect for blogs, portfolios, and landing pages.",
                "p3_title": "Astrologer App UI UX",
                "p3_desc": "Intuitive and spiritual user interface design for modern astrology and wellness platforms."
            },
            "about": {
                "badge": "Our Mission",
                "title_p1": "We Engineer",
                "title_p2": "Digital Success.",
                "desc": "Achieving digital excellence through strategic design and engineering. At DesigningHub, we don't just build websites; we craft the architectural foundation of your digital presence. Whether it's the complex task of Wireframe to Code transformation or the critical necessity of Website fixing and optimization, we approach every pixel with surgical precision.",
                "v1_title": "Code Quality",
                "v1_desc": "Maintainable, scalable, and performance-first engineering.",
                "v2_title": "UX Strategy",
                "v2_desc": "User-centric layouts designed for high conversion.",
                "v3_title": "Visual Identity",
                "v3_desc": "Modern aesthetics that define your brand's soul.",
                "v4_title": "optimization",
                "v4_desc": "Continuous refinement for peak digital performance."
            },
            "contact": {
                "badge": "Let's Connect",
                "title_p1": "Have a vision?",
                "title_p2": "Let's build it.",
                "subtitle": "Whether it's a new build, a strategic refinement, or fixing a legacy site, we're here to turn your vision into reality.",
                "labels": {
                    "name": "Name",
                    "email": "Email",
                    "mobile": "Mobile Number",
                    "message": "Message"
                },
                "placeholders": {
                    "name": "John Doe",
                    "email": "john@example.com",
                    "mobile": "+91 00000 00000",
                    "message": "Tell us about your project or the issue you're facing..."
                },
                "submit": "Send Inquiry"
            },
            "footer": {
                "explore": "Explore",
                "specialties": "Specialties",
                "get_in_touch": "Get in Touch",
                "follow_us": "Follow Us",
                "back_to_top": "Back to Top",
                "whatsapp_chat": "Chat with us",
                "whatsapp_header_title": "DesigningHub",
                "whatsapp_header_status": "Typically replies in minutes",
                "whatsapp_welcome_msg": "Hi there! 👋 How can we help you with your project today?",
                "whatsapp_placeholder": "Type your message...",
                "whatsapp_send": "Send",
                "call_us": "Call us",
                "rights": "© 2026 DesigningHub Agency. All rights reserved."
            }
        }
    },
    hi: {
        translation: {
            "seo": {
                "title": "DesigningHub | प्रोफेशनल वेब डिजाइन और डेवलपमेंट एजेंसी",
                "description": "DesigningHub एक अग्रणी वेब डिजाइन और डेवलपमेंट एजेंसी है। हम आपके ब्रांड की डिजिटल उपस्थिति को बढ़ाने के लिए कस्टम बिजनेस वेबसाइट, SEO अनुकूलन और UI/UX डिजाइन में विशेषज्ञ हैं।",
                "keywords": "वेब डेवलपमेंट, वेब डिजाइन, UI/UX, SEO अनुकूलन, बिजनेस वेबसाइट, DesigningHub"
            },
            "nav": {
                "services": "सेवाएं",
                "process": "प्रक्रिया",
                "why_us": "हमें क्यों चुनें",
                "portfolio": "पोर्टफोलियो",
                "about": "हमारे बारे में",
                "contact": "संपर्क",
                "get_quote": "कोट प्राप्त करें"
            },
            "hero": {
                "badge": "नई परियोजनाओं को स्वीकार करना",
                "title_p1": "डिजाइन.",
                "title_p2": "विकास.",
                "title_p3": "वितरण।",
                "subtitle": "हम विचारों को उच्च-प्रदर्शन डिजिटल अनुभवों में बदलते हैं। पिक्सेल-परफेक्ट डिज़ाइन से लेकर मजबूत कोड तक, हम आपके विकास के लिए निर्माण करते हैं।",
                "cta_quote": "नि:शुल्क कोट प्राप्त करें",
                "cta_services": "सेवाएं देखें"
            },
            "services": {
                "badge": "विशेषज्ञता",
                "title_p1": "हमारी मुख्य",
                "title_p2": "सेवाएं",
                "subtitle": "हम तकनीकी सटीकता और रचनात्मक प्रभाव पर केंद्रित एंड-टू-एंड डिजिटल समाधान प्रदान करते हैं।",
                "get_quote": "कोट प्राप्त करें",
                "web_dev": {
                    "title": "वेब विकास",
                    "desc": "अधिकतम मापनीयता के लिए नवीनतम तकनीकों के साथ बनाई गई कस्टम, उच्च-प्रदर्शन वेबसाइटें।",
                    "f1": "React और Next.js",
                    "f2": "उत्तरदायी डिज़ाइन",
                    "f3": "SEO अनुकूलन"
                },
                "wireframe_to_code": {
                    "title": "वायरफ्रेम से कोड",
                    "desc": "आपके लो-फिडेलिटी कॉन्सेप्ट्स को प्रोडक्शन-रेडी, इंटरैक्टिव डिजिटल अनुभवों में बदलना।",
                    "f1": "पिक्सेल पूर्णता",
                    "f2": "इंटरैक्टिव UI",
                    "f3": "स्वच्छ वास्तुकला"
                },
                "ui_ux": {
                    "title": "वायरफ्रेम डिज़ाइन (UI/UX)",
                    "desc": "सहज प्रवाह और उच्च रूपांतरण दरों पर ध्यान केंद्रित करने वाली रणनीतिक उपयोगकर्ता अनुभव डिज़ाइन।",
                    "f1": "उपयोगकर्ता अनुसंधान",
                    "f2": "विजुअल सिस्टम",
                    "f3": "लो/हाई फिडेलिटी"
                },
                "fixing": {
                    "title": "वेबसाइट फिक्सिंग",
                    "desc": "बग्स को हल करने, गति में सुधार करने और सुरक्षा बढ़ाने के लिए तकनीकी ऑडिट और अनुकूलन।",
                    "f1": "गति अनुकूलन",
                    "f2": "बग स्क्वैशिंग",
                    "f3": "सुरक्षा ऑडिट"
                },
                "branding": {
                    "title": "ब्रांड पहचान",
                    "desc": "प्रीमियम दृश्य पहचान संपत्ति जिसे यह सुनिश्चित करने के लिए डिज़ाइन किया गया है कि आपका ब्रांड एक शक्तिशाली और स्थायी छाप छोड़े।",
                    "f1": "बिजनेस कार्ड डिजाइन",
                    "f2": "सोशल मीडिया पोस्ट",
                    "f3": "बैनर डिजाइन"
                }
            },
            "how_it_works": {
                "title_p1": "यह कैसे",
                "title_p2": "काम करता है?",
                "subtitle": "आपकी दृष्टि को सटीकता और देखभाल के साथ जीवन में लाने के लिए डिज़ाइन की गई एक सरल, पारदर्शी प्रक्रिया।",
                "step1_title": "चरण 1 - आवश्यकताओं पर चर्चा करें",
                "step1_desc": "अपना विचार, व्यावसायिक लक्ष्य या मौजूदा वेबसाइट साझा करें। हम आपकी आवश्यकताओं को समझते हैं और सही दृष्टिकोण का सुझाव देते हैं।",
                "step2_title": "चरण 2 - डिजाइन और विकास",
                "step2_desc": "हम स्पष्ट संचार और नियमित अपडेट के साथ आपकी वेबसाइट या UI को डिजाइन, निर्माण और पुनरावृत्ति करते हैं।",
                "step3_title": "चरण 3 - लॉन्च और सहायता",
                "step3_desc": "अंतिम अनुमोदन के बाद, हम आपकी परियोजना शुरू करते हैं और अपडेट और सुधार के लिए सहायता प्रदान करते हैं।"
            },
            "why_us": {
                "title_p1": "डिजाइनिंगहब",
                "title_p2": "क्यों?",
                "subtitle": "गुणवत्ता, पारदर्शिता और दीर्घकालिक साझेदारी के माध्यम से विश्वास बनाएं।",
                "clean_code_title": "स्वच्छ, मापनीय कोड",
                "clean_code_desc": "हम स्वच्छ, अच्छी तरह से संरचित कोड लिखते हैं जिसे समय के साथ बनाए रखना, स्केल करना और सुधारना आसान है।",
                "design_purpose_title": "उद्देश्य के साथ डिज़ाइन",
                "design_purpose_desc": "हम उपयोगिता, स्पष्टता और व्यावसायिक लक्ष्यों पर ध्यान केंद्रित करते हैं - न कि केवल दृश्य अपील पर।",
                "communication_title": "स्पष्ट संचार",
                "communication_desc": "आपको पूरे प्रोजेक्ट के दौरान नियमित अपडेट, ईमानدار समयसीमा और सीधा संचार मिलता है।",
                "support_title": "दीर्घकालिक सहायता",
                "support_desc": "हम डिलीवरी के बाद गायब नहीं होते हैं। जरूरत पड़ने पर हम अपडेट, फिक्स और सुधार का समर्थन करते हैं।"
            },
            "pricing": {
                "title": "वेबसाइट की शुरुआत",
                "price": "5,999",
                "tagline": "उच्च प्रदर्शन, कस्टम-निर्मित और SEO तैयार।",
                "cta": "आज ही शुरू करें"
            },
            "portfolio": {
                "badge": "चयनित कार्य",
                "title_p1": "चुनिंदा",
                "title_p2": "प्रोजेक्ट्स",
                "subtitle": "विशिष्ट व्यावसायिक आवश्यकताओं के लिए तैयार किए गए उच्च-प्रदर्शन डिजिटल समाधानों का संग्रह।",
                "p1_title": "बिजनेस वेबसाइट",
                "p1_desc": "आधुनिक ब्रांडों और कॉर्पोरेट पहचान के लिए तैयार की गई पेशेवर, उच्च-रूपांतरण वेबसाइटें।",
                "p2_title": "स्टेटिक वेबसाइट",
                "p2_desc": "ब्लॉग, पोर्टफोलियो और लैंडिंग पेजों के लिए एकदम सही बिजली की तेजी से चलने वाली, SEO-अनुकूलित साइटें।",
                "p3_title": "ज्योतिषी ऐप UI UX",
                "p3_desc": "आधुनिक ज्योतिष और वेलनेस प्लेटफार्मों के लिए सहज और आध्यात्मिक यूजर इंटरफेस डिजाइन।"
            },
            "about": {
                "badge": "हमारा मिशन",
                "title_p1": "हम निर्माण करते हैं",
                "title_p2": "डिजिटल सफलता का।",
                "desc": "रणनीतिक डिजाइन और इंजीनियरिंग के माध्यम से डिजिटल उत्कृष्टता प्राप्त करना। DesigningHub में, हम केवल वेबसाइट नहीं बनाते हैं; हम आपकी डिजिटल उपस्थिति की वास्तु नींव तैयार करते हैं। चाहे वह वायरफ्रेम से कोड परिवर्तन का जटिल कार्य हो या वेबसाइट फिक्सिंग और अनुकूलन की महत्वपूर्ण आवश्यकता, हम शल्य चिकित्सा सटीकता के साथ हर पिक्सेल तक पहुँचते हैं।",
                "v1_title": "कोड गुणवत्ता",
                "v1_desc": "रखरखाव योग्य, मापनीय और प्रदर्शन-प्रथम इंजीनियरिंग।",
                "v2_title": "UX रणनीति",
                "v2_desc": "उच्च रूपांतरण के लिए डिज़ाइन किए गए उपयोगकर्ता-केंद्रित लेआउट।",
                "v3_title": "दृश्य पहचान",
                "v3_desc": "आधुनिक सौंदर्यशास्त्र जो आपके ब्रांड की आत्मा को परिभाषित करता है।",
                "v4_title": "अनुकूलन",
                "v4_desc": "शिखर डिजिटल प्रदर्शन के लिए निरंतर शोधन।"
            },
            "contact": {
                "badge": "जुड़ें",
                "title_p1": "कोई विजन है?",
                "title_p2": "चलो इसे बनाते हैं।",
                "subtitle": "चाहे वह नया निर्माण हो, रणनीतिक शोधन हो, या लीगेसी साइट को ठीक करना हो, हम आपके विजन को वास्तविकता में बदलने के लिए यहां हैं।",
                "labels": {
                    "name": "नाम",
                    "email": "ईमेल",
                    "mobile": "मोबाइल नंबर",
                    "message": "संदेश"
                },
                "placeholders": {
                    "name": "जॉन डो",
                    "email": "john@example.com",
                    "mobile": "+91 00000 00000",
                    "message": "हमें अपनी परियोजना या आपके सामने आने वाली समस्या के बारे में बताएं..."
                },
                "submit": "पूछताछ भेजें"
            },
            "footer": {
                "explore": "खोजें",
                "specialties": "विशेषज्ञता",
                "get_in_touch": "संपर्क करें",
                "follow_us": "हमें फॉलो करें",
                "back_to_top": "वापस ऊपर",
                "whatsapp_chat": "हमसे चैट करें",
                "whatsapp_header_title": "DesigningHub",
                "whatsapp_header_status": "आमतौर पर मिनटों में जवाब देते हैं",
                "whatsapp_welcome_msg": "नमस्ते! 👋 आज हम आपकी परियोजना में आपकी कैसे मदद कर सकते हैं?",
                "whatsapp_placeholder": "अपना संदेश लिखें...",
                "whatsapp_send": "भेजें",
                "call_us": "हमें कॉल करें",
                "rights": "© 2026 DesigningHub Agency। सर्वाधिकार सुरक्षित।"
            }
        }
    },
    ar: {
        translation: {
            "seo": {
                "title": "DesigningHub | وكالة تصميم وتطوير مواقع احترافية",
                "description": "DesigningHub هي وكالة رائدة في تصميم وتطوير المواقع. نحن متخصصون في المواقع التجارية المخصصة، وتحسين محركات البحث SEO، وتصميم UI/UX لتنمية حضور علامتك التجارية الرقمي.",
                "keywords": "تطوير مواقع, تصميم مواقع, UI/UX, تحسين محركات البحث, مواقع تجارية, DesigningHub"
            },
            "nav": {
                "services": "خدماتنا",
                "process": "آلية العمل",
                "why_us": "لماذا نحن",
                "portfolio": "أعمالنا",
                "about": "من نحن",
                "contact": "اتصل بنا",
                "get_quote": "احصل على عرض سعر"
            },
            "hero": {
                "badge": "نقبل مشاريع جديدة",
                "title_p1": "تصميم.",
                "title_p2": "تطوير.",
                "title_p3": "تنفيذ.",
                "subtitle": "نحول الأفكار إلى تجارب رقمية عالية الأداء. من التصاميم المثالية إلى الكود القوي، نبني من أجل نموك.",
                "cta_quote": "احصل على استشارة مجانية",
                "cta_services": "عرض الخدمات"
            },
            "services": {
                "badge": "خبرتنا",
                "title_p1": "خدماتنا",
                "title_p2": "الأساسية",
                "subtitle": "نقدم حلولاً رقمية شاملة تركز على الدقة التقنية والتأثير الإبداعي.",
                "get_quote": "عرض سعر",
                "web_dev": {
                    "title": "تطوير الويب",
                    "desc": "مواقع مخصصة وعالية الأداء مبنية بأحدث التقنيات لتحقيق أقصى قدر من القابلية للتوسع.",
                    "f1": "React & Next.js",
                    "f2": "تصميم متجاوب",
                    "f3": "تحسين محركات البحث (SEO)"
                },
                "wireframe_to_code": {
                    "title": "تحويل النماذج إلى كود",
                    "desc": "تحويل مفاهيمك منخفضة الدقة إلى تجارب رقمية تفاعلية جاهزة للإنتاج.",
                    "f1": "دقة البكسل",
                    "f2": "واجهة مستخدم تفاعلية",
                    "f3": "هيكلة نظيفة"
                },
                "ui_ux": {
                    "title": "تصميم النماذج (UI/UX)",
                    "desc": "تصميم تجربة مستخدم استراتيجي يركز على التدفقات البديهية ومعدلات التحويل العالية.",
                    "f1": "بحث المستخدم",
                    "f2": "أنظمة بصرية",
                    "f3": "نماذج منخفضة/عالية الدقة"
                },
                "fixing": {
                    "title": "إصلاح المواقع",
                    "desc": "تدقيق تقني وتحسين لحل المشكلات وتحسين السرعة وتعزيز الأمان.",
                    "f1": "تحسين السرعة",
                    "f2": "حل المشكلات التقنية",
                    "f3": "تدقيق الأمان"
                },
                "branding": {
                    "title": "الهوية التجارية",
                    "desc": "أصول هوية بصرية متميزة مصممة لضمان ترك علامتك التجارية انطباعاً قوياً ودائماً.",
                    "f1": "تصميم بطاقات العمل",
                    "f2": "منشورات التواصل الاجتماعي",
                    "f3": "تصميم البانر"
                }
            },
            "how_it_works": {
                "title_p1": "كيف",
                "title_p2": "نعمل؟",
                "subtitle": "عملية بسيطة وشفافة مصممة لتجسيد رؤيتك بدقة وعناية.",
                "step1_title": "الخطوة 1 - مناقشة المتطلبات",
                "step1_desc": "شارك فكرتك أو هدف عملك أو موقعك الحالي. نفهم احتياجاتك ونقترح النهج الصحيح.",
                "step2_title": "الخطوة 2 - التصميم والتطوير",
                "step2_desc": "نصمم ونبني ونطور موقعك أو واجهة المستخدم الخاصة بك مع تواصل واضح وتحديثات منتظمة.",
                "step3_title": "الخطوة 3 - الإطلاق والدعم",
                "step3_desc": "بعد الموافقة النهائية، نطلق مشروعك ونقدم الدعم للتحديثات والتحسينات."
            },
            "why_us": {
                "title_p1": "لماذا",
                "title_p2": "DesigningHub؟",
                "subtitle": "بناء الثقة من خلال الجودة والشفافية والشراكة طويلة الأمد.",
                "clean_code_title": "كود نظيف وقابل للتطوير",
                "clean_code_desc": "نكتب كوداً نظيفاً ومنظماً جيداً يسهل صيانته وتوسيع نطاقه وتحسينه بمرور الوقت.",
                "design_purpose_title": "تصميم هادف",
                "design_purpose_desc": "نركز على القابلية للاستخدام والوضوح وأهداف العمل - وليس فقط الجاذبية البصرية.",
                "communication_title": "تواصل واضح",
                "communication_desc": "تحصل على تحديثات منتظمة وجداول زمنية صادقة وتواصل مباشر طوال فترة المشروع.",
                "support_title": "دعم طويل الأمد",
                "support_desc": "نحن لا نختفي بعد التسليم. نحن ندعم التحديثات والإصلاحات والتحسينات عند الحاجة."
            },
            "pricing": {
                "title": "تبدأ أسعار المواقع من",
                "price": "5,999",
                "tagline": "أداء عالٍ، بناء مخصص وجاهز لمحركات البحث.",
                "cta": "ابدأ اليوم"
            },
            "portfolio": {
                "badge": "أعمال مختارة",
                "title_p1": "المشاريع",
                "title_p2": "المميزة",
                "subtitle": "مجموعة من الحلول الرقمية عالية الأداء المصممة لتلبية احتياجات العمل المحددة.",
                "p1_title": "موقع تجاري",
                "p1_desc": "مواقع احترافية عالية التحويل مصممة خصيصًا للعلامات التجارية الحديثة والهوية المؤسسية.",
                "p2_title": "موقع ثابت",
                "p2_desc": "مواقع ثابتة سريعة للغاية ومحسنة لمحركات البحث ومثالية للمدونات وحقائب الأعمال وصفحات الهبوط.",
                "p3_title": "تصميم تطبيق منجم UI UX",
                "p3_desc": "تصميم واجهة مستخدم سهلة وروحي لمنصات علم التنجيم والعافية الحديثة."
            },
            "about": {
                "badge": "مهمتنا",
                "title_p1": "نحن نصنع",
                "title_p2": "النجاح الرقمي.",
                "desc": "تحقيق التميز الرقمي من خلال التصميم الاستراتيجي والهندسة. في DesigningHub، لا نبني مواقع الويب فحسب؛ بل نصنع الأساس المعماري لحضورك الرقمي. سواء كانت المهمة المعقدة لتحويل النماذج إلى كود أو الضرورة القصوى لإصلاح المواقع وتحسينها، فإننا نتعامل مع كل بكسل بدقة جراحية.",
                "v1_title": "جودة الكود",
                "v1_desc": "هندسة قابلة للصيانة والتطوير وتركز على الأداء أولاً.",
                "v2_title": "استراتيجية تجربة المستخدم",
                "v2_desc": "تخطيطات تركز على المستخدم مصممة لتحقيق تحويل عالٍ.",
                "v3_title": "الهوية البصرية",
                "v3_desc": "جماليات حديثة تحدد روح علامتك التجارية.",
                "v4_title": "التحسين المستمر",
                "v4_desc": "تحسين مستمر لتحقيق ذروة الأداء الرقمي."
            },
            "contact": {
                "badge": "لنتواصل",
                "title_p1": "هل لديك رؤية؟",
                "title_p2": "لنبنيها.",
                "subtitle": "سواء كان بناءً جديداً، أو تحسيناً استراتيجياً، أو إصلاح موقع قديم، نحن هنا لتحويل رؤيتك إلى حقيقة.",
                "labels": {
                    "name": "الاسم",
                    "email": "البريد الإلكتروني",
                    "mobile": "رقم الجوال",
                    "message": "الرسالة"
                },
                "placeholders": {
                    "name": "John Doe",
                    "email": "john@example.com",
                    "mobile": "+91 00000 00000",
                    "message": "أخبرنا عن مشروعك أو المشكلة التي تواجهها..."
                },
                "submit": "إرسال الطلب"
            },
            "footer": {
                "explore": "اكتشف",
                "specialties": "التخصصات",
                "get_in_touch": "اتصل بنا",
                "follow_us": "تابعنا",
                "back_to_top": "العودة للأعلى",
                "whatsapp_chat": "دردش معنا",
                "whatsapp_header_title": "DesigningHub",
                "whatsapp_header_status": "يرد عادة في غضون دقائق",
                "whatsapp_welcome_msg": "مرحباً! 👋 كيف يمكننا مساعدتك في مشروعك اليوم؟",
                "whatsapp_placeholder": "اكتب رسالتك...",
                "whatsapp_send": "إرسال",
                "call_us": "اتصل بنا",
                "rights": "© 2026 DesigningHub. جميع الحقوق محفوظة."
            }
        }
    },
    fr: {
        translation: {
            "seo": {
                "title": "DesigningHub | Agence de Design et Développement Web Professionnelle",
                "description": "DesigningHub est une agence leader en design et développement web. Nous nous spécialisons dans les sites web d'entreprise personnalisés, l'optimisation SEO et le design UI/UX pour booster votre présence numérique.",
                "keywords": "développement web, design web, UI/UX, optimisation SEO, sites web d'entreprise, DesigningHub"
            },
            "nav": {
                "services": "Services",
                "process": "Processus",
                "why_us": "Pourquoi Nous",
                "portfolio": "Portfolio",
                "about": "À Propos",
                "contact": "Contact",
                "get_quote": "Demander un Devis"
            },
            "hero": {
                "badge": "Prise en charge de nouveaux projets",
                "title_p1": "Concevoir.",
                "title_p2": "Développer.",
                "title_p3": "Livrer.",
                "subtitle": "Nous transformons les idées en expériences numériques performantes. Des designs parfaits au code robuste, nous construisons pour votre croissance.",
                "cta_quote": "Devis Gratuit",
                "cta_services": "Voir les Services"
            },
            "services": {
                "badge": "Expertise",
                "title_p1": "Nos Services",
                "title_p2": "de Base",
                "subtitle": "Nous livrons des solutions numériques de bout en bout axées sur la précision technique et l'impact créatif.",
                "get_quote": "Demander un Devis",
                "web_dev": {
                    "title": "Développement Web",
                    "desc": "Sites web personnalisés et performants utilisant les dernières technologies pour une évolutivité maximale.",
                    "f1": "React & Next.js",
                    "f2": "Design Responsive",
                    "f3": "Optimisation SEO"
                },
                "wireframe_to_code": {
                    "title": "Du Wireframe au Code",
                    "desc": "Transformer vos concepts basse fidélité en expériences numériques interactives prêtes pour la production.",
                    "f1": "Perfection au Pixel",
                    "f2": "UI Interactive",
                    "f3": "Architecture Propre"
                },
                "ui_ux": {
                    "title": "Design de Wireframe (UI/UX)",
                    "desc": "Design d'expérience utilisateur stratégique axé sur des flux intuitifs et des taux de conversion élevés.",
                    "f1": "Recherche Utilisateur",
                    "f2": "Systèmes Visuels",
                    "f3": "Basse/Haute Fidélité"
                },
                "fixing": {
                    "title": "Réparation de Site Web",
                    "desc": "Audit technique et optimisation pour résoudre les bugs, améliorer la vitesse et renforcer la sécurité.",
                    "f1": "Optimisation de la Vitesse",
                    "f2": "Correction de Bugs",
                    "f3": "Audits de Sécurité"
                },
                "branding": {
                    "title": "Identité de Marque",
                    "desc": "Identité visuelle premium conçue pour garantir que votre marque laisse une impression puissante et durable.",
                    "f1": "Design de cartes de visite",
                    "f2": "Posts réseaux sociaux",
                    "f3": "Design de bannières"
                }
            },
            "how_it_works": {
                "title_p1": "Comment ça",
                "title_p2": "marche ?",
                "subtitle": "Un processus simple et transparent conçu pour donner vie à votre vision avec précision et soin.",
                "step1_title": "Étape 1 – Discussion des besoins",
                "step1_desc": "Partagez votre idée, votre objectif commercial ou votre site Web existant. Nous comprenons vos besoins et suggérons l'approche appropriée.",
                "step2_title": "Étape 2 – Design & Développement",
                "step2_desc": "Nous concevons, construisons et itérons votre site Web ou votre interface utilisateur avec une communication claire et des mises à jour régulières.",
                "step3_title": "Étape 3 – Lancement & Support",
                "step3_desc": "Après approbation finale, nous lançons votre projet et fournissons un support pour les mises à jour et les améliorations."
            },
            "why_us": {
                "title_p1": "Pourquoi",
                "title_p2": "DesigningHub",
                "subtitle": "Bâtir la confiance grâce à la qualité, la transparence et un partenariat à long terme.",
                "clean_code_title": "Code propre et évolutif",
                "clean_code_desc": "Nous écrivons un code propre et bien structuré, facile à maintenir, à faire évoluer et à améliorer au fil du temps.",
                "design_purpose_title": "Design avec un but",
                "design_purpose_desc": "Nous nous concentrons sur l'utilisabilité, la clarté et les objectifs commerciaux — pas seulement sur l'aspect visuel.",
                "communication_title": "Communication claire",
                "communication_desc": "Vous bénéficiez de mises à jour régulières, de délais honnêtes et d'une communication directe tout au long du projet.",
                "support_title": "Support à long terme",
                "support_desc": "Nous ne disparaissons pas après la livraison. Nous prenons en charge les mises à jour, les corrections et les améliorations si nécessaire."
            },
            "pricing": {
                "title": "Site Web à partir de",
                "price": "5 999",
                "tagline": "Haute performance, sur mesure et prêt pour le SEO.",
                "cta": "Commencer aujourd'hui"
            },
            "portfolio": {
                "badge": "Travaux Sélectionnés",
                "title_p1": "Projets",
                "title_p2": "Vedettes",
                "subtitle": "Une collection de solutions numériques haute performance conçues pour des besoins commerciaux spécifiques.",
                "p1_title": "Site Web d'Entreprise",
                "p1_desc": "Sites web professionnels à haute conversion adaptés aux marques modernes et à l'identité d'entreprise.",
                "p2_title": "Site Web Statique",
                "p2_desc": "Sites statiques ultra-rapides, optimisés pour le SEO, parfaits pour les blogs, portfolios et pages de destination.",
                "p3_title": "UI UX de l'App d'Astrologue",
                "p3_desc": "Interface utilisateur intuitive et spirituelle pour les plateformes modernes d'astrologie et de bien-être."
            },
            "about": {
                "badge": "Notre Mission",
                "title_p1": "Nous Ingénions",
                "title_p2": "le Succès Numérique.",
                "desc": "Atteindre l'excellence numérique par le design stratégique et l'ingénierie. Chez DesigningHub, nous ne construisons pas seulement des sites web ; nous créons la fondation architecturale de votre présence numérique. Qu'il s'agisse de la transformation complexe du wireframe au code ou de la nécessité critique de réparation et d'optimisation, nous traitons chaque pixel avec une précision chirurgicale.",
                "v1_title": "Qualité du Code",
                "v1_desc": "Ingénierie maintenable, évolutive et axée sur la performance.",
                "v2_title": "Stratégie UX",
                "v2_desc": "Layouts centrés utilisateur conçus pour une conversion élevée.",
                "v3_title": "Identité Visuelle",
                "v3_desc": "Esthétique moderne qui définit l'âme de votre marque.",
                "v4_title": "Optimisation",
                "v4_desc": "Affinage continu pour une performance numérique maximale."
            },
            "contact": {
                "badge": "Connectons-nous",
                "title_p1": "Une vision ?",
                "title_p2": "Bâtissons-la.",
                "subtitle": "Qu'il s'agisse d'une nouvelle construction ou de réparer un site existant, nous sommes là pour concrétiser votre vision.",
                "labels": {
                    "name": "Nom",
                    "email": "Email",
                    "mobile": "Numéro de Mobile",
                    "message": "Message"
                },
                "placeholders": {
                    "name": "John Doe",
                    "email": "john@exemple.com",
                    "mobile": "+91 00000 00000",
                    "message": "Parlez-nous de votre projet..."
                },
                "submit": "Envoyer"
            },
            "footer": {
                "explore": "Explorer",
                "specialties": "Spécialités",
                "get_in_touch": "Contact",
                "follow_us": "Suivez-nous",
                "back_to_top": "Haut de page",
                "whatsapp_chat": "Discutez avec nous",
                "whatsapp_header_title": "DesigningHub",
                "whatsapp_header_status": "Répond généralement en quelques minutes",
                "whatsapp_welcome_msg": "Bonjour ! 👋 Comment pouvons-nous vous aider dans votre projet aujourd'hui ?",
                "whatsapp_placeholder": "Tapez votre message...",
                "whatsapp_send": "Envoyer",
                "call_us": "Appelez-nous",
                "rights": "© 2026 Agence DesigningHub. Tous droits réservés."
            }
        }
    },
    es: {
        translation: {
            "seo": {
                "title": "DesigningHub | Agencia de Diseño y Desarrollo Web Profesional",
                "description": "DesigningHub es una agencia líder en diseño y desarrollo web. Nos especializamos en sitios web de negocios personalizados, optimización SEO y diseño UI/UX para hacer crecer la presencia digital de su marca.",
                "keywords": "desarrollo web, diseño web, UI/UX, optimización SEO, sitios web de negocios, DesigningHub"
            },
            "nav": {
                "services": "Servicios",
                "process": "Proceso",
                "why_us": "¿Por Qué Nosotros?",
                "portfolio": "Portafolio",
                "about": "Nosotros",
                "contact": "Contacto",
                "get_quote": "Obtener Presupuesto"
            },
            "hero": {
                "badge": "Aceptando nuevos proyectos",
                "title_p1": "Diseñar.",
                "title_p2": "Desarrollar.",
                "title_p3": "Entregar.",
                "subtitle": "Transformamos ideas en experiencias digitales de alto rendimiento. Desde diseños perfectos hasta código robusto, construimos para su crecimiento.",
                "cta_quote": "Presupuesto Gratuito",
                "cta_services": "Ver Servicios"
            },
            "services": {
                "badge": "Experiencia",
                "title_p1": "Nuestros",
                "title_p2": "Servicios",
                "subtitle": "Entregamos soluciones digitales integrales enfocadas en la precisión técnica y el impacto creativo.",
                "get_quote": "Obtener Presupuesto",
                "web_dev": {
                    "title": "Desarrollo Web",
                    "desc": "Sitios web personalizados y de alto rendimiento utilizando las últimas tecnologías para una máxima escalabilidad.",
                    "f1": "React & Next.js",
                    "f2": "Diseño Responsivo",
                    "f3": "Optimización SEO"
                },
                "wireframe_to_code": {
                    "title": "De Wireframe a Código",
                    "desc": "Convertimos sus conceptos de baja fidelidad en experiencias digitales interactivas listas para producción.",
                    "f1": "Perfección en Píxeles",
                    "f2": "UI Interactive",
                    "f3": "Arquitectura Limpia"
                },
                "ui_ux": {
                    "title": "Diseño de Wireframe (UI/UX)",
                    "desc": "Diseño de experiencia de usuario estratégico enfocado en flujos intuitivos y altas tasas de conversión.",
                    "f1": "Investigación de Usuarios",
                    "f2": "Sistemas Visuales",
                    "f3": "Baja/Alta Fidelidad"
                },
                "fixing": {
                    "title": "Reparación de Sitios",
                    "desc": "Auditoría técnica y optimización para resolver errores, mejorar la velocidad y reforzar la seguridad.",
                    "f1": "Optimización de Velocidad",
                    "f2": "Corrección de Errores",
                    "f3": "Auditorías de Seguridad"
                },
                "branding": {
                    "title": "Identidad de Marca",
                    "desc": "Activos de identidad visual premium diseñados para asegurar que su marca deje una impresión poderosa y duradera.",
                    "f1": "Diseño de tarjetas",
                    "f2": "Posts en redes sociales",
                    "f3": "Diseño de banners"
                }
            },
            "how_it_works": {
                "title_p1": "¿Cómo",
                "title_p2": "funciona?",
                "subtitle": "Un proceso simple y transparente diseñado para dar vida a su visión con precisión y cuidado.",
                "step1_title": "Paso 1 – Discutir Requisitos",
                "step1_desc": "Comparta su idea, objetivo comercial o sitio web existente. Entendemos sus necesidades y sugerimos el enfoque correcto.",
                "step2_title": "Paso 2 – Diseño y Desarrollo",
                "step2_desc": "Diseñamos, construimos e iteramos su sitio web o interfaz de usuario con una comunicación clara y actualizaciones regulares.",
                "step3_title": "Paso 3 – Lanzamiento y Soporte",
                "step3_desc": "Después de la aprobación final, lanzamos su proyecto y brindamos soporte para actualizaciones y mejoras."
            },
            "why_us": {
                "title_p1": "Por qué",
                "title_p2": "DesigningHub",
                "subtitle": "Construir confianza a través de la calidad, la transparencia y la asociación a largo plazo.",
                "clean_code_title": "Código limpio y escalable",
                "clean_code_desc": "Escribimos código limpio y bien estructurado que es fácil de mantener, escalar y mejorar con el tiempo.",
                "design_purpose_title": "Diseño con propósito",
                "design_purpose_desc": "Nos enfocamos en la usabilidad, claridad y objetivos comerciales, no solo en el atractivo visual.",
                "communication_title": "Comunicación clara",
                "communication_desc": "Obtienes actualizaciones regulares, cronogramas honestos y comunicación directa durante todo el proyecto.",
                "support_title": "Soporte a largo plazo",
                "support_desc": "No desaparecemos después de la entrega. Apoyamos actualizaciones, correcciones y mejoras cuando sea necesario."
            },
            "pricing": {
                "title": "Sitios Web desde",
                "price": "5.999",
                "tagline": "Alto rendimiento, a medida y listo para SEO.",
                "cta": "Empezar hoy"
            },
            "portfolio": {
                "badge": "Trabajos Seleccionados",
                "title_p1": "Proyectos",
                "title_p2": "Destacados",
                "subtitle": "Una colección de soluciones digitales de alto rendimiento diseñadas para necesidades comerciales específicas.",
                "p1_title": "Sitio Web de Negocios",
                "p1_desc": "Sitios web profesionales de alta conversión diseñados para marcas modernas e identidad corporativa.",
                "p2_title": "Sitio Web Estático",
                "p2_desc": "Sitios estáticos ultrarrápidos, optimizados para SEO, perfectos para blogs, portfolios y páginas de destino.",
                "p3_title": "UI UX de App de Astrólogo",
                "p3_desc": "Diseño de interfaz de usuario intuitivo y espiritual para plataformas modernas de astrología y bienestar."
            },
            "about": {
                "badge": "Misión",
                "title_p1": "Ingeniamos el",
                "title_p2": "Éxito Digital.",
                "desc": "Lograr la excelencia digital mediante el diseño estratégico y la ingeniería. En DesigningHub no solo construimos sitios; creamos la base arquitectónica de su presencia digital. Ya sea la transformación de wireframe a código o la optimización técnica, abordamos cada píxel con precisión quirúrgica.",
                "v1_title": "Calidad de Código",
                "v1_desc": "Ingeniería mantenible, escalable y enfocada en el rendimiento.",
                "v2_title": "Estrategia UX",
                "v2_desc": "Layouts centrados en el usuario diseñados para una alta conversión.",
                "v3_title": "Identidad Visual",
                "v3_desc": "Estética moderna que define el alma de su marca.",
                "v4_title": "Optimización",
                "v4_desc": "Refinamiento continuo para el máximo rendimiento digital."
            },
            "contact": {
                "badge": "Conectemos",
                "title_p1": "¿Tiene una visión?",
                "title_p2": "Construyámosla.",
                "subtitle": "Estamos aquí para convertir su visión en realidad con precisión y estrategia.",
                "labels": {
                    "name": "Nombre",
                    "email": "Email",
                    "mobile": "Teléfono",
                    "message": "Mensaje"
                },
                "placeholders": {
                    "name": "John Doe",
                    "email": "john@ejemplo.com",
                    "mobile": "+91 00000 00000",
                    "message": "Cuéntenos sobre su proyecto..."
                },
                "submit": "Enviar Consulta"
            },
            "footer": {
                "explore": "Explorar",
                "specialties": "Especialidades",
                "get_in_touch": "Contacto",
                "follow_us": "Síguenos",
                "back_to_top": "Subir",
                "whatsapp_chat": "Chatea con nosotros",
                "whatsapp_header_title": "DesigningHub",
                "whatsapp_header_status": "Típicamente responde en minutos",
                "whatsapp_welcome_msg": "¡Hola! 👋 ¿Cómo podemos ayudarte con tu proyecto hoy?",
                "whatsapp_placeholder": "Escribe tu mensaje...",
                "whatsapp_send": "Enviar",
                "call_us": "Llámanos",
                "rights": "© 2026 Agencia DesigningHub. Todos los derechos reservados."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        }
    });

export default i18n;
