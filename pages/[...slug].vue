<template>
	<div class="mt-36">
		<ContentDoc>
			<template #not-found>Not found</template>
			<template #default="{ doc }">
				<div
					class="grid grid-cols-1 gap-5 sm:grid-cols-4 mx-auto max-w-[1200px] relative"
				>
					<div class="w-fit">
						<NuxtLink
							class="hover:text-yellow-400 text-gray-800 gap-2 flex flex-row items-center"
							to="/"
						>
							<SVGBack class="w-5" />
							<p>All posts</p>
						</NuxtLink>
					</div>
					<div
						class="max-w-prose sm:col-start-2 sm:col-span-3 md:col-span-2"
					>
						<div class="flex flex-row gap-2 items-center">
							<span class="text-gray-800"
								>Published
								{{ readableDate(doc.published) }} in</span
							>
							<NuxtLink
								class="hover:text-yellow-500 text-gray-800 underline"
								:to="`/${doc.topic_url}`"
							>
								<span class="">
									{{ doc.topic }}
								</span>
							</NuxtLink>
						</div>
						<h1 class="text-6xl font-bold my-5">
							{{ doc.title }}
						</h1>
						<div
							v-if="doc.author"
							class="text-gray-800 font-regular"
						>
							By {{ doc.author }}
						</div>
					</div>
				</div>
				<img
					:src="`${doc.img}?tr=w-1200`"
					class="w-[1000px] mx-auto my-20"
					:alt="doc.alt"
				/>
			</template>
		</ContentDoc>
		<ContentDoc>
			<template #not-found></template>
			<template #default="{ doc }">
				<article class="mx-auto prose">
					<ContentRenderer :value="doc" />
				</article>
			</template>
		</ContentDoc>
		<div class="mb-[30px]"></div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "landing",
});
const route = useRoute();
const { data } = await useAsyncData("post", () =>
	queryContent(route.path).findOne()
);

useSeoMeta({
	// HTML Meta Tags
	title: data.value.title,
	description: data.value.description,
	// Facebook Meta Tags
	ogUrl: `https://blog.heywaffle.app${data.value._path}`,
	ogType: "website",
	ogTitle: data.value.title,
	ogDescription: data.value.description,
	ogImage: data.value.img,
	ogImageAlt: data.value.alt,
	// Twitter Meta Tags
	twitterCard: "summary_large_image",
	twitterSite: "@heywaffleapp",
	twitterTitle: data.value.title,
	twitterDescription: data.value.description,
	twitterImage: data.value.img,
});

function readableDate(date) {
	const res = new Date(date).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
	});
	return res;
}
</script>
