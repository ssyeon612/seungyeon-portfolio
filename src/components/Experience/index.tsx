import Image from "next/image";

const Experience = () => {
    const datas = [
        {
            name: "유앤소프트 (unsoft)",
            period: "2022.11 — 2023.07",
            role: "Frontend Developer",
            skills: ["Vue", "Javascript", "SCSS"],
            works: ["휴대폰, 인터넷 가격비교 O2O 통신 플랫폼", "비즈니스 요구사항에 따른 리팩토링", "컴포넌트 세분화로 효율성 증가"],
            links: [
                { name: "unsoft", url: "https://www.unsoft.co.kr" },
                { name: "perce", url: "https://customer.perce.co.kr" },
                { name: "perve owner", url: "https://owner.perce.co.kr" },
            ],
        },
        {
            name: "앱지 (appg)",
            period: "2020.09 — 2022.11",
            role: "Server Developer",
            skills: ["Vue", "Nuxt", "Javascript", "SCSS", "Java", "Spring Boot", "MySQL"],
            works: ["다양한 플랫폼의 맞춤웹/앱 제작 에이전시", "기존의 vue2 -> vue3 베이스 툴 변경"],
            links: [{ name: "appg", url: "https://appg.co.kr" }],
        },
        {
            name: "싱가포르 근무",
            period: "2013.12 — 2019.10",
            role: "F&B Captain",
            works: ["호텔, 레스토랑에서 고객응대 및 직원교육"],
        },
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {datas.map((data, index) => (
                        <li className="mb-12" key={index}>
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2017">
                                    {data.period}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <span className="inline-block">{data.name}</span>
                                        <div>
                                            <div className="text-slate-500" aria-hidden="true">
                                                {data.role}
                                            </div>
                                        </div>
                                    </h3>
                                    <ul className="mt-2 text-sm leading-normal">
                                        {data.works?.map((work, index2) => (
                                            <li key={index2} className="flex items-center">
                                                <Image src="/icons/done-icon.svg" alt="done" width={20} height={25} className="mr-2 brightness-0 dark:brightness-100" />
                                                <p>{work}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                                        {data.links &&
                                            data.links.map((link, index2) => (
                                                <li className="mr-4" key={index2}>
                                                    <a
                                                        className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                                                            <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                            <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                                        </svg>
                                                        <span>{link.name}</span>
                                                    </a>
                                                </li>
                                            ))}
                                    </ul>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {data.skills &&
                                            data.skills.map((skill, index2) => (
                                                <li className="mr-1.5 mt-2" key={index2}>
                                                    <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-blue-700/10  text-blue-600 dark:bg-teal-400/10  dark:text-teal-300">
                                                        {skill}
                                                    </div>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
