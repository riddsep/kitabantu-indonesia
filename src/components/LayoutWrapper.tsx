"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideFooter = pathname.startsWith("/akun");

    return (
        <>
            {children}
            {!hideFooter && <Footer />}
        </>
    );
}
