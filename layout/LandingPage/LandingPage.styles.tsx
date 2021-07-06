import styled from 'styled-components'

export const StyledSection = styled.section`
    height: 100vh;
    width: 100vw;
    min-height: 768px;
    background: url('/images/homepage/hero-bg-mobile@2x.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 3rem 10vw;

    @media screen and (min-width: 768px) {
        background: url('/images/homepage/hero-bg-tablet@2x.jpg');
        background-size: cover;
        background-position: center;
    }

    @media screen and (min-width: 1200px) {
        background: url('/images/homepage/hero-bg-desktop@2x.jpg');
        background-size: cover;
        background-position: center;

        align-items: start;

        p {
            width: 50%;
        }
    }
`
