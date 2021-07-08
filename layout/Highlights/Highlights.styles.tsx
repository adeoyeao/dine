import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 3rem 10vw;
    background: ${({theme}) => theme.colors.cod};

    @media screen and (min-width: 1200px) {
        padding: 8rem 10vw 3rem 10vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }
`

export default StyledSection