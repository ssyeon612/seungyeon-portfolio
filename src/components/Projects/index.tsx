import Image from "next/image";

const Projects = () => {
    const datas = [
        {
            company: "유앤소프트",
            name: "휴대폰, 인터넷 견적비교 플랫폼 : 퍼스",
            period: "2022.11 — 2023.07",
            skills: ["Vue", "Javascript", "SCSS"],
            works: ["사용자 이탈률 방지를 위해 간편 로그인 도입", "앱 활성화를 위한 커뮤니티 서비스 도입", "통합 검색 기능추가로 편의성 증가", "GA"],
            links: [],
            platform: "PC+MOBILE",
        },
        {
            company: "앱지",
            name: "전자제품 견적비교 플랫폼 : 스톤즈",
            period: "2022.08 — 2023.11",
            skills: ["Vue", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["멀티파트 업로드를 사용해 대용량 파일 업로드 구현", "위치 기반 서비스 구현"],
            links: [],
            platform: "MOBILE",
        },
        {
            company: "앱지",
            name: "땅땅 ERP 서비스 : 땅땅치킨",
            period: "2022.03 — 2022.08",
            skills: ["Vue", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["땅땅치킨, 땅땅몰, 땅땅랜드 등 대규모 플랫폼", "통합 정산 시스템 API 개발", "외주 개발자와 협업"],
            links: [],
            platform: "PC+MOBILE",
        },
        {
            company: "앱지",
            name: "결제 대행 플랫폼 : 코엠페이먼츠",
            period: "2022.01 — 2022.03",
            skills: ["Vue", "Javascript", "SCSS"],
            works: ["OCR API 연동", "외부 협력업체(API, 호스팅)와 협업"],
            links: [],
            platform: "MOBILE",
        },
        {
            company: "앱지",
            name: "유언서비스 플랫폼 : 남김",
            period: "2021.07 — 2021.01",
            skills: ["Vue", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["ffmpeg를 사용한 이미지, 영상 파일 압축 구현", "AOS/IOS 구독 인앱 결제 연동"],
            links: [],
            platform: "MOBILE",
        },
        {
            company: "앱지",
            name: "알뜰폰 이동통신 플랫폼 : 모빙",
            period: "2021.06 — 2021.10",
            skills: ["Vue", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["PC 고객센터 페이지 구현", "Mobile Web 화면 구현 및 API 연동"],
            links: [],
            platform: "PC+MOBILE",
        },
        {
            company: "앱지",
            name: "공동주택 관리 플랫폼 : 함께관리해",
            period: "2021.03 — 2023.05",
            skills: ["Vue", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["엑셀 import 기능 구현", "배치를 사용해 매월 데이터 갱신 기능 구현", "cafe24를 사용해 SMS 발송 기능 구현"],
            links: [],
            platform: "MOBILE",
        },
        {
            company: "앱지",
            name: "외식 종사자 교육 인증 플랫폼 : 외식산업협회",
            period: "2020.10 — 2021.02",
            skills: ["Vue", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["PC, Mobile Web 화면 구현 및 API 연동", "백오피스 다중 파일 업로드 구현"],
            links: [],
            platform: "PC+MOBILE",
        },
    ];

    return (
        <section id="project" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div className="container mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:p-0 md:w-full">
                        {datas.map((data, index) => (
                            <div className="flex border-2 rounded-lg border-teal-200 border-opacity-50 p-6 sm:flex-row flex-col mb-10 relative" key={index}>
                                <div className="absolute top-[-0.8rem] left-5 bg-primary px-2">{data.period}</div>
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                                    {data.platform === "PC+MOBILE" ? (
                                        <Image src="/icons/i_pc_w_mobile.svg" alt="" width={30} height={30} />
                                    ) : (
                                        <Image src="/icons/i_mobile.svg" alt="" width={30} height={30} />
                                    )}
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-lg title-font font-medium mb-3 flex items-center">
                                        {data.name}
                                        <span className="text-sm font-light">&nbsp;&#183; {data.company}</span>
                                    </h2>
                                    <ul className="leading-relaxed text-sm font-normal">
                                        {data.works.map((work, index2) => (
                                            <li className="flex" key={index2}>
                                                <Image src="/icons/i_done.svg" alt="done" width={20} height={25} className="mr-2" />
                                                <p>{work}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {data.skills.map((skill, index2) => (
                                            <li className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}</div>
                                            </li>
                                        ))}
                                    </ul>
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
