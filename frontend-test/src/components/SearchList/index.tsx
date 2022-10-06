import { useQuery } from "react-query";

import CharacterCard from "@/components/CharacterCard";
import LocationCard from "@/components/LocationCard";
import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/hooks";
import { Location, Movie, People } from "@/utils/types";

type List = Movie[] | People[] | Location[];

const BASE_URL = "https://ghibliapi.herokuapp.com/";

function SearchList() {
  const { filter } = useAppSelector(state => state.list);
  const { category, text } = filter;

  const { data, isFetching } = useQuery<List>("list", async () => {
    const request = await fetch(`${BASE_URL}${category}`);
    const response = await request.json();

    return response;
  });

  const getList = () => {
    if (data) {
      const list = [...data];

      if (category === "films") {
        return list.filter(movie =>
          (movie as Movie).title.toUpperCase().includes(text.toUpperCase())
        );
      }

      return list.filter(item =>
        (item as People | Location).name
          .toUpperCase()
          .includes(text.toUpperCase())
      );
    }

    return [];
  };

  return (
    <div>
      <h1>SearchList</h1>
      <h2>Search results for: {text}</h2>
      <div>
        {isFetching ? (
          <h5>Loading...</h5>
        ) : (
          <ul>
            {getList().map(item => {
              if (category === "films") {
                return <MovieCard key={item.id} movie={item as Movie} />;
              }
              if (category === "people") {
                return (
                  <CharacterCard key={item.id} character={item as People} />
                );
              }
              if (category === "locations") {
                return (
                  <LocationCard key={item.id} location={item as Location} />
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchList;
