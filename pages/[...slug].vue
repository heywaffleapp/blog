<template>
	<div class="mt-36 font-dmsans">
		<ContentDoc v-slot="{ doc }">
			<div class="flex flex-row mx-auto max-w-[1200px] relative">
				<div>
					<NuxtLink
						class="absolute text-gray-400 text-sm gap-2 flex flex-row items-center"
						to="/"
					>
						<SVGBack class="w-5" />
						<p> All posts </p>
					</NuxtLink>
				</div>
				<div class="mx-auto max-w-prose">
					<span class="text-gray-400 text-sm">{{ doc.published }}</span>
					<h1 class="text-6xl font-bold my-3">{{ doc.title }}</h1>
					<div class="text-gray-900">By {{ doc.author }}</div>
				</div>
			</div>
			<img
				:src="`${doc.img}?tr=w-1200`"
				class="w-[1200px] mx-auto my-20 rounded-3xl"
			/>
		</ContentDoc>
		<ContentDoc v-slot="{ doc }">
			<article class="mx-auto prose">
				<ContentRenderer :value="doc" />
			</article>
		</ContentDoc>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'landing'
})
</script>