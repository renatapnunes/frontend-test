import styled from "styled-components";

export const LocationCard = styled.li`
  background-color: rgba(41, 50, 65, 0.7);
  align-items: center;
  border-radius: 0.8rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  list-style-type: none;
  margin-top: 3rem;
  padding: 0rem 5rem;
  width: 80rem;

  @media (max-width: 1600px) {
    flex-flow: column wrap;
    width: 30rem;
  }

  @media (max-width: 768px) {
    flex-flow: column wrap;
    margin-top: 1rem;
    padding: 0rem;
    width: 20rem;
  }
`;

export const InfoContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  height: 15rem;
  width: 20rem;

  h2 {
    color: #edf2f4;
    padding-left: 2rem;
  }

  span {
    color: #8d99ae;
    padding-left: 4rem;
  }

  @media (max-width: 768px) {
    height: 8rem;
    padding-top: 1rem;
    width: 15rem;
    h2 span {
      padding: 0rem;
    }
  }
`;

export const FilmsContainer = styled.div`
  h5 {
    color: #8d99ae;
    margin-top: 1rem;
  }

  ul {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin-top: 0rem;
    ul {
      scale: 0.9;
    }
  }
`;
