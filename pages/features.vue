<template>
	<Topic title="New features" path="/features" />
</template>

<script setup>
definePageMeta({
	layout: "topic",
});

useSeoMeta({
	// HTML Meta Tags
	title: "Waffle Blog — New features",
	description:
		"Discover the newest features that make Waffle the best visual organization app.",
	// Facebook Meta Tags
	ogUrl: "https://blog.heywaffle.app/features",
	ogType: "website",
	ogTitle: "Waffle Blog — New features",
	ogDescription:
		"Discover the newest features that make Waffle the best visual organization app.",
	ogImage: "https://alpha.n3-waffle.pages.dev/thumb2.webp",
	ogImageAlt:
		"Waffle is the visual organization app. Home to all your life's essentials.",
	// Twitter Meta Tags
	twitterCard: "summary_large_image",
	twitterSite: "@heywaffleapp",
	twitterTitle: "Waffle Blog — New features",
	twitterDescription:
		"Discover the newest features that make Waffle the best visual organization app.",
	twitterImage: "https://alpha.n3-waffle.pages.dev/thumb2.webp",
});
</script>
