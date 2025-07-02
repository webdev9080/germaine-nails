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

import ChatbotToggle from "@/components/ChatbotToggle";   // ✅ import direct, plus de dynamic()

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

          {/* Bouton + fenêtre chatbot */}
          <ChatbotToggle />
        </body>
      </html>
    </ClerkProvider>
  );
}