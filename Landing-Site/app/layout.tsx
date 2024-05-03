import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astralai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border border-black  ">
          {/* bg-[#1e2021] color to be added for the next one. */}
          {/* <Navbar /> */}
          <Header />
          <div className="pb-[1px] pt-[1px] relative z-20">
            <Navbar2 />
          </div>

          {children}

          <Footer />
        </div>
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-QH32KRF29F"
      />
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQH32KRF29F');`}
      </Script>
    </html>
  );
}
