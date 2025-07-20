import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Viewport metadata for mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Portfolio Website | Maulana.JS",
  description: "Website portfolio Maulana.JS untuk menampilkan proyek dan kemampuan.",
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
    <body suppressHydrationWarning className={`bg-[#e6e6e6] transition-colors dark:bg-gradient-to-br dark:from-[#0c1220] dark:via-[#0a1f3b] dark:to-[#111827] dark:text-white ${dmSans.variable} font-sans min-h-screen`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20 sm:pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
