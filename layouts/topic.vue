<template>
	<div class="bg-light font-inter grid min-h-screen wrapper mx-[20px]">
		<div class="relative h-full mt-[20px]">
			<PagesLogo />
			<PagesButton />
		</div>
		<slot></slot>
		<PagesFooter />
	</div>
</template>

<script setup></script>

<style scoped>
.wrapper {
	grid-template-rows: auto 1fr auto;
}
</style>
