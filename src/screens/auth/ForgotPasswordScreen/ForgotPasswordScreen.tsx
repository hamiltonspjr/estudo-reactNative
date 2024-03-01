import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      message: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'message',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text color="primary" preset="headingLarge" black mb="s8">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphSmall" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's48'}}
      />
      <Button title="Recuperar senha" onPress={submitForm} />
    </Screen>
  );
}
