import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/hooks";
import { People } from "@/utils/types";

type Props = {
  character: People;
};

function CharacterCard({ character }: Props) {
  const { name, gender, age, specie, films } = character;

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
          Specie: <strong>{specie?.name ? specie.name : "Unknown"}</strong>
        </span>
        <span>
          Gender: <strong>{gender}</strong>
        </span>
        <span>
          Age: <strong>{age}</strong>
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

export default CharacterCard;
