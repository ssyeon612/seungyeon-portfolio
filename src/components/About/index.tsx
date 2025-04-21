const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:mt-24" aria-label="About Me">
            <div className="sticky top-0 z-20 -mx-6 mb-10 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
                <p className="text-xl font-bold">안녕하세요,</p>
                <br />
                <p className="font-bold">기술과 품질 사이의 균형을 고민하는 QA 엔지니어 정승연입니다.</p>
                <br />
                <p className="mb-4">
                    프론트엔드와 풀스택 개발자로 다양한 프로젝트를 경험하며 기능 구현뿐 아니라 <br />
                    <span className="font-bold">서비스 품질과 사용자 경험 개선</span>에 꾸준히 관심을 가져왔습니다. <br />
                    문제의 원인을 깊이 있게 분석하고, 팀과 함께 해결책을 도출하는 과정에서 보람을 느낍니다.
                    <br />
                    <br />
                    이제는 <span className="font-bold">기술 기반의 품질 향상</span>에 집중하며, 더 안정적이고 신뢰할 수 있는 서비스를 만드는 데 기여하고자 합니다. <br />
                    성실하게, 책임감 있게, 팀에 든든한 사람이 되겠습니다.
                </p>
            </div>
        </section>
    );
};

export default About;
