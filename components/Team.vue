<template>
  <div class="mb-4 text-xl font-semibold text-slate-900">My Team</div>
  <div class="space-y-3">
    <div
      v-if="teamStore.team.length === 0"
      class="text-lg font-medium italic text-slate-800"
    >
      Your team is empty
    </div>
    <div v-for="(pokemon, index) in teamStore.team">
      <NuxtLink
        :to="`/pokemon/${pokemon.id}`"
        class="flex items-center justify-between rounded-md border bg-slate-50 px-3 py-2 shadow"
      >
        <div class="mr-4 flex items-center space-x-2">
          <img :src="pokemon.sprites.front_default" class="h-12 w-12" />
          <p class="text-lg font-medium capitalize text-slate-800">
            {{ pokemon.name }}
          </p>
        </div>
        <button @click.prevent="teamStore.deletePokemon(index)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-red-600 stroke-white stroke-2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTeamStore } from "~/store/team";

const teamStore = useTeamStore();
</script>
