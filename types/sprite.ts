export interface PokemonSprite {
  id: number;
  name: string;
  pokemon: Pokemon;
  sprites: Sprites;
  types: Type[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Type {
  slot: number;
  type: TypeDetails;
}

export interface TypeDetails {
  name: string;
  url: string;
}
