import styled from "styled-components";

export const Home = styled.div`
  background-color: #050102;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  font-family: "Quicksand", sans-serif;
  justify-content: space-evenly;
`;

export const SearchBar = styled.div`
  align-items: center;
  background-color: #050102;
  background-image: url("src/assets/totoro.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column wrap;
  font-family: "Quicksand", sans-serif;
  height: 50rem;
  justify-content: end;
  width: 100%;

  @media (max-width: 768px) {
    height: 35rem;
  }
`;
