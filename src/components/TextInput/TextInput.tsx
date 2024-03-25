import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps, $fontFamily, Text, $fontSizes} from '@components';
import {useAppTheme} from '@hooks';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
  errorMessage?: string;
}

export function TextInput({
  label,
  RightComponent,
  boxProps,
  errorMessage,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();

  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const inputBoxStyle: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray1',
    borderRadius: 's6',
    paddingHorizontal: 's8',
    paddingVertical: 's16',
    flexDirection: 'row',
  };

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" color="backgroundContrast" mb="s4">
          {label}
        </Text>
        <Box {...inputBoxStyle}>
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray3}
            style={[$textInputStyle, {color: colors.backgroundContrast}]}
            {...rnTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" color="error" mt="s4" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexShrink: 1,
  flexGrow: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
