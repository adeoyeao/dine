import { StyledSection } from './About.styles'
import { Card } from 'components'

const About = () => {
    return (
        <StyledSection>
            <Card 
            col='left'
            icon='enjoyable-place' 
            heading='Enjoyable place for all the family' 
            text='Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.'/>
            <Card 
            col='right'
            icon='locally-sourced' 
            heading='The most locally sourced food' 
            text='All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.'/>
        </StyledSection>
    )
}

export default About