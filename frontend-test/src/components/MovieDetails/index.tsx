import { useLocation } from "react-router";

import minutesToHours from "@/utils/convert-minutes-to-hours";

import * as S from "./styles";

function MovieDetails() {
  const movie = useLocation().state;

  return (
    <S.MovieDetails>
      {movie && (
        <S.DetailsCard>
          <S.InfoContainer>
            <h1 data-testid="movie-title-details">{movie?.title}</h1>
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
