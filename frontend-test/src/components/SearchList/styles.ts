import styled from "styled-components";

export const SearchList = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  font-family: "Quicksand", sans-serif;
  justify-content: center;
  margin-bottom: 3rem;
  width: 90%;

  h1,
  h4 {
    align-self: flex-start;
    color: #8d99ae;
    padding-left: 5rem;
  }

  ul {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    h1,
    h4 {
      padding-left: 0rem;
    }
  }
`;
