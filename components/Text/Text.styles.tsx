import styled, {css} from 'styled-components';

export type TextProps = {
  textType: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  color: string;
  text: string;
};

const sharedStyles = (props: TextProps) => css`
    text-decoration: none !important;
    text-align: center;
    color: ${props.color};
    font-weight: 100;
    letter-spacing: 1.5px;

    @media screen and (min-width: 1200px) {
      text-align: left;
    }
`;

export const H1 = styled.h1<TextProps>`
  ${sharedStyles}
  font-size: ${({ theme }) => theme.fontSizes.large};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  }
`;

export const H2 = styled.h2<TextProps>`
  ${sharedStyles}
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 900;
  text-transform: capitalize;
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

export const H3 = styled.h3<TextProps>`
  ${sharedStyles};
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSizes.medium}
`;

export const H4 = styled.h4<TextProps>`
  ${sharedStyles}
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const Paragraph = styled.p<TextProps>`
  ${sharedStyles}
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;