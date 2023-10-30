"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Others from "@/components/Others";

export default function Home() {
    return (
        <main className="app pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Others />
        </main>
    );
}
