import styled from "styled-components";

export const About = styled.div`
  background-image: url("src/assets/spirited-away.jpg");
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 85vh;
  padding: 8rem 12rem;
  width: 100%;

  p {
    margin-top: 1rem;
    width: 32%;
  }

  h6 {
    color: #8d99ae;
    margin-top: 2rem;
  }

  @media (max-width: 1800px) {
    background-position: center;
    padding: 8rem 12rem;

    p {
      font-size: 0.85rem;
      width: 70%;
    }
  }

  @media (max-width: 768px) {
    background-position: center;
    padding: 1rem;

    p {
      font-size: 0.85rem;
      width: 90%;
    }
  }
`;
