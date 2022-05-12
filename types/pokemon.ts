import { version } from "os";

export type Pokemon = {
  abilities: Abilities[];
  forms: Form[];
  height: number;
  id: number;
  moves: Moves[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
};

export type Ability = {
  name: string;
  url: string;
};

export type Abilities = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

export type Form = {
  name: string;
  url: string;
};

export type Move = {
  name: string;
  url: string;
};

export type Moves = {
  move: Move;
  version_group_details: Version[];
};

export type Version = {
  level_learned_at: number;
};

export type Species = {
  name: string;
  url: string;
};

export type DreamWorld = {
  front_default: string;
  front_female?: any;
};

export type Home = {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type OfficialArtwork = {
  front_default: string;
};

export type Other = {
  dream_world: DreamWorld;
  home: Home;
};

export type Sprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
};

export type Stat2 = {
  name: string;
  url: string;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: Stat2;
};

export type Type2 = {
  name: string;
  url: string;
};

export type Type = {
  slot: number;
  type: Type2;
};
