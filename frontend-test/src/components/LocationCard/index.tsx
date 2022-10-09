import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/hooks";
import { Location } from "@/utils/types";

import * as S from "./styles";

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
    <S.LocationCard>
      <S.InfoContainer>
        <h2>{name}</h2>
        <span>
          Terrain: <strong>{terrain}</strong>
        </span>
        <span>
          Climate: <strong>{climate}</strong>
        </span>
      </S.InfoContainer>
      <S.FilmsContainer>
        <h5>Film that belongs</h5>
        <ul>
          {getMovies(films).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </S.FilmsContainer>
    </S.LocationCard>
  );
}

export default LocationCard;
