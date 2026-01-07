import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit, Poppins } from "next/font/google";

import "./globals.css";

import AppProviders from "@/components/app-providers";
import AppToaster from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nextworks Blocks Demo",
  description: "Demo of Nextworks Blocks (gallery + templates)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} ${poppins.variable} antialiased ${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} ${poppins.variable} antialiased ${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} ${poppins.variable} antialiased ${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
<AppProviders>
          {children}
          <AppToaster />
        </AppProviders>
</body>
    </html>
  );
}
