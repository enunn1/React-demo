import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from 'next-themes'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ethan Nunn | Full-Stack Web Developer",
    template: "%s | Ethan Nunn",
  },
  description:
    "Full-stack web developer specializing in React, Next.js, Angular, and backend API development. Available for freelance work.",
  metadataBase: new URL("https://yourdomain.com"), // update after deploy
  openGraph: {
    title: "Ethan Nunn | Full-Stack Web Developer",
    description:
      "Full-stack web developer specializing in React, Next.js, Angular, and backend API development.",
    url: "https://yourdomain.com",
    siteName: "Ethan Nunn Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethan Nunn Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "Ethan Nunn | Full-Stack Web Developer",
    description:
      "Full-stack web developer specializing in modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider> 
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
