import styled from "styled-components";

export const CardImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${(props) =>
    `url('/images/homepage/${props.icon}-mobile@2x.jpg')`};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 360px;
    background-image: ${(props) =>
      `url('/images/homepage/${props.icon}-tablet@2x.jpg')`};
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    height: 720px;
    background-image: ${(props) =>
      `url('/images/homepage/${props.icon}-desktop@2x.jpg')`};
    background-size: cover;
    background-position: center;
    grid-column: ${(props) => (props.col === "left" ? "1/2" : "2/3")};
    grid-row: 1/2;
  }
`;

export const CardTextWrapper = styled.div`
  display: flex;
  grid-gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  @media screen and (min-width: 1200px) {
    align-items: start;
    grid-column: ${(props) => (props.col === "left" ? "2/3" : "1/2")};
    grid-row: 1/2;
  }
`;

export const CardDivider = styled.div`
  width: 70px;
  height: 7px;
  background-image: ${(props) => `url('/images/patterns/pattern-divide.svg')`};
  background-size: cover;
  background-position: center;
`;

export const StyledCard = styled.div`
  background-color: transparent;
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`;
