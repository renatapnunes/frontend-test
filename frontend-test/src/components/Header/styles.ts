import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background: linear-gradient(
    242deg,
    rgba(31, 54, 104, 1) 0%,
    rgba(37, 69, 119, 1) 100%
  );
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  font-family: "Quicksand", sans-serif;
  height: 4rem;
  justify-content: space-between;
  opacity: 1;

  img {
    height: 4rem;
    margin-left: 1rem;
  }

  nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  h3 {
    margin-right: 3rem;
  }
`;

export const Navlink = styled(Link)`
  color: white;
  text-decoration: none;
  transition-duration: 0.5s;

  &:hover {
    color: #98c1d9;
    transition-duration: 0.5s;
  }
`;
