import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Family Guy",
  description: "Learning about Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
