import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInpout} from '../../../components/PasswordInput/PasswordInput';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" black color="primary" mb="s8">
        Criar uma conta
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Preencha as informações abaixo para criar sua conta:
      </Text>
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's16'}}
      />
      <TextInput
        label="CPF"
        placeholder="Digite seu cpf"
        boxProps={{mb: 's16'}}
      />
      <TextInput
        label="Data de nascimento"
        placeholder="00/00/0000"
        boxProps={{mb: 's16'}}
      />
      <TextInput label="CEP" placeholder="00000-000" boxProps={{mb: 's16'}} />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />
      <PasswordInpout
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button title="Criar minha conta" />
    </Screen>
  );
}
