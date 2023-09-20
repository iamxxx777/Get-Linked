import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			fontFamily: {
				clash: ["clash"],
				"clash-light": ["clash-light"],
				"clash-regular": ["clash-regular"],
				"clash-medium": ["clash-medium"],
				"clash-semibold": ["clash-semibold"],
				"clash-bold": ["clash-bold"]
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"gradient-ai":
					"linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)"
			},
			colors: {
				black: {
					DEFAULT: "#150E28"
				},
				blue: {
					DEFAULT: "#903AFF"
				},
				orchid: {
					DEFAULT: "#D434FE"
				}
			}
		}
	},
	plugins: []
};
export default config;
