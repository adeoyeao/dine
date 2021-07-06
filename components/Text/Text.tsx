
import React, { ReactElement } from 'react';
import { H1, H2, H3, H4, Paragraph, TextProps } from './Text.styles';

const Text = (props: TextProps): ReactElement => {
  const TextOptions = {
    h1: <H1 {...props}>{props.text}</H1>,
    h2: <H2 {...props}>{props.text}</H2>,
    h3: <H3 {...props}>{props.text}</H3>,
    h4: <H4 {...props}>{props.text}</H4>,
    p: <Paragraph {...props}>{props.text}</Paragraph>,
  };

  return TextOptions[props.textType];
};

export default Text;