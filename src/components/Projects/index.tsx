import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const projects = [
        {
            name: "개인 포트폴리오",
            period: "2023.09 — 2023.10",
            skills: ["Next.js", "Javascript", "Tailwind CSS"],
            works: ["데스크탑과 모바일을 지원하는 반응형 웹", "향상된 UX를 위한 다크모드 지원"],
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
            name: "땅땅 ERP 서비스 : 땅땅치킨",
            period: "2022.03 — 2022.08",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: [
                "Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱, 웹 페이지 유지보수 및 기능 추가 개발",
                "추가 기능별 데이터 베이스 재설계",
                "배달, 몰, 랜드 플랫폼 통합 정산내역 차트 시각화",
                "PG사 결제, 네이버페이, 쿠폰 통합 정산 API 개발",
                "자바 POI를 이용한 대량이체, 세금계산서 엑셀 파일 다운로드 기능 구현",
                "분기별 판매대행신고자료 추출 및 엑셀 파일 다운로드 기능 구현",
                "사용자 계정별 접근권한 세분화",
            ],
            desc: "땅땅치킨, 땅땅몰, 땅땅랜드 등 여러 플랫폼으로 구성되어 있습니다. 외주 개발사와 슬랙 및 깃허브 이슈를 활용하여 일정 및 개발 이슈를 공유하며 진행되었습니다. 외주 개발사와 잦은 충돌이 있었던 공통 CSS 부분을 분리하여 충돌을 최소화한 후 배포하였기 때문에 이후 배포 시간을 단축할 수 있었습니다. <br /><br /> 히스토리 정리가 되어있지 않아 유지 보수 시에 경로 파악이 어려운 점이 있었지만 차근차근 소스를 분석하며 레드마인에 정리해 놓았습니다. 그 덕분에 프로젝트 담당자가 바뀌는 과정에서 보다 쉽게 인수인계를 할 수 있었고 문서 작성의 중요성을 다시 한 번 느끼게 해준 프로젝트 였습니다.",
        },
        {
            company: "앱지",
            name: "결제 대행 플랫폼 : 코엠페이먼츠",
            period: "2022.01 — 2022.03",
            skills: ["Vue", "Javascript", "SCSS"],
            works: [
                "고객사에서 전달받은 API 문서 분석 및 요구사항 정리",
                "Vue 기반 하이브리드 앱 개발",
                "Local Storage를 활용해 자동로그인 기능 구현",
                "네이버 OCR 모듈을 이용해 카드정보 추출 기능 구현",
                "SignaturePad.js를 이용하여 사용자 서명 캡쳐 기능 구현",
                "Day.js를 활용한 커스텀 캘린더 구현",
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
            name: "유언서비스 플랫폼 : 남김",
            period: "2021.07 — 2022.01",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: [
                "ffmpeg를 사용한 이미지, 영상 파일 압축 구현",
                "Spring Batch로 유서 전달 자동화",
                "카카오 알림톡 API 연동",
                "AOS/IOS 인앱결제 구독 서비스 연동",
                "Chart.js를 사용해 무료/유료 성별, 나이별로 통계자료 시각화",
                "Nuxt 기반 관리자 웹 페이지, Vue 기반 하이브리드 앱 개발",
                "데이터 설계 및 Spring Boot 기반 API 서버 구축",
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
            skills: ["Java", "Spring Boot", "MySQL", "jOOQ"],
            works: ["DB설계 및 Spring Boot 기반 API 서버 구축", "계층 데이터베이스 구조 설계", "zxing 라이브러리 사용해 QR코드 구현", "프론트엔드 서포트"],
            reviews: [
                {
                    title: "프론트엔드 서포트 및 협업 능력",
                    desc: "해당 프로젝트에서는 주로 백엔드를 담당하면서 신입 프론트엔드 개발자를 지원했습니다. 프론트엔드와의 원활한 협업을 통해 효율적인 팀 작업을 이끌었습니다.",
                },
                {
                    title: "트리 구조 로직 이해",
                    desc: "행사 등록과 좌석 생성의 트리 구조 로직이 프로젝트에서 중요한 부분이었습니다. 관리자가 행사를 등록하고 좌석을 생성하는 과정에서 발생하는 복잡한 트리 구조를 이해하고 구현하는 데 도전했습니다. 이를 통해 복잡한 데이터 구조를 다루는 능력을 향상시켰습니다.",
                },
                {
                    title: "임시 테이블 생성 및 삭제 로직",
                    desc: "좌석 생성에서 발생한 어려움을 해결하기 위해 임시로 테이블을 생성하고 삭제하는 로직을 구현했습니다. 프로그램을 만들 때 좌석을 수동으로 입력하여 미노출, 예약 가능 좌석을 선택할 수 있는 기능을 구현하면서 데이터베이스 조작과 효과적인 로직 구현에 대한 경험을 쌓았습니다.",
                },
            ],
        },
        {
            company: "앱지",
            name: "알뜰폰 이동통신 플랫폼 : 모빙",
            period: "2021.06 — 2021.10",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["관리자 화면 구현", "PC Web 고객센터, 이벤트 페이지 구현", "Mobile Web 개발 환경 세팅, 화면 구현", "Mobile Web API 연동 및 수정, 배포"],
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
            aos: "https://play.google.com/store/apps/details?id=com.appg.estate_with_me&hl=ko-KR",
            ios: "https://apps.apple.com/kr/app/%ED%95%A8%EA%BB%98%EA%B4%80%EB%A6%AC%ED%95%B4/id1567847353",
            desc: "생소한 부동산 용어와 담당 PM님의 변경으로 인해 프로젝트에 대한 이해도가 부족했던 어려움이 있었습니다. 또한 개발 환경 구성부터 배포까지 처음으로 혼자 진행하게 되어 큰 걱정이 앞 섰지만 이 과정은 저에게 어떻게 동료에게 도움을 요청하고 문제를 해결해 나가는 지를 알게 해주었습니다. 개발이 마무리가 되었을 때 저는 저의 성장을 느낄 수 있어서 애착이 깊은 프로젝트였습니다. ",
        },
        {
            company: "앱지",
            name: "하드웨어를 이용한 뇌파 컨디션 진단 플랫폼 : 멘탈닥터",
            period: "2021.01 — 2021.03",
            skills: ["Nuxt", "SCSS"],
            works: ["chart.js를 사용해 뇌파 수치 시각화"],
        },
        {
            company: "앱지",
            name: "외식 종사자 교육 인증 플랫폼 : 외식산업협회",
            period: "2020.11 — 2021.02",
            skills: ["Vue.js", "Nuxt", "Java", "Spring Boot", "MySQL"],
            works: ["관리자 화면, 사용자 PC/Mobile Web 화면 구현", "Vue Infinite Loading 라이브러리를 사용해 무한스크롤 구현"],
            web: "https://www.kofsia.or.kr",
            web02: "https://www.kfoodedu.or.kr",
            desc: "협회 페이지와 위생교육 페이지로 이루어진 플랫폼으로 시니어 개발자 한 분과 함께 협업 하며 프로젝트를 진행했습니다. 저의 역할은 주로 프론트엔드였고 다양한 연령대가 사용하는 서비스인 만큼 버튼 더블 클릭, 브라우저 환경 등 다양한 사이드 이펙트를 고려하며 개발했던 프로젝트였습니다.",
        },
        {
            company: "앱지",
            name: "아이 독해력 진단 서비스 : 한우리독서토론논술",
            period: "2020.10 — 2021.11",
            skills: ["jQuery", "Oracle"],
            works: ["독해력 진단 서비스 통계 시각화 및 API 개발"],
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
