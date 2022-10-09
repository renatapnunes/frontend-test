import styled from "styled-components";

export const Search = styled.div`
  align-items: flex-start;
  background-color: #1a1a1c;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  min-height: 100vh;
  padding-left: 8rem;
  padding-top: 5rem;

  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0rem;
    padding-top: 3rem;
  }
`;

export const Sootballs = styled.img`
  height: 30rem;
  position: absolute;
  right: 2rem;
  top: 3rem;
  z-index: 2;

  @media (max-width: 1521px) {
    height: 15rem;
    right: 6rem;
  }

  @media (max-width: 1197px) {
    display: none;
  }
`;
