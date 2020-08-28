import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 24px;
  flex-direction: column;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ContainerForm = styled.View`
  margin: 20px 0;
  flex-direction: column;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  width: 60%;
  margin: 0 auto;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #8d99ae;
  font-size: 16px;
  text-align: center;
`;
