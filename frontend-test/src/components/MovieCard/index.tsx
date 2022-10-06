import { Link } from "react-router-dom";

import minutesToHours from "@/utils/convert-minutes-to-hours";
import { Movie } from "@/utils/types";

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  const { id, image, title, running_time, release_date, rt_score } = movie;
  return (
    <li>
      <Link to={`/details/${id}`}>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        {rt_score && running_time && (
          <span>
            ⭐ {+rt_score / 10} • {minutesToHours(+running_time)} •{" "}
            {release_date}
          </span>
        )}
      </Link>
    </li>
  );
}

export default MovieCard;
