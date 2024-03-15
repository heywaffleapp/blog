// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: [
		"@/assets/css/fonts/dmsans.css",
		"@/assets/css/fonts/satoshi.css",
	],
	modules: [
		'@nuxthq/studio',
		'@nuxt/content',
		'@nuxtjs/tailwindcss'
	],
	content: {
		// ... options
	}
})
