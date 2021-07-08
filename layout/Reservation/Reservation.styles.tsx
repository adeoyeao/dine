import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 6rem 10vw;
    background-image: url("/images/homepage/ready-bg-mobile@2x.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    align-items: center;

    @media screen and (min-width: 768px) {
        background-image: url("/images/homepage/ready-bg-tablet@2x.jpg");
        background-size: cover;
        background-position: center;
    }

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        background-image: url("/images/homepage/ready-bg-desktop@2x.jpg");
        background-size: cover;
        background-position: center;
    }
`

export default StyledSection