import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "LegalConnect - Expert Legal Advice";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteDescription = "Connect with top-rated attorneys for video consultations and secure messaging instantly. Professional legal help is just a click away.";
    const siteKeywords = "legal advice, lawyers, attorney, consultation, legal services, video consultation";
    const siteUrl = "https://legalconnect-advocate.vercel.app"; // Replace with your production URL

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || siteDescription} />
            <meta name="keywords" content={keywords || siteKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || siteDescription} />
            <meta property="og:image" content={image || "/og-image.jpg"} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || siteDescription} />
            <meta property="twitter:image" content={image || "/og-image.jpg"} />
        </Helmet>
    );
};

export default SEO;
