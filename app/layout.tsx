import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Poppins,
  Open_Sans,
  Roboto,
  Lato,
  Playfair_Display,
  Raleway,
  Source_Sans_3,
  Nunito,
  Merriweather
} from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather" });

export const metadata: Metadata = {
  title: "Notations",
  description: "A minimalist, monochrome Second Brain application.",
};

import { Providers } from "../components/providers/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = `${inter.variable} ${montserrat.variable} ${poppins.variable} ${openSans.variable} ${roboto.variable} ${lato.variable} ${playfairDisplay.variable} ${raleway.variable} ${sourceSans.variable} ${nunito.variable} ${merriweather.variable}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${fontClasses}`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
