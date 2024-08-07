/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
        purple: "hsl(259, 100%, 65%)",
        "light-red": "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        "off-white": "hsl(0, 0%, 94%)",
        "light-grey": "hsl(0, 0%, 86%)",
        "smokey-grey": "hsl(0, 1%, 44%)",
        "off-black": "hsl(0, 0%, 8%)",
        "green-200": "hsl(148, 38%, 91%)",
        "green-600": "hsl(169, 82%, 27%)",
        red: "hsl(0, 100%, 66%)", // Mantenuto come rosso degli errori
        "grey-500": "hsl(186, 15%, 59%)",
        "grey-900": "hsl(187, 24%, 22%)",
        lime: "hsl(61, 70%, 52%)",
        slate100: "hsl(202, 86%, 94%)",
        slate300: "hsl(203, 41%, 72%)",
        slate500: "hsl(200, 26%, 54%)",
        slate700: "hsl(200, 24%, 40%)",
        slate900: "hsl(202, 55%, 16%)",
        green: "hsl(159, 69%, 38%)",
        "rose-50": "hsl(20, 50%, 98%)",
        "rose-100": "hsl(13, 31%, 94%)",
        primary: {
          "linear-gradient":
            "linear-gradient(135deg, hsl(249, 99%, 64%) 0%, hsl(278, 94%, 30%) 100%)",
          "input-border": "hsl(249, 99%, 64%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          "light-grayish-violet": "hsl(270, 3%, 87%)",
          "dark-grayish-violet": "hsl(279, 6%, 55%)",
          "very-dark-violet": "hsl(278, 68%, 11%)",
        },
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
