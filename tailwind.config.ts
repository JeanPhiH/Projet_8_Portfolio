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
        }
      },
			animation: {
        'spin-quick': 'spin 0.5s linear infinite',
				'wiggle': 'wiggle 4s ease-in-out infinite',
			},
			fontFamily: {
				ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
				ubuntumono: ['var(--font-ubuntumono)', 'monospace']
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
