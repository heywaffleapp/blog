<template>
	<footer
		class="bg-inherit text-gray-400 flex flex-row justify-center items-center w-full h-[60px] gap-[30px]"
	>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				to="https://heywaffle.app/signin"
				class="text-[14px] font-medium"
			>
				Sign in
			</NuxtLink>
		</div>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				to="https://heywaffle.app/about"
				class="text-[14px] font-medium"
			>
				Our story
			</NuxtLink>
		</div>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				to="https://heywaffle.app/pricing"
				class="text-[14px] font-medium"
			>
				Pricing
			</NuxtLink>
		</div>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				to="https://heywaffle.app/roadmap"
				class="text-[14px] font-medium"
			>
				Roadmap
			</NuxtLink>
		</div>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				to="https://blog.heywaffle.app"
				class="text-[14px] font-medium"
			>
				Blog
			</NuxtLink>
		</div>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				target="_blank"
				to="https://instagram.com/heywaffleapp"
				class="text-[14px] font-medium"
			>
				<SVGInstagram />
			</NuxtLink>
		</div>
		<div class="h-[25px] grid items-center">
			<NuxtLink
				target="_blank"
				to="https://twitter.com/heywaffleapp"
				class="text-[14px] font-medium"
			>
				<SVGTwitter />
			</NuxtLink>
		</div>
		<!-- <div class="h-[25px] text-[15px] font-medium grid items-center"> -->
		<!-- 	© Waffle 2024 -->
		<!-- </div> -->
	</footer>
</template>
