import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {RootStackParamList} from '@routes';

import {LoginSchemaType, loginSchema} from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function submitForm(data: LoginSchemaType) {
    // TODO: Implementar a lógica de login
  }

  function handleForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  function handleSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  return (
    <Screen scrollable>
      <Text preset="headingLarge" mb="s8" black color="primary">
        Olá
      </Text>
      <Text preset="subtitleSmall" mb="s32">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's8'}}
      />
      <Text
        preset="paragraphMedium"
        color="primary"
        bold
        mb="s48"
        onPress={handleForgotPasswordScreen}>
        Esqueci minha senha
      </Text>
      <Button
        title="Entrar"
        mb="s16"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
      <Button
        title="Criar Conta"
        preset="outline"
        onPress={handleSignUpScreen}
      />
    </Screen>
  );
}
