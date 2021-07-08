import {
  EventImage,
  EventCard,
  EventButtons,
  EventButton,
} from "./Event.styles";
import { Text, Button, Wrapper } from "components";
import { useState, ReactElement } from "react";
import theme from "theme";
import { bookTable } from "utils";
import { useRouter } from "next/router";

const menuItems = {
  "family-gathering": {
    about:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
  },
  "special-events": {
    about:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
  },
  "social-events": {
    about:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
  },
};

const Event = (): ReactElement => {
  const family_gathering = "family-gathering";
  const social_events = "social-events";
  const special_events = "special-events";
  const [event, setEvent] = useState<string>(family_gathering);

  const handleClick = (occasion) => {
    setEvent(occasion);
  };

  const router = useRouter();
  const formatter = (arg) => arg.replace("-", " ");

  return (
    <EventCard>
      <EventImage event={event} />
      <Wrapper className="wrapper_events">
        <EventButtons>
          <EventButton
            onClick={() => handleClick(family_gathering)}
            isActive={event == family_gathering}
          >
            {formatter(family_gathering)}
          </EventButton>
          <EventButton
            onClick={() => handleClick(social_events)}
            isActive={event == social_events}
          >
            {formatter(social_events)}
          </EventButton>
          <EventButton
            onClick={() => handleClick(special_events)}
            isActive={event == special_events}
          >
            {formatter(special_events)}
          </EventButton>
        </EventButtons>
        <Wrapper className="wrapper_events--info">
          <Text
            textType="h2"
            color={theme.colors.ebony}
            text={formatter(event)}
          />
          <Text
            textType="p"
            color={theme.colors.ebony}
            text={menuItems[event].about}
          />
          <Button
            buttonType="light"
            text="Book a Table"
            onClick={() => bookTable(router)}
            isActive
          />
        </Wrapper>
      </Wrapper>
    </EventCard>
  );
};

export default Event;
