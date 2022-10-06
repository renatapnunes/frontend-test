import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/hooks";
import { Location } from "@/utils/types";

type Props = {
  location: Location;
};

function LocationCard({ location }: Props) {
  const { name, terrain, climate, films } = location;

  const { movies } = useAppSelector(state => state.list);

  const getMovies = (urls: string[]) => {
    const ids = urls.map(url => url.slice(-36));

    return movies?.filter(movie => ids.includes(movie.id));
  };

  return (
    <li>
      <div>
        <h3>{name}</h3>
        <span>
          Terrain: <strong>{terrain}</strong>
        </span>
        <span>
          Climate: <strong>{climate}</strong>
        </span>
      </div>
      <div>
        <h5>Film that belongs</h5>
        <ul>
          {getMovies(films).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </li>
  );
}

export default LocationCard;
