import Image from "next/image";
import DatrModeToggleButton from "../DarkModeButton";

const Header = () => {
    const menus = [
        { name: "About", href: "about" },
        { name: "Work Experience", href: "experience" },
        { name: "Projects", href: "project" },
        { name: "Others", href: "others" },
    ];

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <DatrModeToggleButton />
                {/* <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"> */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SEUNG YEON</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">FRONT-END DEVELOPER</h2>
                <p className="mt-4 max-w-xs leading-normal">변화하지만 변함없는 개발자 정승연 입니다.</p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {menus.map((menu, index) => (
                            <li key={index}>
                                <a className="group flex items-center py-3 active" href={`#${menu.href}`}>
                                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                        {menu.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="mailto:ssyeon612@gmail.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Mail</span>
                        <Image src="/icons/i_mail.svg" alt="blog" width={35} height={40} />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/ssyeon612" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Image src="/icons/i_github.svg" alt="blog" width={25} height={40} />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://yeongseungjeong.tistory.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Blog</span>
                        <Image src="/icons/i_web.svg" alt="blog" width={25} height={40} />
                    </a>
                </li>

                <li className="mr-5 text-xs">
                    <a className="block hover:text-slate-200" href="https://github.com/ssyeon612" target="_blank" rel="noreferrer">
                        <span className="sr-only">Resume</span>
                        <Image src="/icons/i_cv.svg" alt="blog" width={30} height={40} />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
