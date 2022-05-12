<template>
  <NuxtLink
    v-if="data"
    :to="`/pokemon/${data.id}`"
    class="flex h-80 items-center justify-center rounded-md border bg-slate-50 p-5 shadow hover:shadow-lg"
  >
    <Loading v-if="pending" />
    <p v-else-if="error">Error : {{ error }}</p>
    <div v-else class="flex flex-col items-center justify-center space-y-2">
      <img :src="data.sprites.front_default" class="h-48 w-48" />
      <h1 class="text-xl font-semibold capitalize text-slate-800">
        {{ data.name }}
      </h1>
      <div class="flex space-x-3">
        <div
          v-for="elem in data.types"
          class="rounded-full bg-neutral-400/40 px-4 py-0.5 shadow"
        >
          <span class="text-sm font-medium capitalize">{{
            elem.type.name
          }}</span>
        </div>
      </div>
      <button
        @click.prevent="teamStore.addPokemon(data)"
        class="inline-flex items-center rounded-full bg-sky-600 px-2 py-0.5 text-sm font-medium text-white"
      >
        Add to team
      </button>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { PokemonSprite } from "~/types/sprite";
import { useTeamStore } from "~/store/team";

interface CardProps {
  id: number;
  name: string;
  url: string;
}

const props = defineProps<CardProps>();

const teamStore = useTeamStore();

const { pending, data, error } = await useLazyFetch<PokemonSprite>(
  `https://pokeapi.co/api/v2/pokemon-form/${props.id}`
);
</script>
