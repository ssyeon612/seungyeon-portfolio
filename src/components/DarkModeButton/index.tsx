"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DatrModeToggleButton() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        if (theme === "system") setTheme("dark");
    }, [theme]);
    return (
        <div>
            <input type="checkbox" id="toggle-mode-cb" checked={theme === "dark"} onChange={() => setTheme(theme === "dark" ? "light" : "dark")} />
            <div id="mode-wrapper" className="w-fit mb-10">
                <label id="toggle-mode" htmlFor="toggle-mode-cb" className="cursor-pointer">
                    <span className="sr-only">Toggle</span>
                    <span className="toggle-border">
                        <span className="toggle-indicator"></span>
                    </span>
                </label>
            </div>
        </div>
    );
}
