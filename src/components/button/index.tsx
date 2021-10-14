import React, { Fragment, FunctionComponent } from "react";
import { GestureResponderEvent } from "react-native";
import { Feather } from '@expo/vector-icons';

import { Clickable, Container, Text } from "./styles";

export interface ButtonProps {
  text: string,
  onPress: (e: GestureResponderEvent) => void
}

export const Button: FunctionComponent<ButtonProps> = ({ text, onPress }: ButtonProps) => {
  return (
    <Fragment>
      <Container>
        <Clickable 
          activeOpacity={0.7} 
          onPress={(e) => onPress(e)}>
          <Text>
            <Feather name="link" size={18} color="#FFF" /> {text}
          </Text>
        </Clickable>
      </Container>
    </Fragment>
  );
}
