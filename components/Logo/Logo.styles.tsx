import styled, { css } from "styled-components";

export type LogoProps = {
  logoSize: "large" | "small";
};

const sharedStyles = css`
  background-image: url("/icons/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SmallLogo = styled.div`
  width: 80px;
  height: 32px;
  ${sharedStyles}
`;

export const LargeLogo = styled.div`
  width: 104px;
  height: 40px;
  ${sharedStyles}
`;
