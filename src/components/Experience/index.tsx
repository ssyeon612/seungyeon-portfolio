const Experience = () => {
    const experiences = [
        {
            name: "비트나인 (bitnine)",
            period: "2024.02 — 2024.12",
            role: "Enterprise R&D | 선임",
            position: "Frontend Developer",
            desc: "PostgreSQL 기반의 그래프 데이터베이스 솔루션을 제공하는 기업",
        },
        {
            name: "유앤소프트 (unsoft)",
            period: "2022.11 — 2023.07",
            role: "개발팀 | 주임",
            position: "Frontend Developer",
            desc: "휴대폰·인터넷 가격 비교 O2O 통신 플랫폼 스타트업\n컴퍼니디, 인포뱅크, 스노우볼인베스트먼트 투자 유치 및 팁스(TIPS) 프로그램 선정",
        },
        {
            name: "앱지 (appg)",
            period: "2020.09 — 2022.11",
            role: "개발사업본부 | 연구원",
            position: "Web Full Stack Developer",
            desc: "300개 이상의 다양한 플랫폼 기반 엔터프라이즈 시스템을 개발한 전문 에이전시",
        },
        {
            name: "싱가포르 외식업 근무",
            period: "2013.12 — 2019.10",
            role: "식음료 부서",
            position: "F&B 캡틴",
            desc: "고객 응대, 매장 정산, 이벤트 기획, 신입 및 파트타이머 교육, 발주 등 식음료 부서 운영 전반 담당",
        },
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-10 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {experiences.map((experience, index) => (
                        <li className="mb-12" key={index}>
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="July to December 2017">
                                    {experience.period}
                                </header>
                                <div className="z-10 sm:col-span-6 flex flex-col gap-1">
                                    <h3 className="font-semibold leading-snug text-slate-200">
                                        <span className="inline-block">{experience.name}</span>
                                    </h3>
                                    <div className="text-slate-500 text-sm" aria-hidden="true">
                                        <p>{experience.role}</p>
                                        <p>{experience.position}</p>
                                    </div>
                                    <ul className="mt-2 text-sm leading-normal break-keep">
                                        <p>{experience.desc}</p>
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
