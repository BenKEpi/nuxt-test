<script setup lang="ts">
const modal = useModal();

const showModal = (): void => {
  modal.value = true;
};
</script>

<template>
  <div class="sticky top-0 z-20 border-b bg-white shadow-sm">
    <div
      class="mx-5 flex h-14 max-w-6xl items-center justify-between pt-2 md:pt-0 xl:mx-auto"
    >
      <NuxtLink
        to="/"
        class="text-2xl font-medium italic text-red-600 underline decoration-red-400 decoration-4 hover:text-red-500 hover:no-underline"
      >
        Pokedex
      </NuxtLink>
      <div class="flex space-x-5">
        <button @click="showModal" class="block md:hidden">
          <img src="~/assets/pokeballs.png" class="h-6 w-6" />
        </button>
        <a href="https://github.com/BenKEpi/nuxt-test" target="_blank"
          ><img src="~/assets/github-logo.png" class="h-6 w-6"
        /></a>
      </div>
    </div>
  </div>
</template>
