import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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
        <body className={`${geistSans.className} d-flex flex-column min-vh-100`}>
          <ThemeProvider>
            <I18nProvider> {/* ✅ Ajout du I18nProvider ici */}
              <BootstrapScript />
              <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />

              <Navbar />

              <main className="flex-grow-1">
                {children}
                <SpeedInsights />
                <Analytics />
              </main>

              <Footer />
              <BottomNavbar />

              <ChatbotToggle />
            </I18nProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}