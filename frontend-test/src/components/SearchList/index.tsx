import { useQuery } from "react-query";

import CharacterCard from "@/components/CharacterCard";
import Loading from "@/components/Loading";
import LocationCard from "@/components/LocationCard";
import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/hooks";
import { Location, Movie, People } from "@/utils/types";

import * as S from "./styles";

type List = Movie[] | People[] | Location[];

type objOptions = {
  [key: string]: string;
};

const BASE_URL = "https://ghibliapi.herokuapp.com/";

function SearchList() {
  const { filter } = useAppSelector(state => state.list);
  const { category, text } = filter;

  const fetchAPI = async (category: string) => {
    const request = await fetch(`${BASE_URL}${category}`);
    const response = await request.json();

    return response;
  };

  const { data, isLoading } = useQuery<List>(["list", category], () =>
    fetchAPI(category)
  );

  const categoryDisplayed: objOptions = {
    films: "Movies",
    people: "Character",
    locations: "Location",
  };

  const getList = () => {
    if (data) {
      const list = [...data];

      if (category === "films") {
        return list.filter(movie =>
          (movie as Movie)?.title.toUpperCase().includes(text.toUpperCase())
        );
      }

      return list.filter(item =>
        (item as People | Location)?.name
          .toUpperCase()
          .includes(text.toUpperCase())
      );
    }

    return [];
  };

  return (
    <S.SearchList>
      <h1>Search results for: {text}</h1>
      <h4>➤ Category: {categoryDisplayed[category]}</h4>
      <div>
        {isLoading ? (
          <Loading />
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
    </S.SearchList>
  );
}

export default SearchList;
