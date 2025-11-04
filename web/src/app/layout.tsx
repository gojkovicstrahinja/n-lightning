import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "N-Lightning | Elektro resenja za siguran dom",
    template: "%s | N-Lightning",
  },
  description:
    "N-Lightning je tim elektricara za elektro instalacije, razvodne table, servis i odrzavanje kucnih i poslovnih prostora.",
  keywords: [
    "elektro instalacije",
    "servis instalacija",
    "razvodne table",
    "hitne elektro intervencije",
    "N-Lightning",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
