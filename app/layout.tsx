import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valuetrustai.com"),
  title: {
    default: "ValueTrustAI",
    template: "%s | ValueTrustAI",
  },
  description: "Intelligence you can act on.",
  openGraph: {
    title: {
      default: "ValueTrustAI",
      template: "%s | ValueTrustAI",
    },
    description: "Intelligence you can act on.",
    url: "https://valuetrustai.com",
    siteName: "ValueTrustAI",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for Open Graph image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased selection:bg-indigo-100 selection:text-indigo-900`}
    >
      <body className="flex min-h-screen flex-col bg-white text-gray-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
