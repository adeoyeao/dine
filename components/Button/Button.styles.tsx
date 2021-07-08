import styled, { css } from "styled-components";

export type ButtonProps = {
  buttonType: "light" | "dark";
  text: string;
  isActive: boolean;
  onClick: () => void;
};

const sharedStyles = (props: ButtonProps) => css`
  padding: 1rem 2rem;
  background: transparent;
  border-radius: 0;
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: 16rem;

  text-transform: uppercase;
  letter-spacing: 2px;

  border: ${(props) => props.buttonType === 'dark' ? `3px solid ${props.theme.colors.white}` : `3px solid ${props.theme.colors.cod}` };
  color: ${(props) => props.buttonType === 'dark' ? `${props.theme.colors.white}` : `${props.theme.colors.cod}` };
  opacity: ${(props) => props.isActive  ? `1` : `0.25` };

  &:hover {
      background: ${(props) => props.buttonType === 'dark' ? `${props.theme.colors.white}` : `${props.theme.colors.cod}` };
      color: ${(props) => props.buttonType === 'dark' ? `${props.theme.colors.cod}` : `${props.theme.colors.white}` };
      font-weight: bold;
  }
`;

export const DarkButton = styled.button`
  ${sharedStyles}
`;

export const LightButton = styled.button`
  ${sharedStyles}
`;
