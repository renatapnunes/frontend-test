// import sootballs from "@/assets/sootballs.png";
import sootballs from "@/assets/sootballs.png";
import SearchBar from "@/components/SearchBar";
import SearchList from "@/components/SearchList";

import * as S from "./styles";

function Search() {
  return (
    <S.Search>
      <SearchBar />
      <S.Sootballs src={sootballs} alt="sootballs" />
      <SearchList />
    </S.Search>
  );
}

export default Search;
