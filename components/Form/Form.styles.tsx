import styled from "styled-components";
import theme from "theme";

const StyledForm = styled.form`
  width: 100%;
  height: 565px;
  background: white;
  box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  justify-content: space-evenly;

  .dates,
  .time {
      display: grid;
      grid-template-rows: 1fr 1fr;

      span {
          display: flex;
          grid-gap: 0.5rem;
          justify-content: center;
      }
  }

  button,
  h3 {
      align-self: center;
      text-align: center;
  }

  @media screen and (min-width: 768px) {
      padding: 3rem;
    height: 545px;
    .dates,
    .time {
        display: flex;
        justify-content: space-between;
        align-items: center;
  
        span {
            display: flex;
            grid-gap: 2rem;
        }
    }
  }

  @media screen and (min-width: 1200px) {
    height: 580px;
  }
`;

const StyledInput = styled.input<{ isActive: boolean; isValid: boolean }>`
  padding: 0.5rem;
  position: relative;
  appearance: none;
  outline: none;
  border: none;
  display: block;
  min-width: 4rem;

  @media screen and (min-width: 768px) {
      min-width: 5rem;
  }

  ${({ theme, isValid, isActive }) => {
    if (!isValid) {
      return `
                border-bottom: 1px solid ${theme.colors.red};
                color: ${theme.colors.red};
                &::after {
                    content: 'This field is required';
                    font-size: ${theme.fontSizes.extraSmall};
                    display: block;
                    position: absolute;
                    left: 0;
                    bottom: -4px;
                }
            `;
    }
    if (!isActive) {
      return `
                border-bottom: 1px solid ${theme.colors.ebony};
                color: ${theme.colors.ebony};
            `;
    }
    return `
        border-bottom: 1px solid ${theme.colors.cod};
        color: ${theme.colors.cod};
        `;
  }}
`;

export { StyledForm, StyledInput };
