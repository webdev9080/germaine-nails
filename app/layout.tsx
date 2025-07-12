import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from 'next/script'
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { ClerkProvider } from "@clerk/nextjs";
import { Geist } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import BootstrapScript from "@/components/BootstrapScript";
import ChatbotToggle from "@/components/ChatbotToggle";
import InstallPrompt from "@/components/InstallPrompt";

import { ThemeProvider } from "@/components/ThemeContext";
import { I18nProvider } from "@/components/I18nProvider"; // ✅ à créer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Germaine | Nails",
  description: "Be Always Gorgeous",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link rel="apple-touch-startup-image" href="/splash/splash-512.png" />
          <meta name="theme-color" content="#d63384" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </head>

        <body className={`${geistSans.className} d-flex flex-column min-vh-100`}>
            <Script        
            id="Cookiebot"                         src="https://consent.cookiebot.com/uc.js" data-cbid="90249a1a-efa3-4396-ade5-d21396cd07b9" data-blockingmode="auto" 
data-consentmode="explicit"
type="text/javascript"
strategy="beforeInteractive"
/>
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
            </I18nProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}