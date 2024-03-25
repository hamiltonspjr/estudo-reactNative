import React from 'react';
import {TextStyle} from 'react-native';
import {createText} from '@shopify/restyle';
import {Theme} from '@theme';

const RSText = createText<Theme>();
type RSTextProps = React.ComponentProps<typeof RSText>;

export interface TextProps extends RSTextProps {
  preset?: TextVariants;
  bold?: boolean;
  black?: boolean;
}

export function Text({
  children,
  style,
  preset = 'paragraphSmall',
  bold,
  black,
  ...rsTextProps
}: TextProps) {
  const fontFamily = getFontFamily(bold, black);

  return (
    <RSText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rsTextProps}>
      {children}
    </RSText>
  );
}

type TextVariants =
  | 'caption'
  | 'paragraphSmall'
  | 'paragraphMedium'
  | 'paragraphLarge'
  | 'subtitleSmall'
  | 'subtitleLarge'
  | 'headingSmall'
  | 'headingMedium'
  | 'headingLarge';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  caption: {
    fontSize: 10,
    lineHeight: 14,
  },
  paragraphSmall: {
    fontSize: 12,
    lineHeight: 16.8,
  },
  paragraphMedium: {
    fontSize: 14,
    lineHeight: 19.6,
  },
  paragraphLarge: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  subtitleSmall: {
    fontSize: 18,
    lineHeight: 25.2,
  },
  subtitleLarge: {
    fontSize: 20,
    lineHeight: 28,
  },
  headingSmall: {
    fontSize: 22,
    lineHeight: 30.8,
  },
  headingMedium: {
    fontSize: 24,
    lineHeight: 33.6,
  },
  headingLarge: {
    fontSize: 26,
    lineHeight: 36.4,
  },
};

export const $fontFamily = {
  regular: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  black: 'Roboto-Black',
};

function getFontFamily(bold?: boolean, black?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case black:
      return $fontFamily.black;
    default:
      return $fontFamily.regular;
  }
}
