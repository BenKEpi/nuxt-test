export type Pokedex = {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};
