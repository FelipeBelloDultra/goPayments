import React from 'react';
import { KeyboardAvoidingView, Platform, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ContainerForm,
  BackButton,
  ForgotPasswordButton,
  ForgotPasswordButtonText,
} from './styles';

import background from '../../assets/background/background.png';

const SignIn: React.FC = () => {
  const navigate = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <BackButton onPress={() => navigate.goBack()}>
            <Icon name="chevron-left" color="#fff" size={30} />
          </BackButton>

          <Image source={background} />

          <ContainerForm>
            <Input icon="mail" placeholder="E-mail" />

            <Input icon="key" placeholder="Senha" />

            <Button>Logar</Button>
          </ContainerForm>

          <ForgotPasswordButton onPress={() => console.log('Forgot password')}>
            <ForgotPasswordButtonText>
              <Icon name="unlock" color="#8d99ae" size={18} />
              Esqueci minha senha
            </ForgotPasswordButtonText>
          </ForgotPasswordButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
