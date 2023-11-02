const Others = () => {
    return (
        <section id="others" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Others">
            <div className="sticky top-0 z-20 -mx-6 mb-10 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Others</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2023.10</div>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug">SQLD 자격증</h3>
                                <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                                    <li className="mr-4">
                                        <a
                                            className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-800 hover:text-blue-500 focus-visible:text-blue-500 dark:text-slate-300 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
                                            href="/sqld_cert.pdf"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3" aria-hidden="true">
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                            </svg>
                                            <span>certificate</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2020.01 — 2020.07</div>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug">KH 정보교육원</h3>
                                <div className="text-slate-500" aria-hidden="true">
                                    자바 프레임워크 양성과정 수료
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2011.01 — 2014.03</div>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug">서울관광고등학교 졸업</h3>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Others;
