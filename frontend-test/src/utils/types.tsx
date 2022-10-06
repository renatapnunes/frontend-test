export type People = {
  id: string;
  name: string;
  gender: string;
  age: string;
  specie: {
    name: string;
  };
  films: string[];
};

export type Location = {
  id: string;
  name: string;
  terrain: string;
  climate: string;
  films: string[];
};

export type Movie = {
  id: string;
  title: string;
  description: string;
  release_date: number;
  running_time: number;
  rt_score: number;
  image: string;
  movie_banner: string;
  director: string;
  producer: string;
};
