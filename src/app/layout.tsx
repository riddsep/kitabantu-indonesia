import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body className={`${poppins.className}  antialiased`}>
        <div className="h-dvh min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
