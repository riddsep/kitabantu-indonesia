import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { JobProvider } from "@/context/useJobContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kita Bantu Indonesia",
  description: "Kita Bantu Indonesia membangun Indonesia yang lebih baik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]`}
      >
        <div className="h-screen">
          <JobProvider>
            <Navbar />
            <main>{children}</main>
          </JobProvider>
        </div>
      </body>
    </html>
  );
}
