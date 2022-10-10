import { useEffect } from "react";
import { useQuery } from "react-query";

import Loading from "@/components/Loading";
import MovieCard from "@/components/MovieCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setMovies, setOrder } from "@/redux/sliceList";
import { sortFunctions } from "@/utils/sort-functions";
import { Movie } from "@/utils/types";

import * as S from "./styles";

function MovieList() {
  const { order } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery<Movie[]>(
    "movies",
    async () => {
      const request = await fetch("https://ghibliapi.herokuapp.com/films");
      const response = await request.json();

      return response;
    },
    {
      staleTime: 30000 * 60, // 30 minutes
    }
  );

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data));
    }
  }, [data, dispatch]);

  return (
    <S.MovieList>
      <S.HeaderList>
        <h1 data-testid="home-title">All movies</h1>
        <S.OrderBar>
          <span>Order by:</span>
          <select
            value={order}
            onChange={e => dispatch(setOrder(e.target.value))}
          >
            <option value="az">Alphabetical A-Z</option>
            <option value="za">Alphabetical Z-A</option>
            <option value="rating">Higher Rating</option>
            <option value="recent">Most Recent</option>
            <option value="runtime">Longer Runtime</option>
          </select>
        </S.OrderBar>
      </S.HeaderList>
      {isLoading ? (
        <Loading />
      ) : (
        <S.CardMovieList>
          {data &&
            sortFunctions(order, data)?.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </S.CardMovieList>
      )}
    </S.MovieList>
  );
}

export default MovieList;
