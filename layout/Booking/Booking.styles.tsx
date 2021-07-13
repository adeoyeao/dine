import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 6rem 10vw;
    height: 1150px;
    background-image: url("/images/booking/hero-bg-mobile@2x.jpg");
    background-size: 100% 50%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    justify-content: start;
    align-items: center;

    @media screen and (min-width: 768px) {
        height: 1000px;
        background-image: url("/images/booking/hero-bg-tablet@2x.jpg");
        background-size: 100% 60%;
        background-repeat: no-repeat;
    }

    @media screen and (min-width: 1200px) {
        padding: 10rem 10vw;
        background-image: url("/images/booking/hero-bg-desktop@2x.jpg"), url("/images/patterns/pattern-curve-bottom-right.svg"), url("/images/patterns/pattern-lines.svg");
        background-size: 100% 60%, 100%, 10%;
        background-position: top, -25vw bottom, center 85vh;
        background-repeat: no-repeat;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: start;
    }
`

export default StyledSection