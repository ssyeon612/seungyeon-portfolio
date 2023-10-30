"use client";

import { ThemeProvider } from "next-themes";
import Header from "@/components/Header";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class">
            {/* <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-primary"> */}
            <div className="mx-auto min-h-screen px-6 py-12 font-sans md:px-12 md:py-20 lg:px-40 lg:py-0 bg-primary">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <Header />
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}
