import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const OverlayPanel = styled.TouchableWithoutFeedback``;

export const Container = styled.View`
  height: ${Dimensions.get('window').height - 128}px;
`;

export const Scrollable = styled.ScrollView`
  flex: 1;
`;

export const SafeKeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #117031;
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
`;