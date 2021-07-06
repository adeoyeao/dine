import styled from "styled-components";

export const StyledSection = styled.section`

  margin: -3rem 10vw 3rem 10vw;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;

  @media screen and (min-width: 768px) {
    background-image: url('/images/patterns/pattern-curve-top-right.svg'), url('/images/patterns/pattern-curve-bottom-right.svg');
    background-position: 10vw 100px, 10vw 830px;
    background-repeat: no-repeat, no-repeat;
  }

  @media screen and (min-width: 1200px) {
      margin: -3rem 10vw;
      background-image: url('/images/patterns/pattern-curve-top-right.svg'), url('/images/patterns/pattern-curve-top-left.svg');
      background-position: left 250px, 10vw 800px;
      background-repeat: no-repeat, no-repeat;
  }
`;
