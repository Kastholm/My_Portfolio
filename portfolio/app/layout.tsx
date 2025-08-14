import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Marc Kastholm - Portefølje",
  description:
    "Professionel portefølje af Marc Kastholm, der fremviser mine uddannelser, arbejde og projekter.",
  authors: [{ name: "Marc Kastholm" }],
  openGraph: {
    title: "Marc Kastholm - Portefølje",
    description:
      "Professionel portefølje af Marc Kastholm, hvor jeg fremviser mine uddannelser, arbejde og projekter.",
    url: "https://www.marckastholm.com/",
    siteName: "Portefølje",
    images: [
      {
        url: "https://i.ibb.co/pjWDNp4/portfoliopage.png",
        width: 800,
        height: 1000,
        alt: "Skærmbillede af portefølje",
      },
    ],
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Kastholm - Portefølje",
    description:
      "Professionel portefølje af Marc Kastholm, hvor jeg fremviser mine uddannelser, arbejde og projekter.",
    images: ["https://i.ibb.co/pjWDNp4/portfoliopage.png"],
  },
  keywords: ["portefølje", "Marc Kastholm", "projekter", "arbejde", "uddannelse"],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto mb-14 w-full flex-1 px-5 pb-8 pt-20`}>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
