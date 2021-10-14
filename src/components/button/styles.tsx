import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Clickable = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: #141A2ADF;
  width: 85%;
  border-width: 1px;
  border-color: #43578a;
`;

export const Text = styled.Text`
  text-align: center;
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;
