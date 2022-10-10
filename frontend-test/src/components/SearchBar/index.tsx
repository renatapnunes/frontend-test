import { useState } from "react";
import { useNavigate } from "react-router";

import { useAppDispatch } from "@/hooks";
import { setFilter } from "@/redux/sliceList";

import * as S from "./styles";

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
    <S.SearchBarContainer>
      <select
        value={category}
        data-testid="search-bar-select"
        onChange={e => setCategory(e.target.value)}
      >
        <option value="films">Movie</option>
        <option value="people">Character</option>
        <option value="locations">Place</option>
      </select>
      <input
        value={text}
        type="text"
        placeholder="Type to search"
        data-testid="search-bar-input"
        onChange={e => setText(e.target.value)}
      />
      <button
        type="button"
        disabled={text ? false : true}
        data-testid="search-bar-button"
        onClick={handleClick}
      >
        🔎 Search
      </button>
    </S.SearchBarContainer>
  );
}

export default SearchBar;
