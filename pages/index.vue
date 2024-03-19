<template>
	<div class="mx-auto max-w-[600px] text-center mb-20 mt-36">
		<ContentDoc v-slot="{ doc }">
			<h1 class="font-bold text-5xl font-dmsans mb-4">{{ doc.title }}</h1>
			<p class="text-2xl font-medium text-gray-500">
				{{ doc.description }}
			</p>
		</ContentDoc>
	</div>
	<div class="mx-auto max-w-[1000px]">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
			<ContentQuery
				path="/"
				:where="{ topic_url: { $in: ['features', 'insights', 'productivity', 'stories', 'updates'] } }"
				:limit="10"
				:sort="{ published: -1 }"
				v-slot="{ data }"
			>
				<div v-for="item in data">
					<NuxtLink :to="item._path">
						<img
							class="aspect-video object-cover object-center rounded-3xl mb-2"
							:src="`${item.img}?tr=w-500`"
						/>
					</NuxtLink>
					<h4 class="text-gray-400 font-medium my-4 text-xs">
						{{ item.published }}
					</h4>
					<NuxtLink
						class="font-bold text-2xl leading-none mb-2 hover:text-yellow-500"
						:to="item._path"
					>
						<h3>
							{{ item.title }}
						</h3>
					</NuxtLink>
					<NuxtLink
						class="text-gray-800"
						:to="item._path"
					>
						{{ item.description }}
					</NuxtLink>
				</div>
			</ContentQuery>
		</div>
	</div>
	<div class="my-20 mx-auto max-w-[1000px]">
		. . .
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'landing'
})
</script>