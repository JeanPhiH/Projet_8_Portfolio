import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		colors: {
      transparent: 'transparent',
      current: 'currentColor',
			'dark': 'rgb(var(--color-dark) / <alpha-value>)',
			'light': 'rgb(var(--color-light) / <alpha-value>)',
      'highlight': 'rgb(var(--color-highlight) / <alpha-value>)',
      
    },
    extend: {
			animation: {
        'spin-quick': 'spin 0.5s linear infinite',
			},
			fontFamily: {
				ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
				ubuntumono: ['var(--font-ubuntumono)', 'monospace'],
			},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
