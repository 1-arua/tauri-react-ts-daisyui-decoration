/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				cupcake: {
					"color-scheme": "light",
					primary: "#65c3c8",
					secondary: "#ef9fbc",
					accent: "#eeaf3a",
					neutral: "#291334",
					"base-100": "#faf7f5",
					"base-200": "#efeae6",
					"base-300": "#e7e2df",
					"base-content": "#291334",
				},
			},
			"dim",
		],
	},
};
