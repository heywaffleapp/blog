<template>
	<div
		class="flex flex-row items-center justify-center gap-[8px] absolute top-0 right-0"
	>
		<NuxtLink
			class="font-semibold text-[15px] text-center text-black hover:text-gray-850 leading-none select-none grid place-items-center px-[15px] h-[35px] border-black rounded-lg cursor-pointer"
			to="https://heywaffle.app/signin"
			>Sign in</NuxtLink
		>
		<NuxtLink
			class="shadow font-semibold text-[15px] text-center text-white leading-none grid place-items-center bg-black hover:bg-yellow-400 hover:text-black outline-offset-4 px-[15px] h-[40px] rounded-lg cursor-pointer"
			to="https://heywaffle.app/"
			>Join waitlist</NuxtLink
		>
	</div>
</template>
