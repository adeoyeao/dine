import React, { ReactElement, useState, useEffect } from "react";
import { useRouter } from 'next/router'

import { StyledSection } from "./LandingPage.styles";
import { Logo, Text, Button, Wrapper } from "components";
import theme from "theme";
import { bookTable } from 'utils'

const LandingPage = (): ReactElement => {
  const router = useRouter()

  return (
    <StyledSection>
      <Logo logoSize="small" />
        <Text 
        textType='h1'
        color={theme.colors.white}
        text='Exquisite dining since 1989'
        />
        <Text 
        textType='p'
        color={theme.colors.white}
        text='Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.'
        />
        <Button 
        buttonType='dark'
        text='Book a Table'
        isActive
        onClick={() => bookTable(router)}
        />
    </StyledSection>
  );
};

export default LandingPage;
