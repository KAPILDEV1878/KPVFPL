
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Playfair_Display } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FINANCITY Portfolio Landmark - Your Roadmap to Financial Prosperity",
  description: "Cutting-edge financial solutions for startups, entrepreneurs, and MSMEs. Portfolio-based consulting with intelligent financial planning, smart accountancy, tax optimization, and funding readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
