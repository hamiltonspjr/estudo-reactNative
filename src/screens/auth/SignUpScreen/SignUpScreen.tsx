import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps} from '@routes';

import {SignUpSchema, signUpSchema} from './signUpSchema';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      cpf: '',
      birthDate: undefined,
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      message:
        'Agora você receberá um e-mail de confirmação e após isso poderá fazer login no app',
      icon: {
        name: 'checkRound',
        color: 'sucess',
      },
    });
  }

  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" black color="primary" mb="s8">
        Criar uma conta
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Preencha as informações abaixo para criar sua conta:
      </Text>
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's16'}}
      />
      <FormTextInput
        control={control}
        name="cpf"
        label="CPF"
        placeholder="Digite seu cpf"
        boxProps={{mb: 's16'}}
      />
      <FormTextInput
        control={control}
        name="birthDate"
        label="Data de nascimento"
        placeholder="00/00/0000"
        boxProps={{mb: 's16'}}
      />
      <FormTextInput
        control={control}
        name="cep"
        label="CEP"
        placeholder="00000000"
        boxProps={{mb: 's16'}}
      />
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
        boxProps={{mb: 's48'}}
      />
      <Button
        title="Criar minha conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
