import { useQuery } from "react-query";
import { useParams } from "react-router";

import minutesToHours from "@/utils/convert-minutes-to-hours";
import { Movie } from "@/utils/types";

function MovieDetails() {
  const { id } = useParams();

  const { data, isFetching } = useQuery<Movie>("movie", async () => {
    const request = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
    const response = await request.json();

    return response;
  });

  return (
    <div>
      <h1>Movie Details</h1>
      {isFetching ? (
        <h5>Loading...</h5>
      ) : (
        <div>
          <h2>{data?.title}</h2>
          {data?.rt_score && data?.running_time && (
            <span>
              ⭐ {+data.rt_score / 10} • {minutesToHours(+data.running_time)} •{" "}
              {data.release_date}
            </span>
          )}
          <p>{data?.description}</p>
          <span>
            Director: <strong>{data?.director}</strong>
          </span>
          <span>
            Producer: <strong>{data?.producer}</strong>
          </span>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
