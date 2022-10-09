import styled from "styled-components";

export const MovieList = styled.div`
  align-items: center;
  background-color: #050102;
  display: flex;
  flex-flow: column wrap;
  font-family: "Quicksand", sans-serif;
  width: 90%;
`;

export const HeaderList = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-bottom: 4rem;
  padding-top: 6rem;
  width: 90%;

  h1 {
    align-self: flex-start;
    color: #8d99ae;
  }

  @media (max-width: 768px) {
    align-items: flex-end;
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 0rem;
    padding-top: 1rem;
    width: 90%;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const OrderBar = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  span {
    color: #8d99ae;
    margin: 0rem 1rem;
  }

  select {
    background-color: rgba(237, 242, 244, 0.8);
    border: none;
    border-radius: 3rem;
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
    height: 3rem;
    outline: 0;
    padding: 0rem 1rem;
  }

  @media (max-width: 768px) {
    span {
      font-size: 0.8rem;
    }

    select {
      font-size: 0.8rem;
      height: 1.8rem;
      margin-right: 1rem;
      padding: 0rem 0.5rem;
    }
  }
`;

export const CardMovieList = styled.ul`
  align-items: center;
  background-color: #050102;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;
