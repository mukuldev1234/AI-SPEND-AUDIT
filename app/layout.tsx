import "./globals.css";

import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import ThemeProviderWrapper from "./components/ThemeProviderWrapper";

export const metadata: Metadata =
  {
    title: "AuditAI",

    description:
      "AI Spend Optimization Tool",
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProviderWrapper>
          <Toaster position="top-right" />

          <Navbar />

          {children}

          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}