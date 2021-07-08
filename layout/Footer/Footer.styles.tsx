import styled from 'styled-components'

const StyledFooter = styled.footer`
    padding: 6rem 10vw;
    background: ${({theme}) => theme.colors.cod};
    display: flex;
    flex-direction: column;
    grid-gap: 4rem;
    align-items: center;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        align-items: start;

        div {
            align-items: start;

            &:nth-of-type(3) {
                grid-column: 2/3;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 0.5fr 1fr 1fr;
        div:nth-of-type(3) {
            grid-column: unset;
        }
    }
`

export default StyledFooter