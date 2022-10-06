import sootballs from "@/assets/sootballs.png";
import SearchBar from "@/components/SearchBar";
import SearchList from "@/components/SearchList";

function Search() {
  return (
    <div>
      <h1>Search</h1>
      <img src={sootballs} alt="Sootballs" />
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default Search;
