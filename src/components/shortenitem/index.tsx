import React, { Fragment, FunctionComponent } from 'react';
import { Feather } from '@expo/vector-icons';

import { 
  ClipboardButton,
  Container,
  Information,
  OriginalUrl,
  ShortenUrl,
  Title 
} from './styles';
import { GestureResponderEvent } from 'react-native';

export interface ShortenItemProps {
  title: string,
  originalUrl: string,
  shortenUrl: string,
  onCopyUrl: (e: GestureResponderEvent) => void
}

export const ShortenItem: FunctionComponent<ShortenItemProps> = (props: ShortenItemProps) => {
  return (
    <Fragment>
      <Container>
        <Information>
          <Title numberOfLines={2}>
            <Feather name="home" size={20} color="#182b61" /> {props.title}
          </Title>
          <OriginalUrl numberOfLines={2}>
            <Feather name="link" size={16} color="#182b61" /> {props.originalUrl}
          </OriginalUrl>
          <ShortenUrl numberOfLines={1}>
            <Feather name="repeat" size={16} color="#182b61" /> {props.shortenUrl}
          </ShortenUrl>
        </Information>
        <ClipboardButton activeOpacity={0.5} onPress={props.onCopyUrl}>
          <Feather name="clipboard" size={20} color="#FFF" />
        </ClipboardButton>
      </Container>
    </Fragment>
  );
}
