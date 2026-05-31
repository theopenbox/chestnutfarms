import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chestnut Oaks Farm Store & Kitchen | Sparta, TN",
  description: "Experience authentic farm-to-table cooking at Chestnut Oaks Farm Store and Kitchen in Sparta, TN. Home-style wood-smoked meats, premium sandwiches, loaded baked potatoes, fresh salads, and delicious country desserts.",
  keywords: [
    "Chestnut Oaks Farm Store", 
    "Chestnut Oaks Kitchen", 
    "Sparta TN restaurant", 
    "farm to table Tennessee", 
    "smoked meats Sparta", 
    "Burgess Falls Road food",
    "Tennessee country store"
  ],
  openGraph: {
    title: "Chestnut Oaks Farm Store & Kitchen | Sparta, TN",
    description: "Experience authentic farm-to-table cooking at Chestnut Oaks Farm Store and Kitchen in Sparta, TN. Home-style wood-smoked meats, premium sandwiches, loaded baked potatoes, fresh salads, and delicious country desserts.",
    type: "website",
    locale: "en_US",
    siteName: "Chestnut Oaks Farm Store and Kitchen",
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiasedScroll`}
    >
      <body className="min-h-full flex flex-col font-sans text-wood-brown bg-cream">
        {children}
      </body>
    </html>
  );
}
