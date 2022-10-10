import MovieCard from "@/components/MovieCard";
import { useAppSelector } from "@/hooks";
import { People } from "@/utils/types";

import * as S from "./styles";

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
    <S.CharacterCard>
      <S.InfoContainer>
        <h2 data-testid="character-title">{name}</h2>
        <span>
          Specie: <strong>{specie?.name ? specie.name : "Unknown"}</strong>
        </span>
        <span>
          Gender: <strong>{gender}</strong>
        </span>
        <span>
          Age: <strong>{age}</strong>
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
    </S.CharacterCard>
  );
}

export default CharacterCard;
