import { CardImage, CardTextWrapper, CardDivider, StyledCard } from "./Card.styles"
import { Text, Button } from "components"
import theme from "theme"

const Card = (props) => {
    return (
        <StyledCard>
            <CardImage icon={props.icon} col={props.col}/>
            <CardTextWrapper col={props.col}>
                <CardDivider />
                <Text 
                    textType='h2'
                    text={props.heading}
                    color={theme.colors.ebony}
                />
                <Text 
                    textType='p'
                    text={props.text}
                    color={theme.colors.ebony}
                />
            </CardTextWrapper>
        </StyledCard>
    )
}

export default Card