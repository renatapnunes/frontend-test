import { useState } from "react";
import { useNavigate } from "react-router";

import { useAppDispatch } from "@/hooks";
import { setFilter } from "@/redux/sliceList";

function SearchBar() {
  const [category, setCategory] = useState<string>("films");
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setFilter({ category, text }));
    setText("");
    navigate("/search");
  };

  return (
    <div>
      <h1>Search Bar</h1>
      <div>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="films">Movie</option>
          <option value="people">Character</option>
          <option value="locations">Place</option>
        </select>
        <input
          value={text}
          type="text"
          placeholder="Type to search"
          onChange={e => setText(e.target.value)}
        />
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
