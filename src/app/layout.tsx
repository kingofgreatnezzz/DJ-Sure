import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DJ SURE | Premium DJ & Entertainment Services",
  description:
    "Premium DJ and entertainment services for weddings, corporate events, nightlife, and high-end private events. Book the best DJ for your next event.",
  keywords: "DJ, entertainment, weddings, corporate events, nightlife, music, Ghana, Accra",
  openGraph: {
    title: "DJ SURE | Premium DJ & Entertainment Services",
    description: "Elevating experiences with world-class sound and performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-matte-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
