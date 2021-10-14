import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-radius: 6px;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
  elevation: 4;
  background-color: white;
`;

export const Information = styled.View`
  flex: 1;
  padding: 6px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #182b61;
  margin-left: 10px;
`;

export const OriginalUrl = styled.Text`
  padding-top: 8px;
  font-size: 16px;
  color: #182b61;
  margin-left: 10px;
`;

export const ShortenUrl = styled.Text`
  font-size: 16px;
  color: #182b61;
  margin-left: 10px;
`;

export const ClipboardButton = styled.TouchableOpacity`
  width: 38px;
  height: 38px;
  border-radius: 48px;
  background-color: #141A2A;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;