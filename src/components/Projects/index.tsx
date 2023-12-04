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
            device: "PC Web",
            web: "https://seungyeonj.netlify.app",
            github: "https://github.com/ssyeon612/seungyeon-portfolio-2023",
        },
        {
            company: "유앤소프트",
            name: "휴대폰, 인터넷 견적비교 플랫폼 : 퍼스",
            period: "2022.11 — 2023.07",
            skills: ["Vue.js", "Javascript", "SCSS"],
            works: [
                "기존 서비스 유지보수 및 비지니스 요구에 맞는 기능 개발",
                "스켈레톤 UI 도입으로 UX 개선",
                "debounce로 실시간 검색어 구현",
                "디바이스 크기별 분기점을 설정하여 모바일과 PC 크기로 분리",
            ],
            platform: "PC+MOBILE",
            device: "PC Web<br />Hybrid APP",
            web: "https://customer.perce.co.kr",
            aos: "https://play.google.com/store/apps/details?id=com.appg.perce_customer&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%8D%BC%EC%8A%A4-%EB%8F%99%EB%84%A4-%ED%9C%B4%EB%8C%80%ED%8F%B0-%EB%A7%A4%EC%9E%A5%EB%93%A4%EA%B3%BC-%EC%83%81%EB%8B%B4%ED%95%98%EA%B3%A0-%EA%B2%AC%EC%A0%81-%EB%B0%9B%EC%9C%BC%EC%84%B8%EC%9A%94/id1569722707",
        },
        {
            company: "앱지",
            name: "전자제품 견적비교 플랫폼 : 스톤즈",
            period: "2022.08 — 2023.11",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: [
                "데이터 설계 및 관리자/사용자 화면 구축 및 API 개발, 배포",
                "카카오 지도 API를 활용한 위치 기반 서비스 구현",
                "지도 키워드 검색 기능 구현",
                "멀티파트 업로드를 사용해 대용량 파일 업로드 구현",
                "네이버, 카카오, 구글, 애플 SNS 로그인 구현",
            ],
            device: "Hybrid APP",
            platform: "MOBILE",
            desc: "마커 클러스터러, 인포윈도우 커스텀 등 자주 사용하지만 깊게 사용해보지 못했던 지도 라이브러리를 더 심층있게 공부하게 된 프로젝트였습니다. 특히 사용자의 제스처에 따라 부드러운 스크롤 액션을 주기 위해 많은 고민이 되어 국내에서 많이 사용되는 카카오 지도 앱과 네이버 지도 앱을 분석 하였고 덕분에 만족스러운 결과물을 만들어 낼 수 있었습니다.",
        },
        {
            company: "앱지",
            name: "땅땅 ERP 서비스 : 땅땅치킨",
            period: "2022.03 — 2022.08",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: [
                "기존 관리자 페이지, 앱 유지보수 및 기능 추가 개발",
                "모든 플랫폼 통합 정산 시스템 화면 구현 및 API 개발",
                "자바 POI를 이용한 엑셀 파일 읽기 및 다운로드 기능 구현",
                "앱 로그인 아이디 별로 관리자 권한 구분",
            ],
            platform: "PC+MOBILE",
            device: "PC Web<br />POS<br />Hybrid APP",
            desc: "땅땅치킨, 땅땅몰, 땅땅랜드 등 여러 플랫폼으로 구성되어 있습니다. 외주 개발사와 슬랙 및 깃허브 이슈를 활용하여 일정 및 개발 이슈를 공유하며 진행되었습니다. 외주 개발사와 잦은 충돌이 있었던 공통 CSS 부분을 분리하여 충돌을 최소화한 후 배포하였기 때문에 이후 배포 시간을 단축할 수 있었습니다. <br /><br /> 히스토리 정리가 되어있지 않아 유지 보수 시에 경로 파악이 어려운 점이 있었지만 차근차근 소스를 분석하며 레드마인에 정리해 놓았습니다. 그 덕분에 프로젝트 담당자가 바뀌는 과정에서 보다 쉽게 인수인계를 할 수 있었고 문서 작성의 중요성을 다시 한 번 느끼게 해준 프로젝트 였습니다.",
        },
        {
            company: "앱지",
            name: "결제 대행 플랫폼 : 코엠페이먼츠",
            period: "2022.01 — 2022.03",
            skills: ["Vue", "Javascript", "SCSS"],
            works: [
                "API 문서 분석 및 요구사항 정리",
                "사용자 화면 기술환경 구성 및 기능 구현, 배포",
                "네이버 OCR API 결제 모듈 연동",
                "Vue Signature Pad 라이브러리를 사용해 서명 패드 구현",
                "달력 모달 커스텀",
            ],
            platform: "MOBILE",
            device: "Hybrid APP",
            aos: "https://play.google.com/store/apps/details?id=com.appg.coam&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%EC%BD%94%EC%97%A0%ED%8E%98%EC%9D%B4%EB%A8%BC%EC%B8%A0/id1609907585",
            desc: "외부 협력업체와 함께 진행한 프로젝트에서 프론트엔드 역할을 담당했습니다. API에 대한 수정 개발이 동시에 이루어져야 하는 환경 이어서 외부업체와 고객사랑 직접 소통하며 개발진행을 했습니다. 프론트엔드와 백엔드 데이터를 주고 받는 과정에서 조율이 잘 되지 않아 외부 업체와 트러블이 발생했고 따로 미팅을 요청해서 원만하게 해결할 수 있었습니다. ",
        },
        {
            company: "앱지",
            name: "유언서비스 플랫폼 : 남김",
            period: "2021.07 — 2022.01",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: [
                "데이터 설계 및 관리자/사용자 화면 구축 및 API 개발, 배포",
                "ffmpeg를 사용한 이미지, 영상 파일 압축 구현",
                "카카오 알림톡 API 연동",
                "AOS/IOS 구독 인앱 결제 연동",
                "네이버, 카카오, 구글, 애플 SNS 로그인 구현",
            ],
            platform: "MOBILE",
            device: "Hybrid APP",
            aos: "https://play.google.com/store/apps/details?id=kr.co.wellv.namkim&hl=ko-KR",
            desc: "개발을 마무리 하는 단계에서 기획의 방향이 바뀌는 상황이 생겼었습니다. 마감기한이 얼마 남지 않은 시점이었지만 담당 PM님과 매일 개발 일정, 목표치를 공유하며 진행 하고 해당 기록들을 고객사와도 데일리로 공유하며 조율하여 문제 없이 완료 할 수 있던 프로젝트였습니다. 또한 인앱 결제 기능 구현이 생소해서 같이 협업했던 네이티브 개발자분들과 많은 소통을 하며 배울 수 있는 기회가 되었고 네이티브 앱에 대한 이해도를 더욱 높일 수 있었습니다.",
        },
        {
            company: "앱지",
            name: "알뜰폰 이동통신 플랫폼 : 모빙",
            period: "2021.06 — 2021.10",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["관리자 화면 구현", "PC Web 고객센터, 이벤트 페이지 구현", "Mobile Web 개발 환경 세팅, 화면 구현", "Mobile Web API 연동 및 수정, 배포"],
            platform: "PC+MOBILE",
            device: "PC Web<br />Web APP",
            web: "https://www.mobing.co.kr",
            desc: "개발일정 오류로 인해 각자 맡고 있던 프로젝트가 있던 개발자들도 모두 동원 되어 개발을 진행이 되었습니다. 저는 서포터로 들어가게 되어 개발을 하며 기획을 검토 해야 하는 어려움이 있었지만 맡은 부분 만큼이라도 큰 도움이 되고 싶어 근무 이외의 시간을 투자해 이전 히스토리들 살펴보았습니다. 웹 화면을 구현할 때는 작은 부분을 맡아서 했지만 이후에 신입 개발자 한 분과 함께 모바일 웹 앱 화면을 구현하는 프로젝트를 맡게 되었습니다. 이전에 히스토리를 익힌 덕분에 리드를 맡아서 진행하게 된 상황에서도 문제 없이 마무리 할 수 있던 프로젝트 였습니다.",
        },
        {
            company: "앱지",
            name: "공동주택 관리 플랫폼 : 함께관리해",
            period: "2021.03 — 2023.05",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: [
                "데이터 설계 및 관리자/사용자 화면 구축 및 API 개발, 배포",
                "자바 POI를 이용한 엑셀 파일 읽기 기능 구현",
                "카페24 SMS API를 사용한 문자인증 기능 구현",
                "네이버, 카카오, 구글, 애플 SNS 로그인 구현",
            ],
            platform: "MOBILE",
            device: "Hybrid APP",
            aos: "https://play.google.com/store/apps/details?id=com.appg.estate_with_me&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%95%A8%EA%BB%98%EA%B4%80%EB%A6%AC%ED%95%B4/id1567847353",
            desc: "생소한 부동산 용어와 담당 PM님의 변경으로 인해 프로젝트에 대한 이해도가 부족했던 어려움이 있었습니다. 또한 개발 환경 구성부터 배포까지 처음으로 혼자 진행하게 되어 큰 걱정이 앞 섰지만 이 과정은 저에게 어떻게 동료에게 도움을 요청하고 문제를 해결해 나가는 지를 알게 해주었습니다. 개발이 마무리가 되었을 때 저는 저의 성장을 느낄 수 있어서 애착이 깊은 프로젝트였습니다. ",
        },
        {
            company: "앱지",
            name: "외식 종사자 교육 인증 플랫폼 : 외식산업협회",
            period: "2020.10 — 2021.02",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["관리자 화면, 사용자 PC/Mobile Web 화면 구현", "Vue Infinite Loading 라이브러리를 사용해 무한스크롤 구현"],
            platform: "PC+MOBILE",
            device: "PC Web<br />Web APP",
            web: "https://www.kofsia.or.kr",
            web02: "https://www.kfoodedu.or.kr",
            desc: "협회 페이지와 위생교육 페이지로 이루어진 플랫폼으로 시니어 개발자 한 분과 함께 협업 하며 프로젝트를 진행했습니다. 저의 역할은 주로 프론트엔드였고 다양한 연령대가 사용하는 서비스인 만큼 버튼 더블 클릭, 브라우저 환경 등 다양한 사이드 이펙트를 고려하며 개발했던 프로젝트였습니다.",
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
                                className="group flex border rounded-lg border-blue-500 dark:border-teal-200 border-opacity-50 p-8 sm:flex-row flex-col mb-10 relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
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
                                    {project.device && <div dangerouslySetInnerHTML={{ __html: project.device }} className="text-xs lg:text-center lg:mt-2 text-slate-500"></div>}
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
                                    <ul className="mt-2 flex flex-wrap mb-5" aria-label="Technologies used">
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
                                    {/* 프로젝트 회고 */}
                                    {project.desc && (
                                        <div>
                                            <input id={`summary_${index}`} className="details-toggle" type="checkbox" />
                                            <label htmlFor={`summary_${index}`} className="cursor-pointer">
                                                &nbsp;&nbsp;What I Learn
                                            </label>
                                            <div className="details text-sm mt-3 break-keep" dangerouslySetInnerHTML={{ __html: project.desc }}></div>
                                        </div>
                                    )}
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
