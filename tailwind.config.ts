import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            // backgroundImage: {
            //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //     "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
            },
            textColor: {
                accent: "var(--color-text-accent)",
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
            },
        },
    },
    plugins: [],
};
export default config;
