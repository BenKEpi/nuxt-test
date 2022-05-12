<template>
  <div class="mt-10">
    <Loading v-if="pending" />
    <p v-else-if="error">Erreur : {{ error }}</p>
    <div v-else class="mx-6 space-y-4 bg-slate-50 p-5 shadow md:mx-0">
      <!-- TOP -->
      <div class="flex items-center justify-between">
        <p class="text-2xl font-bold capitalize text-slate-900">
          {{ data.name }}
        </p>
        <div class="flex flex-col space-y-2">
          <button
            @click="convertState"
            class="rounded-full bg-sky-600 px-2 py-1 text-center text-sm font-medium text-white"
          >
            Add to Team
          </button>
          <NuxtLink
            to="/"
            class="rounded-full bg-red-600 px-2 py-1 text-center text-sm font-medium text-white"
            >Return to Pokedex</NuxtLink
          >
        </div>
      </div>
      <!-- HEAD DETAILS -->
      <div class="mt-5 grid grid-cols-1 items-center md:grid-cols-2">
        <!-- FIRST COLUMN -->
        <div class="flex flex-col items-center">
          <img :src="data.sprites.front_default" class="h-64 w-64" />
          <!-- TYPES -->
          <div class="flex space-x-3">
            <div
              v-for="type in data.types"
              :key="type.slot"
              class="rounded-full bg-neutral-400/40 px-4 py-0.5 shadow"
            >
              <span class="text-sm font-medium">{{ type.type.name }}</span>
            </div>
          </div>
        </div>
        <!-- SECOND COLUMN -->
        <div class="flex flex-col items-center space-y-3">
          <div v-for="stat in data.stats" class="flex w-52 justify-between">
            <p class="font-medium capitalize text-slate-800">
              {{ stat.stat.name }}
            </p>
            <p class="font-bold">{{ stat.base_stat }}</p>
          </div>
        </div>
      </div>
      <!-- FORMS -->
      <div class="">
        <p class="mb-4 text-xl font-medium leading-6 text-slate-800">Forms</p>
        <div class="-m-2 flex flex-wrap items-center justify-center">
          <div v-for="(value, key) in data.sprites">
            <div
              v-if="typeof value === 'string'"
              class="m-2 rounded-md bg-gray-100 shadow"
            >
              <img
                v-if="typeof value === 'string'"
                :src="value"
                class="h-32 w-32 object-fill"
              />
              <p class="pb-2 text-center text-sm font-medium capitalize">
                {{ key }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- ABILITIES -->
      <div class="py-4">
        <p class="mb-4 text-xl font-medium leading-6 text-slate-800">
          Abilities
        </p>
        <div class="flex space-x-3">
          <div v-for="value in data.abilities">
            <p
              class="rounded-full bg-gray-100 px-3 py-1 font-medium capitalize shadow"
            >
              {{ value.ability.name }}
            </p>
          </div>
        </div>
      </div>

      <!-- MOVES -->
      <div class="">
        <p class="mb-4 text-xl font-medium leading-6 text-slate-800">Moves</p>
        <div
          class="flex w-64 flex-col justify-start rounded-md bg-gray-100 shadow"
        >
          <div
            v-for="value in data.moves"
            class="flex justify-between px-5 py-2"
          >
            <p class="text-sm font-medium capitalize">
              {{ value.move.name }}
            </p>
            <p class="text-sm font-medium capitalize">
              {{ value.version_group_details[0].level_learned_at }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from "~/types/pokemon";
import { PokemonSprite } from "~/types/sprite";
import { useTeamStore } from "~/store/team";
import { Evolution } from "~/types/evolution";

const team = useTeamStore();
const route = useRoute();
const { pending, data, error } = await useLazyFetch<Pokemon>(
  `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
);

const convertState = (): void => {
  const pokemon: PokemonSprite = {
    id: data.value.id,
    name: data.value.name,
    sprites: data.value.sprites,
    types: data.value.types,
    pokemon: data.value.species,
  };
  team.addPokemon(pokemon);
};
</script>
