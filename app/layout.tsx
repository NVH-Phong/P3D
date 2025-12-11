import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const Montserrat = localFont({
  src: "./fonts/Montserrat.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "P3D",
  description: "An Ecommerce app for 3D site",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Montserrat.variable} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
