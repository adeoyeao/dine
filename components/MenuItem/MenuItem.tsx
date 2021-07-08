import { StyledMenuItem, MenuImage, MenuTextWrapper } from "./MenuItem.styles";
import { Text } from "components";
import theme from "theme";

const MenuItem = (props) => {
  return (
    <StyledMenuItem>
      <MenuImage item={props.item} />
      <MenuTextWrapper>
        <Text textType="h3" text={props.head} color={theme.colors.white} />
        <Text textType="p" text={props.text} color={theme.colors.white} />
      </MenuTextWrapper>
    </StyledMenuItem>
  );
};

export default MenuItem;
