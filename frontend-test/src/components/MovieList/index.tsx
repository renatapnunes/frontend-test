import { useEffect } from "react";
import { useQuery } from "react-query";

import MovieCard from "@/components/MovieCard";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setMovies, setOrder } from "@/redux/sliceList";
// import { sortFunctions } from "@/utils/sort-functions";
import { Movie } from "@/utils/types";

function MovieList() {
  const { order } = useAppSelector(state => state.list);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useQuery<Movie[]>(
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
    <div>
      {isFetching ? (
        <h5>Loading...</h5>
      ) : (
        <div>
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
          {/* <ul>
            {data &&
              sortFunctions[order as string](data)?.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </ul> */}
          <ul>
            {data &&
              data?.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieList;
