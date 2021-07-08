import { Text, Logo, Wrapper } from "components";
import theme from "theme";
import StyledFooter from "./Footer.styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Logo logoSize='large'/>
            <Wrapper>
                <Text 
                    textType='h4'
                    color={theme.colors.white}
                    text='Marthwaite, Sedbergh'
                />
                <Text 
                    textType='h4'
                    color={theme.colors.white}
                    text='Cumbria'
                />
                <Text 
                    textType='h4'
                    color={theme.colors.white}
                    text='+00 44 123 4567'
                />
            </Wrapper>
            <Wrapper>
                <Text 
                    textType='h4'
                    color={theme.colors.white}
                    text='OPEN TIMES'
                />
                <Text 
                    textType='h4'
                    color={theme.colors.white}
                    text='MON - FRI: 09:00 AM - 10:00 PM'
                />
                <Text 
                    textType='h4'
                    color={theme.colors.white}
                    text='SAT - SUN: 09:00 AM - 11:30 PM'
                />
            </Wrapper>
        </StyledFooter>
    )
}

export default Footer