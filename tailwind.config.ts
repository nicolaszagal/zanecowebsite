import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Montserrat", "sans-serif"],
                body: ["Inter", "sans-serif"],
            }
        },
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
            secondary: {
                50:"#dddddd",
                100:"#cccccc",
                200:"#bbbbbb",
                300:"#aaaaaa",
                400:"#999999",
                500:"#888888",
                600:"#777777",
                700:"#666666",
                800:"#555555",
                900:"#444444",
            },
            neutral: "#f5fbff",

            white: "#ffffff",
            black: "#000000",
            transparent: "transparent",
        },
    },
    plugins: [],
}

export default config