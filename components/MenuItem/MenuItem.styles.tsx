import styled from 'styled-components'

export const MenuImage = styled.div`
    width: 100%;
    height: 245px;

    background-image: ${(props) => `url("/images/homepage/${props.item}-mobile@2x.jpg")`};
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 768px) {
        width: 8rem;
        height: 4.5rem;

        background-image: ${(props) => `url("/images/homepage/${props.item}-desktop-tablet@2x.jpg")`};
        background-size: cover;
        background-position: center;
    }
`

export const MenuTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 0.5rem;

    @media screen and (min-width: 768px) {
        h3, p {
            text-align: left !important;
        }
    }
`

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    width: 100%;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        grid-gap: 2rem;
    }
`