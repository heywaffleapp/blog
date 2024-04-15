<template>
	<footer
		class="bg-inherit text-gray-800 flex flex-col sm:flex-row sm:justify-center items-center w-full gap-4 sm:gap-[5px] py-10"
	>
		<div>
			<NuxtLink
				to="https://heywaffle.app/signin"
				class="h-[25px] grid place-content-center text-[14px] font-medium hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				Sign in
			</NuxtLink>
		</div>
		<div>
			<NuxtLink
				to="https://heywaffle.app/about"
				class="h-[25px] grid place-content-center text-[14px] font-medium hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				Our story
			</NuxtLink>
		</div>
		<div>
			<NuxtLink
				to="https://heywaffle.app/pricing"
				class="h-[25px] grid place-content-center text-[14px] font-medium hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				Pricing
			</NuxtLink>
		</div>
		<div>
			<NuxtLink
				to="https://heywaffle.app/roadmap"
				class="h-[25px] grid place-content-center text-[14px] font-medium hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				Roadmap
			</NuxtLink>
		</div>
		<div>
			<NuxtLink
				to="/"
				class="text-[14px] font-medium h-[25px] grid place-content-center hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				Blog
			</NuxtLink>
		</div>
		<div>
			<NuxtLink
				target="_blank"
				to="https://instagram.com/heywaffleapp"
				class="text-[14px] font-medium h-[25px] grid place-content-center hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				<SVGInstagram />
			</NuxtLink>
		</div>
		<div>
			<NuxtLink
				target="_blank"
				to="https://twitter.com/heywaffleapp"
				class="h-[25px] grid place-content-center text-[14px] font-medium hover:text-gray-950 hover:bg-gray-100 py-4 px-5 rounded-lg"
			>
				<SVGTwitter />
			</NuxtLink>
		</div>
	</footer>
</template>
