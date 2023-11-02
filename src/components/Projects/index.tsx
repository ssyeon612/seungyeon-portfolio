import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            name: "개인 포트폴리오",
            period: "2023.09 — 2023.10",
            skills: ["Next.js", "Javascript", "Tailwind CSS"],
            works: ["데스크탑과 모바일을 지원하는 반응형 웹", "향상된 UX를 위한 다크모드 지원"],
            platform: "PC",
            device: "PC",
            web: "https://seungyeonj.netlify.app",
            github: "https://github.com/ssyeon612/seungyeon-portfolio-2023",
        },
        {
            company: "유앤소프트",
            name: "휴대폰, 인터넷 견적비교 플랫폼 : 퍼스",
            period: "2022.11 — 2023.07",
            skills: ["Vue.js", "Javascript", "SCSS"],
            works: [
                "사용자 이탈률 방지를 위해 간편 로그인 도입",
                "앱 활성화를 위한 커뮤니티 서비스 도입",
                "통합 검색 기능추가로 편의성 증가",
                "디바이스 크기별 분기점을 설정해 모바일, PC 사이즈로 분리",
            ],
            platform: "PC+MOBILE",
            device: "PC<br />Hybrid APP",
            web: "https://customer.perce.co.kr",
            aos: "https://play.google.com/store/apps/details?id=com.appg.perce_customer&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%8D%BC%EC%8A%A4-%EB%8F%99%EB%84%A4-%ED%9C%B4%EB%8C%80%ED%8F%B0-%EB%A7%A4%EC%9E%A5%EB%93%A4%EA%B3%BC-%EC%83%81%EB%8B%B4%ED%95%98%EA%B3%A0-%EA%B2%AC%EC%A0%81-%EB%B0%9B%EC%9C%BC%EC%84%B8%EC%9A%94/id1569722707",
        },
        {
            company: "앱지",
            name: "전자제품 견적비교 플랫폼 : 스톤즈",
            period: "2022.08 — 2023.11",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["멀티파트 업로드를 사용해 대용량 파일 업로드 구현", "위치 기반 서비스 구현"],
            device: "Hybrid APP",
            platform: "MOBILE",
        },
        {
            company: "앱지",
            name: "땅땅 ERP 서비스 : 땅땅치킨",
            period: "2022.03 — 2022.08",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["땅땅치킨, 땅땅몰, 땅땅랜드 등 대규모 플랫폼", "통합 정산 시스템 API 개발", "외주 개발자와 협업"],
            platform: "PC+MOBILE",
            device: "PC<br />POS<br />Hybrid APP",
        },
        {
            company: "앱지",
            name: "결제 대행 플랫폼 : 코엠페이먼츠",
            period: "2022.01 — 2022.03",
            skills: ["Vue", "Javascript", "SCSS"],
            works: ["OCR API 연동", "외부 협력업체(API, 호스팅)와 협업"],
            platform: "MOBILE",
            device: "Hybrid APP",
            aos: "https://play.google.com/store/apps/details?id=com.appg.coam&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%EC%BD%94%EC%97%A0%ED%8E%98%EC%9D%B4%EB%A8%BC%EC%B8%A0/id1609907585",
        },
        {
            company: "앱지",
            name: "유언서비스 플랫폼 : 남김",
            period: "2021.07 — 2021.01",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["ffmpeg를 사용한 이미지, 영상 파일 압축 구현", "AOS/IOS 구독 인앱 결제 연동"],
            platform: "MOBILE",
            device: "Hybrid APP",
            aos: "https://play.google.com/store/apps/details?id=kr.co.wellv.namkim&hl=ko-KR",
        },
        {
            company: "앱지",
            name: "알뜰폰 이동통신 플랫폼 : 모빙",
            period: "2021.06 — 2021.10",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["PC 고객센터 페이지 구현", "Mobile Web 화면 구현 및 API 연동"],
            platform: "PC+MOBILE",
            device: "PC<br />Web APP",
            web: "https://www.mobing.co.kr",
        },
        {
            company: "앱지",
            name: "공동주택 관리 플랫폼 : 함께관리해",
            period: "2021.03 — 2023.05",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["엑셀 import 기능 구현", "배치를 사용해 매월 데이터 갱신 기능 구현", "cafe24를 사용해 SMS 발송 기능 구현"],
            platform: "MOBILE",
            device: "Hybrid APP",
            aos: "https://play.google.com/store/apps/details?id=com.appg.estate_with_me&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%95%A8%EA%BB%98%EA%B4%80%EB%A6%AC%ED%95%B4/id1567847353",
        },
        {
            company: "앱지",
            name: "외식 종사자 교육 인증 플랫폼 : 외식산업협회",
            period: "2020.10 — 2021.02",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["PC, Mobile Web 화면 구현 및 API 연동", "백오피스 다중 파일 업로드 구현"],
            platform: "PC+MOBILE",
            device: "PC<br />Web APP",
            web: "https://www.kofsia.or.kr",
            web02: "https://www.kfoodedu.or.kr",
        },
    ];

    return (
        <section id="project" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="projects">
            <div className="sticky top-0 z-20 -mx-6 mb-10 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div className="container mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:p-0 md:w-full group/list">
                        {projects.map((project, index) => (
                            <div
                                className="group flex border-2 rounded-lg border-blue-500 dark:border-teal-200 border-opacity-50 p-8 sm:flex-row flex-col mb-10 relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                                key={index}
                            >
                                {/* 프로젝트 기간 */}
                                <div className="absolute top-[-0.8rem] left-5 bg-primary px-2 text-slate-500">{project.period}</div>
                                {/* 프로젝트 플랫폼 */}
                                <div className="sm:mr-8 sm:mb-0 mb-4 flex lg:flex-col items-center">
                                    <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-blue-100/80  dark:bg-teal-100/80 flex-shrink-0 lg:mr-0 mr-4">
                                        {project.platform === "PC" ? (
                                            <Image src="/icons/pc-icon.svg" alt="" width={30} height={30} />
                                        ) : project.platform === "MOBILE" ? (
                                            <Image src="/icons/mobile-icon.svg" alt="" width={30} height={30} />
                                        ) : (
                                            <Image src="/icons/pc-mobile-icon.svg" alt="" width={30} height={30} />
                                        )}
                                    </div>
                                    {project.device && (
                                        // <div
                                        //     dangerouslySetInnerHTML={{ __html: project.device }}
                                        //     className="text-xs text-center lg:mt-2 text-slate-500 transition-all invisible group-hover:visible group-hover:translate-y-2"
                                        // ></div>
                                        <div dangerouslySetInnerHTML={{ __html: project.device }} className="text-xs lg:text-center lg:mt-2 text-slate-500"></div>
                                    )}
                                </div>
                                <div className="flex-grow">
                                    {/* 프로젝트명 */}
                                    <h2 className="text-lg title-font font-medium mb-3 lg:flex lg:items-center">
                                        {project.name}
                                        {project.company && <span className="text-sm font-light">&nbsp;&#183; {project.company}</span>}
                                    </h2>
                                    {/* 프로젝트 내용 */}
                                    <ul className="leading-relaxed text-sm font-normal">
                                        {project.works.map((work, index2) => (
                                            <li className="flex" key={index2}>
                                                <Image src="/icons/done-icon.svg" alt="done" width={20} height={25} className="mr-2 brightness-0 dark:brightness-100" />
                                                <p>{work}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* 프로젝트명 기술 */}
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.skills.map((skill, index2) => (
                                            <li className="mr-1.5 mt-2" key={index2}>
                                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-blue-700/10  text-blue-600 dark:bg-teal-400/10  dark:text-teal-300">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* 프로젝트 링크 */}
                                    <div className="absolute bottom-[-0.8rem] right-3 bg-primary px-1 text-slate-500 flex gap-1">
                                        {project.web && (
                                            <Link href={project.web} target="_blank">
                                                <Image src="/icons/web-icon.svg" width={25} height={20} alt="web" className="hover:opacity-50 hover:scale-90 brightness-0 dark:brightness-100" />
                                            </Link>
                                        )}
                                        {project.web02 && (
                                            <Link href={project.web02} target="_blank">
                                                <Image src="/icons/web-icon.svg" width={25} height={20} alt="web" className="hover:opacity-50 hover:scale-90 brightness-0 dark:brightness-100" />
                                            </Link>
                                        )}
                                        {project.aos && (
                                            <Link href={project.aos} target="_blank">
                                                <Image src="/icons/android-icon.svg" width={25} height={20} alt="web" className="hover:opacity-50 hover:scale-90 brightness-0 dark:brightness-100" />
                                            </Link>
                                        )}
                                        {project.ios && (
                                            <Link href={project.ios} target="_blank">
                                                <Image src="/icons/apple-icon.svg" width={25} height={20} alt="web" className="hover:opacity-50 hover:scale-90 brightness-0 dark:brightness-100" />
                                            </Link>
                                        )}
                                        {project.github && (
                                            <Link href={project.github} target="_blank">
                                                <Image src="/icons/github-icon.svg" width={23} height={20} alt="web" className="hover:opacity-50 hover:scale-90 brightness-0 dark:brightness-100" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
