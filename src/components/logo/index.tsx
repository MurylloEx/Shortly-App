import React, { FunctionComponent } from "react";
import { Container, Banner, Slogan } from './styles';

export interface LogoProps { }

export const Logo: FunctionComponent<LogoProps> = () => {
  return (
    <Container>
      <Banner 
        resizeMethod="resize" 
        resizeMode="contain" 
        source={require('../../assets/img/logo.png')} 
      />
      <Slogan>
        O encurtador mais funcional de todos!
      </Slogan>
    </Container>
  );
}
