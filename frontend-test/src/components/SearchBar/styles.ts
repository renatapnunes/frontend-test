import styled from "styled-components";

export const SearchBarContainer = styled.div`
  align-items: center;
  background-color: rgba(41, 50, 65, 0.7);
  border-radius: 3rem;
  display: flex;
  flex-flow: row wrap;
  height: 5rem;
  justify-content: space-between;
  margin-bottom: 10rem;
  padding: 0rem 1rem;

  select,
  input,
  button {
    background-color: rgba(237, 242, 244, 0.8);
    border: none;
    font-family: "Quicksand", sans-serif;
    font-size: 1rem;
    height: 3rem;
    outline: 0;
  }

  select {
    border-radius: 3rem 0rem 0rem 3rem;
    padding-left: 0.5rem;
    width: 7rem;
  }

  input {
    padding-left: 0.5rem;
    width: 18rem;
  }

  button {
    border-radius: 0rem 3rem 3rem 0rem;
    font-weight: 600;
    width: 7rem;
  }

  @media (max-width: 768px) {
    height: 3.3rem;
    margin-bottom: 6rem;
    padding: 0rem 0.5rem;

    select,
    input,
    button {
      font-size: 0.8rem;
      height: 2.5rem;
    }

    select {
      padding-left: 0.2rem;
      width: 5.5rem;
    }

    input {
      padding-left: 0.2rem;
      width: 10rem;
    }

    button {
      width: 5.5rem;
    }
  }
`;
