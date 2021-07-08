import StyledSection from './Reservation.styles'
import { Text, Button } from 'components';
import { useRouter } from 'next/router'
import { bookTable } from 'utils';
import theme from 'theme';

const Reservation = () => {
    const router = useRouter()

    return (
        <StyledSection>
            <Text 
            textType='h2'
            color={theme.colors.white}
            text='Ready to make a reservation?'
            />
            <Button 
            buttonType='dark'
            text='Book a Table'
            isActive
            onClick={() => bookTable(router)}
            />
        </StyledSection>
    )
}

export default Reservation;