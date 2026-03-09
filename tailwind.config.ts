import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: {
                50: "#9bc5ff",
                100: "#2276E4",
                200: "#1E68C8",
                300: "#1A59AC",
                400: "#164B90",
                500: "#113C74",
                600: "#0D2D56",
                700: "#091C37",
                800: "#040E1B",
                900: "#02060F",
            },
            secondary: "#eeeeee",
            accent: "#333333",
            neutral: "#f5faff",

            white: "#ffffff",
            black: "#000000",
            transparent: "transparent",
        },
    },
    plugins: [],
}

export default config