import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./_components/theme-provider";
import { Analytics } from '@vercel/analytics/react';

const AnekTelugu = Anek_Telugu({ 
  subsets: ["latin"], 
  variable: "--font-caption" });


export const metadata: Metadata = {
  title: "Caze Nicolas",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, AnekTelugu, "font-sans h-full bg-background text-foreground")}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
    </html>
  );
}
