export const movie = {
  id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
  title: "Spirited Away",
  description:
    "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
  release_date: 2001,
  running_time: 124,
  rt_score: 97,
  image:
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
  movie_banner:
    "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
  director: "Hayao Miyazaki",
  producer: "Toshio Suzuki",
};

export const character = {
  id: "2409052a-9029-4e8d-bfaf-70fd82c8e48d",
  name: "Kiki",
  gender: "Female",
  age: "13",
  specie: {
    name: "Human",
  },
  films: [
    "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
  ],
};

export const movies = [
  {
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    title: "Kiki's Delivery Service",
    description:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    release_date: 1989,
    running_time: 102,
    rt_score: 96,
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
  },
  movie,
];
