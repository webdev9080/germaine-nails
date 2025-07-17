

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import BootstrapScript from "@/components/BootstrapScript";
import ChatbotToggle from "@/components/ChatbotToggle";
import InstallPrompt from "@/components/InstallPrompt";
import { ThemeProvider } from "@/components/ThemeContext";
import { I18nProvider } from "@/components/I18nProvider";
import ConsentNotice from "@/components/ConsentNotice";

import { generateMetadata } from "@/utils/metadata";
import { Providers } from "./providers";

export const metadata: Metadata = generateMetadata({
  title: "Germaine | Nails",
  description: "Bienvenue chez Germaine Nails, votre espace de soins de beauté à Lomé.",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="google-adsense-account" content="ca-pub-8324514138250709" />
        
        <meta name="google-site-verification" content="64KK1ftpyB_dhS9x4-3DWtKKBCOR4QM6FQqKirgbqt4" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-startup-image" href="/splash/splash-512.png" />
        <meta name="theme-color" content="#d63384" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8324514138250709"
     crossOrigin="anonymous"
     strategy="lazyOnload" />
     
      </head>

      <body className={`${geistSans.className} d-flex flex-column min-vh-100`}>
        <Providers>
          <ThemeProvider>
            <I18nProvider>
              <BootstrapScript />
              <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
              <Navbar />
              <main className="flex-grow-1">
                {children}
                <SpeedInsights />
                <Analytics />
              </main>
              <Footer />
              <BottomNavbar />
              <ChatbotToggle />
              <InstallPrompt />
              <ConsentNotice />
            </I18nProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
