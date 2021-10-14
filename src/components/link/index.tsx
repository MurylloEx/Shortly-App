import React, { Fragment, FunctionComponent } from 'react';
import { GestureResponderEvent } from 'react-native';
import { Clickable, Message } from './styles';

export interface LinkProps {
  message: string,
  onPress: (e: GestureResponderEvent) => void
}

export const Link: FunctionComponent<LinkProps> = ({ message, onPress }: LinkProps) => {
  return (
    <Fragment>
      <Clickable activeOpacity={0.7} onPress={onPress}>
        <Message>{message}</Message>
      </Clickable>
    </Fragment>
  );
}
