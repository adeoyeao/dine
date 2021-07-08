import styled from "styled-components";

export const EventImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${(props) =>
    `url("/images/homepage/${props.event}-mobile@2x.jpg")`};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 5;

  @media screen and (min-width: 768px) {
    height: 360px;
    background-image: ${(props) =>
      `url("/images/homepage/${props.event}-tablet@2x.jpg")`};
    background-size: cover;
    background-position: center;
  }

  @media screen and (min-width: 1200px) {
    width: 540px;
    height: 600px;
    background-image: ${(props) =>
      `url("/images/homepage/${props.event}-desktop@2x.jpg")`};
    background-size: cover;
    background-position: center;
  }
`;

export const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;

  .wrapper_events--info {
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    .wrapper_events {
      display: flex;
      flex-direction: column;
      grid-gap: 2rem;
      justify-items: center;
      align-items: center;

      .wrapper_events--info {
        p {
          width: 75%;
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;

    .wrapper_events {
      display: flex;
      flex-direction: column-reverse;
      align-items: start;

      .wrapper_events--info {
        justify-items: unset;
        align-items: unset;

        p {
          width: unset;
        }
      }
    }
  }
`;

export const EventButton = styled.button<{ isActive: boolean }>`
  text-transform: uppercase;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  appearance: none;
  font-weight: 900;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.beaver: theme.colors.mirage)};
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  position: relative;
  transition: color 0.5s linear;

  &::after {
    content: '';
    width: ${(props) => (props.isActive ? `3rem` : `2px`)};
    height: 2px;
    background: ${({ theme }) => theme.colors.beaver};
    position: absolute;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s linear;
    bottom: -8px;
  }

  @media screen and (min-width: 1200px) {
      display: grid;
      align-items: center;
      &::after {
          display: none;
      }
      &:before {
        content: '';
        width: ${(props) => (props.isActive ? `15rem` : `2px`)};
        height: 2px;
        background: ${({ theme }) => theme.colors.beaver};
        position: absolute;
        display: block;
        left: -17rem;
        transition: width 0.5s linear;
      }
  }
`;

export const EventButtons = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    grid-gap: 3rem;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: start;
    grid-gap: 1.5rem;
  }
`;
