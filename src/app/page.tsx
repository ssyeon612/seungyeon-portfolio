"use client";

import { useEffect } from "react";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Others from "@/components/Others";

export default async function Home() {
    // useEffect(() => {
    //     let observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             let id = entry.target.id;
    //             let links = document.querySelectorAll("nav a");
    //             links.forEach((link) => {
    //                 const href = link?.getAttribute("href");
    //                 if (`#${id}` === href) {
    //                     console.log(id);
    //                     link.classList.toggle("active", entry.isIntersecting);
    //                     // if (entry.isIntersecting) observer.unobserve(entry.target);
    //                 }
    //             });
    //         });
    //     });
    //     let sections = document.querySelectorAll("section");
    //     sections.forEach((section) => {
    //         observer.observe(section);
    //     });
    // }, []);
    return (
        <main className="app pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Others />
        </main>
    );
}
