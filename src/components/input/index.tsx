import React, { FunctionComponent, useState } from 'react';
import { Container, TextInput } from './styles';

export type TextChangeCallback = (t: string) => void;

export interface InputProps {
  placeholder: string,
  onTextChange: TextChangeCallback
}
 
export const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  function inputChanged(text: string){
    setInputValue(text);
    props.onTextChange(text);
  }

  return ( 
    <Container>
      <TextInput 
        value={inputValue} 
        placeholder={props.placeholder} 
        onChangeText={ inputChanged } 
      />
    </Container>
  );
}
