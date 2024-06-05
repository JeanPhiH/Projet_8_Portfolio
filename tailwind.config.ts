import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "selector",
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
			keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-0.5deg)' },
          '1%': { transform: 'rotate(0.5deg)' },
					'2%': { transform: 'rotate(-0.5deg)' },
					'3%': { transform: 'rotate(0.5deg)' },
					'4%': { transform: 'rotate(-0.5deg)' },
					'5%': { transform: 'rotate(0.5deg)' },
					'6%': { transform: 'rotate(-0.5deg)' },
					'7%': { transform: 'rotate(0.5deg)' },
					'8%': { transform: 'rotate(-0.5deg)' },
					'100%': { transform: 'rotate(-0.5deg)' },
        },
				orbitxn: {
					'0%': { transform: 'rotate(0deg) translateX(-160px)' },
					'100%': { transform: 'rotate(360deg) translateX(-160px)' },
				},
				orbitxp: {
					'0%': { transform: 'rotate(0deg) translateX(160px)' },
					'100%': { transform: 'rotate(360deg) translateX(160px)' },
				},
				orbityn: {
					'0%': { transform: 'rotate(0deg) translateY(-160px)' },
					'100%': { transform: 'rotate(360deg) translateY(-160px)' },
				},
				orbityp: {
					'0%': { transform: 'rotate(0deg) translateY(160px)' },
					'100%': { transform: 'rotate(360deg) translateY(160px)' },
				},
				selfrotate: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(-360deg)' },
				}
      },
			animation: {
        // 'spin-quick': 'spin 0.5s linear infinite',
				'wiggle': 'wiggle 4s ease-in-out infinite',
				'orbityn': 'orbityn 20s linear infinite',
				'orbityp': 'orbityp 20s linear infinite',
				'orbitxn': 'orbitxn 20s linear infinite',
				'orbitxp': 'orbitxp 20s linear infinite',
				'selfrotate': 'selfrotate 20s linear infinite',
			},
			fontFamily: {
				ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
				ubuntumono: ['var(--font-ubuntumono)', 'monospace'],
				galindo: ['var(--font-galindo)', 'sans-serif'],
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
