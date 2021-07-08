import StyledSection from "./Highlights.styles";
import { CardTextWrapper, Text, CardDivider, MenuItem, Wrapper } from "components";
import theme from "theme";

const menuItems = {
    salmon: {
        title: 'Seared Salmon Fillet',
        about: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.'
    },
    beef: {
        title: 'Rosemary Filet Mignon',
        about: 'Our prime beef served to your taste with a delicious choice of seasonal sides.'
    },
    chocolate: {
        title: 'Summer Fruit Chocolate Mousse',
        about: 'Creamy mousse combined with summer fruits and dark chocolate shavings.'
    },
};

const Highlights = () => {
  return (
    <StyledSection>
      <CardTextWrapper>
        <CardDivider />
        <Text
          textType="h2"
          color={theme.colors.white}
          text="A few highlights from our menu"
        />
        <Text
          textType="p"
          color={theme.colors.white}
          text="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
        />
      </CardTextWrapper>
      <Wrapper>
        {Object.keys(menuItems).map((item) => (
          <MenuItem item={item} head={menuItems[item].title} text={menuItems[item].about} key={item} />
        ))}
      </Wrapper>
    </StyledSection>
  );
};

export default Highlights;
