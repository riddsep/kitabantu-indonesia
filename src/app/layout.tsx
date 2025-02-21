import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { JobProvider } from "@/context/useJobContext";
import LayoutWrapper from "@/components/LayoutWrapper"; // Import komponen wrapper baru

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
    <html lang="id">
      <body className={`${poppins.className} antialiased bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2]`}>
        <JobProvider>
          <Navbar />
          <LayoutWrapper>
            <main>{children}</main>
          </LayoutWrapper>
        </JobProvider>
      </body>
    </html>
  );
}
