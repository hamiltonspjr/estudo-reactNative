import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';

export function ForgotPasswordScreen() {
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

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
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu email"
        boxProps={{mb: 's48'}}
      />
      <Button
        title="Recuperar senha"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
