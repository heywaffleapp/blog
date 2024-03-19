<template>
	<div class="mx-auto max-w-[700px] text-center mb-20 mt-36">
		<ContentDoc v-slot="{ doc }">
			<h1 class="font-semibold text-5xl mb-4">{{ doc.title }}</h1>
			<p class="text-2xl font-regular text-gray-500">
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
						class="text-gray-600 font-regular my-4 text-[13px]"
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
	title: "Waffle's Blog",
	ogTitle: "My Amazing Site",
	description:
		"Explore out latest product updates, new features, founder stories, user insights and productivity tips",
	ogDescription:
		"Explore out latest product updates, new features, founder stories, user insights and productivity tips",
	ogImage: "https://ik.imagekit.io/waffle/blog/Frame%20129.webp",
	twitterCard: "summary_large_image",
});
</script>
