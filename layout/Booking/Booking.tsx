import StyledSection from "./Booking.styles";
import { useRouter } from "next/router";
import { Logo, Text, Button, Wrapper, Form } from "components";
import theme from "theme";

const Booking = () => {
  const router = useRouter();
  const handleClick = () => router.push("/");

  return (
    <StyledSection>
        <Wrapper>
        <Logo logoSize="small" />
        <Text textType="h1" color={theme.colors.white} text="Reservations" />
        <Text
          textType="p"
          color={theme.colors.white}
          text="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."
        />
        <Button
          buttonType="dark"
          isActive
          text="Go Back"
          onClick={handleClick}
        />
        </Wrapper>
        <Form />
    </StyledSection>
  );
};

export default Booking;
