<template>
  <Header />
  <TeamModal :show="modal" />
  <main
    class="mx-auto grid grid-cols-1 space-x-8 md:max-w-3xl md:grid-cols-3 xl:max-w-6xl xl:grid-cols-3"
  >
    <section class="col-span-2">
      <NuxtPage />
    </section>
    <section class="hidden md:col-span-1 md:block xl:inline-grid">
      <div class="fixed top-36">
        <Team />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useTeamStore } from "~/store/team";
import { PokemonSprite } from "./types/sprite";
import TeamModal from "./components/modals/TeamModal.vue";

const teamStore = useTeamStore();
const modal = useModal();

const getLocalTeam = (): void => {
  if (process.client) {
    let pokemons = localStorage.getItem("team");
    pokemons = JSON.parse(pokemons);

    const list: PokemonSprite[] = pokemons as any;
    list.forEach((pokemon) => {
      teamStore.addPokemon(pokemon);
    });
  }
};

onMounted(() => {
  getLocalTeam();
});
</script>
