<template>
	<div class="mx-auto max-w-[700px] text-center mb-20 mt-36">
		<ContentDoc v-slot="{ doc }">
			<h1 class="font-semibold text-5xl mb-4">{{ doc.title }}</h1>
			<p class="text-2xl font-regular text-gray-800">
				{{ doc.description }}
			</p>
		</ContentDoc>
	</div>
	<div class="mx-auto max-w-[1000px]">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
			<ContentQuery
				path="/"
				:where="{
					topic_url: {
						$in: [
							'features',
							'insights',
							'productivity',
							'stories',
							'updates',
						],
					},
				}"
				:limit="10"
				:sort="{ published: -1 }"
				v-slot="{ data }"
			>
				<div v-for="item in data">
					<NuxtLink :to="item._path">
						<img
							class="aspect-video object-cover object-center rounded-lg mb-2 border border-gray-200"
							:src="`${item.img}?tr=w-500`"
						/>
					</NuxtLink>
					<NuxtLink
						class="text-gray-800 font-regular my-4 text-[14px]"
						:to="item.topic_url"
					>
						{{ item.topic }}</NuxtLink
					>

					<NuxtLink
						class="font-semibold text-2xl leading-none hover:text-yellow-500"
						:to="item._path"
					>
						<h3 class="mt-[10px]">
							{{ item.title }}
						</h3>
					</NuxtLink>
					<NuxtLink class="text-gray-800" :to="item._path">
						<p class="mt-[10px]">
							{{ item.description }}
						</p>
					</NuxtLink>
				</div>
			</ContentQuery>
		</div>
	</div>
	<div class="my-20 mx-auto max-w-[1000px]">. . .</div>
</template>

<script setup>
definePageMeta({
	layout: "landing",
});
useSeoMeta({
	// HTML Meta Tags
	title: "Waffle — Blog",
	description:
		"Explore out latest product updates, new features, founder stories, user insights and productivity tips.",
	// Facebook Meta Tags
	ogUrl: "https://blog.heywaffle.app",
	ogType: "website",
	ogTitle: "Waffle — Blog",
	ogDescription:
		"Explore out latest product updates, new features, founder stories, user insights and productivity tips.",
	ogImage: "https://alpha.n3-waffle.pages.dev/thumb2.webp",
	ogImageAlt:
		"Waffle is the visual organization app. Home to all your life's essentials.",
	// Twitter Meta Tags
	twitterCard: "summary_large_image",
	twitterSite: "@heywaffleapp",
	twitterTitle: "Waffle — Blog",
	twitterDescription:
		"Explore out latest product updates, new features, founder stories, user insights and productivity tips.",
	twitterImage: "https://alpha.n3-waffle.pages.dev/thumb2.webp",
});
</script>
