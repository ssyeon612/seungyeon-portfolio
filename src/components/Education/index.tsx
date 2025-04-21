const Education = () => {
    return (
        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Education">
            <div className="sticky top-0 z-20 -mx-6 mb-10 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
            </div>
            <div>
                <ol className="group/list">
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2025.03 — current</div>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug">한국방송통신대학교 재학</h3>
                                <div className="text-slate-500" aria-hidden="true">
                                    컴퓨터과학과
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                            <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">2011.01 — 2014.03</div>
                            <div className="z-10 sm:col-span-6">
                                <h3 className="font-medium leading-snug">서울관광고등학교 졸업</h3>
                                <div className="text-slate-500" aria-hidden="true">
                                    홍보미디어과
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Education;
