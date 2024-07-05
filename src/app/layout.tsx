import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WobbleCardDemo from "@/components/Wobble";
import Footer from "@/components/Footer";
import Text from "@/components/Text";
import Expsec from "@/components/exp_section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaya Sai Srikar",
  description: "Personal Portfolio of Jaya Sai Srikar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
      <div className="fixed top-0 inset-x-0 z-50">
          <Navbar />
        </div>
        <Hero />
        <main className="px-4 py-1 sm:px-6 lg:px-8">
        <div className="bg=black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8 text-white dark:text-blue-500">
            My Experiences
          </h2>
        <Expsec />
        </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8 text-white dark:text-blue-500">
            About Me
          </h2>
          <div className="flex justify-center">
            <WobbleCardDemo />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8 text-white dark:text-blue-500">
            My Projects
          </h2>
          <Projects />
        </main>
        <Footer />
        {children}
      </body>
    </html>
  );
}
