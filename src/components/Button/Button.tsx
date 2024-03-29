import React from 'react';
import {
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  ActivityIndicator,
  Text,
} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPresets = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  preset?: ButtonPresets;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  preset = 'primary',
  disabled,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s24"
      height={60}
      alignItems="center"
      justifyContent="center"
      borderRadius="s6"
      {...touchableOpacityBoxProps}
      {...buttonPreset.container}>
      {loading && <ActivityIndicator color={buttonPreset.content} />}
      <Text preset="paragraphLarge" bold color={buttonPreset.content}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
