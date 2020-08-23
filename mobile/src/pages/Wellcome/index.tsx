import React from 'react';
import { Image, StatusBar } from 'react-native';

import {
  Container,
  ImageBackground,
  InformationContainer,
  WellcomeText,
  ButtonsGroup,
  CreateAccountButton,
  CreateAccountButtonText,
  LoginButton,
  LoginButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from './styles';

import wellcomeBackground from '../../assets/wellcome-background.png';

const Wellcome: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#8D99AE" />
      <ImageBackground source={wellcomeBackground} />

      <InformationContainer>
        <WellcomeText>
          Bem vindo ao GoPayments, seu lembrente de pagamento diário.
        </WellcomeText>

        <ButtonsGroup>
          <CreateAccountButton onPress={() => console.log('Create account')}>
            <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
          </CreateAccountButton>

          <LoginButton onPress={() => console.log('Login')}>
            <LoginButtonText>Login</LoginButtonText>
          </LoginButton>
        </ButtonsGroup>

        <ForgotPasswordButton onPress={() => console.log('Forgot password')}>
          <ForgotPasswordButtonText>
            Esqueci minha senha
          </ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </InformationContainer>
    </Container>
  );
};

export default Wellcome;
