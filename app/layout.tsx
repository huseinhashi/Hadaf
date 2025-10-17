// app/layout.tsx
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
// import { ThemeToggler } from "@/components/ThemeToggler";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// const quicksandFont = Quicksand({ subsets: ["latin"] }); // Renamed local variable
const Jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Hadaf Industrial Cups - Premium Manufacturing Solutions",
  description:
    "Leading Somalia's industrial cup manufacturing with precision, quality, and innovation. We transform raw materials into reliable containers that power businesses across the region.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Jakarta_sans.className} bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen ">
            <header className="relative">
              <Navbar />
            </header>
            <main className="flex-grow pt-16 sm:pt-2">{children}</main>
            <Footer />
            <WhatsAppChat />
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
