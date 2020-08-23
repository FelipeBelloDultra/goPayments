import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.Image`
  width: 100%;
  height: 350px;
`;

export const InformationContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 24px;
  background: transparent;
`;

export const WellcomeText = styled.Text`
  width: 250px;
  margin-top: 20px;
  font-size: 20px;
  line-height: 23px;
  color: #8d99ae;
  font-weight: 500;
  text-align: left;
`;

export const ButtonsGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CreateAccountButton = styled(RectButton)`
  flex: 1;
  background: #edf2f4;
  border-radius: 8px;
  height: 40px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: #2b2d42;
  font-size: 16px;
  font-weight: bold;
`;

export const LoginButton = styled(RectButton)`
  flex: 1;
  background: #edf2f4;
  border-radius: 8px;
  height: 40px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #2b2d42;
  font-size: 16px;
  font-weight: bold;
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordButtonText = styled.Text`
  color: #8d99ae;
  font-size: 16px;
  text-align: center;
`;
