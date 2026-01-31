import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Umar Foundation | Empowering Hayaghat, Darbhanga",
    description: "Umar Foundation is a non-governmental organization dedicated to social welfare, education, and healthcare in Hayaghat, Darbhanga.",
    keywords: ["NGO", "Umar Foundation", "Hayaghat", "Darbhanga", "Social Welfare", "Bihar"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
