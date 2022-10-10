import minutesToHours from "@/utils/convert-minutes-to-hours";
import { Movie } from "@/utils/types";

import * as S from "./styles";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  const { image, title, running_time, release_date, rt_score } = movie;

  return (
    <S.MovieCard>
      {}
      <S.LinkCard to={`/details`} state={movie}>
        <img src={image} alt={title} />
        <div>
          <p data-testid="movie-title">{title}</p>
          {rt_score && running_time && (
            <span data-testid="movie-infos">
              ⭐ {+rt_score / 10} • {minutesToHours(+running_time)} •{" "}
              {release_date}
            </span>
          )}
        </div>
      </S.LinkCard>
    </S.MovieCard>
  );
}

export default MovieCard;
