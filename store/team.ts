import { defineStore } from "pinia";
import { PokemonSprite } from "~/types/sprite";

type State = {
  team: PokemonSprite[];
};

export const useTeamStore = defineStore("team", {
  state: (): State => ({
    team: [],
  }),
  actions: {
    addPokemon(payload: PokemonSprite) {
      if (this.team.length <= 5) {
        this.team = [...this.team, payload];
        if (process.client) {
          localStorage.setItem("team", JSON.stringify(this.team));
        }
      }
    },
    deletePokemon(payload: number) {
      this.team = this.team.filter(
        (pokemon: PokemonSprite, index: number) => index !== payload
      );
      if (process.client) {
        localStorage.setItem("team", JSON.stringify(this.team));
      }
    },
  },
});
