import {createTheme} from '@shopify/restyle';

const palette = {
  greenPrimary: '#0F9974',
  greenLight: '#1CE5D5',
  grayWhite: '#FFFFFF',
  grayBlack: '#000000',
  redError: '#E62E27',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.grayWhite,
    background: palette.grayWhite,
    error: palette.redError,
    sucess: palette.greenLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s2: 2,
    s6: 6,
  },
  textVariants: {
    default: {},
  },
});

export type Theme = typeof theme;
export type Colors = keyof Theme['colors'];
