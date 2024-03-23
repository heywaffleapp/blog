const srcDir = ".";

export default {
	plugins: [require("@tailwindcss/typography")],
	content: [
		`${srcDir}/components/**/*.{vue,js,ts}`,
		`${srcDir}/layouts/**/*.vue`,
		`${srcDir}/pages/**/*.vue`,
		`${srcDir}/composables/**/*.{js,ts}`,
		`${srcDir}/plugins/**/*.{js,ts}`,
		`${srcDir}/utils/**/*.{js,ts}`,
		`${srcDir}/App.{js,ts,vue}`,
		`${srcDir}/app.{js,ts,vue}`,
		`${srcDir}/Error.{js,ts,vue}`,
		`${srcDir}/error.{js,ts,vue}`,
		`${srcDir}/app.config.{js,ts}`,
	],
	theme: {
		extend: {
			colors: {
				light: "#FFFDFC",
				gray: {
					50: "#f7f7f7",
					100: "#ededed",
					200: "#e5e5e5",
					300: "#c8c8c8",
					400: "#adadad",
					500: "#999999",
					600: "#888888",
					700: "#7b7b7b",
					800: "#676767",
					850: "#545454", // Color extra! no standard de tailwind
					900: "#363636",
					950: "#2b2b2b",
				},
				yellow: {
					50: "#fffaeb",
					100: "#fff3c6",
					200: "#ffe488",
					300: "#ffd04a",
					400: "#ffbb20",
					500: "#f99907",
					600: "#dd7102",
					700: "#b74e06",
					800: "#943b0c",
					900: "#7a310d",
					950: "#461802",
				},
			},
			fontFamily: {
				// inter: ["Inter"],
			},
		},
	},
};
