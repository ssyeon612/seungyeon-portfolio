"use client";

import { useEffect } from "react";
import Image from "next/image";
import DatrModeToggleButton from "../DarkModeButton";

const Header = () => {
    const menus = [
        { name: "About", href: "about" },
        { name: "Work Experience", href: "experience" },
        { name: "Projects", href: "project" },
        { name: "Others", href: "others" },
    ];

    const callback = function (entries: any, observer: any) {
        console.log(entries);
        console.log(observer);
        entries.forEach((entry: any) => {
            let id = entry.target.id;
            let links = document.querySelectorAll("nav a");
            links.forEach((link) => {
                const href = link?.getAttribute("href");
                if (`#${id}` === href) {
                    link.classList.toggle("active", entry.isIntersecting);
                }
            });
        });
    };

    useEffect(() => {
        let observer = new IntersectionObserver(callback, {
            rootMargin: "-300px 0px -300px 0px",
        });
        let sections = document.querySelectorAll("section");
        sections.forEach((section) => observer.observe(section));
    }, []);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <DatrModeToggleButton />
                {/* <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"> */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    <span className="group/name inline-flex cursor-pointer lg:font-medium">
                        <span className="group-hover/name:text-red-400 transition duration-75 group-hover/name:-translate-y-px delay-[50ms]" aria-hidden="true">
                            S
                        </span>
                        <span className="group-hover/name:text-orange-400 transition duration-75 group-hover/name:-translate-y-px delay-[75ms]" aria-hidden="true">
                            E
                        </span>
                        <span className="group-hover/name:text-yellow-400 transition duration-75 group-hover/name:-translate-y-px delay-[100ms]" aria-hidden="true">
                            U
                        </span>
                        <span className="group-hover/name:text-lime-400 transition duration-75 group-hover/name:-translate-y-px delay-[125ms]" aria-hidden="true">
                            N
                        </span>
                        <span className="group-hover/name:text-green-400 transition duration-75 group-hover/name:-translate-y-px delay-[150ms]" aria-hidden="true">
                            G
                        </span>
                        <span className="group-hover/name:text-teal-400 transition duration-75 group-hover/name:-translate-y-px delay-[175ms]" aria-hidden="true">
                            &nbsp;
                        </span>
                        <span className="group-hover/name:text-sky-400 transition duration-75 group-hover/name:-translate-y-px delay-[200ms]" aria-hidden="true">
                            Y
                        </span>
                        <span className="group-hover/name:text-blue-400 transition duration-75 group-hover/name:-translate-y-px delay-[225ms]" aria-hidden="true">
                            E
                        </span>
                        <span className="group-hover/name:text-indigo-400 transition duration-75 group-hover/name:-translate-y-px delay-[250ms]" aria-hidden="true">
                            O
                        </span>
                        <span className="group-hover/name:text-purple-400 transition duration-75 group-hover/name:-translate-y-px delay-[275ms]" aria-hidden="true">
                            N
                        </span>
                    </span>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">FRONT-END DEVELOPER</h2>
                <p className="mt-4 max-w-xs leading-normal">변화하지만 변함없는 개발자 정승연 입니다.</p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <a className="group flex items-center py-3" href={`#${menu.href}`}>
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-800 group-focus-visible:w-16 group-focus-visible:bg-slate-800  dark:group-focus-visible:bg-slate-200  dark:group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-800 group-focus-visible:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200">
                                        {menu.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="group mr-5 text-xs flex flex-col items-center">
                    <a className="block opacity-50 hover:opacity-100 text-slate-300" href="mailto:ssyeon612@gmail.com" target="_blank">
                        <Image src="/icons/mail-icon.svg" alt="mail" width={35} height={40} className="brightness-0 dark:brightness-100" />
                    </a>
                    <p className="invisible transition-all group-hover:visible group-hover:translate-y-1">mail</p>
                </li>
                <li className="group mr-5 text-xs flex flex-col items-center">
                    <a className="block opacity-50 hover:opacity-100" href="https://github.com/ssyeon612" target="_blank">
                        <Image src="/icons/github-icon.svg" alt="github" width={25} height={40} className="brightness-0 dark:brightness-100" />
                    </a>
                    <p className="invisible transition-all group-hover:visible group-hover:translate-y-2">github</p>
                </li>
                <li className="group mr-5 text-xs flex flex-col items-center">
                    <a className="block opacity-50 hover:opacity-100" href="https://yeongseungjeong.tistory.com" target="_blank">
                        <Image src="/icons/blog-icon.svg" alt="blog" width={28} height={40} className="brightness-0 dark:brightness-100" />
                    </a>
                    <p className="invisible transition-all group-hover:visible group-hover:translate-y-2">blog</p>
                </li>

                <li className="group mr-5 text-xs flex flex-col items-center">
                    <a className="block opacity-50 hover:opacity-100" href="https://github.com/ssyeon612" target="_blank">
                        <Image src="/icons/doc-icon.svg" alt="" width={30} height={40} className="brightness-0 dark:brightness-100" />
                    </a>
                    <p className="invisible transition-all group-hover:visible group-hover:translate-y-2">resume</p>
                </li>
            </ul>
        </header>
    );
};

export default Header;
