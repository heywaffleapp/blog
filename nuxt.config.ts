// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: [
		"@/assets/css/fonts/inter.css",
	],
	tailwindcss: {
		viewer: false
	},
	modules: [
		'@nuxthq/studio',
		'@nuxt/content',
		'@nuxtjs/tailwindcss'
	],
	content: {
		// ... options
	}
})
