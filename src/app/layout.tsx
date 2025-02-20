"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
// import Layout1 from "@/app/layout1";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}` }>
        <Providers>
          {/* <Layout1 /> */}
          {/* <div className="container-fluid"><Header /></div> */}
          
          {children}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#30f03a] to-transparent dark:via-[#30f03a]"></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#30f03a] to-transparent dark:via-[#30f03a]"></div>

          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

