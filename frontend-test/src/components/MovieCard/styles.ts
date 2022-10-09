import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCard = styled.li`
  border-radius: 0.8rem;
  list-style-type: none;
  margin: 2rem;
  width: 16rem;
`;

export const LinkCard = styled(Link)`
  display: flex;
  flex-flow: column wrap;
  font-family: "Quicksand", sans-serif;
  justify-content: space-evenly;
  text-decoration: none;
  transition-duration: 0.6s;

  img {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    height: 22rem;
    width: 16rem;
  }

  div {
    background-image: linear-gradient(to left top, #0d0d0d, #0d0d0d, #303236);
    border-radius: 0rem 0rem 0.8rem 0.8rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    height: 5rem;
    padding: 0.3rem 0rem 0rem 0.8rem;
  }

  p {
    color: #edf2f4;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
  }

  span {
    color: #8d99ae;
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0;
  }

  :hover {
    scale: 1.1;
    transition-duration: 0.6s;
  }
`;
