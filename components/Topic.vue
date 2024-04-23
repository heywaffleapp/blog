<template>
	<div class="mx-auto max-w-[1000px]">
		<h1 class="font-semibold text-5xl mt-36 mb-12">
			{{ title }}
		</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
			<div v-for="item in data">
				<NuxtLink :to="item._path">
					<img
						class="aspect-video object-cover object-center rounded-3xl mb-2"
						:src="`${item.img}?tr=w-500`"
						:alt="item.alt"
					/>
				</NuxtLink>
				<h4 class="text-gray-400 font-medium my-4 text-xs">
					{{ readableDate(item.published) }}
				</h4>
				<NuxtLink
					class="font-bold text-2xl leading-none mb-2 hover:text-yellow-500"
					:to="item._path"
				>
					<h3>
						{{ item.title }}
					</h3>
				</NuxtLink>
				<NuxtLink class="text-gray-800" :to="item._path">
					{{ item.description }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["path", "title"]);
// const route = useRoute();
const data = await queryContent(props.path)
	.sort({ published: -1 })
	.limit(20)
	.find();

function readableDate(date) {
	const res = new Date(date).toLocaleString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric",
	});
	return res;
}
</script>
