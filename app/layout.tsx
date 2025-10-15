// app/layout.tsx
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import "./globals.css";
// import { ThemeToggler } from "@/components/ThemeToggler";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

// const quicksandFont = Quicksand({ subsets: ["latin"] }); // Renamed local variable
const Jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Husein Hashi - Full Stack Developer",
  description:
    "Portfolio of Husein Hashi, Full Stack Developer specialized in PHP, Node.js, React, and Flutter",
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
          <div className="flex flex-col min-h-screen">
            <header className="relative">
              <Navbar />
            </header>
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
