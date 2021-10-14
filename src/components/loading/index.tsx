import React, { Fragment, FunctionComponent } from 'react';
import { Center, Message, Spinner } from './styles';

export interface LoadingProps { }
 
export const Loading: FunctionComponent<LoadingProps> = () => {
  return (
    <Fragment>
      <Center>
        <Spinner size="large" color="#141A2A"/>
        <Message>Estamos processando seu pedido, aguarde :)</Message>
      </Center>
    </Fragment>
  );
}
