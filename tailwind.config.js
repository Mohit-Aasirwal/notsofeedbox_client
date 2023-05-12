/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
				seriff: ["Oswald", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
		},
		colors: {
			primary: "#003865",
			secondary: "#00C2FF",
			neutral: "#3D4451",
			white: "#FFFFFF",
			black: "#000000",
		},
	},
	plugins: [],
};
