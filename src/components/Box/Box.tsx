import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  createBox,
  border,
  BorderProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  backgroundColor,
  BackgroundColorProps,
  createRestyleComponent,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [spacing, layout, border, backgroundColor, spacingShorthand],
  TouchableOpacity,
);
