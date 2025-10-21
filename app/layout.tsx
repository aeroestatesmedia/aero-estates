import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { organizationSchema } from "./metadata";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: 'Aero Estates | Brand Scaling, Equity Analysis, Real Estate & Tech Solutions',
    template: '%s | Aero Estates'
  },
  description: 'Dublin-based digital agency specialising in brand scaling, equity analysis, real estate solutions and tech solutions. Build digital estates that inspire, engage and endure.',
  keywords: ['brand scaling Dublin', 'equity analysis Ireland', 'real estate solutions', 'tech solutions', 'digital agency Dublin'],
  authors: [{ name: 'Aero Estates Limited' }],
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://aeroestates.ie',
    siteName: 'Aero Estates',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aero Estates - Building Digital Estates'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aero Estates',
    description: 'Building digital estates that inspire, engage and endure',
    images: ['/twitter-image.jpg'],
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
