<template>
	<div class="mx-auto max-w-[600px] text-center mb-20 mt-36">
		<h1 class="font-bold text-5xl font-dmsans mb-4">Welcome to Waffle's blog</h1>
		<p class="text-2xl font-medium text-gray-500">
			We'll fill them with sample content, but you can easily remove or personalize them whenever you like
		</p>
	</div>
	<div class="mx-auto max-w-[1000px] mb-36">
		<div class="grid grid-cols-2 gap-12">
			<ContentQuery
				path="updates"
				:limit="10"
				:sort="{ published: -1 }"
				v-slot="{ data }"
			>
				<div v-for="item in data">
					<img
						class="aspect-video object-cover object-center rounded-3xl mb-2"
						:src="item.img"
					/>
					<h4 class="text-gray-400 font-medium my-4 text-xs">
						{{ item.published }}
					</h4>
					<h3 class="font-bold text-2xl leading-none mb-2">
						{{ item.title }}
					</h3>
					<p class="text-xl text-gray-500 font-medium">
						{{ item.description }}
					</p>
				</div>
				<!-- <ContentRenderer :value="data" /> -->
			</ContentQuery>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'landing'
})
</script>