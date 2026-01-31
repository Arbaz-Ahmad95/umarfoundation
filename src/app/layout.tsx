import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Umar Foundation | Hayaghat NGO | Best Social Welfare in Darbhanga",
    description: "Umar Foundation is a leading non-governmental organization (NGO) in Hayaghat, West Bilaspur, Darbhanga. Dedicated to social welfare, education, healthcare, and community empowerment in Bihar.",
    keywords: [
        "hayaghat ngo",
        "umarfoundation hayaghat",
        "hayaghat ngo",
        "west bilaspur umar foundation ngo",
        "umar foundation",
        "ngo hayaghat bilaspur",
        "umar foundation west bilaspur",
        "ngo in darbhanga",
        "social welfare bihar",
        "best ngo in hayaghat",
        "umar foundation website",
        "hayaghat social work",
        "umar foundation"
    ],
    authors: [{ name: "Umar Foundation" }],
    openGraph: {
        title: "Umar Foundation | Empowering Hayaghat, Darbhanga",
        description: "Official website of Umar Foundation NGO. We work for social welfare, education, and healthcare in Hayaghat and surrounding areas.",
        url: "https://umarfoundation.org", // Replace with actual domain when available
        siteName: "Umar Foundation",
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Umar Foundation | Hayaghat NGO",
        description: "Empowering Hayaghat through social welfare and education.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NGO",
        "name": "Umar Foundation",
        "url": "https://umarfoundation.org", // Replace with actual domain
        "logo": "https://umarfoundation.org/logo.png", // Replace with actual logo URL
        "description": "Umar Foundation is a non-governmental organization dedicated to social welfare, education, and healthcare in Hayaghat, Darbhanga.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hayaghat",
            "addressRegion": "Bihar",
            "addressCountry": "IN",
            "streetAddress": "West Bilaspur"
        },
        "areaServed": "Hayaghat, Darbhanga, Bihar"
    };

    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
