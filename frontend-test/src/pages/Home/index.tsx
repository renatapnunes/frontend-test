import MovieList from "@/components/MovieList";
import SearchBar from "@/components/SearchBar";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default Home;
