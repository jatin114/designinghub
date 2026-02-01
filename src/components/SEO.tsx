import { useTranslation } from "react-i18next";

const SEO = () => {
    const { t } = useTranslation();

    return (
        <>
            {/* Standard metadata tags */}
            <title>{t("seo.title")}</title>
            <meta name="description" content={t("seo.description")} />
            <meta name="keywords" content={t("seo.keywords")} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://designinghub.in/" />
            <meta property="og:title" content={t("seo.title")} />
            <meta property="og:description" content={t("seo.description")} />
            <meta property="og:image" content="https://designinghub.in/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://designinghub.in/" />
            <meta property="twitter:title" content={t("seo.title")} />
            <meta property="twitter:description" content={t("seo.description")} />
            <meta property="twitter:image" content="https://designinghub.in/og-image.png" />

            {/* Canonical Link */}
            <link rel="canonical" href="https://designinghub.in/" />
        </>
    );
};

export default SEO;
