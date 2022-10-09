import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";

import * as S from "./styles";

function Home() {
  return (
    <S.Home>
      <S.SearchBar>
        <SearchBar />
      </S.SearchBar>
      <MovieList />
    </S.Home>
  );
}

export default Home;
