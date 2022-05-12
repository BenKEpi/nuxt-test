<template>
  <main class="my-10">
    <Loading v-if="pending" />
    <p v-else-if="error">Error : {{ error }}</p>
    <div v-else>
      <div class="my-5 flex">
        <input
          v-model="search"
          placeholder="Search for a pokemon"
          class="mx-6 h-10 w-full rounded-md border-2 border-sky-600 bg-gray-50 pl-5 focus:border-sky-600 focus:ring-sky-600 sm:text-sm md:mx-0"
        />
      </div>
      <div
        class="mx-6 grid grid-cols-1 gap-8 md:mx-0 lg:grid-cols-2 xl:grid-cols-3"
      >
        <div v-for="pokemon in pokemonFilter" :key="pokemon.url">
          <Card
            :id="getIdByUrl(pokemon.url)"
            :name="pokemon.name"
            :url="pokemon.url"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { Pokedex, Result } from "~/types/pokedex";

const counter = useState<number>("counter", () => 0);
const search = useState<string>("search", () => "");
const { pending, data, error } = await useLazyAsyncData<Pokedex>(
  "fetchPokemons",
  () => $fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=40")
);

/**
 * When the user scroll to the bottom of the page, we fetch more pokemons
 */
const scrollFetch = () => {
  window.onscroll = async () => {
    const bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;

    if (bottomOfWindow && data.value.next !== null && counter.value !== 10) {
      counter.value++;
      const { data: list } = await useFetch<Pokedex>(data.value.next);
      data.value.next = list.value.next;
      data.value.results = [...data.value.results, ...list.value.results];
    }
  };
};

const pokemonFilter = computed(() => {
  return data.value.results.filter((pokemon: Result) => {
    return pokemon.name.match(search.value.toLocaleLowerCase());
  });
});

onMounted(() => {
  scrollFetch();
});

/**
 * Return the id of a pokemon by its url
 * @param url The url of the pokemon
 */
const getIdByUrl = (url: string): number => {
  const list = url.split("/");
  const id: number = parseInt(list[list.length - 2]);
  return id;
};
</script>
