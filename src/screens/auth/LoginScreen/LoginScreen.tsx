import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInpout} from '../../../components/PasswordInput/PasswordInput';
import {Button} from '../../../components/Button/Button';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" mb="s8" black color="primary">
        Olá
      </Text>
      <Text preset="subtitleSmall" mb="s32">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's16'}}
      />
      <PasswordInpout
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's8'}}
      />
      <Text preset="paragraphMedium" color="primary" bold mb="s48">
        Esqueci minha senha
      </Text>
      <Button title="Entrar" mb="s16" />
      <Button title="Criar Conta" preset="outline" />
    </Screen>
  );
}
