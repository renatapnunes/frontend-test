import styled from "styled-components";

// loader code adapted from: https://codepen.io/redlabor/pen/nzwPGv
export const Loading = styled.div`
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  padding: 20%;

  h2 {
    color: #ccc;
    margin: 0;
    font: 0.8em verdana;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    width: 0.6em;
    height: 0.6em;
    margin: 0.19em;
    background: #007db6;
    border-radius: 0.6em;
    animation: loading 1s infinite alternate;
  }

  span:nth-of-type(2) {
    background: #3d5a80;
    animation-delay: 0.2s;
  }

  span:nth-of-type(3) {
    background: #98c1d9;
    animation-delay: 0.4s;
  }

  span:nth-of-type(4) {
    background: #e0fbfc;
    animation-delay: 0.6s;
  }

  span:nth-of-type(5) {
    background: #e0fbfc;
    animation-delay: 0.8s;
  }

  span:nth-of-type(6) {
    background: #98c1d9;
    animation-delay: 1s;
  }

  span:nth-of-type(7) {
    background: #3d5a80;
    animation-delay: 1.2s;
  }

  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
