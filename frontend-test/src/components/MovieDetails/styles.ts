import styled from "styled-components";

export const MovieDetails = styled.div`
  align-items: center;
  display: flex;
  height: 85vh;
  justify-content: center;
  width: 100%;
`;

export const DetailsCard = styled.div`
  align-items: center;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 2rem #171717, -1rem -1rem 2rem #171717;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 70vh;
  width: 80%;

  img {
    border-radius: 1rem;
    height: 100%;
    width: 60%;

    object-fit: cover;
    mask-image: linear-gradient(to right, transparent 6%, black 80%);
    -webkit-mask-image: linear-gradient(to right, transparent 6%, black 80%);
  }

  @media (max-width: 1095px) {
    flex-flow: column wrap;

    /* img {
      border-radius: 1rem;
      height: 80%;
      width: 50%;
    } */
  }

  @media (max-width: 945px) {
    img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    img {
      border-radius: 1rem;
      height: 40%;
      width: 100%;

      object-fit: cover;
      mask-image: linear-gradient(to bottom, transparent 6%, black 80%);
      -webkit-mask-image: linear-gradient(to bottom, transparent 6%, black 80%);
    }
  }
`;

export const InfoContainer = styled.div`
  align-items: flex-start;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: center;
  padding: 5rem 2rem 5rem 5rem;
  width: 40%;

  h3 {
    color: #8d99ae;
    margin-top: 0.5rem;
  }

  p {
    margin: 4rem 0rem;
  }

  span {
    color: #8d99ae;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 1420px) {
    p {
      font-size: 0.9rem;
      margin: 2rem 0rem;
    }

    span {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 1095px) {
    padding: 1rem;
  }

  @media (max-width: 945px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    height: 60%;
    justify-content: space-evenly;
    padding: 0.5rem;
    padding-left: 0.8rem;
    width: 100%;

    h1 {
      font-size: 1.2rem;
      margin-top: 0rem;
    }

    h3 {
      font-size: 0.8rem;
      margin-top: 0rem;
    }

    p {
      font-size: 0.8rem;
      margin: 0.5rem 0rem;
    }

    span {
      margin-bottom: 0rem;
    }
  }
`;
