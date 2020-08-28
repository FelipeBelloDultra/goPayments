import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ImageBackground,
  InformationContainer,
  WellcomeText,
  ButtonsGroup,
  Button,
  ButtonText,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from './styles';

import wellcomeBackground from '../../assets/wellcome-background.png';

const Wellcome: React.FC = () => {
  const navigate = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#8D99AE" />
      <ImageBackground source={wellcomeBackground} />

      <InformationContainer>
        <WellcomeText>
          Bem vindo ao GoPayments, seu lembrente de pagamento diário.
        </WellcomeText>

        <ButtonsGroup>
          <Button
            onPress={() => navigate.navigate('SignUp')}
            style={{ marginRight: 10 }}
          >
            <ButtonText>
              <Icon name="user-plus" color="#2b2d42" size={18} /> Criar conta
            </ButtonText>
          </Button>

          <Button
            onPress={() => navigate.navigate('SignIn')}
            style={{ marginLeft: 10 }}
          >
            <ButtonText>
              <Icon name="log-in" color="#2b2d42" size={18} /> Login
            </ButtonText>
          </Button>
        </ButtonsGroup>

        <ForgotPasswordButton onPress={() => console.log('Forgot password')}>
          <ForgotPasswordButtonText>
            <Icon name="unlock" color="#8d99ae" size={18} />
            Esqueci minha senha
          </ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </InformationContainer>
    </Container>
  );
};

export default Wellcome;
