import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            name: "개인 포트폴리오",
            period: "2023.09 — 2023.10",
            skills: ["Next.js", "Javascript", "Tailwind CSS"],
            works: ["데스크탑, 모바일 지원 반응형 웹", "향상된 UX를 위한 다크모드"],
            web: "https://seungyeonj.netlify.app",
            github: "https://github.com/ssyeon612/seungyeon-portfolio-2023",
        },
        {
            company: "유앤소프트",
            name: "휴대폰, 인터넷 견적비교 플랫폼 : 퍼스・퍼스 사장님",
            period: "2022.11 — 2023.07",
            skills: ["Vue2", "Javascript", "SCSS", "Jenkins"],
            works: [
                "B2C 플랫폼 ‘퍼스’, B2B 플랫폼 ‘퍼스 사장님’ 통신 견적비교 서비스",
                "서비스 유지보수 및 비즈니스 요구에 맞는 기능 개발",
                "유지보수와 확장성을 고려한 컴포넌트 분리로 업무 시스템 개선",
                "스켈레톤 UI 도입을 제안 → 구현을 통해 유저의 이탈률 감소",
                "모바일 퍼스트 앱을 데스크톱으로 확장. 유저 유입경로 확대 및 사장님 업무 효율성 증가",
                "Google Analytics 코드 삽입 후 유저 행동 패턴 분석",
            ],
            web: "https://customer.perce.co.kr",
            aos: "https://play.google.com/store/apps/details?id=com.appg.perce_customer&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%8D%BC%EC%8A%A4-%EB%8F%99%EB%84%A4-%ED%9C%B4%EB%8C%80%ED%8F%B0-%EB%A7%A4%EC%9E%A5%EB%93%A4%EA%B3%BC-%EC%83%81%EB%8B%B4%ED%95%98%EA%B3%A0-%EA%B2%AC%EC%A0%81-%EB%B0%9B%EC%9C%BC%EC%84%B8%EC%9A%94/id1569722707",
        },
        {
            company: "앱지",
            name: "전자제품 견적비교 플랫폼 : 스톤즈",
            period: "2022.08 — 2022.11",
            skills: ["Vue3", "Nuxt", "Java", "Spring Boot", "MySQL", "jOOQ", "Nginx"],
            works: [
                "Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱 개발",
                "데이터 베이스 설계 및 Spring Boot 기반 API 서버 구축",
                "카카오 지도 API를 활용해 사용자 위치 기반 서비스 구현",
                "멀티파트 업로드를 사용해 대용량 파일 업로드 구현",
                "네이버, 카카오, 구글, 애플 소셜 로그인 구현",
            ],
            reviews: [
                {
                    title: "부드러운 스크롤 및 제스처 구현",
                    desc: "네이버 지도와 유사한 하단 정보판의 스크롤을 부드럽게 구현하는 데 중점을 두었습니다. 사용자 경험을 향상시키기 위해 다양한 레퍼런스를 찾아보고 적용함으로써 부드러운 스크롤 및 제스처 인식에 대한 기술적인 능력을 향상시켰습니다.",
                },
                {
                    title: "레퍼런스 및 독립적인 문제 해결 능력",
                    desc: "부드러운 스크롤 구현을 위해 다양한 레퍼런스를 조사하고 분석하는 과정에서, 레퍼런스를 활용하여 독립적으로 문제를 해결하는 능력을 키웠습니다. 새로운 기술을 터득하고 적용하는 과정에서 빠르게 적응할 수 있는 능력을 개발했습니다.",
                },
                {
                    title: "사용자 중심의 디자인 이해",
                    desc: "지도 페이지와 하단 정보판의 설계 및 구현을 통해 사용자 중심의 디자인 원칙에 대한 이해를 높였습니다. 사용자의 편의성을 고려하여 기능을 개발하고 디자인함으로써 사용자 경험을 최적화하는 방법을 습득했습니다.",
                },
            ],
        },
        {
            company: "앱지",
            name: "치킨 프랜차이즈 ERP 서비스 : 땅땅치킨",
            period: "2022.03 — 2022.08",
            skills: ["Vue2", "Nuxt", "Java", "Spring Boot", "MySQL", "jOOQ"],
            works: [
                "Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱, 웹 페이지 유지보수 및 기능 추가 개발",
                "chart.js를 활용해 배달, 몰, 랜드 플랫폼 통합 정산내역 차트 시각화",
                "PG사 결제, 네이버페이, 쿠폰 통합 정산 API 개발",
                "Apache POI를 활용해 대량이체, 세금계산서, 판매 대행 신고자료 엑셀 다운로드 기능 구현",
                "분기별 판매 대행 신고자료 데이터 추출 기능 구현",
                "계정 권한에 따른 접근 제어 구현",
            ],
            reviews: [
                {
                    title: "복잡한 결제 로직의 처리 및 다양한 시나리오 대응",
                    desc: "정산 API에서 다양한 결제 시나리오에 대응하기 위해 플랫폼별로 전체취소 및 부분취소를 구현하고, 쿠폰 금액 및 계좌 이체에 따라 동적으로 수수료를 적용하는 복잡한 결제 로직을 설계 및 구현했습니다. 이를 통해 플랫폼의 다양한 요구사항에 유연하게 대응할 수 있었습니다.",
                },
                {
                    title: "다중 플랫폼 및 데이터베이스 처리 최적화",
                    desc: "여러 플랫폼 및 데이터베이스 환경에서 데이터 호출의 성능과 효율성을 고려하여 개선하는 데 주력했습니다. 상품 식별번호 호출 속도를 향상시키기 위해 데이터베이스 쿼리 최적화와 캐싱 전략을 구현하여 성능 향상을 달성했습니다.",
                },
                {
                    title: "외주 개발자와의 협업 및 충돌 관리 전략",
                    desc: "잦은 CSS 충돌 문제를 해결하기 위해 외주 개발자와의 협업에서 코드를 모듈화하고 CSS를 분리하여 충돌을 최소화하는 전략을 도입했습니다. 이를 통해 협업의 효율성을 높이고 개발 작업을 원활하게 진행했습니다.",
                },
                {
                    title: "데이터 시각화를 통한 사용자 경험과 관리자 기능 강화",
                    desc: "관리자 웹과 사용자 앱에서 정산 정보를 시각화하여 제공하고, 차트 및 그래픽 요소를 활용하여 데이터를 직관적으로 표현했습니다. 데이터 시각화를 통해 사용자와 관리자가 편리하게 정보를 파악하고 의사결정을 내릴 수 있도록 하였습니다.",
                },
            ],
        },
        {
            company: "앱지",
            name: "결제 대행 플랫폼 : 코엠페이먼츠",
            period: "2022.01 — 2022.03",
            skills: ["Vue", "Javascript", "SCSS", "Nginx"],
            works: [
                "고객사에서 전달받은 API 문서 분석 및 요구사항 정리",
                "Vue 기반 하이브리드 앱 개발",
                "네이버 OCR 모듈을 이용해 카드정보 추출 기능 구현",
                "SignaturePad.js를 이용해 사용자 서명을 이미지 데이터로 변환",
                "Day.js를 이용해 커스터마이즈 캘린더 구현",
                "Local Storage를 활용해 자동로그인 기능 구현",
            ],
            aos: "https://play.google.com/store/apps/details?id=com.appg.coam&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%EC%BD%94%EC%97%A0%ED%8E%98%EC%9D%B4%EB%A8%BC%EC%B8%A0/id1609907585",
            reviews: [
                {
                    title: "문제 해결 및 트러블슈팅 능력",
                    desc: "백엔드와의 데이터 조율에서 발생한 문제에 대한 트러블슈팅을 직접 수행했습니다. 이로써 프로젝트 진행 중 발생한 어려움에 대처하고 문제를 해결하는 능력을 강화했습니다. 외부 미팅을 통해 효과적으로 의사 소통하여 원활한 프로젝트 진행을 지원했습니다.",
                },
                {
                    title: "다양한 플랫폼에서의 네이티브 기능 구현",
                    desc: "OCR API 연동을 위해 네이티브 기능을 활용하는 작업을 수행했습니다. 특히 아이폰과 안드로이드 플랫폼 간에 다르게 작업해야 하는 상황에서 빠르게 적응하고, 효과적으로 기능을 구현하는 경험을 쌓았습니다.",
                },
                {
                    title: "클라이언트 요구사항 이해 및 소통 능력 강화",
                    desc: "고객사와 직접 소통하면서 프로젝트의 기능 설명 및 요구사항을 정리하는 경험을 했습니다. 이를 통해 클라이언트의 요구사항을 정확히 이해하고 구현하는 능력을 향상시켰습니다. 고객 중심의 개발 접근 방식을 배웠고, 요구사항 변화에 유연하게 대처할 수 있는 능력을 기를 수 있었습니다.",
                },
                {
                    title: "전체적인 프로젝트 관리 및 조율 능력 향상",
                    desc: "프로젝트의 전반적인 흐름을 이해하고 조율하는 역할을 수행하면서 프로젝트 관리 능력을 향상시켰습니다. 외부 개발사와의 협업, 문제 해결, 기능 구현, 클라이언트와의 소통 등 다양한 측면에서 프로젝트를 성공적으로 이끌어내는 데 기여했습니다.",
                },
            ],
        },
        {
            company: "앱지",
            name: "디지털 유언장 서비스 : 남김",
            period: "2021.07 — 2022.01",
            skills: ["Vue3", "Nuxt", "Java", "Spring Boot", "MySQL", "jOOQ", "Nginx"],
            works: [
                "Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱 개발",
                "데이터 설계 및 Spring Boot 기반 API 서버 구축",
                "ffmpeg를 사용한 이미지, 영상 파일 압축 구현",
                "Spring Scheduler를 활용해 유서 전달 자동화",
                "RestTemplate을 사용해 카카오 알림톡 API 연동",
                "AOS/IOS 인앱결제 구독 서비스 연동",
                "Chart.js를 사용해 무료/유료 성별, 나이별로 통계자료 데이터 시각화",
                "네이버, 카카오, 구글, 애플 SNS 로그인 구현",
            ],
            aos: "https://play.google.com/store/apps/details?id=kr.co.wellv.namkim&hl=ko-KR",
            reviews: [
                {
                    title: "데이터 설계 변경 및 문제 해결 능력",
                    desc: "프로젝트 중간에 글 작성 기능의 스텝이 변경되고 데이터 설계가 변경되어 문제가 발생했습니다. 이에 빠르게 대응하여 일정에 영향을 최소화하고자 노력했습니다. 고객사와의 조율을 통해 문제를 원활하게 해결하고 프로젝트를 원활하게 진행했습니다.",
                },
                {
                    title: "협업 및 새로운 기능 도입 경험",
                    desc: "인앱 구독 결제 기능 도입 시 네이티브 팀과 함께 협업하여 새로운 기능을 구현했습니다. 회사 내에서 처음 사용하는 기능이라 함께 논의하고 고민하면서 기능을 성공적으로 도입하는 경험을 쌓았습니다.",
                },
                {
                    title: "다양한 데이터 시각화 및 다운로드 구현 능력",
                    desc: "관리자 통계 자료 시각화와 엑셀 다운로드 부분에서 다양한 요구사항에 따라 유연하게 대응하며 기능을 구현했습니다. 월별, 일별, 시간별 데이터 병합 여부에 따라 다르게 다운로드되는 기능을 구현하면서 데이터 처리와 시각화에 대한 능력을 향상시켰습니다.",
                },
            ],
        },
        {
            company: "앱지",
            name: "좌석 예약 출석 시스템 : 코리아컨벤션서비스",
            period: "2021.11 — 2022.01",
            skills: ["Java", "Spring Boot", "MySQL", "jOOQ", "Nginx"],
            works: ["DB설계 및 Spring Boot 기반 API 서버 구축", "계층 데이터베이스 구조 설계", "zxing 라이브러리 사용해 QR코드 구현", "프론트엔드 서포트"],
        },
        {
            company: "앱지",
            name: "알뜰폰 이동통신 플랫폼 : 모빙",
            period: "2021.06 — 2021.10",
            skills: ["Vue2", "Nuxt", "Java", "Spring Boot", "MySQL", "jOOQ"],
            works: [
                "고객센터 파트 Nuxt 기반 관리자, Vue 기반 웹 페이지 개발",
                "고객센터 파트 Vue 기반 하이브리드 앱 개발",
                "Vue 기반 모바일 웹 환경 세팅 및 화면 구현",
                "모바일 웹 API 연동 및 수정, 배포",
            ],
            web: "https://www.mobing.co.kr",
        },
        {
            company: "앱지",
            name: "공동주택 관리 플랫폼 : 함께관리해",
            period: "2021.03 — 2021.05",
            skills: ["Vue3", "Nuxt", "Java", "Spring Boot", "MySQL", "jOOQ", "Nginx"],
            works: [
                "Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱 개발",
                "데이터 설계 및 Spring Boot 기반 API 서버 구축",
                "Spring Batch를 활용해 월별 미납 내역, 관리비 고지서 데이터 업로드 자동화",
                "Apache POI를 활용해 각 은행 포맷별로 엑셀 데이터 추출 기능 구현",
                "카페24 SMS API를 사용한 문자인증 기능 구현",
                "네이버, 카카오, 구글, 애플 소셜 로그인 구현",
            ],
            aos: "https://play.google.com/store/apps/details?id=com.appg.estate_with_me&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%95%A8%EA%BB%98%EA%B4%80%EB%A6%AC%ED%95%B4/id1567847353",
        },
        {
            company: "앱지",
            name: "하드웨어를 이용한 뇌파 컨디션 진단 플랫폼 : 멘탈닥터",
            period: "2021.01 — 2021.03",
            skills: ["Nuxt", "SCSS"],
            works: ["네이티브 팀과 협업하며 chart.js를 사용해 뇌파 수치 시각화"],
        },
        {
            company: "앱지",
            name: "외식 종사자 교육 인증 플랫폼 : 외식산업협회",
            period: "2020.11 — 2021.02",
            skills: ["Vue2", "Nuxt"],
            works: ["Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱, 모바일 웹 개발", "Vue Infinite Loading 사용해 무한스크롤 구현"],
            web: "https://www.kofsia.or.kr",
            web02: "https://www.kfoodedu.or.kr",
        },
        {
            company: "앱지",
            name: "아이 독해력 진단 서비스 : 한우리독서토론논술",
            period: "2020.10 — 2021.11",
            skills: ["jQuery", "Oracle"],
            works: ["학년별 독해력 진단 서비스 화면 개발", "독해력 통계 API 개발 및 시각화"],
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
                                <div className="absolute top-[-0.8rem] left-5 bg-primary px-2 text-slate-500">
                                    {project.company && <span className="text-slate-500 dark:text-slate-500">{project.company} | </span>}
                                    {project.period}
                                </div>
                                <div className="flex-grow">
                                    {/* 프로젝트명 */}
                                    <h2 className="text-lg title-font font-medium mb-3 lg:flex lg:items-center">{project.name}</h2>
                                    {/* 프로젝트 내용 */}
                                    <p className="hightlight"># What I did</p>
                                    <ul className="leading-relaxed text-sm font-normal ml-3 my-2">
                                        {project.works.map((work, index2) => (
                                            <li className="flex" key={index2}>
                                                {/* <Image src="/icons/done-icon.svg" alt="done" width={20} height={25} className="mr-2 brightness-0 dark:brightness-100" /> */}
                                                <span className="mr-2">-</span>
                                                <p>{work}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* 프로젝트명 기술 */}
                                    <p className="hightlight"># What I used</p>
                                    <ul className="flex flex-wrap my-2" aria-label="Technologies used">
                                        {project.skills.map((skill, index2) => (
                                            <li className="mr-1.5 mt-2" key={index2}>
                                                <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 bg-blue-700/10  text-blue-600 dark:bg-teal-400/10  dark:text-teal-300">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* 프로젝트 회고 */}
                                    {project.reviews && (
                                        <div className="mt-4">
                                            <input id={`summary_${index}`} className="details-toggle" type="checkbox" />
                                            <label htmlFor={`summary_${index}`} className="cursor-pointer hightlight">
                                                &nbsp;&nbsp;What I learn
                                            </label>
                                            {/* <div className="details text-sm m-3 break-keep" dangerouslySetInnerHTML={{ __html: project.desc }}></div> */}
                                            <div className="details m-3 ">
                                                <ul className="my-2">
                                                    {project.reviews.map((review, index2) => (
                                                        <li className="mb-3" key={index2}>
                                                            <h3 className="font-semibold text-blue-600 dark:text-teal-400">{review.title}</h3>
                                                            <p className="text-sm break-keep">{review.desc}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
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
