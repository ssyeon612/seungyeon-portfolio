// "use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Others from "@/components/Others";

import { getData } from "@/api/notion";

export default async function Home() {
    const notionData = getData();
    console.log(notionData);
    return (
        <main className="app pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Others />
        </main>
    );
}
