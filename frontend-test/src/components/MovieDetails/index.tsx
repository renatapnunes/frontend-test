import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useAppSelector } from "@/hooks";
import minutesToHours from "@/utils/convert-minutes-to-hours";
import { Movie } from "@/utils/types";

import * as S from "./styles";

function MovieDetails() {
  const { id } = useParams();
  const { movies } = useAppSelector(state => state.list);
  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    const findMovie = movies.find((movie: Movie) => movie.id === id);
    setMovie(findMovie);
  }, [id, movies]);

  return (
    <S.MovieDetails>
      {movie && (
        <S.DetailsCard>
          <S.InfoContainer>
            <h1>{movie?.title}</h1>
            {movie?.rt_score && movie?.running_time && (
              <h3>
                ⭐ {+movie.rt_score / 10} •{" "}
                {minutesToHours(+movie.running_time)} • {movie.release_date}
              </h3>
            )}
            <p>{movie?.description}</p>
            <span>
              Director: <strong>{movie?.director}</strong>
            </span>
            <span>
              Producer: <strong>{movie?.producer}</strong>
            </span>
          </S.InfoContainer>
          <img src={movie?.movie_banner} alt="movie banner" />
        </S.DetailsCard>
      )}
    </S.MovieDetails>
  );
}

export default MovieDetails;
