<template>
	<div class="bg-light font-dmsans grid min-h-screen wrapper mx-[20px]">
		<div class="relative h-full mt-[20px]">
			<PagesLogo />
			<PagesButton />
		</div>
		<slot></slot>

		<PagesFooter />
	</div>
</template>

<style scoped>
.wrapper {
	grid-template-rows: auto 1fr auto;
}
</style>
