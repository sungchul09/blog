"use client";

// import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "sc.yun blog",
//   description: "this is sc.yun blog page",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [visibleAside, setVisibleAside] = useState(false);
  const toggleAside = () => {
    setVisibleAside(!visibleAside);
  };
  return (
    <html lang="en">
      <body className="flex flex-col items-center w-full h-[100vh]">
        <header className=" h-[54px] w-full border-b-[1px] border-gray-200">
          <Header toggleAside={toggleAside} />
        </header>
        {visibleAside && (
          <aside className="absolute left-0 top-0 w-full h-[100vh] lg:hidden">
            <div className="absolute right-0 top-0 w-full h-[100vh] bg-white z-10 md:w-[320px]">
              <Aside toggleAside={toggleAside} />
            </div>
            <div className="absolute left-0 top-0 h-[100vh] w-full bg-black bg-opacity-40 sm:w-hidden"></div>
          </aside>
        )}
        <main className=" flex-grow-[1] w-full">{children}</main>
        <footer className="bg-green-950 h-[100px] w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
