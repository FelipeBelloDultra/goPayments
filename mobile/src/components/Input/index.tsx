import React, { forwardRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  containerStyle?: {};
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { icon, containerStyle = {}, ...rest },
  ref,
) => {
  return (
    <Container style={containerStyle}>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#8D99AE"
        {...rest}
      />

      <Icon name={icon} size={25} color="#eee" />
    </Container>
  );
};

export default forwardRef(Input);
