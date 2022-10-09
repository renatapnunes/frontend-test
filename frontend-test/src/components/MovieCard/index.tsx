import minutesToHours from "@/utils/convert-minutes-to-hours";
import { Movie } from "@/utils/types";

import * as S from "./styles";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  const { id, image, title, running_time, release_date, rt_score } = movie;

  return (
    <S.MovieCard>
      {}
      <S.LinkCard to={`/${id}`}>
        <img src={image} alt={title} />
        <div>
          <p>{title}</p>
          {rt_score && running_time && (
            <span>
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
