import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "forestbot-banner": "url('/forestbot_new_no_text.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "wave-server": "url('/wave-server.svg')",
        "leaderboard-bg": "url('/leaderboard.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "commands-bg": "url('/commands-bg.svg')",
        "home-bg": "url('/bg.svg')",
      },
      fontFamily: { 
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        poppins: ["Poppins", 'serif'],
        //font-family: 'Protest Strike', sans-serif;
        Protest: "'Protest Strike', sans-serif",

      },
    },
  },
  plugins: [],
};
export default config;
