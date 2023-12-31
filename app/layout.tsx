import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { HeaderMobile } from "@/components/headerMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News | Personal Portfolio",
  description: "News is a fullstack developer for 1 year of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}>
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        />
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
        xl:left-[-15rem] 2xl:left-[-5rem]"
        />
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
