import React, { ReactElement } from "react";
import { DarkButton, LightButton, ButtonProps } from './Button.styles'

const Button = (props: ButtonProps): ReactElement => {
    const ButtonOptions = {
      dark: <DarkButton {...props}>{props.text}</DarkButton>,
      light: <LightButton {...props}>{props.text}</LightButton>,
    };
  
    return ButtonOptions[props.buttonType];
  };
  
  export default Button;