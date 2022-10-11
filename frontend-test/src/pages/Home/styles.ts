import styled from "styled-components";

// const imageUrl = new URL("public/totoro.jpg", import.meta.url);
// const backgroundUrl = `${imageUrl.origin}${imageUrl.pathname}`;

// interface ContainerProps {
//   backgroundImageUrl: string;
// }

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
  background-image: url("https://c.wallhere.com/photos/63/0d/Hayao_Miyazaki_My_Neighbor_Totoro_Totoro_anime-237016.jpg!d");
  /* background-image: url("src/assets/totoro.jpg"); */
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
