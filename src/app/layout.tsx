import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadatifsocial.vercel.app"),
  title: {
    default: "Muhammad Atif Keerio | Fullstack Developer & AI Engineer",
    template: "%s | Muhammad Atif Keerio",
  },
  description: "Muhammad Atif Keerio (.AADI.) - Fullstack Developer & AI Engineer crafting innovative solutions at the intersection of code and intelligence. Connect with me on GitHub, Spotify, Discord, and Instagram. Based in Galexy.",
  keywords: [
    "Muhammad Atif Keerio",
    "AADI",
    "Fullstack Developer",
    "AI Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI/ML Engineer",
    "Tech Portfolio",
    "Developer Portfolio",
    "Code Portfolio",
    "GitHub",
    "Spotify",
    "Discord",
    "Instagram",
    "Galexy",
    "Pakistan Developer",
  ],
  authors: [{ 
    name: "Muhammad Atif Keerio", 
    url: "https://github.com/muhammad-atif-keerio" 
  }],
  creator: "Muhammad Atif Keerio",
  publisher: "Muhammad Atif Keerio",
  applicationName: "Muhammad Atif Keerio - Social Presence",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://muhammadatifsocial.vercel.app",
    title: "Muhammad Atif Keerio | Fullstack Developer & AI Engineer",
    description: "Fullstack Developer & AI Engineer crafting innovative solutions. Connect with me on GitHub, Spotify, Discord, and Instagram. Building the future, one line of code at a time.",
    siteName: "Muhammad Atif Keerio",
    images: [
      {
        url: "https://muhammadatifsocial.vercel.app/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Atif Keerio - Fullstack Developer & AI Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Atif Keerio | Fullstack Developer & AI Engineer",
    description: "Fullstack Developer & AI Engineer crafting innovative solutions. Connect with me and explore my work on GitHub, Spotify, Discord, and Instagram.",
    images: ["https://muhammadatifsocial.vercel.app/avatar.jpg"],
    creator: "@atifjan536",
    site: "@atifjan536",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://muhammadatifsocial.vercel.app",
  },
  category: "technology",
  classification: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <StructuredData />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
