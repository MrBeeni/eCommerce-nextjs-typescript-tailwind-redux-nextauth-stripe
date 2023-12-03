import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "slick-carousel/slick/slick.css";
import ToasterProvider from "@/providers/ToasterProvider";
import Footer from "@/components/Footer";
import AuthProvider from "@/providers/authProvider";
import StoreProvider from "@/providers/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M store",
  description:
    "Welcome to M Store – Your premier destination for cutting-edge products and fashion-forward essentials. Discover quality, style, and convenience in every click.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bgDesign",
          inter.className
        )}
      >
        <StoreProvider>
          <AuthProvider>
            <Navbar />
            <ToasterProvider />
            {children}
            <Footer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
